import { Heading, Text } from "@chakra-ui/react";
import Body from "../components/Container";
import styled from "styled-components";
import { NextSeo } from "next-seo";

const AboutTitle = styled(Heading)`
  margin-top: 0;
  margin-bottom: 1rem;
`;
const AboutBody = styled(Text)`
  margin-bottom: 2rem;
  color: gray;
  letter-spacing: 0.025rem;
`;

const About = () => {
  return (
    <Body>
      <NextSeo
        title="About Me – Min Khant Kyaw"
        description="Learn more about me"
        canonical="https://minkkyaw.com/about"
        openGraph={{
          url: "https://minkkyaw.com/about",
          title: "About Me – Min Khant Kyaw",
          description: "Learn more about me",
        }}
      />
      <AboutTitle as="h1">About Me</AboutTitle>
      <AboutBody>
        Hey. I'm Min aka UD to my friends. I work at Arrowcrest Technologies as
        a Software Developer.
        <br />
        <br />
        I'm a Singapore Polytechnic graduate and a holder of Diploma in
        Information Technology. I plan to pursue a part time Computer Science
        degree in Nanyang Technological University (NTU) or part time Software
        Engineering degree in National University of Singapore (NUS). I write
        about my journey, tech and my career on my blog.
        <br />
        <br />I grew up in Yangon, Myanmar before moving to Singapore when I was
        14. My interest in Computer Science began when I was 7, where I learnt
        web devlopment at KMD Computer Training Centre.
      </AboutBody>
      <AboutTitle as="h1">Personal Interest</AboutTitle>
      <AboutTitle as="h2">Football</AboutTitle>
      <AboutBody>
        I am an avid follower of Chelsea Football Club and would watch most of
        their matches without fail if their matches are played on weekends. The
        first football game I watched on TV was their match against Barcelona on
        2009, and have been a supporter since then.
      </AboutBody>
      <AboutTitle as="h2">Fashion</AboutTitle>
      <AboutBody>
        I have recently developed a keen interest in fashion and been following
        fashion icons such as A$AP Rocky, Playboi Carti and several other
        hip-hop icons. I also follow other fashion icons such as Wisdom Kaye,
        Justin Livingston and Phil Cohen. I've also been trying to develop my
        own style and taste in fashion.
      </AboutBody>
      <AboutTitle as="h2">Games</AboutTitle>
      <AboutBody>
        Games have been a part of my life since I was a child. Ever since I got
        my first PC, I have been in love with the story and art of different
        game genres. Although I have much lesser time now, I would still try to
        make time to play games I really loved as a child.
      </AboutBody>
      <AboutTitle as="h2">Music</AboutTitle>
      <AboutBody>
        I am a big fan of hip-hop and rap. My current favorite artists are Polo
        G, Lil Tjay and Pop Smoke.
        {/* TODO ADD SPOTIFY AWESOME API */}
      </AboutBody>
    </Body>
  );
};

export default About;
