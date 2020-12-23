import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../css/main.css";

const theme = {
  colors: {
    primary: "#101010",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
