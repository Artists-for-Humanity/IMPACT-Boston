/**
 * Seeds Blog Post documents used by the Blog landing page cards.
 *
 * Preview without writing:
 *   npm run seed:blog-posts:dry-run
 *
 * Create/update documents:
 *   npm run seed:blog-posts
 */

import {getCliClient} from 'sanity/cli'

type BlogPostSeed = {
  author: string
  description: string
  publishedAt: string
  title: string
}

const apiVersion = '2024-12-01'
const dryRun = process.argv.includes('--dry-run') || process.env.BLOG_POST_SEED_DRY_RUN === 'true'

const POSTS: BlogPostSeed[] = [
  {
    title: 'Making an IMPACT in Turbulent Times',
    description:
      'Economic stress is all around us, from the federal government shutdown to higher grocery and health care costs. We have been incredibly grateful at IMPACT for the generosity of our donors as they are helping us continue our commitment to not turning anyone away.',
    publishedAt: '2026-01-23',
    author: 'B Whitney',
  },
  {
    title: 'National Sexual Assault Conference 2025',
    description:
      'Empowerment Self-Defense leaders from the east coast and west coast, from urban and rural areas, from cities and sovereign tribal land came together to connect, collaborate, and strategize.',
    publishedAt: '2025-09-04',
    author: 'Impact Inc.',
  },
  {
    title: 'Governor Healey, Stop Punishing Survivors!',
    description:
      'We at IMPACT Boston were horrified to hear Governor Healey’s announcement that her administration is planning to build a new women’s prison complex estimated at $360 million.',
    publishedAt: '2025-07-28',
    author: 'Shay O',
  },
  {
    title: 'Embracing Discomfort As a Source of Power',
    description:
      'Earlier this month, I attended the Massachusetts Women of Color Network’s annual “Superhero Effect” conference in Quincy, MA. This was one of many firsts for me since joining the IMPACT Boston team at the end of May, and it was a very memorable experience.',
    publishedAt: '2025-07-02',
    author: 'Impact Inc.',
  },
  {
    title: 'Martial Arts Culture',
    description:
      'When teaching classes for IMPACT, we often encourage students to decide for themselves whether they want to talk about what they learned to people in their lives. Some of our students might encounter friends or relatives who disparage the skills they have acquired.',
    publishedAt: '2025-05-22',
    author: 'Impact Inc.',
  },
  {
    title: 'Justin Baldoni and The Men Who Pretend to Care About Us',
    description:
      'Justin Baldoni is just the latest man in the public arena to turn out to be a huge disappointment, but for me, this one stung.',
    publishedAt: '2024-12-23',
    author: 'Shay O',
  },
  {
    title: 'Note from the ED: Adaptive Sports Abuse Prevention',
    description:
      'In 2017, at the height of the #MeToo movement, it was near impossible to look at the news without seeing a story about sexual abuse in sports.',
    publishedAt: '2024-09-27',
    author: 'Impact Inc.',
  },
  {
    title: 'Why I Signed My 10-Year-Old Up for Self-Defense Class',
    description:
      'When IMPACT held its Middle School Safety class this summer, I eagerly signed up my daughter and encouraged friends and neighbors to do the same.',
    publishedAt: '2024-09-26',
    author: 'Elaine Sanfilippo',
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getDocumentId(slug: string) {
  return `blogPost.${slug}`
}

async function main() {
  if (dryRun) {
    console.log(`Dry run: ${POSTS.length} blog posts would be created or updated.`)

    for (const post of POSTS) {
      const slug = slugify(post.title)
      console.log(`- ${post.publishedAt} / ${slug} / ${post.title}`)
    }

    return
  }

  const client = getCliClient({apiVersion})

  for (const post of POSTS) {
    const slug = slugify(post.title)
    const existingId = await client.fetch<string | null>(
      `*[_type == "blogPost" && slug.current == $slug] | order(_updatedAt desc)[0]._id`,
      {slug},
    )
    const fields = {
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      author: post.author,
      slug: {
        _type: 'slug',
        current: slug,
      },
    }

    if (existingId) {
      await client.patch(existingId).set(fields).commit()
      console.log(`Updated ${existingId}: ${post.title}`)
      continue
    }

    const documentId = getDocumentId(slug)

    await client.createIfNotExists({
      _id: documentId,
      _type: 'blogPost',
      ...fields,
    })
    console.log(`Created ${documentId}: ${post.title}`)
  }

  console.log(`Done. Seeded ${POSTS.length} blog post card records.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
