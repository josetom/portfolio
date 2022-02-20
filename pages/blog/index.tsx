import { parseISO } from 'date-fns';
import { allBlogs } from '.contentlayer/data';
import Container from '@/components/layouts/Container';
import BlogPostListItem from '@/components/blog/BlogPostListItem';

export default function BlogsPage() {
  return (
    <Container>
      <div className="flow-root mt-6 mx-auto max-w-2xl px-8">
        {allBlogs
          .sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime())
          .map((blog) => (
            <BlogPostListItem key={blog.slug} blog={blog}></BlogPostListItem>
          ))}
      </div>
    </Container>
  );
}
