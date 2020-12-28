import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../css/main.css";
import Head from "next/head";

const styling = {
  styles: {
    global: (props) => ({
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
      h1: {
        marginTop: "3rem",
        marginBottom: "1.5rem",
      }
    }),
  },
}

const theme = extendTheme({styling})

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
