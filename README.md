# Jose Tom Portfolio

Personal website and blog for Jose Tom.

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Runtime

- **Node.js**: `24.x` (see `package.json` engines and `.nvmrc`)

## Overview

- `data/*` - Static data used for profile, routes, and blog metadata.
- `data/blog/*` - MDX blog posts.
- `pages/blog/*` - Blog listing and individual blog pages.
- `pages/*` - Homepage and other static pages.
- `components/*` - Reusable UI components.
- `public/*` - Static assets including images and logos.
- `scripts/*` - RSS and sitemap generation scripts.
- `styles/*` - Global styles.

## Notes

- Blog view counters were removed (frontend + API + DB dependencies).
- RSS and sitemap are generated on postbuild.

## Running Locally

```bash
git clone https://github.com/josetom/portfolio.git
cd portfolio
npm install
npm run dev
```
