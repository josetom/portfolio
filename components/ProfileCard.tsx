import Image from 'next/image';
import { Profile, Social } from '@/additional';

export default function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col-reverse items-center sm:items-start sm:flex-row">
      <div className="flex flex-col pr-8 items-center sm:items-start">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          {profile.name}
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">{profile.designation}</h2>
        <p className="text-gray-600 dark:text-gray-400 w-72 text-justify sm:text-left">
          {profile.description}
        </p>
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
  let className = `mt-3 w-72 place-items-center sm:place-items-start grid grid-cols-${socials.length}`;
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
