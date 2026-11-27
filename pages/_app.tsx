import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import GTag from '@/components/analytics/GTag';

import { Profile } from '@/additional';
import Jose from '@/data/Jose';
import { RouteMap } from '@/data/Routes';
import { employer, jobTitle, location, siteUrl } from '@/data/site';

function canonicalUrl(asPath: string) {
  const path = (asPath || '/').split(/[?#]/)[0] || '/';
  return path === '/' ? siteUrl : `${siteUrl}${path}`;
}

function MyApp({ Component, pageProps }: AppProps) {
  const profile: Profile = Jose;
  const router = useRouter();
  const pageTitle = RouteMap.nav[router.pathname]?.title || profile.name;
  const description = `${jobTitle} at ${employer.name} in ${location.label}.`;
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.image}`,
    jobTitle: `${jobTitle} at ${employer.name}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.locality,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    worksFor: {
      '@type': 'Organization',
      name: employer.name,
      url: employer.url,
    },
    sameAs: profile.social.map((social) => social.url),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="title" property="og:title" content={pageTitle} />
        <meta key="og:url" name="url" property="og:url" content={canonicalUrl(router.asPath)} />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content={`${profile.website}${profile.image}`} />
        <meta name="author" content={profile.name} />
        <meta property="og:description" content={profile.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${profile.website}${profile.image}`} />
        <meta name="locale" property="og:locale" content="en_GB" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </Head>
      <GTag></GTag>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
