import {useEffect, useId, useMemo, useState, type ComponentType} from 'react'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
import {
  Box,
  Button,
  Card,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Text,
  TextInput,
} from '@sanity/ui'
import {AtSign, Check, ChevronDown, Folder, Globe, Image, Link, Search} from 'lucide-react'
import {ObjectInputMembers, set, setIfMissing, unset, useClient, useFormValue, type ObjectInputProps} from 'sanity'

import {
  internalPageGroups,
  internalPageOptions,
  linkTypeOptions,
  pagePathToDocId,
  type LinkTargetType,
} from '../schemaTypes/linkTargetOptions'

type LinkTargetValue = {
  _type?: 'linkTarget'
  anchor?: string
  email?: string
  internalPath?: string
  openInNewTab?: boolean
  type?: LinkTargetType
  url?: string
}

const linkTypeIcons: Record<
  LinkTargetType,
  ComponentType<{size?: number; strokeWidth?: number}>
> = {
  asset: Image,
  email: AtSign,
  internal: Link,
  url: Globe,
}

const fieldByType: Record<LinkTargetType, 'email' | 'file' | 'internalPath' | 'url'> = {
  asset: 'file',
  email: 'email',
  internal: 'internalPath',
  url: 'url',
}

export function LinkTargetInput(props: ObjectInputProps<LinkTargetValue>) {
  const {
    elementProps,
    members,
    onChange,
    readOnly,
    renderAnnotation,
    renderBlock,
    renderField,
    renderInlineBlock,
    renderInput,
    renderItem,
    renderPreview,
    validation,
    value,
  } = props
  const generatedId = useId()
  const menuId = `${elementProps.id ?? generatedId}-type-menu`
  const [internalQuery, setInternalQuery] = useState('')
  const [internalPickerOpen, setInternalPickerOpen] = useState(false)
  type FlatOption = {label: string; value: string}
  type GroupedOption = {group: string; options: FlatOption[]}
  type AnchorEntry = FlatOption | GroupedOption

  const [anchorEntries, setAnchorEntries] = useState<AnchorEntry[]>([])
  const client = useClient({apiVersion: '2024-01-01'})

  // Determine the current page so self-referencing anchors can be excluded.
  const rawDocId = useFormValue(['_id']) as string | undefined
  const currentDocId = rawDocId?.replace(/^drafts\./, '') ?? ''
  const currentPagePath = useMemo(
    () => Object.entries(pagePathToDocId).find(([, id]) => id === currentDocId)?.[0] ?? null,
    [currentDocId],
  )

  // Extract which section (and optional tab) this input lives inside by
  // reading the Sanity path supplied to this ObjectInput.
  const sectionKeyFromPath = useMemo(() => {
    const idx = props.path.indexOf('sections')
    if (idx === -1) return null
    const seg = props.path[idx + 1]
    return seg && typeof seg === 'object' && '_key' in seg ? (seg as {_key: string})._key : null
  }, [props.path])

  const tabKeyFromPath = useMemo(() => {
    const idx = props.path.indexOf('tabs')
    if (idx === -1) return null
    const seg = props.path[idx + 1]
    return seg && typeof seg === 'object' && '_key' in seg ? (seg as {_key: string})._key : null
  }, [props.path])

  const totalAnchorCount = anchorEntries.reduce(
    (n, e) => n + ('options' in e ? e.options.length : 1),
    0,
  )

  useEffect(() => {
    const internalPath = value?.internalPath
    if (!internalPath) {
      setAnchorEntries([])
      return
    }
    const docId = pagePathToDocId[internalPath]
    if (!docId) {
      setAnchorEntries([])
      return
    }

    // Capture path-derived values at effect time so the closure stays stable.
    const capturedCurrentPagePath = currentPagePath
    const capturedSectionKey = sectionKeyFromPath
    const capturedTabKey = tabKeyFromPath

    client
      .fetch<{
        sections?: Array<{
          _key?: string | null
          _type?: string | null
          name?: string | null
          tabs?: Array<{_key?: string | null; label?: string | null}>
        }>
      }>(
        `*[_id in [$docId, "drafts." + $docId]] | order(_updatedAt desc)[0]{
          "sections": sections[]{
            _key,
            _type,
            "name": coalesce(title, heading, label, articleTitle, panels[0].title, cards[0].title),
            "tabs": tabs[]{_key, label}
          }
        }`,
        {docId},
      )
      .then((doc) => {
        if (!doc) {
          setAnchorEntries([])
          return
        }

        // Compute IDs that belong to the section/tab this button is already
        // inside. Only applies when the selected page is the current document.
        const selfIds = new Set<string>()
        if (capturedCurrentPagePath && internalPath === capturedCurrentPagePath) {
          const currentSection = (doc.sections ?? []).find(
            (s) => s._key === capturedSectionKey,
          )
          if (currentSection) {
            const sId = slugify(currentSection.name ?? '')
            if (sId) selfIds.add(sId)

            if (capturedTabKey) {
              const currentTab = (currentSection.tabs ?? []).find(
                (t) => t._key === capturedTabKey,
              )
              if (currentTab) {
                const tId = slugify(currentTab.label ?? '')
                if (tId) selfIds.add(tId)
              }
            }
          }
        }

        // Build entries in page order, excluding self-referencing IDs.
        const entries: AnchorEntry[] = []
        const seenFlat = new Set<string>()

        for (const section of doc.sections ?? []) {
          const tabs = section.tabs ?? []

          if (section._type === 'sideTabsBlock' && tabs.length > 0) {
            const tabLabels = tabs.map((t) => t.label).filter(Boolean)
            const preview = tabLabels.slice(0, 3).join(', ') + (tabLabels.length > 3 ? '…' : '')
            const groupLabel = `Tab Section — ${preview}`

            const options: FlatOption[] = tabs
              .map((tab) => {
                const id = slugify(tab.label ?? '')
                return id && !selfIds.has(id) ? {label: tab.label ?? id, value: id} : null
              })
              .filter((o): o is FlatOption => o !== null)

            if (options.length > 0) {
              entries.push({group: groupLabel, options})
            }
          } else {
            const id = slugify(section.name ?? '')
            if (id && !seenFlat.has(id) && !selfIds.has(id)) {
              seenFlat.add(id)
              entries.push({
                label: section.name ? `${section.name} (${id})` : id,
                value: id,
              })
            }
          }
        }

        setAnchorEntries(entries)
      })
      .catch((err) => {
        console.error('[LinkTargetInput] Failed to fetch anchor sections:', err)
        setAnchorEntries([])
      })
  }, [value?.internalPath]) // eslint-disable-line react-hooks/exhaustive-deps
  const activeType = isLinkTargetType(value?.type) ? value.type : 'url'
  const Icon = linkTypeIcons[activeType]
  const activeOption = linkTypeOptions.find((option) => option.value === activeType)
  const selectedInternalPage = internalPageOptions.find(
    (option) => option.value === value?.internalPath,
  )
  const activeMember = members.find(
    (member) => member.kind === 'field' && member.name === fieldByType[activeType],
  )
  const fileMembers = activeType === 'asset' && activeMember ? [activeMember] : []
  const errorMembers = members.filter((member) => member.kind === 'error')
  const validationMessages = validation
    .filter((marker) => marker.level === 'error' || marker.level === 'warning')
    .map((marker) => marker.message)
  const filteredGroups = useMemo(() => {
    const query = internalQuery.trim().toLowerCase()

    if (!query) return internalPageGroups

    return internalPageGroups
      .map((group) => ({
        ...group,
        pages: group.pages.filter(
          (page) =>
            page.title.toLowerCase().includes(query) ||
            page.value.toLowerCase().includes(query) ||
            group.title.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.pages.length > 0)
  }, [internalQuery])

  const handleTypeChange = (nextType: LinkTargetType) => {
    setInternalPickerOpen(nextType === 'internal')

    onChange([
      setIfMissing({_type: 'linkTarget'}),
      set(nextType, ['type']),
    ])
  }

  const handleInternalPageSelect = (nextValue: string) => {
    handleStringChange('internalPath')(nextValue)
    setInternalQuery('')
    setInternalPickerOpen(false)
  }

  const handleStringChange =
    (fieldName: 'anchor' | 'email' | 'internalPath' | 'url') => (nextValue: string) => {
      const trimmedValue = nextValue.trim()

      onChange([
        setIfMissing({_type: 'linkTarget'}),
        set(activeType, ['type']),
        trimmedValue ? set(trimmedValue, [fieldName]) : unset([fieldName]),
      ])
    }

  const showInternalPicker =
    activeType === 'internal' && (!selectedInternalPage || internalPickerOpen)

  return (
    <Stack space={3} {...elementProps}>
      <Card border radius={2} tone="inherit">
        <Flex align="stretch">
          <Box
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: '0 0 74px',
              justifyContent: 'center',
              minHeight: '42px',
            }}
          >
            <MenuButton
              button={
                <Button
                  aria-label="Link type"
                  disabled={readOnly}
                  icon={Icon}
                  iconRight={ChevronDown}
                  mode="bleed"
                  padding={3}
                  radius={0}
                  style={{height: '100%', width: '100%'}}
                  type="button"
                />
              }
              id={menuId}
              menu={
                <Menu>
                  {linkTypeOptions.map((option) => {
                    const OptionIcon = linkTypeIcons[option.value]

                    return (
                      <MenuItem
                        icon={OptionIcon}
                        key={option.value}
                        onClick={() => handleTypeChange(option.value)}
                        pressed={activeType === option.value}
                        text={option.title}
                      />
                    )
                  })}
                </Menu>
              }
              popover={{placement: 'bottom-start', portal: true, radius: 2}}
            />
          </Box>

          <Box
            aria-hidden
            style={{
              alignSelf: 'stretch',
              background: 'var(--card-border-color)',
              width: 1,
            }}
          />

          <Box flex={1} style={{minWidth: 0}}>
            {activeType === 'url' ? (
              <TextInput
                border={false}
                disabled={readOnly}
                onChange={(event) => handleStringChange('url')(event.currentTarget.value)}
                padding={3}
                placeholder="https://example.com"
                radius={0}
                type="url"
                value={value?.url ?? ''}
              />
            ) : null}

            {activeType === 'email' ? (
              <TextInput
                border={false}
                disabled={readOnly}
                onChange={(event) => handleStringChange('email')(event.currentTarget.value)}
                padding={3}
                placeholder="Email"
                radius={0}
                type="email"
                value={value?.email ?? ''}
              />
            ) : null}

            {activeType === 'internal' ? (
              <button
                disabled={readOnly}
                onClick={() => setInternalPickerOpen((current) => !current)}
                style={{
                  alignItems: 'center',
                  background: 'transparent',
                  border: 0,
                  color: 'inherit',
                  cursor: readOnly ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  font: 'inherit',
                  justifyContent: 'space-between',
                  minHeight: 42,
                  padding: '0.625rem 0.75rem',
                  textAlign: 'left',
                  width: '100%',
                }}
                type="button"
              >
                <Text muted={!selectedInternalPage} size={1} textOverflow="ellipsis">
                  {selectedInternalPage?.title ?? activeOption?.title ?? 'Internal link'}
                </Text>
                <ChevronDown
                  aria-hidden
                  size={16}
                  strokeWidth={1.8}
                  style={{
                    flex: '0 0 auto',
                    transform: showInternalPicker ? 'rotate(180deg)' : undefined,
                  }}
                />
              </button>
            ) : null}

            {activeType === 'asset' ? (
              <Flex align="center" padding={3} style={{minHeight: 42}}>
                <Text muted size={1}>
                  Asset
                </Text>
              </Flex>
            ) : null}
          </Box>
        </Flex>
      </Card>

      {showInternalPicker ? (
        <Card border padding={3} radius={2} tone="inherit">
          <Stack space={3}>
            <TextInput
              disabled={readOnly}
              icon={Search}
              onChange={(event) => setInternalQuery(event.currentTarget.value)}
              placeholder="Search for content items"
              type="search"
              value={internalQuery}
            />

            <Stack space={3}>
              {filteredGroups.map((group) => (
                <Stack key={group.slug} space={3}>
                  <Flex align="flex-start" gap={3}>
                    <Folder aria-hidden size={18} strokeWidth={1.8} />
                    <Box flex={1}>
                      <Text size={1} style={{lineHeight: 1.25}} weight="semibold">
                        {group.title}
                      </Text>
                      <Text muted size={0} style={{lineHeight: 1.3, marginTop: 3}}>
                        {group.slug}
                      </Text>
                    </Box>
                  </Flex>

                  <Stack space={2} style={{paddingLeft: 30}}>
                    {group.pages.map((page) => {
                      const selected = value?.internalPath === page.value

                      return (
                        <button
                          aria-pressed={selected}
                          disabled={readOnly}
                          key={page.value}
                          onClick={() => handleInternalPageSelect(page.value)}
                          style={{
                            alignItems: 'center',
                            background: selected ? '#111111' : 'transparent',
                            border: '1px solid transparent',
                            borderRadius: 6,
                            color: selected ? '#ffffff' : 'inherit',
                            cursor: readOnly ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            font: 'inherit',
                            gap: 8,
                            justifyContent: 'space-between',
                            opacity: readOnly ? 0.65 : 1,
                            padding: '9px 10px',
                            textAlign: 'left',
                            width: '100%',
                          }}
                          type="button"
                        >
                          <span>
                            <span style={{display: 'block', fontWeight: 600, lineHeight: 1.25}}>
                              {page.title}
                            </span>
                            <span
                              style={{
                                display: 'block',
                                fontSize: 12,
                                lineHeight: 1.3,
                                marginTop: 3,
                                opacity: 0.7,
                              }}
                            >
                              {page.value}
                            </span>
                          </span>
                          {selected ? <Check aria-hidden size={16} strokeWidth={2} /> : null}
                        </button>
                      )
                    })}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>
      ) : null}

      {activeType === 'internal' && !showInternalPicker ? (
        <select
          disabled={readOnly}
          onChange={(event) => handleStringChange('anchor')(event.currentTarget.value)}
          value={value?.anchor ?? ''}
          style={{
            appearance: 'auto',
            background: 'var(--card-bg-color)',
            border: '1px solid var(--card-border-color)',
            borderRadius: 4,
            color: 'inherit',
            font: 'inherit',
            fontSize: 13,
            padding: '9px 10px',
            width: '100%',
          }}
        >
          <option value="">
            {totalAnchorCount === 0 ? 'No page sections available' : 'None — links to top of page'}
          </option>
          {anchorEntries.map((entry) =>
            'options' in entry ? (
              <optgroup key={entry.group} label={entry.group}>
                {entry.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={entry.value} value={entry.value}>
                {entry.label}
              </option>
            ),
          )}
        </select>
      ) : null}

      {fileMembers.length ? (
        <ObjectInputMembers
          members={fileMembers}
          renderAnnotation={renderAnnotation}
          renderBlock={renderBlock}
          renderField={renderField}
          renderInlineBlock={renderInlineBlock}
          renderInput={renderInput}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      ) : null}

      {errorMembers.length ? (
        <ObjectInputMembers
          members={errorMembers}
          renderAnnotation={renderAnnotation}
          renderBlock={renderBlock}
          renderField={renderField}
          renderInlineBlock={renderInlineBlock}
          renderInput={renderInput}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      ) : null}

      {validationMessages.length ? (
        <Stack space={2}>
          {validationMessages.map((message) => (
            <Text key={message} size={1} style={{color: '#bf1b1b'}}>
              {message}
            </Text>
          ))}
        </Stack>
      ) : null}
    </Stack>
  )
}

function isLinkTargetType(value: unknown): value is LinkTargetType {
  return linkTypeOptions.some((option) => option.value === value)
}
