import Link from 'next/link';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const TableOfContents = (props: any) => {
  return (
    <div className="lg:fixed lg:right-0 lg:top-48 lg:w-96 lg:mx-8 overflow-y-scroll">
      <h2>Table of Contents</h2>
      <nav {...props}>{props.children}</nav>
    </div>
  );
};

const MDXComponents = {
  a: CustomLink,
  nav: TableOfContents,
};

export default MDXComponents;
