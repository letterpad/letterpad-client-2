import '@/css/tailwind.css';
import '@/css/prism.css';
// import '@fontsource/inter';
import '@fontsource/inter/variable-full.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Analytics from '@/components/analytics';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ClientReload } from '@/components/ClientReload';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics id={pageProps.me?.analytics_uuid} />
      {pageProps.settings ? (
        <LayoutWrapper props={pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
