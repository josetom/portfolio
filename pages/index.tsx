import Image from 'next/image';
import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';

import Jose from '@/data/Jose';

type RoleEntry = {
  period: string;
  role: string;
  highlights: (string | JSX.Element)[];
};

type CompanyGroup = {
  company: string;
  website: string;
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
        role: 'Director of Engineering - Billing for AI',
        highlights: [
          'Leads Billing vertical across Usage-Based Billing, Invoices, Credit Notes, and Taxes.',
          'Driving evolution of the billing platform for modern SaaS and AI business models.',
          'Owns strategy spanning platform flexibility, performance, and compliance at scale.',
          'Built Chargebee Usage-Based Billing from the ground up for high-throughput, real-time billing workloads.',
          'Scaled billing infrastructure to handle ~200K requests per second using cell-based architecture.',
        ],
      },
      {
        period: 'Jan 2022 - Mar 2025',
        role: 'Senior Engineering Manager',
        highlights: [
          'Architected and led Usage-Based Billing with real-time aggregation and complex pricing.',
          <>
            Built{' '}
            <a
              href="https://www.atomicpricing.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-sky-500/60 hover:decoration-sky-400"
            >
              Atomic Pricing
            </a>{' '}
            as an internal startup and merged it into Chargebee Growth Suite.
          </>,
          'Enabled rapid pricing experimentation through risk-free controlled A/B workflows.',
        ],
      },
      {
        period: 'Dec 2019 - Jan 2022',
        role: 'Engineering Manager',
        highlights: [
          'Managed frontend teams across Checkout, Merchant UI, and App Experience.',
          'Built middleware services and integrations supporting high-scale checkout flows.',
          'Led migration from legacy JSP stack to modern Vue.js frontend architecture.',
        ],
      },
      {
        period: 'Nov 2018 - Nov 2019',
        role: 'Software Engineering Lead',
        highlights: [
          'Led Chargebee Checkout and hosted pages product used for payment capture and subscriptions.',
          'Owned APIs and framework-based integrations for embedded checkout experiences.',
          'Integrated payment gateways like Stripe, Braintree, and others.',
        ],
      },
    ],
  },
  {
    company: 'Beecon Fleet Management',
    website: 'https://beecon.in/',
    logo: '/logos/beecon.ico',
    tenure: 'Jan 2017 - Nov 2018',
    roles: [
      {
        period: 'Jan 2017 - Nov 2018',
        role: 'Co-Founder',
        highlights: [
          'Built fleet management SaaS for real-time vehicle tracking and operations automation.',
          'Owned end-to-end product delivery across frontend, backend, and infrastructure.',
          'Handled revenue, sales, and execution under startup constraints.',
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
        highlights: ['Worked on Citi FX Pulse providing real-time market access across 80+ treasury sites.'],
      },
      {
        period: 'Jul 2014 - Jan 2016',
        role: 'Application Developer',
        highlights: [
          'Built Local Markets Derivatives features (Spot, Futures) in FXLM.',
          'Contributed to foreign exchange and local markets platform capabilities.',
        ],
      },
    ],
  },
];

export default function Home() {
  const profile: Profile = Jose;

  return (
    <div className="static">
      <main>
        <Container>
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
              <h2 className="mb-5">Career timeline</h2>
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
                        <a
                          href={group.website}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-semibold text-gray-900 dark:text-white hover:underline"
                        >
                          {group.company}
                        </a>
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
        </Container>
      </main>
    </div>
  );
}
