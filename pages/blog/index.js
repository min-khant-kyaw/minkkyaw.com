import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Body from "../../components/Container";
import { getSortedPosts } from "../../lib/posts";
import styled from "styled-components";
import { NextSeo } from "next-seo";

const TitleHeading = styled(Heading)`
  margin-top: 0;
`;
const RecentHeading = styled(Heading)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const DateText = styled(Text)`
  color: #404040;
  letter-spacing: 0.025rem;
  margin-bottom: 1rem;
`;
const BlogHeading = styled(Heading)`
  color: black;
  letter-spacing: 0.025rem;
`;
const BodyText = styled(Text)`
  line-height: 1.5em;
  color: gray;
  letter-spacing: 0.025rem;
`;
const BlogLinks = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const BlogIndex = ({ allPostsData }) => {
  return (
    <Body>
      <NextSeo
        title="Blog - Min Khant Kyaw"
        description="A story of my journey, learnings and personal life"
        canonical="https://minkkyaw.com/blog"
        openGraph={{
          url: "https://minkkyaw.com/blog",
          title: "Blog - Min Khant Kyaw",
          description: "A story of my journey, learnings and personal life",
        }}
      />
      <TitleHeading as="h1">Blog</TitleHeading>
      <BodyText>
        I've always wanted to kept a journal of my life and what better way to
        do than to write blogs. I've started writing blogs after my 20th
        birthday as my New Year Resolution, mostly about my journey, experience
        and projects I've been doing and things learnt throughout the journey.
      </BodyText>
      <RecentHeading as="h1">Recent Blogs</RecentHeading>
      {allPostsData.map(({ slug, date, title, excerpt }) => (
        <Flex flexDir="column">
          <Grid h="100%" marginBottom="2rem">
            <GridItem>
              <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                <BlogLinks>
                  <BlogHeading as="h3" size="md">
                    {title}
                  </BlogHeading>
                  <DateText>{date}</DateText>
                  <BodyText>{excerpt}</BodyText>
                </BlogLinks>
              </Link>
            </GridItem>
          </Grid>
        </Flex>
      ))}
    </Body>
  );
};
export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
