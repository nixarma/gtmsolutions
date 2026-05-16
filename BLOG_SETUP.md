# Blog Implementation — Drop-in Files

## File map

```
src/
  app/
    blog/
      blog.css                  <- scoped blog styles (no globals duplication)
      page.tsx                  <- blog index (server component)
      [slug]/
        page.tsx                <- article page (server component + client islands)
    sitemap.ts                  <- replace or merge with your existing sitemap
  components/
    blog/
      BlogClientComponents.tsx  <- ProgressBar, TOC, CalEmbed (all 'use client')
  lib/
    posts.ts                    <- MDX frontmatter reader

content/
  blog/
    buying-problem-disguised-as-sales-problem.mdx   <- full featured article
    value-discovery-map.mdx                         <- stub
    discovery-is-a-two-way-conversation.mdx         <- stub
    demos-dont-sell-decisions-do.mdx                <- stub
    what-procurement-actually-hears.mdx             <- stub
    cross-functional-coaching.mdx                   <- stub
    compass-questioning-model.mdx                   <- stub
```

## Image assets to copy

Copy these from the Claude Design zip into `public/images/blog/`:

- `assets/nikhil-sarma.jpg`       -> `public/images/blog/nikhil-sarma.jpg`
- `assets/hero-image.webp`        -> `public/images/blog/hero-image.webp`
- `assets/decision-confidence.webp` -> `public/images/blog/decision-confidence.webp`

## Cal.com setup

In `src/app/blog/[slug]/page.tsx`, line ~12:

```ts
const CAL_LINK = 'nikhilsarma/strategy-session'
```

Replace `nikhilsarma/strategy-session` with your actual Cal.com username and
event slug. Find it in your Cal.com dashboard under the event's booking link.

## TOC heading convention

For the sticky TOC to auto-populate, write article h2s in this format:

```mdx
## 01. Section title here
## 02. Next section
```

The regex extracts the two-digit number and label automatically.
No frontmatter field needed.

## Adding a new post

1. Create `content/blog/your-slug.mdx`
2. Fill in frontmatter (copy any existing post as template)
3. Write MDX body — use `<PullQuote>`, `<InlineFigure>`, `<MidCTA>` as needed
4. `git push` — Vercel rebuilds automatically

## Dependencies already installed (per handover)

- `@next/mdx`
- `gray-matter`
- `next-mdx-remote`

No new packages needed.
