import Link from 'next/link';
import { parseISO } from 'date-fns';
import { allBlogs } from '.contentlayer/data';
import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';
import { formatPublishedDate } from '@/lib/dates';

import Jose from '@/data/Jose';
import { jobTitle } from '@/data/site';

type RoleEntry = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  summary?: string | JSX.Element;
  highlights?: (string | JSX.Element)[];
  current?: boolean;
};

const experience: RoleEntry[] = [
  {
    period: 'Apr 2025 – Present',
    role: jobTitle,
    company: 'Chargebee',
    companyUrl: 'https://www.chargebee.com/',
    current: true,
    highlights: [
      'Leads the billing organization across usage-based billing, prepaid credits, invoices, credit notes, and tax.',
      'Sets platform strategy for flexibility, performance, and compliance at scale.',
      'Built Chargebee Usage-Based Billing for high-throughput, real-time workloads.',
      'Scaled billing infrastructure to ~200K requests per second on a cell-based architecture.',
    ],
  },
  {
    period: 'Jan 2022 – Mar 2025',
    role: 'Senior Engineering Manager',
    company: 'Chargebee',
    companyUrl: 'https://www.chargebee.com/',
    summary: (
      <>
        Architected usage-based billing with real-time aggregation and complex pricing, and merged Atomic
        Pricing into{' '}
        <a
          href="https://www.chargebee.com/growth/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent underline decoration-accent/40 hover:decoration-accent dark:text-accent-dark dark:decoration-accent-dark/40"
        >
          Chargebee Growth
        </a>
        .
      </>
    ),
  },
  {
    period: 'Dec 2019 – Jan 2022',
    role: 'Engineering Manager',
    company: 'Chargebee',
    companyUrl: 'https://www.chargebee.com/',
    summary:
      'Led frontend teams for Checkout, Merchant UI, and App Experience, and the migration from a legacy JSP stack to Vue.js.',
  },
  {
    period: 'Nov 2018 – Nov 2019',
    role: 'Software Engineering Lead',
    company: 'Chargebee',
    companyUrl: 'https://www.chargebee.com/',
    summary:
      'Led Chargebee Checkout and hosted pages for payment capture and subscriptions, including Stripe and Braintree.',
  },
  {
    period: 'Jan 2017 – Nov 2018',
    role: 'Co-Founder',
    company: 'Beecon Fleet Management',
    companyUrl: 'https://beecon.in/',
    summary: 'Built a fleet-management product for real-time vehicle tracking and operations.',
  },
  {
    period: 'Jan 2016 – Jan 2017',
    role: 'Application Development Supervisor',
    company: 'Citi',
    companyUrl: 'https://www.citi.com/',
    summary: 'Citi FX Pulse: real-time market access across 80+ treasury sites.',
  },
  {
    period: 'Jul 2014 – Jan 2016',
    role: 'Application Developer',
    company: 'Citi',
    companyUrl: 'https://www.citi.com/',
    summary: 'Built Local Markets Derivatives features (spot and futures) in FXLM.',
  },
];

const selectedWork = [
  {
    title: 'Usage-based billing platform',
    outcome:
      'Built Chargebee Usage-Based Billing for high-throughput, real-time workloads, and scaled it to ~200K requests per second on a cell-based architecture.',
    tags: ['Usage-based billing', 'Real-time', 'Platform'],
  },
  {
    title: 'Atomic Pricing',
    outcome:
      'Built as an internal startup and merged into Chargebee Growth. The Atomic Pricing site is now read-only.',
    tags: ['Pricing', 'Experimentation'],
  },
  {
    title: 'Checkout migration',
    outcome:
      'Led frontend teams for Checkout, Merchant UI, and App Experience, and the migration from a legacy JSP stack to Vue.js.',
    tags: ['Checkout', 'Frontend'],
  },
  {
    title: 'Beecon',
    href: 'https://beecon.in/',
    outcome: 'Built a fleet-management product for real-time vehicle tracking and operations.',
    tags: ['Founding', 'Fleet'],
  },
];

export default function Home() {
  const profile: Profile = Jose;
  const latestPosts = allBlogs
    .slice()
    .sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <Container>
      <main>
        <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <section className="pt-8 sm:pt-14">
            <ProfileCard
              name={profile.name}
              designation={profile.designation}
              description={profile.description}
              image={profile.image}
              social={profile.social}
              website={profile.website}
            ></ProfileCard>
          </section>

          <section id="writing" className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800 sm:mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <h2>Writing</h2>
              <Link href="/blog" passHref>
                <a className="text-sm text-accent underline decoration-accent/40 hover:decoration-accent dark:text-accent-dark dark:decoration-accent-dark/40">
                  All writing
                </a>
              </Link>
            </div>
            <div className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
                  <a className="flex flex-col gap-1 py-4 text-neutral-950 no-underline hover:text-accent dark:text-white dark:hover:text-accent-dark sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="text-base leading-snug">{post.title}</span>
                    <span className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                      {formatPublishedDate(post.publishedAt)}
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800 sm:mt-20">
            <h2>Selected work</h2>
            <div className="mt-6">
              {selectedWork.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-neutral-200 py-6 dark:border-neutral-800"
                >
                  <h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-accent underline decoration-accent/40 hover:decoration-accent dark:text-accent-dark dark:decoration-accent-dark/40"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-2 max-w-[620px] text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {item.outcome}
                  </p>
                  <p className="mt-3 text-sm text-accent dark:text-accent-dark">{item.tags.join(' · ')}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="mt-16 scroll-mt-8 border-t border-neutral-200 pt-12 dark:border-neutral-800 sm:mt-20">
            <h2>Experience</h2>
            <div className="mt-6">
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.role}`}
                  className="grid gap-2 border-t border-neutral-200 py-6 dark:border-neutral-800 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8"
                >
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
                  <div className="min-w-0">
                    <p className="text-base text-neutral-950 dark:text-white">
                      {item.role}
                      {item.companyUrl ? (
                        <>
                          {', '}
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-accent underline decoration-accent/40 hover:decoration-accent dark:text-accent-dark dark:decoration-accent-dark/40"
                          >
                            {item.company}
                          </a>
                        </>
                      ) : (
                        `, ${item.company}`
                      )}
                    </p>
                    {item.current && item.highlights ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {item.highlights.map((point) => (
                          <li key={String(point)}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 max-w-[620px] text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {item.summary}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Container>
  );
}
