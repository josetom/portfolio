import Image from 'next/image';
import { Profile, Social } from '@/additional';

export default function ProfileCard(profile: Profile) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col-reverse gap-6 sm:gap-8 items-start sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 mb-4">
            Engineering Leadership · Billing · Pricing · Checkout
          </p>
          <h1 className="mb-2 leading-tight">{profile.name}</h1>
          <p className="mb-4 text-base text-gray-700 dark:text-gray-200">{profile.designation}</p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">{profile.description}</p>
          {socialIcons(profile.social)}
        </div>

        <div className="shrink-0">
          <Image
            className="inline-block rounded-2xl object-cover ring-1 ring-gray-200 dark:ring-gray-700"
            src={profile.image}
            alt={profile.name}
            width={220}
            height={220}
            priority
          />
        </div>
      </div>
    </div>
  );
}

const socialIcons = (socials: Social[]) => {
  return (
    <ul role="list" className="mt-5 flex flex-wrap items-center gap-3">
      {socials.map((social) => socialIcon(social))}
    </ul>
  );
};

const socialIcon = (social: Social) => {
  return (
    <li key={social.type}>
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View ${social.type} profile`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition"
      >
        {social.icon}
      </a>
    </li>
  );
};
