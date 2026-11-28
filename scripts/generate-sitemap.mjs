import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const siteUrl = 'https://www.josetom.com';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/**/*.tsx',
    'data/blog/**/*.mdx',
    '!pages/_*.tsx',
    '!pages/api/**',
    '!pages/404.tsx',
  ]);

  const routes = [
    ...new Set(
      pages
        .filter((page) => !page.includes('['))
        .map((page) => {
          const route = page
            .replace(/^pages/, '')
            .replace(/^data\/blog/, '/blog')
            .replace(/\.tsx$/, '')
            .replace(/\.mdx$/, '')
            .replace(/\/index$/, '');
          return route === '/index' ? '' : route;
        }),
    ),
  ].sort();

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
          .map(
            (route) => `
              <url>
                  <loc>${siteUrl}${route}</loc>
              </url>
            `,
          )
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
    printWidth: 200,
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
}

generate();
