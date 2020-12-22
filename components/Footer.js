import { Center, Container, Image, Link } from "@chakra-ui/react";
import styled from 'styled-components';

const FooterLinks = styled(Link)`
margin-left: 0.5rem;
margin-right: 0.5rem;
` 


const Footer = () => {
  return (
    <Container marginBottom="2rem">
      <Center>
        <FooterLinks href="https://www.github.com/min-khant-kyaw">
          <Image boxSize="20px" alt="GitHub Link" src="/icons/github.svg" />
        </FooterLinks>
        <FooterLinks href="https://www.linkedin.com/in/min-khant-kyaw-ud">
          <Image boxSize="20px" alt="LinkedIn Link" src="/icons/linkedin.svg" />
        </FooterLinks>
        <FooterLinks href="https://t.me/minkk_112">
          <Image boxSize="20px" alt="Telegram Link" src="/icons/paper-plane.svg" />
        </FooterLinks>
        <FooterLinks href="https://www.instagram.com/minkk_112">
          <Image boxSize="20px" alt="Instagram Link" src="/icons/instagram.svg" />
        </FooterLinks>
        <FooterLinks href="https://twitter.com/therealUD">
          <Image boxSize="20px" alt="Twitter Link" src="/icons/twitter.svg" />
        </FooterLinks>
      </Center>
    </Container>
  );
};

export default Footer;