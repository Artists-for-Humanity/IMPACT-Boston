/**
 * Adds a Directory block with Program Collaborators to the Schools & Colleges page.
 * Run with: npx sanity exec scripts/addProgramCollaborators.ts --with-user-token
 */

import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2023-10-01'})

const SCHOOLS: string[] = [
  'Andover High School',
  'Babson College',
  'Belmonte Saugus Middle School',
  'Berklee School of Music',
  'Beverly High School',
  'Boston Community Leadership Academy',
  'Boston Green Academy',
  'Boston International High School',
  'Brighton High School',
  'Brimmer and May School',
  'Brockton High School',
  'Buckingham Browne & Nichols School',
  'Buckingham Browne & Nichols Summer Camp',
  'Cambridge School of Weston',
  'Camp Fernwood',
  'CASH High School',
  'Charlestown High School',
  'Commonwealth School',
  'Curley Middle School',
  'Dana Hall School',
  'East Boston High School',
  'Edwards Middle School',
  'The English High School',
  'Everett High School',
  'Excel High School',
  'Fenway High School',
  'Fontbonne Academy',
  'Frederick Middle School',
  'Gardner Pilot Academy',
  'Girls Reflecting Our World Mentorship (GROW)',
  'Groton School',
  'Harvard Business School',
  'Harvard Law School',
  'Haverhill High School',
  'Henderson Inclusion School',
  'Higginson-Lewis Middle School',
  'International School of Boston',
  'Jackson Mann Middle School',
  'Jeremiah E Burke High School',
  'Joseph Lee K-8 School',
  'Josiah Quincy Upper School',
  'Lasell University',
  'Lawrence Academy',
  'Lesley University',
  'Lincoln-Sudbury High School',
  'Lyndon Pilot School',
  'Madison Park Technical Vocational High School',
  'Malden Catholic High School',
  'Malden High School',
  'McCormack Middle School',
  'McKinley Elementary School',
  'McKinley South End Academy',
  'Medfield High School',
  'Medford High School',
  'Middlesex School',
  'Mildred Ave Middle School',
  'Mt. Alvernia High School',
  'Nashoba Brooks School',
  'New Mission High School',
  'Newton Country Day School',
  'Newton North High School',
  'Okemo Mountain School',
  'Orchard Gardens Middle School',
  'Perkins School for the Blind',
  'Pinkerton Academy',
  'POST Academy',
  'Putnam Avenue Upper School',
  'Quincy Upper High School',
  'Richard J Murphy School',
  'Riverdale Elementary School',
  'Rivers School',
  'Salem State University',
  'Saugus High School',
  'SEEM Collaborative',
  'Simmons College',
  'Somerville High School',
  'Spaulding Hospital',
  "St. Mark's School",
  'Stoneham High School',
  'TechBoston Academy',
  'Trotter Middle School',
  'Tufts University',
  'Umana Middle School',
  'Up Academy Dorchester',
  'Waltham High School',
  'Warren Prescott Middle School',
  'Wellesley High School',
  'Wheaton College',
  'Williams College',
  'Winsor School',
  'Woburn High School',
]

function makeKey(): string {
  return Math.random().toString(36).slice(2, 14)
}

async function main() {
  // Sort alphabetically (case-insensitive)
  const sorted = [...SCHOOLS].sort((a, b) =>
    a.localeCompare(b, undefined, {sensitivity: 'base'}),
  )

  const directoryBlock = {
    _key: makeKey(),
    _type: 'directory',
    title: 'Program Collaborators',
    previewCount: 10,
    items: sorted.map((name) => ({
      _key: makeKey(),
      _type: 'directoryItem',
      name,
    })),
  }

  // Patch the DRAFT document so the studio sees the changes immediately.
  // The draft's existing directory block key is ccca0b358ba7 — we set its items directly.
  // sideTabsBlock key: 9d15e8a1f914  |  Program Collaborators tab key: b1dce78564d3
  const draftId = 'drafts.schoolsAndCollegesPage'
  const directoryPath =
    'sections[_key=="9d15e8a1f914"].tabs[_key=="b1dce78564d3"].content[_key=="ccca0b358ba7"]'

  await client
    .patch(draftId)
    .set({
      [`${directoryPath}.title`]: 'Program Collaborators',
      [`${directoryPath}.previewCount`]: 10,
      [`${directoryPath}.items`]: directoryBlock.items,
    })
    .commit({autoGenerateArrayKeys: false})

  console.log(`✓ Updated draft directory block with ${sorted.length} collaborators (alphabetical order)`)
  console.log('First few:', sorted.slice(0, 5).join(', '))
}

main().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
