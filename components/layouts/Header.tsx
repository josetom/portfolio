import Link from 'next/link';
import { useRouter } from 'next/router';
import ToggleTheme from '@/components/ToggleTheme';

const linkClass =
  'text-sm text-neutral-700 hover:text-accent dark:text-neutral-300 dark:hover:text-accent-dark';

export default function Header() {
  const router = useRouter();
  const writing = router.pathname.startsWith('/blog');

  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <a className="shrink-0 text-base font-medium tracking-tight text-neutral-950 dark:text-white">
            Jose Tom
          </a>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Primary">
          <Link href="/#experience" passHref>
            <a className={linkClass}>Experience</a>
          </Link>
          <Link href="/blog" passHref>
            <a className={`${linkClass} ${writing ? 'font-medium text-neutral-950 dark:text-white' : ''}`}>
              Writing
            </a>
          </Link>
          <ToggleTheme></ToggleTheme>
        </nav>
      </div>
    </header>
  );
}
