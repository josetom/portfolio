import Link from 'next/link';
import Header from '@/components/layouts/Header';
import { linkedInUrl, xUrl } from '@/data/site';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-[#0b0d12] dark:text-gray-100">
      <div className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%)]" />
      <Header></Header>
      <div className="flex-1">{children}</div>
      <footer className="relative border-t border-gray-200 dark:border-gray-700/80">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-6 text-sm text-gray-600 dark:text-gray-400 sm:px-6 lg:px-8">
          <Link href="/contact" passHref>
            <a className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          </Link>
          <a
            className="hover:text-gray-900 dark:hover:text-white"
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a className="hover:text-gray-900 dark:hover:text-white" href={xUrl} target="_blank" rel="noreferrer noopener">
            X
          </a>
        </div>
      </footer>
    </div>
  );
}
