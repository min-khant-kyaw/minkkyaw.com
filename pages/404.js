import { Container, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Body from "../components/Container";

const NotFound = () => {
  return (
    <Body>
      <NextSeo
        title="404 - Min Khant Kyaw"
        canonical="https://minkkyaw.com/404"
        description="Oops, You got the wrong URL"
        openGraph={{
          url: "https://minkkyaw.com/404",
          title: "404 - Min Khant Kyaw",
          description: "Oops, You got the wrong URL",
        }}
      />
      <Container textAlign="center">
        <Heading as="h1">
          Oops.. 404 error | Page not found
        </Heading>
      </Container>
    </Body>
  );
};

export default NotFound;