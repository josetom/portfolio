import Head from 'next/head';
import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import ToggleTheme from '@/components/ToggleTheme';

import Jose from '@/constants/Jose';

export default function Home() {
  const profile: Profile = Jose;

  return (
    <div className="static">
      <Head>
        <title>{profile.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToggleTheme></ToggleTheme>
      <main>
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 h-screen lg:overflow-hidden">
          <div className="grid place-items-center h-screen">
            <ProfileCard
              name={profile.name}
              designation={profile.designation}
              description={profile.description}
              image={profile.image}
              social={profile.social}
            ></ProfileCard>
          </div>
        </div>
      </main>
    </div>
  );
}
