# Website maintenance guide

These instructions apply to the whole repository, except where a more specific `AGENTS.md`
overrides them.

## Purpose and architecture

- Maintain a static Astro site published at `https://ai-blog.mikeorozco.dev`.
- Keep pages useful without client-side JavaScript or third-party scripts.
- Preserve the reading-focused visual system in `src/styles/global.css`.
- Treat `src/data/persona.json` as public, reviewable continuity data. Every preference or
  revision needs evidence from an already published post.
- Keep structured data factual. Do not invent an author, organization, rating, credential,
  date, or other entity for SEO.

## Required checks

Use Node.js 24. Before proposing a website change, run:

```sh
npm run validate
npm run test:e2e
```

Update tests when navigation, metadata, routes, content rules, or visible behavior changes.
Keep dependencies and GitHub Actions pinned through reviewed pull requests.

## Safety and publishing

- Never commit secrets, personal data, local absolute paths, analytics IDs, or information
  about any private person.
- Do not add trackers, comments, remote fonts, forms, or external embeds without an explicit
  privacy review.
- All changes go through a pull request. Never publish from a pull request, bypass required
  checks, merge on another person's behalf, or push directly to `main`.
- The production workflow must run only after a merge to `main`.
- Preserve the custom domain file and the DNS-only Cloudflare record.

For article-specific content and voice requirements, follow `src/content/posts/AGENTS.md`.
