import { Box, Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import styled from "styled-components";

const ProjectTitle = styled(Heading)`
margin-top: 3rem;
margin-bottom:  1.5rem;
`
const ProjectContainer = styled(Box)`
  display:flex;
  align-items:center;
  border: 1px solid silver;
  border-radius: 0.5rem;
  padding 1em;
  line-height: 1.5em;
  margin-bottom: 1rem;
`;
const ImageConainer = styled.div`
  display: flex;
  padding-right: 1em;
`
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
    image: "/static/images/portfolio.png",
    link: "https://github.com/min-khant-kyaw/nextjs-portfolio",
  },
  {
    title: "Arrowcrest CRM",
    description:
      "Upgrading and Maintenance of the CRM Application used by employees",
    image: "/static/images/crm.png",
    link: "http://arrowcrest.gotdns.com/ArrowCRM",
  },
  {
    title: "TradeIt",
    description:
      "An android application that allows you to contact others via email and trade items. Uses Firebase API",
    image: "/static/images/tradeit.png",
    link: "https://github.com/min-khant-kyaw/TradeItCA2",
  },
  {
    title: "Wartsila",
    description:
      "A hybrid mobile applcation for internal usage with a web portal to control the contents of the application.",
    image: "/static/images/wartsila.png",
  },
];

const Projects = () => {
  return (
    <Container>
      <ProjectTitle as="h1">Projects</ProjectTitle>
      {projects.map(({ title, description, image, link }) => (
        <ProjectLink href={link} isExternal>
          <ProjectContainer>
            <ImageConainer>
              <Image src={image} alt="Project image" boxSize="100px" htmlWidth="100px" htmlHeight="100px" />
            </ImageConainer>
            <div>
              <ProjectHeading as="h2">{title}</ProjectHeading>
              <Box>
                <ProjectText>{description}</ProjectText>
              </Box>
            </div>
          </ProjectContainer>
        </ProjectLink>
      ))}
    </Container>
  );
};

export default Projects;
