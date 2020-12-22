import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
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
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lato&display=swap"
            rel="stylesheet"
          />
          <title>Min Khant Kyaw - Developer, Writer</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
