import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import NextApp, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine Modal Example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell padding="md" sx={{ maxWidth: 900 }} mx="auto">
          <Component {...pageProps} />
          <Notifications />
        </AppShell>
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
