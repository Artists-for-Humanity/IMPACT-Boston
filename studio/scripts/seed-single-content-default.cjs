const fs = require('node:fs')
const path = require('node:path')
const {createClient} = require('@sanity/client')

const repoRoot = path.resolve(__dirname, '../..')
loadEnvFile(path.join(repoRoot, 'impact-boston/.env.local'))
loadEnvFile(path.join(repoRoot, 'studio/.env'))

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-01'
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN
const documentId = process.env.SANITY_SINGLE_CONTENT_DOC_ID || 'drafts.aboutImpactPage'
const sectionKey = process.env.SANITY_SINGLE_CONTENT_SECTION_KEY || '1dd46b338793'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID.')
}

if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Create a Sanity token with Editor permissions and rerun.',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const content = [
  {
    _key: 'visionLabel',
    _type: 'block',
    style: 'mediumLabel',
    markDefs: [],
    children: [{_key: 'visionLabelSpan', _type: 'span', text: 'Our Vision', marks: []}],
  },
  {
    _key: 'visionTitle',
    _type: 'block',
    style: 'h3',
    markDefs: [],
    children: [
      {
        _key: 'visionTitleSpan',
        _type: 'span',
        text: 'Violence is not inevitable. We all have the ability to stop it.',
        marks: [],
      },
    ],
  },
  {
    _key: 'visionBody',
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _key: 'visionBodySpan',
        _type: 'span',
        text: 'IMPACT has been teaching solutions for safe living since 1971. We provide realistic personal safety training that gives people the skills to respond appropriately to threatening situations in the moment of fear or intimidation. We also collaborate with schools and organizations to create programs that proactively prevent abuse. IMPACT’s prevention programs emphasize giving people the tools to manage their stress responses so they can intervene effectively when they observe risky situations. Too often abuse goes unchallenged because people don’t feel safe speaking up. IMPACT programs help people increase their ability to safely advocate for themselves and others.',
        marks: [],
      },
    ],
  },
  {
    _key: 'visionSupportingLink',
    _type: 'singleContentSupportingLink',
    text: 'Purchase from Bookshop.org. IMPACT receives 10% of all proceeds.',
    href: '#',
    color: 'secondary',
  },
]

client
  .patch(documentId)
  .set({[`sections[_key == "${sectionKey}"].content`]: content})
  .commit({autoGenerateArrayKeys: true})
  .then((doc) => {
    console.log(`Seeded ${documentId} section ${sectionKey}. New revision: ${doc._rev}`)
  })
  .catch((error) => {
    console.error(error.message)
    process.exit(1)
  })

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const trimmedLine = line.trim()

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmedLine.indexOf('=')

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmedLine.slice(0, separatorIndex).trim()
    let value = trimmedLine.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    process.env[key] ||= value
  }
}
