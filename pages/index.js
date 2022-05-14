import React from "react";
import Title from "../components/Title";
import Body from "../components/Container";
import Terminal from "../components/Terminal";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import Projects from "../components/Projects";

const BodyText = styled(Text)`
line-height: 1.5em;
color: gray;
letter-spacing: 0.025rem;
`;

const HomeContent = () => {
  return (
    <Body>
      <Title
        contents={[
          "I'm <strong>a software developer.",
          "I'm <strong>a web developer.",
          "I'm <strong>an AI/ML enthusiast.",
        ]}
      />
      <BodyText>
        I'm a developer and a writer. I am currently working as a web developer at Wunderfauks.
        This is my personal profile - everything about me can be found here.
      </BodyText>
      <Terminal />
      <Projects />
    </Body>
  );
};

export default HomeContent;
