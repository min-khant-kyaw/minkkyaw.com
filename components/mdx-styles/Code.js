import { Text } from "@chakra-ui/react";
import styled from "styled-components";

const CodeBody = styled.div`
  background-color: gray;
  border: 0;
  margin: 0;
  padding: 1em;
`;

const Code = ({ children }) => {
  return (
    <CodeBody>
      <Text>{children}</Text>
    </CodeBody>
  );
};

export default Code;
