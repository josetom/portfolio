import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import Container from '@/components/layouts/Container';
import ViewCounter from '@/components/blog/ViewCounter';
import Jose from '@/data/Jose';

const mdxComponents = {
  // Button,
};

export default function BlogPost({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <Container>
      <article className="relative py-16  overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {blog.title}
              </span>
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
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog }, revalidate: 300 };
}
