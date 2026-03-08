import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';

import Jose from '@/data/Jose';

const impactPoints = [
  'Built Chargebee Usage-Based Billing from the ground up for high-throughput, real-time billing workloads.',
  'Scaled billing infrastructure to handle ~200K requests per second using cell-based architecture.',
  'Built Atomic Pricing as an internal startup and integrated it into Chargebee Growth Suite.',
  'Led checkout experience initiatives with low-code/no-code integration paths to improve top-of-funnel conversion.',
];

const leadershipAreas = [
  {
    title: 'Monetization Systems',
    description: 'Usage-based billing, invoicing, credit notes, and taxes for global SaaS and AI businesses.',
  },
  {
    title: 'Pricing Infrastructure',
    description: 'Composable pricing and packaging systems that support rapid experimentation and enterprise scale.',
  },
  {
    title: 'Checkout & Conversion',
    description: 'High-performing and extensible checkout experiences that improve activation and revenue capture.',
  },
  {
    title: 'Org Leadership',
    description: 'Roadmaps, team growth, hiring, and cross-functional execution across product, GTM, and engineering.',
  },
];

const timeline = [
  {
    period: 'Apr 2025 - Present',
    role: 'Director of Engineering - Billing for AI',
    company: 'Chargebee',
    highlights: [
      'Leads Billing vertical across Usage-Based Billing, Invoices, Credit Notes, and Taxes.',
      'Driving evolution of the billing platform for modern SaaS and AI business models.',
      'Owns strategy spanning platform flexibility, performance, and compliance at scale.',
    ],
  },
  {
    period: 'Jan 2022 - Mar 2025',
    role: 'Senior Engineering Manager',
    company: 'Chargebee',
    highlights: [
      'Architected and led Usage-Based Billing with real-time aggregation and complex pricing.',
      'Built Atomic Pricing as an internal startup and merged it into Chargebee Growth Suite.',
      'Enabled rapid pricing experimentation through risk-free controlled A/B workflows.',
    ],
  },
  {
    period: 'Dec 2019 - Jan 2022',
    role: 'Engineering Manager',
    company: 'Chargebee',
    highlights: [
      'Managed frontend teams across Checkout, Merchant UI, and App Experience.',
      'Built middleware services and integrations supporting high-scale checkout flows.',
      'Led migration from legacy JSP stack to modern Vue.js frontend architecture.',
    ],
  },
  {
    period: 'Nov 2018 - Nov 2019',
    role: 'Software Engineering Lead',
    company: 'Chargebee',
    highlights: [
      'Led Chargebee Checkout and hosted pages product used for payment capture and subscriptions.',
      'Owned 2 APIs and framework-based integrations for embedded checkout experiences.',
      'Integrated payment gateways like Stripe, Braintree, and others.',
    ],
  },
  {
    period: 'Jan 2017 - Nov 2018',
    role: 'Co-Founder',
    company: 'Beecon Fleet Management',
    highlights: [
      'Built fleet management SaaS for real-time vehicle tracking and operations automation.',
      'Owned end-to-end product delivery across frontend, backend, and infrastructure.',
      'Handled revenue, sales, and execution under startup constraints.',
    ],
  },
  {
    period: 'Jan 2016 - Jan 2017',
    role: 'Application Development Supervisor',
    company: 'Citi',
    highlights: [
      'Worked on Citi FX Pulse providing real-time market access across 80+ treasury sites.',
    ],
  },
  {
    period: 'Jul 2014 - Jan 2016',
    role: 'Application Developer',
    company: 'Citi',
    highlights: [
      'Built Local Markets Derivatives features (Spot, Futures) in FXLM.',
      'Contributed to foreign exchange and local markets platform capabilities.',
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
              <h2 className="mb-5">Impact at a glance</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {impactPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] p-4 text-gray-700 dark:text-gray-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </section>

            <section className="py-8">
              <h2 className="mb-5">What I lead</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {leadershipAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] p-5"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-8">
              <h2 className="mb-5">Career timeline</h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-[#111827] divide-y divide-gray-100 dark:divide-gray-700/70">
                {timeline.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="p-4 sm:p-5">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.role} - {item.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{item.period}</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {item.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
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
