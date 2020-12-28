import { ThemeProvider, theme } from "@chakra-ui/react";
import App from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../css/main.css";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
