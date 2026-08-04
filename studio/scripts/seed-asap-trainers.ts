/**
 * Seed ASAP Trainer list into the ASAPPage sideTabsBlock.
 *
 * Run from the studio directory:
 *   npx sanity exec scripts/seed-asap-trainers.ts --with-user-token
 */
import {createClient} from '@sanity/client'
import {uuid} from '@sanity/uuid'

const client = createClient({
  projectId: 'ddrwhofx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

const virginiaTrainers = [
  {name: 'Bethann Jones', organization: 'Henrico County Public Schools', contact: 'bfjones1@henrico.k12.va.us'},
  {name: 'Janice Olson', organization: 'Chesterfield Parks and Recreation', contact: 'olsonj@chesterfield.gov'},
  {name: 'AJ McCage', organization: 'Henrico Parks and Recreation', contact: 'mcc159@henrico.gov'},
  {name: 'Lauren J Pisciotta', organization: 'Henrico County Public Schools', contact: 'ljpisciotta@henrico.k12.va.us'},
  {name: 'Scott Corwin', organization: 'Sportable', contact: 'socorwin@aol.com'},
  {name: 'Madison Flores', organization: 'Sportable', contact: 'madison@sportable.org'},
  {name: 'Abbey Tomchik', organization: 'Sportable', contact: 'abbey@sportable.org'},
  {name: 'Morgan Kazelskis', organization: 'Sportable', contact: 'kazelskisme@vcu.edu'},
  {name: 'Kloe Ward', organization: 'Sportable', contact: 'kloe@sportable.org'},
  {name: 'Sydney Griffin', organization: "Jacob's Chance", contact: 'sgriffin@jacobschance.org'},
  {name: 'Taylor Covington', organization: "Jacob's Chance", contact: 'covingtonte@vcu.edu'},
  {name: 'Holly Lynch', organization: "Jacob's Chance", contact: 'lynchahz@vcu.edu'},
  {name: 'Catherine Papadopoulou', organization: "Jacob's Chance", contact: 'cpapadopoulou@jacobschance.org'},
  {name: 'Amy Smith', organization: 'Sportable', contact: 'amy@sportable.org'},
  {name: 'Hannah Smith', organization: 'Sportable', contact: 'hannah@sportable.org'},
  {name: 'Mary-Parker White', organization: 'Sportable', contact: 'maryparkerbw@gmail.com'},
  {name: 'Michelle Page', organization: 'Sportable', contact: 'michelle@sportable.org'},
  {name: 'Casey Cook', organization: 'Sportable', contact: 'casey@sportable.org'},
  {name: 'Mandy Marchiano', organization: 'Sportable', contact: 'mdmarchiano@aol.com'},
  {name: 'Laura Bennett', organization: 'Sportable', contact: 'laura@sportable.org'},
  {name: 'Keagan Angevin', organization: 'Sportable', contact: 'keagan@sportable.org'},
  {name: 'Ashley Keesler-Young', organization: 'Sportable', contact: 'ashley.keesler@gmail.com'},
  {name: 'David Robbins', organization: 'Sportable', contact: 'david@sportable.org'},
  {name: 'Abbie Wright', organization: 'Sportable', contact: 'abbie@sportable.org'},
  {name: 'Brandon Rush', organization: 'Sportable', contact: 'brushod@gmail.com'},
  {name: 'Maria Altonen', organization: 'VA Department of Health', contact: 'maria.altonen@vdh.virginia.gov'},
  {name: 'Shep Roeper', organization: 'Beyond Boundaries', contact: 'shep@beyondboundariesrva.org'},
  {name: 'Katie McIernan', organization: 'Beyond Boundaries', contact: 'katie@beyondboundariesrva.org'},
  {name: 'Kate Mardigian', organization: "Jacob's Chance", contact: 'kmardigian@jacobschance.org'},
  {name: 'Brooke Hsieh', organization: "Jacob's Chance", contact: 'bhsieh@jacobschance.org'},
  {name: 'Diane Gallegos', organization: 'The Arc of Hanover', contact: 'diane@thearcofhanover.org'},
  {name: 'Sherri Lynn Lanning', organization: 'The Arc of Hanover', contact: 'sherri@thearcofhanover.org'},
].map((t) => ({...t, state: 'Virginia'}))

const allTrainers: {name: string; organization: string; contact?: string; state: string}[] = [
  {state: 'Arizona', name: 'Brielle Carter', organization: 'Ability360 Sports & Fitness Center', contact: 'briellec@ability360.org, (602) 626-7250'},
  {state: 'California', name: 'Daniel (DJ) Horner', organization: 'United States Adaptive Recreation Center', contact: 'dj@usarc.org, (909)-584-0269'},
  {state: 'California', name: 'Emily Hammond', organization: 'United States Adaptive Recreation Center', contact: 'emily@usarc.org, (909)-584-0269'},
  {state: 'Colorado', name: 'Chris Werhane', organization: 'Adaptive Adventures', contact: 'chris@AdaptiveAdventures.org, (505) 690-9103'},
  {state: 'Colorado', name: 'Kayla Berry', organization: 'We Are Safer Together LLC', contact: 'wearesafertogether@gmail.com, (720) 445-5778'},
  {state: 'Colorado', name: 'Krista Hanley', organization: 'We Are Safer Together LLC', contact: 'wearesafertogether@gmail.com, (720) 445-5778'},
  {state: 'Colorado', name: 'Angela Hemmen', organization: 'Wounded Warrior Project', contact: 'ahemmen@woundedwarriorproject.org'},
  {state: 'Colorado', name: 'Randa Osman', organization: 'Wounded Warrior Project', contact: 'rosman@woundedwarriorproject.org'},
  {state: 'Colorado', name: 'Lacey Staehs', organization: 'United States Olympic & Paralympic Committee'},
  {state: 'Colorado', name: 'Samantha Bauer', organization: 'USA Archery'},
  {state: 'Florida', name: 'Nan Prevost', organization: 'Remember Me NFP', contact: '(727) 688-4544'},
  {state: 'Illinois', name: 'Breanna Bertacchi', organization: 'Out Our Front Door', contact: 'breanna@oofd.org'},
  {state: 'Maryland', name: 'Ryan Semke', organization: 'Move United', contact: 'rsemke@moveunitedsport.org'},
  {state: 'Nevada', name: 'Ed Price', organization: 'Trail Access Project', contact: 'ed@trailaccessproject.org'},
  {state: 'New Hampshire', name: 'Crystal Shakan', organization: 'Northeast Passage: University of NH', contact: 'crystal.skahan@unh.edu'},
  {state: 'New Jersey', name: 'Mark Bogosian', organization: 'Christopher & Dana Reeve Foundation', contact: 'mbogosian@christopherreeve.org'},
  {state: 'New Jersey', name: 'Kyle Marrs', organization: 'Christopher & Dana Reeve Foundation'},
  {state: 'New York', name: "Jennifer O'Brien", organization: 'American Special Hockey Association', contact: 'ASHA@specialhockey.org'},
  {state: 'New York', name: 'Danielle Yacko', organization: 'Endeavor Therapeutic Horsemanship', contact: 'danielle.yacko@endeavorth.org, (914) 241-0211'},
  {state: 'Pennsylvania', name: 'Kati Brennan', organization: 'Philadelphia City Rowing', contact: 'kati.brennan@gmail.com, (917) 361-9799'},
  {state: 'Texas', name: 'Marielle Deckard', organization: 'Cerebral Palsy Awareness Transition Hope (CPATH)', contact: 'marielle@cpathtexas.org'},
  {state: 'Texas', name: 'Laura Bachtel', organization: 'Cerebral Palsy Awareness Transition Hope (CPATH)', contact: 'laura.bachtel@pfisd.net'},
  {state: 'Texas', name: 'Amy Thompson', organization: 'Cerebral Palsy Awareness Transition Hope (CPATH)', contact: 'amy@cpathtexas.org'},
  {state: 'Texas', name: 'Kelli Croll', organization: 'Cerebral Palsy Awareness Transition Hope (CPATH)', contact: 'kelli@cpathtexas.org'},
  {state: 'Texas', name: 'Victoria Polega', organization: 'Cerebral Palsy Awareness Transition Hope (CPATH)', contact: 'victoria@cpathtexas.org'},
  {state: 'Texas', name: 'Coty DeLacretaz', organization: 'Sun Dragon Martial Arts & Self-Defense, NFP', contact: 'coty@sundragon.org'},
  {state: 'Texas', name: 'Tasca Shadix', organization: 'Sun Dragon Martial Arts & Self-Defense, NFP', contact: 'tshadix@gmail.com'},
  {state: 'Texas', name: 'Erin Doss', organization: 'Dell Children\'s Ascension', contact: 'ez.doss@gmail.com'},
  {state: 'Texas', name: 'Bianca Nguyen', organization: 'Texas Workforce Commission - Chris Cole Rehab Center', contact: 'bianca.nguyen@twc.texas.gov'},
  {state: 'Texas', name: 'Kristen Valdez', organization: 'Austin ISD', contact: 'kristen.valdez@austinisd.org'},
  {state: 'Texas', name: 'Christine Scott', organization: 'Caliber Kids', contact: 'christinewscott@gmail.com'},
  ...virginiaTrainers,
  {state: 'Wisconsin', name: 'Samantha Gracz', organization: 'Clement J. Zablocki VA Medical Center', contact: 'sam@wasa.org, (414) 430-6543'},
]

const trainerItems = allTrainers.map((t) => ({
  _type: 'trainerListItem',
  _key: uuid(),
  name: t.name,
  organization: t.organization,
  state: t.state,
  ...(t.contact ? {contact: t.contact} : {}),
}))

async function run() {
  // Fetch the ASAPPage document (prefer draft)
  const doc = await client.fetch(
    `*[_id == "ASAPPage" || _id == "drafts.ASAPPage"] | order(_updatedAt desc) [0]`,
  )

  if (!doc) {
    throw new Error('ASAPPage document not found in Sanity.')
  }

  console.log(`Found document: ${doc._id}`)

  // Find the sideTabsBlock
  const sections: unknown[] = doc.sections ?? []
  const sideTabsIdx = sections.findIndex(
    (s: unknown) => (s as {_type?: string})._type === 'sideTabsBlock',
  )

  if (sideTabsIdx === -1) {
    throw new Error('No sideTabsBlock found in ASAPPage sections.')
  }

  const sideTabs = sections[sideTabsIdx] as {tabs?: {label?: string; content?: unknown[]; _key?: string}[]}
  const tabs = sideTabs.tabs ?? []

  // Find the ASAP Trainers tab (case-insensitive label match)
  const trainerTabIdx = tabs.findIndex(
    (t) => t.label?.toLowerCase().includes('trainer'),
  )

  if (trainerTabIdx === -1) {
    throw new Error(`No trainers tab found. Available tabs: ${tabs.map((t) => t.label).join(', ')}`)
  }

  console.log(`Found trainers tab: "${tabs[trainerTabIdx].label}"`)

  // Find existing trainerList block in tab content, or create one
  const tabContent: unknown[] = (tabs[trainerTabIdx].content as unknown[]) ?? []
  const trainerListIdx = tabContent.findIndex(
    (block: unknown) => (block as {_type?: string})._type === 'trainerList',
  )

  const trainerListBlock = {
    _type: 'trainerList',
    _key: trainerListIdx >= 0
      ? (tabContent[trainerListIdx] as {_key?: string})._key ?? uuid()
      : uuid(),
    state: 'Virginia',
    sortLabel: 'Alphabetically',
    previewCount: 5,
    items: trainerItems,
  }

  const path = `sections[${sideTabsIdx}].tabs[${trainerTabIdx}].content`

  let newContent: unknown[]
  if (trainerListIdx >= 0) {
    newContent = tabContent.map((block, i) => (i === trainerListIdx ? trainerListBlock : block))
  } else {
    newContent = [...tabContent, trainerListBlock]
  }

  const docId = doc._id.startsWith('drafts.') ? doc._id : `drafts.${doc._id}`

  await client
    .patch(docId)
    .setIfMissing({sections: []})
    .set({[path]: newContent})
    .commit({visibility: 'async'})

  console.log(`✓ Injected ${trainerItems.length} trainers into "${tabs[trainerTabIdx].label}" tab on document ${docId}`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
