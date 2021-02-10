import { Box, Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import styled from "styled-components";

const ProjectTitle = styled(Heading)`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;
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
    title: "Save Myanmar 2021",
    description:
      "A project by a group of friends who wishes to raise awareness of a coup happening in Myanmar. The website is updated daily with new content to help international communities under more about the country",
    image: "/static/images/savemm.jpg",
    link: "https://savemyanmar2021.com",
  },
  {
    title: "Portfolio",
    description:
      "Building and Deploying the personal portfolio page that you are looking at right now",
    image: "/static/images/portfolio.jpg",
    link: "https://github.com/min-khant-kyaw/nextjs-portfolio",
  },
  {
    title: "Cayuga Qognify",
    description: "Integrating Cayuga SDK into existing application to send SMS messages when alarm event triggers from camera",
    image: "/static/images/cayuga.png",
    link: "https://github.com/min-khant-kyaw/alarm_trigger",
  },
  {
    title: "Arrowcrest CRM",
    description:
      "Upgrading and Maintenance of the CRM Application used by employees",
    image: "/static/images/crm.jpg",
    link: "http://arrowcrest.gotdns.com/ArrowCRM",
  },
  {
    title: "TradeIt",
    description:
      "An android application that allows you to contact others via email and trade items. Uses Firebase API",
    image: "/static/images/tradeit.jpg",
    link: "https://github.com/min-khant-kyaw/TradeItCA2",
  },
  {
    title: "Wartsila",
    description:
      "A hybrid mobile applcation for internal usage with a web portal to control the contents of the application.",
    image: "/static/images/wartsila.jpg",
    link: "https://res.cloudinary.com/deqb1mah6/video/upload/v1610001508/Wartsila_Promotional_Video.wmv",
  },
];

const Projects = () => {
  return (
    <div>
      <ProjectTitle as="h1">Projects</ProjectTitle>
      {projects.map(({ title, description, image, link }) => (
        <ProjectLink href={link} isExternal>
          <ProjectContainer>
            <ImageConainer>
              <Image
                src={image}
                alt="Project image"
                boxSize="100px"
                htmlWidth="100px"
                htmlHeight="100px"
              />
            </ImageConainer>
            <div>
              <ProjectHeading as="h2">{title}</ProjectHeading>
              <Box>
                <ProjectText noOfLines={2}>{description}</ProjectText>
              </Box>
            </div>
          </ProjectContainer>
        </ProjectLink>
      ))}
    </div>
  );
};

export default Projects;
