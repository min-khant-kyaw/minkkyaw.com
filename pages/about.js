import { Heading, Text } from "@chakra-ui/react";
import Body from "../components/Container";
import styled from "styled-components";

const About = () => {
  const AboutTitle = styled(Heading)`
    margin-bottom: 1rem;
  `;
  const AboutBody = styled(Text)`
    margin-bottom: 2rem;
    color: gray;
  `;

  return (
    <Body>
      <AboutTitle>About Me</AboutTitle>
      <AboutBody>
        Hey. I'm Min aka UD to my friends. I work at Arrowcrest Technologies as
        a Software Developer.
        <br />
        <br />
        I'm a Singapore Polytechnic graduate and a holder of Diploma in
        Information Technology. I planned to pursue a part time Computer
        Science degree in Nanyang Technological University (NTU). I write about
        my journey, tech and my career on my blog.
        <br />
        <br />I grew up in Yangon, Myanmar before moving to Singapore when I was
        14. My interest in Computer Science began when I was 7, where I learnt
        web devlopment at KMD Computer Training Centre.
      </AboutBody>
    </Body>
  );
};

export default About;
