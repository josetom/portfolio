import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Jose Tom',
    site_url: 'https://www.josetom.com',
    feed_url: 'https://www.josetom.com/feed.xml',
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://www.josetom.com/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
