import Link from 'next/link';

import type { BlogMeta } from '@/additional';
import { formatPublishedDate } from '@/lib/dates';

export default function BlogPostListItem({ blog }: { blog: BlogMeta }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <a className="block border-t border-neutral-200 py-6 text-neutral-950 no-underline dark:border-neutral-800 dark:text-white">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <h2 className="text-xl leading-snug sm:text-2xl">{blog.title}</h2>
          <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
            {formatPublishedDate(blog.publishedAt)}
          </p>
        </div>
        <p className="mt-3 max-w-[620px] text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {blog.summary}
        </p>
      </a>
    </Link>
  );
}
