import { Container } from "@chakra-ui/react";
import styled from "styled-components";

const BlockQuote = ({ children }) => {
  const QuoteContainer = styled(Container)`
    border-left: 5px solid red;
    margin-left: 1em;
    padding-left: 1em;
  `;

  return <QuoteContainer>{children}</QuoteContainer>;
};

export default BlockQuote;
