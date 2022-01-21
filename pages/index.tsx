import Head from 'next/head';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  let title = 'Jose Tom';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 h-screen lg:overflow-hidden">
          <div className="grid place-items-center h-screen">
            <ProfileCard></ProfileCard>
          </div>
        </div>
      </main>
    </div>
  );
}
