# IMPACT Boston Website

This codebase is for the **IMPACT Boston** website.

The site is built with **Next.js (App Router)**, uses **Sanity** as a headless CMS, is styled with **Tailwind CSS**, and is deployed on **Vercel**. Sanity Studio is hosted separately and is used only for content management.

---

## Useful Links

Here are the links for this project on services that are being used.

* **Live Site:** *[(Link)](https://impact-boston-ve69.vercel.app/)*
* **Vercel:** *[(Link)](https://vercel.com/artists-for-humanity/impact-boston-ve69)*
* **GitHub:** [*(Link)*](https://github.com/Artists-for-Humanity/IMPACT-Boston)
* **Sanity Studio:** [*(Link)*](https://impact-boston.sanity.studio/)

---

## Technology Stack

This is a list of technologies used in this project.

* **Next.js (App Router)** — Primary framework used in the project
* **TypeScript** — Adds static typing to JavaScript for safer, more predictable code
* **Sanity CMS** — Headless CMS used to manage all site content
* **Tailwind CSS** — Utility-first CSS framework for styling
* **Jest & React Testing Library** — Used for testing functions and React components
* **Vercel** — Hosting and deployment platform

---

## Next.js & Rendering Strategy

This project uses **Next.js App Router** and is primarily **statically generated**.

At build time, content is fetched from Sanity using **GROQ queries**, and pages are generated as static assets. Once deployed, the site serves cached pages and re-fetches content from Sanity during revalidation, rather than on every request

This approach provides:

* Very fast load times
* Improved SEO
* Reduced dependency on CMS availability
* Lower API usage

### Notes

* The project does **not** use `getServerSideProps` or `getInitialProps`
* Rendering is handled using App Router conventions (`generateStaticParams`, server components, etc.)
* Sanity is treated purely as a content source, not an application backend

---

## Getting Started

### Setup

1. Make sure you have **Node.js** installed (v18+ recommended)

2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Artists-for-Humanity/IMPACT-Boston.git
   ```

3. Navigate into the project directory:

   ```bash
   cd impact-boston
   ```

4. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

5. Copy the environment variables file:

   ```bash
   cp .env.example .env.local
   ```

6. Add the required Sanity environment variables to `.env.local`:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=
   NEXT_PUBLIC_SANITY_API_VERSION=
   SANITY_API_READ_TOKEN=
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open the site in your browser:

   ```
   http://localhost:3000
   ```

---

## Sanity CMS

Sanity Studio is **hosted separately** from this codebase.

* All schemas live in the Sanity project
* Content is queried using **GROQ**
* The frontend does not include the Studio itself

### Content Updates

Published updates in Sanity are reflected on the live site without requiring a manual redeploy.

The site uses Next.js revalidation (ISR). Pages are cached for performance and automatically revalidated on an interval (currently ~30 seconds), so new content typically appears shortly after publishing.


## Running Sanity Studio Locally

Although Sanity Studio is hosted and deployed separately, it can also be run locally for schema development and content management.

### Local Development

The Sanity Studio lives in the `studio/` directory of this repository.

To run it locally:

```bash
cd studio
npm install
npm run dev
```

By default, the Studio will be available at:

```
http://localhost:3333
```

Running Sanity locally is useful when:

* Developing or updating schemas
* Testing content structures
* Working on Studio configuration or plugins

### Deployment

Sanity Studio is deployed separately using **Sanity’s built-in deployment tooling**.

* Deployments are managed through the Sanity CLI
* Once deployed, the hosted Studio is used by editors to manage live content
* The frontend site pulls content from the deployed Sanity project during build time


---

## Styling

The project uses **Tailwind CSS** for all styling.

* Global styles live in `globals.css`
* Design tokens and theme extensions are defined in `tailwind.config.ts`
* Components are styled using Tailwind utility classes rather than CSS modules

---

## Testing

This project includes testing support using:

* **Jest**
* **React Testing Library**

Tests can be run with:

```bash
npm run test
```

---

## Deployments

### Deploying on Vercel

This project is deployed using **Vercel**.

* Pushes or merges to the main branch trigger production builds
* Pull requests automatically generate preview deployments
* Environment variables are managed through the Vercel dashboard

---

## Notes for Development

* Content should always be managed through Sanity, not hardcoded
* Keep GROQ queries centralized and reusable where possible
