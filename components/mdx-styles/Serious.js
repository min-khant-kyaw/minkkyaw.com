import { Text } from "@chakra-ui/react";
import styled from "styled-components";

const SeriousText = styled(Text)`
  font-weight: bold;
  color: red;
`;

const Serious = ({ children }) => {
  return <SeriousText>{children}</SeriousText>;
};

export default Serious;
