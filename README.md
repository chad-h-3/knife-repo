# Knife Collection

Astro-based category storefront for personal knife listings. Content is managed in Pages CMS; publishing is deliberately manual to avoid triggering a build on every upload.

## Run locally

Install Node.js 22 or later, then:

```bash
npm install
npm run dev
npm run build
```

## Add items

Open [Pages CMS](https://app.pagescms.org), authorize this GitHub repository, and manage the **Knife Listings** collection.

Each listing contains a title, price, category, condition, status, images, description, and optional YouTube URL. A draft sample priced at $55 is included in `src/content/listings/sample-fixed-blade.md`.

Categories: `fixed-blade`, `spring-assisted`, `folding`, `multi-tools`, `antiques`, `vintage`.

The homepage displays six categories. Category pages display Available and Pending listings. Drafts are hidden. Sold listings retain their direct link, but are removed from category lists.

## Cloudflare Pages — manual publishing

1. Create a Cloudflare Pages project called `knife-repo`, connected to this GitHub repository.
2. Configure build command `npm run build` and output directory `dist`; complete the initial deployment.
3. Disable automatic production deployments and branch preview builds in Cloudflare's build settings. The website must not rebuild on every CMS change.
4. Create a Cloudflare API token with Pages edit permissions.
5. Add GitHub Actions secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
6. Add the GitHub Actions repository variable `CLOUDFLARE_PAGES_PROJECT` with the value `knife-repo`.
7. Use **GitHub > Actions > Publish website (manual) > Run workflow** to build and deploy the latest version when ready.

The CMS publishes listing edits to GitHub immediately, but your public site only changes when the manual deployment workflow runs.

Replace `site: 'https://example.com'` in `astro.config.mjs` with your eventual public URL. Replace placeholder category artwork and contact copy before launching. Do not commit Cloudflare secrets.

**Status:** starter files committed; production deployment, CMS access, and full build verification still need to be completed.
