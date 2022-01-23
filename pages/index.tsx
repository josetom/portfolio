import Head from 'next/head';
import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';

import Jose from '@/data/Jose';

export default function Home() {
  const profile: Profile = Jose;

  return (
    <div className="static">
      <Head>
        <title>{profile.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Container>
          <div className="grid place-items-center h-screen">
            <ProfileCard
              name={profile.name}
              designation={profile.designation}
              description={profile.description}
              image={profile.image}
              social={profile.social}
            ></ProfileCard>
          </div>
        </Container>
      </main>
    </div>
  );
}
