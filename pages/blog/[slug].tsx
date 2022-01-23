import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import Container from '@/components/layouts/Container';
// import { Button } from '@/components/Button';

const mdxComponents = {
  // Button,
};

export default function BlogPost({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <Container>
      <div className="flex pb-2 border-b-2 border-b-red-800 border-solid">
        <a key={blog.slug} href={blog.slug} className="pr-1">
          {blog.title}
        </a>
      </div>
      <h1>{blog.title}</h1>
      <MDXContent components={mdxComponents} />
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
