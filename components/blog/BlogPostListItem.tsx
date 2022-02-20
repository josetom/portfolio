import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import type { BlogMeta } from '@/additional';
import ViewCounter from '@/components/blog/ViewCounter';

export default function BlogPostListItem({ blog }: { blog: BlogMeta }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h2 className="w-full mb-2 font-medium text-gray-900 dark:text-gray-100">
              {blog.title}
            </h2>
            <p className="w-48 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <p className="text-gray-600 dark:text-gray-400">{blog.summary}</p>
            <p className="w-48 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              <ViewCounter slug={blog.slug}></ViewCounter>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
