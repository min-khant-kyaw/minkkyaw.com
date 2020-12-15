import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import styled from "styled-components";

export default function Body({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const Container = styled.div`
    max-width: 54rem;
    margin: 0 auto;
    @media (min-width: 768px) {
    }
  `;
  const NavMenu = styled.a`
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
  `;
  const NavbarLinks = styled.a`
    font-size: 1.25rem;
    color: gray;
    padding: 0.25rem;
    @media (min-width: 640px) {
      padding: 1rem;
    }
  `;
  const BodyMain = styled.main`
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 42rem;
  `;
  const BodyText = styled(Text)`
    line-height: 1.5em;
    color: gray;
    letter-spacing: 0.025rem;
  `;

  return (
    <Container maxW="10%" centerContent={true}>
      <nav>
        {/* TODO */}
        <NavMenu>
          <NextLink href="/blog">
            <NavbarLinks>Blog</NavbarLinks>
          </NextLink>
          <NextLink href="/about">
            <NavbarLinks>About</NavbarLinks>
          </NextLink>
          <NextLink href="/">
            <NavbarLinks>Home</NavbarLinks>
          </NextLink>
        </NavMenu>
      </nav>
      <BodyMain>{children}</BodyMain>
    </Container>
  );
}
