import Image from 'next/image';
import { Profile, Social } from '@/additional';

export default function ProfileCard(profile: Profile) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-white/90 dark:bg-[#111827]/85 backdrop-blur p-6 sm:p-8 shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex flex-col-reverse gap-6 sm:gap-8 items-start sm:flex-row sm:items-center">
        <div className="flex-1">
          <p className="inline-flex items-center rounded-full bg-gray-100 dark:bg-sky-500/10 px-3 py-1 text-xs font-medium text-gray-600 dark:text-sky-200 mb-4 border border-transparent dark:border-sky-400/20">
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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-sky-400/60 hover:bg-gray-50 dark:hover:bg-sky-400/10 transition"
      >
        {social.icon}
      </a>
    </li>
  );
};
