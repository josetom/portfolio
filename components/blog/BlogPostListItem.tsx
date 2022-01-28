import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import type { Blog } from '.contentlayer/types';
// import ViewCounter from '@/components/blog/ViewCounter';

export default function BlogPostListItem({
  title,
  summary,
  slug,
  publishedAt,
}: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt'>) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h2 className="w-full mb-2 font-medium text-gray-900 dark:text-gray-100">{title}</h2>
            {/* <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              <ViewCounter slug={slug}></ViewCounter>
            </p> */}
            <p className="w-48 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
}
