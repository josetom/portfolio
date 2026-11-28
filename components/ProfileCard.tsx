import Image from 'next/image';
import { Profile, Social } from '@/additional';

export default function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
      <div className="min-w-0 flex-1">
        <h1 className="display text-neutral-950 dark:text-white">{profile.name}</h1>
        <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
          {profile.designation}
        </p>
        <p className="mt-4 max-w-[40rem] text-base text-neutral-600 dark:text-neutral-300">
          Platform and team leadership across billing, pricing, and checkout.
        </p>
        <p className="mt-4 max-w-[600px] text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {profile.description}
        </p>
        {socialLinks(profile.social)}
      </div>
      <Image
        className="h-72 w-56 shrink-0 rounded-md object-cover md:h-96 md:w-72"
        src={profile.image}
        alt={profile.name}
        width={640}
        height={800}
        priority
      />
    </div>
  );
}

const socialLinks = (socials: Social[]) => {
  return (
    <ul role="list" className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
      {socials.map((social) => (
        <li key={social.type}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${social.type} profile`}
            className="inline-flex items-center gap-2 text-sm text-neutral-800 hover:text-accent dark:text-neutral-200 dark:hover:text-accent-dark"
          >
            <span className="text-neutral-700 dark:text-neutral-300">{social.icon}</span>
            {social.type}
          </a>
        </li>
      ))}
    </ul>
  );
};
