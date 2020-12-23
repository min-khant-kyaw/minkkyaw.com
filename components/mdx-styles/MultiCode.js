import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const CodeContainer = styled(Box)`
  padding: 0.2rem 0.4rem;
  margin: 0.25rem 0;
  font-size: 85%;
  background-color: #1b1f230d;
  border-radius: 6px;
  @media (min-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MultiCode = ({ children }) => {
  return <CodeContainer>{children}</CodeContainer>;
};

export default MultiCode;