import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import GTag from '@/components/analytics/GTag';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GTag></GTag>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
