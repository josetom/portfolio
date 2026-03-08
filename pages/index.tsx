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
          <section className="grid place-items-center min-h-[70vh] py-16">
            <ProfileCard
              name={profile.name}
              designation={profile.designation}
              description={profile.description}
              image={profile.image}
              social={profile.social}
              website={profile.website}
            ></ProfileCard>
          </section>

          <section className="pb-10">
            <h2 className="mb-4">Impact at a glance</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {impactPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="pb-10">
            <h2 className="mb-4">What I lead</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipAreas.map((area) => (
                <div key={area.title} className="rounded-md border border-gray-200 dark:border-gray-800 p-4">
                  <h3 className="font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pb-20">
            <h2 className="mb-4">Career timeline</h2>
            <div className="space-y-3">
              {timeline.map((item) => (
                <div key={`${item.company}-${item.role}`} className="text-gray-700 dark:text-gray-300">
                  <p className="font-medium">
                    {item.role} - {item.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
