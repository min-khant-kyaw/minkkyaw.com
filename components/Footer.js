import { Center, Container, Image, Link } from "@chakra-ui/react";
import styled from "styled-components";

const FooterLinks = styled(Link)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const FooterContainer = styled.div`
  width: 100%;
  max-width: none;
  margin-bottom: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Center>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="mailto:min.kkyaw0101@gmail.com"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="Email Link"
            src="/icons/email.svg"
          />
        </FooterLinks>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="https://www.github.com/min-khant-kyaw"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="GitHub Link"
            src="/icons/github.svg"
          />
        </FooterLinks>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/min-khant-kyaw-ud"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="LinkedIn Link"
            src="/icons/linkedin.svg"
          />
        </FooterLinks>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="https://t.me/minkk_112"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="Telegram Link"
            src="/icons/paper-plane.svg"
          />
        </FooterLinks>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="https://www.instagram.com/minkk_112"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="Instagram Link"
            src="/icons/instagram.svg"
          />
        </FooterLinks>
        <FooterLinks
          rel="noopener"
          target="_blank"
          href="https://twitter.com/therealUD"
        >
          <Image
            boxSize="20px"
            width="512px"
            height="512px"
            alt="Twitter Link"
            src="/icons/twitter.svg"
          />
        </FooterLinks>
      </Center>
    </FooterContainer>
  );
};

export default Footer;
