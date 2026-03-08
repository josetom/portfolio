import { parseISO } from 'date-fns';
import { allBlogs } from '.contentlayer/data';

import Container from '@/components/layouts/Container';
import BlogPostListItem from '@/components/blog/BlogPostListItem';

export default function BlogsPage() {
  const sortedBlogs = allBlogs.sort(
    (a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime(),
  );

  return (
    <Container>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Notes on engineering leadership, billing architecture, pricing systems, and lessons from building products.
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
