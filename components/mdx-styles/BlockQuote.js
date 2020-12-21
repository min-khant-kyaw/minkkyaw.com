import { Container } from "@chakra-ui/react";
import styled from "styled-components";

const QuoteContainer = styled(Container)`
    border-left: 5px solid red;
    margin: 1em 0.75em;
    padding-left: 0.75em;
    color: #404040;
  `;

const BlockQuote = ({ children }) => {
  return <QuoteContainer>{children}</QuoteContainer>;
};

export default BlockQuote;
