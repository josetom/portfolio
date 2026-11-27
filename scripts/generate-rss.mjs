import { writeFileSync, readFileSync } from 'fs';
import { globby } from 'globby';
import RSS from 'rss';

function publishedDate(value) {
  const [year, month, day] = String(value).slice(0, 10).split('-').map(Number);
  // Noon UTC keeps the calendar day stable for readers west of UTC.
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

async function generate() {
  const feed = new RSS({
    title: 'Jose Tom',
    site_url: 'https://www.josetom.com',
    feed_url: 'https://www.josetom.com/feed.xml',
  });

  const blogJsonFiles = await globby(['node_modules/.contentlayer/data/Blog/*.mdx.json']);

  blogJsonFiles.forEach((filePath) => {
    const raw = readFileSync(filePath, 'utf8');
    const post = JSON.parse(raw);

    feed.item({
      title: post.title,
      url: `https://www.josetom.com/blog/${post.slug}`,
      date: publishedDate(post.publishedAt),
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
