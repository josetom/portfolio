import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import GTag from '@/components/analytics/GTag';

import { Profile } from '@/additional';
import Jose from '@/data/Jose';
import { RouteMap } from '@/data/Routes';

function MyApp({ Component, pageProps }: AppProps) {
  const profile: Profile = Jose;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{RouteMap.nav[router.pathname]?.title || profile.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          property="og:title"
          content={RouteMap.nav[router.pathname]?.title || profile.name}
        />
        <meta name="url" property="og:url" content={profile.website} />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content={profile.image} />
        <meta name="author" content={profile.name} />
        <meta name="description" property="og:description" content={profile.description} />
        <meta name="locale" property="og:locale" content="en_GB" />
      </Head>
      <GTag></GTag>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
