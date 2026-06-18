import {useId, useMemo, useState, type ChangeEvent, type ComponentType} from 'react'
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
import {ObjectInputMembers, set, setIfMissing, unset, type ObjectInputProps} from 'sanity'

import {
  internalPageGroups,
  internalPageOptions,
  linkTypeOptions,
  type LinkTargetType,
} from '../schemaTypes/linkTargetOptions'

type LinkTargetValue = {
  _type?: 'linkTarget'
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
      nextType === 'asset' || nextType === 'url'
        ? set(value?.openInNewTab ?? true, ['openInNewTab'])
        : unset(['openInNewTab']),
    ])
  }

  const handleInternalPageSelect = (nextValue: string) => {
    handleStringChange('internalPath')(nextValue)
    setInternalQuery('')
    setInternalPickerOpen(false)
  }

  const handleStringChange =
    (fieldName: 'email' | 'internalPath' | 'url') => (nextValue: string) => {
      const trimmedValue = nextValue.trim()

      onChange([
        setIfMissing({_type: 'linkTarget'}),
        set(activeType, ['type']),
        trimmedValue ? set(trimmedValue, [fieldName]) : unset([fieldName]),
      ])
    }

  const handleOpenInNewTabChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange([
      setIfMissing({_type: 'linkTarget'}),
      set(activeType, ['type']),
      set(event.currentTarget.checked, ['openInNewTab']),
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

      {activeType === 'asset' || activeType === 'url' ? (
        <label style={{alignItems: 'center', display: 'flex', gap: 8}}>
          <input
            checked={value?.openInNewTab ?? true}
            disabled={readOnly}
            onChange={handleOpenInNewTabChange}
            type="checkbox"
          />
          <Text size={1}>Open in new tab</Text>
        </label>
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
