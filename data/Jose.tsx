import { Profile } from '@/additional';
import Github from '@/components/icons/Github';
import LinkedIn from '@/components/icons/LinkedIn';
import Twitter from '@/components/icons/Twitter';
import Instagram from '@/components/icons/Instagram';
import { employer, jobTitle, linkedInUrl, location, siteUrl, xUrl } from '@/data/site';

const Jose: Profile = {
  name: 'Jose Tom',
  designation: (
    <>
      {jobTitle} at{' '}
      <a className="font-semibold" href={employer.url} target="_blank" rel="noreferrer noopener">
        {employer.name}
      </a>
      {` · ${location.label}`}
    </>
  ),
  description: `I lead Usage-Based Billing and Prepaid Credits for AI at Chargebee: the billing platform, and the organization behind usage, invoices, credit notes, and tax. Usage-based billing supports real-time aggregation and complex pricing at hundreds of thousands of events per second. I co-founded Beecon Fleet Management before joining Chargebee. Based in ${location.label}.`,
  image: '/images/IMG-sikkim-small.jpg',
  social: [
    {
      type: 'LinkedIn',
      url: linkedInUrl,
      icon: <LinkedIn></LinkedIn>,
    },
    {
      type: 'X',
      url: xUrl,
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
  website: siteUrl,
};

export default Jose;
