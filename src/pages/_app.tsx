import type { AppProps } from 'next/app';
import { useState } from 'react';
import GlobalStyle from 'src/styles/global';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from 'src/styles/theme';
import BaseLayout from 'src/layout/baseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        <Component {...pageProps} />;
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
