import { Profile } from '@/additional';
import ProfileCard from '@/components/ProfileCard';
import Container from '@/components/layouts/Container';

import Jose from '@/data/Jose';

export default function Home() {
  const profile: Profile = Jose;

  return (
    <div className="static">
      <main>
        <Container>
          <div className="grid place-items-center h-screen -mt-16">
            <ProfileCard
              name={profile.name}
              designation={profile.designation}
              description={profile.description}
              image={profile.image}
              social={profile.social}
              website={profile.website}
            ></ProfileCard>
          </div>
        </Container>
      </main>
    </div>
  );
}
