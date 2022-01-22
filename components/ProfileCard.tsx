import Image from 'next/image';
import { Profile, Social } from '@/additional';

export default function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          {profile.name}
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">{profile.designation}</h2>
        <p className="text-gray-600 dark:text-gray-400 sm:w-72">{profile.description}</p>
        {socialIcons(profile.social)}
      </div>
      <div className="">
        <Image
          className="inline-block rounded-md place-self-end"
          src={profile.image}
          alt={profile.name}
          width={192}
          height={192}
        />
      </div>
    </div>
  );
}

const socialIcons = (socials: Social[]) => {
  let iconsList = socials.map((social) => socialIcon(social));
  let className = `mt-3 grid grid-cols-${socials.length}`;
  return (
    <ul role="list" className={className}>
      {iconsList}
    </ul>
  );
};

const socialIcon = (social: Social) => {
  return (
    <li key={social.type}>
      <a href={social.url} target="_blank" rel="noreferrer noopener">
        {social.icon}
      </a>
    </li>
  );
};
