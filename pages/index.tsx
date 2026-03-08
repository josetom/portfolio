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
    period: 'Dec 2018 - Present',
    role: 'Director of Engineering, Billing for AI',
    company: 'Chargebee',
  },
  {
    period: 'Oct 2016 - Nov 2018',
    role: 'Founder',
    company: 'Beecon Fleet Management',
  },
  {
    period: 'Jul 2014 - Jan 2017',
    role: 'Software Engineer',
    company: 'Citi',
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
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-gray-700 dark:text-gray-300"
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
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-8">
              <h2 className="mb-5">Career timeline</h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
                {timeline.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="p-4 sm:p-5">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.role} - {item.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.period}</p>
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
