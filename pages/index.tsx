import Image from 'next/image';
import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';

import Jose from '@/data/Jose';
import { jobTitle } from '@/data/site';

type RoleEntry = {
  period: string;
  role: string;
  highlights: (string | JSX.Element)[];
};

type CompanyGroup = {
  company: string;
  website?: string;
  websiteNote?: string;
  logo: string;
  tenure: string;
  roles: RoleEntry[];
};

const companyTimeline: CompanyGroup[] = [
  {
    company: 'Chargebee',
    website: 'https://www.chargebee.com/',
    logo: '/logos/chargebee.ico',
    tenure: 'Nov 2018 - Present',
    roles: [
      {
        period: 'Apr 2025 - Present',
        role: jobTitle,
        highlights: [
          'Leads the billing organization across usage-based billing, prepaid credits, invoices, credit notes, and tax.',
          'Sets platform strategy for flexibility, performance, and compliance at scale.',
          'Built Chargebee Usage-Based Billing for high-throughput, real-time workloads.',
          'Scaled billing infrastructure to ~200K requests per second on a cell-based architecture.',
        ],
      },
      {
        period: 'Jan 2022 - Mar 2025',
        role: 'Senior Engineering Manager',
        highlights: [
          'Architected and led usage-based billing, including real-time aggregation and complex pricing.',
          <>
            Built Atomic Pricing as an internal startup and merged it into{' '}
            <a
              href="https://www.chargebee.com/growth/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-sky-500/60 hover:decoration-sky-400"
            >
              Chargebee Growth
            </a>
            . The Atomic Pricing site is now read-only.
          </>,
          'Enabled risk-free, controlled A/B workflows for pricing experiments.',
        ],
      },
      {
        period: 'Dec 2019 - Jan 2022',
        role: 'Engineering Manager',
        highlights: [
          'Led frontend teams for Checkout, Merchant UI, and App Experience.',
          'Built middleware and integrations for high-scale checkout.',
          'Led the migration from a legacy JSP stack to Vue.js.',
        ],
      },
      {
        period: 'Nov 2018 - Nov 2019',
        role: 'Software Engineering Lead',
        highlights: [
          'Led Chargebee Checkout and hosted pages for payment capture and subscriptions.',
          'Owned APIs and framework integrations for embedded checkout.',
          'Integrated payment gateways, including Stripe and Braintree.',
        ],
      },
    ],
  },
  {
    company: 'Beecon Fleet Management',
    websiteNote: '(site no longer live)',
    logo: '/logos/beecon.ico',
    tenure: 'Jan 2017 - Nov 2018',
    roles: [
      {
        period: 'Jan 2017 - Nov 2018',
        role: 'Co-Founder',
        highlights: [
          'Built a fleet-management product for real-time vehicle tracking and operations.',
          'Owned delivery across frontend, backend, and infrastructure.',
          'Responsible for revenue, sales, and execution under startup constraints.',
        ],
      },
    ],
  },
  {
    company: 'Citi',
    website: 'https://www.citi.com/',
    logo: '/logos/citi.ico',
    tenure: 'Jul 2014 - Jan 2017',
    roles: [
      {
        period: 'Jan 2016 - Jan 2017',
        role: 'Application Development Supervisor',
        highlights: ['Citi FX Pulse: real-time market access across 80+ treasury sites.'],
      },
      {
        period: 'Jul 2014 - Jan 2016',
        role: 'Application Developer',
        highlights: [
          'Built Local Markets Derivatives features (spot and futures) in FXLM.',
          'Contributed to the foreign-exchange and local-markets platform.',
        ],
      },
    ],
  },
];

export default function Home() {
  const profile: Profile = Jose;

  return (
    <Container>
      <main>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
            <section className="pt-10 sm:pt-14 pb-8">
              <ProfileCard
                name={profile.name}
                designation={profile.designation}
                description={profile.description}
                image={profile.image}
                social={profile.social}
                website={profile.website}
              ></ProfileCard>
            </section>

            <section className="py-8">
              <h2 className="mb-5">Experience</h2>
              <div className="space-y-5">
                {companyTimeline.map((group) => (
                  <div
                    key={group.company}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827]"
                  >
                    <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700/70 flex items-center gap-3">
                      <Image
                        src={group.logo}
                        alt={`${group.company} logo`}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                      <div>
                        {group.website ? (
                          <a
                            href={group.website}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="font-semibold text-gray-900 dark:text-white hover:underline"
                          >
                            {group.company}
                          </a>
                        ) : (
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {group.company}{' '}
                            <span className="font-normal text-gray-500 dark:text-gray-400">
                              {group.websiteNote}
                            </span>
                          </p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-400">{group.tenure}</p>
                      </div>
                    </div>

                    <div className="divide-y divide-gray-100 dark:divide-gray-700/70">
                      {group.roles.map((item) => (
                        <div key={`${group.company}-${item.role}`} className="p-4 sm:p-5">
                          <p className="font-medium text-gray-900 dark:text-white">{item.role}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{item.period}</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {item.highlights.map((point, idx) => (
                              <li key={`${item.role}-${idx}`}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
