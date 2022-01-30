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
        <meta name="title" property="og:title" content="Jose Tom" />
        <meta name="url" property="og:url" content="https://www.josetom.com" />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content={profile.image} />
        <meta name="author" content="Jose Tom" />
        <meta name="description" property="og:description" content={profile.description} />
        <meta name="locale" property="og:locale" content="en_GB" />
      </Head>
      <main>
        <Container>
          <div className="grid place-items-center h-screen -mt-16">
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
