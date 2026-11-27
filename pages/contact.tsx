import Head from 'next/head';
import Container from '@/components/layouts/Container';
import { linkedInUrl, xUrl } from '@/data/site';

export default function ContactPage() {
  return (
    <Container>
      <Head>
        <title>Contact · Jose Tom</title>
      </Head>
      <main>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
          <ul className="space-y-3 text-base">
            <li>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-900 dark:text-white underline decoration-sky-500/60 hover:decoration-sky-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={xUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-900 dark:text-white underline decoration-sky-500/60 hover:decoration-sky-400"
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Container>
  );
}
