import Head from 'next/head';
import Container from '@/components/layouts/Container';
import { linkedInUrl, xUrl } from '@/data/site';

const channels = [
  {
    name: 'LinkedIn',
    href: linkedInUrl,
    detail: 'Best place for a professional note.',
  },
  {
    name: 'X',
    href: xUrl,
    detail: 'Public conversation and short notes.',
  },
];

export default function ContactPage() {
  return (
    <Container>
      <Head>
        <title>Contact · Jose Tom</title>
        <meta
          name="description"
          content="Contact Jose Tom on LinkedIn or X. Director of Engineering at Chargebee, based in San Francisco."
        />
      </Head>
      <main>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h1>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I don’t publish an email address. For a professional conversation, message me on LinkedIn or X.
          </p>
          <ul className="mt-8 space-y-3">
            {channels.map((channel) => (
              <li
                key={channel.name}
                className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] px-5 py-4"
              >
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-gray-900 dark:text-white underline decoration-sky-500/60 hover:decoration-sky-400"
                >
                  {channel.name}
                </a>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{channel.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Container>
  );
}
