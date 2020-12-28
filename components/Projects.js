import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import styled from "styled-components";

const ProjectTitle = styled(Heading)`
margin-top: 3rem;
margin-bottom:  1.5rem;
`
const ProjectContainer = styled(Box)`
  border: 1px solid silver;
  border-radius: 0.5rem;
  padding 1em;
  line-height: 1.5em;
  margin-bottom: 1rem;
`;
const ProjectHeading = styled(Heading)`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: black;
`;
const ProjectText = styled(Text)`
  color: gray;
`;
const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const projects = [
  {
    title: "Portfolio",
    description:
      "Building and Deploying the personal portfolio page that you are looking at right now",
    image: "https://source.unsplash.com/random",
    link: "https://github.com/min-khant-kyaw/nextjs-portfolio",
  },
  {
    title: "TradeIt",
    description:
      "An android application that allows you to contact others via email and trade items. Uses Firebase API.",
    image: "https://source.unsplash.com/random",
    link: "https://github.com/min-khant-kyaw/TradeItCA2",
  },
];

const Projects = () => {
  return (
    <Container>
      <ProjectTitle as="h1">Projects</ProjectTitle>
      {projects.map(({ title, description, image, link }) => (
        <ProjectLink href={link} isExternal>
          <ProjectContainer>
            <ProjectHeading as="h2">{title}</ProjectHeading>
            <Box>
              <ProjectText>{description}</ProjectText>
            </Box>
          </ProjectContainer>
        </ProjectLink>
      ))}
    </Container>
  );
};

export default Projects;
