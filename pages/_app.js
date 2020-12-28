import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../css/main.css";
import Head from "next/head";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({colors})

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ChakraProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  }
}
