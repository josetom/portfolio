import { Profile } from '@/additional';
import Github from '@/components/icons/Github';
import LinkedIn from '@/components/icons/LinkedIn';
import Twitter from '@/components/icons/Twitter';
import Instagram from '@/components/icons/Instagram';

const Jose: Profile = {
  name: 'Jose Tom',
  designation: (
    <>
      Director of Engineering (Billing for AI) at{' '}
      <a
        className="font-semibold"
        href="https://www.chargebee.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Chargebee
      </a>
    </>
  ),
  description:
    'Engineering Leader and Former Founder with 11+ years of experience building high-scale, mission-critical systems. Founded and led a startup, gaining first-hand experience in product-market fit, rapid execution, and scaling technology under resource constraints. At Chargebee, I’ve architected and scaled core monetization systems like Usage-Based Billing — capable of processing hundreds of thousands of events per second with real-time aggregation and complex pricing logic.',
  image: '/images/IMG-sikkim-small.jpg',
  social: [
    {
      type: 'LinkedIn',
      url: 'https://www.linkedin.com/in/josetomm/',
      icon: <LinkedIn></LinkedIn>,
    },
    {
      type: 'Twitter',
      url: 'https://twitter.com/_jose_tom_',
      icon: <Twitter></Twitter>,
    },
    {
      type: 'Github',
      url: 'https://github.com/josetom',
      icon: <Github></Github>,
    },
    {
      type: 'Instagram',
      url: 'https://www.instagram.com/jose_tom/',
      icon: <Instagram></Instagram>,
    },
  ],
  website: 'https://www.josetom.com',
};

export default Jose;
