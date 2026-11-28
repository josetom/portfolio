import Head from 'next/head';
import { parseISO } from 'date-fns';
import { allBlogs } from '.contentlayer/data';

import Container from '@/components/layouts/Container';
import BlogPostListItem from '@/components/blog/BlogPostListItem';
import { siteUrl } from '@/data/site';

export default function BlogsPage() {
  const sortedBlogs = allBlogs.sort(
    (a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime(),
  );

  return (
    <Container>
      <Head>
        <meta key="og:url" name="url" property="og:url" content={`${siteUrl}/blog`} />
      </Head>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        <div className="mb-8 sm:mb-10">
          <h1>Writing</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Writing on billing architecture, usage-based pricing, and engineering leadership.
          </p>
        </div>

        <div>
          {sortedBlogs.map((blog) => (
            <BlogPostListItem key={blog.slug} blog={blog}></BlogPostListItem>
          ))}
        </div>
      </div>
    </Container>
  );
}
