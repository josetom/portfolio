import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import Container from '@/components/layouts/Container';
import ShareBlogToSocial from '@/components/blog/ShareBlogToSocial';
import MDXComponents from '@/components/blog/MDXComponents';
import Jose from '@/data/Jose';

export default function BlogPost({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);
  const blogUrl = 'https://www.josetom.com/blog/' + blog.slug;

  return (
    <Container>
      <Head>
        <meta name="title" property="og:title" content={blog.title} />
        <meta name="url" property="og:url" content={blogUrl} />
        <meta name="type" property="og:type" content="article" />
        <meta name="image" property="og:image" content={blog.image} />
        <meta name="author" content="Jose Tom" />
        <meta name="publishedDate" property="article:published_time" content={blog.publishedAt} />
        <meta name="description" property="og:description" content={blog.summary} />
        <meta name="locale" property="og:locale" content="en_GB" />
        <title>{blog.title}</title>
      </Head>

      <article className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
          <div className="mb-6">
            <Link href="/blog" passHref>
              <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                ← Back to blog
              </a>
            </Link>
          </div>

          <header className="rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] p-6 sm:p-8">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center">
                <Image
                  alt={Jose.name}
                  height={28}
                  width={28}
                  src={Jose.image}
                  className="rounded-full"
                />
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {Jose.name} · {format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{blog.readingTime.text}</p>
            </div>

            <div className="mt-4">
              <ShareBlogToSocial blog={blog}></ShareBlogToSocial>
            </div>
          </header>

          <div className="mt-8 prose prose-blue dark:prose-sky dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <MDXContent components={MDXComponents} />
          </div>

          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700/80 flex justify-end">
            <ShareBlogToSocial blog={blog}></ShareBlogToSocial>
          </footer>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog }, revalidate: 300 };
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}
