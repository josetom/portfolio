import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import type { BlogMeta } from '@/additional';

export default function BlogPostListItem({ blog }: { blog: BlogMeta }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <a className="block w-full rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] p-5 sm:p-6 mb-4 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 md:pr-6 leading-snug">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
            {format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>

        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{blog.summary}</p>

        <p className="mt-4 text-sm font-medium text-sky-700 dark:text-sky-300">Read article →</p>
      </a>
    </Link>
  );
}
