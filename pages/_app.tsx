import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";

import "@styles/globals.css";

import ThemeProvider from "@theme/appTheme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, layoutProps?: {}) => ReactNode;
  layoutProps?: {};
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const layoutProps = Component.layoutProps || {};

  return (
    <ThemeProvider>
      {getLayout(<Component appName="Formio" {...pageProps} />, layoutProps)}
    </ThemeProvider>
  );
}
