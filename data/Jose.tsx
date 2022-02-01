import { Profile } from '@/additional';
import Github from '@/components/icons/Github';
import LinkedIn from '@/components/icons/LinkedIn';
import Facebook from '@/components/icons/Facebook';
import Twitter from '@/components/icons/Twitter';
import Instagram from '@/components/icons/Instagram';

const Jose: Profile = {
  name: 'Jose Tom',
  designation: (
    <>
      Engineering Manager at{' '}
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
  description: 'Building and managing the Chargebee checkout experience and all things frontend',
  image: '/images/IMG-sikkim-small.jpg',
  social: [
    {
      type: 'Github',
      url: 'https://github.com/josetom',
      icon: <Github></Github>,
    },
    {
      type: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jose-tom-89990171/',
      icon: <LinkedIn></LinkedIn>,
    },
    {
      type: 'Facebook',
      url: 'https://www.facebook.com/josetom25/',
      icon: <Facebook></Facebook>,
    },
    {
      type: 'Twitter',
      url: 'https://twitter.com/_jose_tom_',
      icon: <Twitter></Twitter>,
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
