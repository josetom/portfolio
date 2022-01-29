import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import Container from '@/components/layouts/Container';
import ViewCounter from '@/components/blog/ViewCounter';
import ShareBlogToSocial from '@/components/blog/ShareBlogToSocial';
import Jose from '@/data/Jose';

const mdxComponents = {
  // Button,
};

export default function BlogPost({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);
  const blogUrl = 'https://www.josetom.com/blog/' + blog.slug;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/blog/views/${blog.slug}`, {
        method: 'POST',
      });

    registerView();
  }, [blog.slug]);

  return (
    <Container>
      <Head>
        <meta name="title" property="og:title" content={blog.title} />
        <meta name="url" property="og:url" content={blogUrl} />
        <meta name="type" property="og:type" content="article" />
        <meta name="image" property="og:image" content={blog.image} />
        <meta name="author" content="Jose Tom" />
        <meta name="publishedDate" property="article:published_time" content={blog.publishedAt} />
        <meta
          property="og:description"
          content={'This blog from @_jose_tom_ is worth the read : ' + blog.title}
        />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <article className="relative sm:py-16 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="mt-2 mb-4 block text-center font-extrabold tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
              <div className="flex items-center">
                <Image
                  alt={Jose.name}
                  height={24}
                  width={24}
                  src={Jose.image}
                  className="rounded-full"
                />
                <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {`${Jose.name} / `}
                  {format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                {blog.readingTime.text}
                {` • `}
                <ViewCounter slug={blog.slug} />
              </p>
            </div>
          </div>
          <div className="text-lg max-w-prose mx-auto relative mt-3 h-6">
            <ShareBlogToSocial blog={blog}></ShareBlogToSocial>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-justify">
            <MDXContent components={mdxComponents} />
          </div>
          <div className="text-lg max-w-prose mx-auto relative mt-3 p-3 h-6 border-t border-gray-200">
            <ShareBlogToSocial blog={blog}></ShareBlogToSocial>
          </div>
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
