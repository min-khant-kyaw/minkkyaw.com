import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Body from "../../components/Container";
import { getSortedPosts } from "../../lib/posts";
import styled from "styled-components";

const RecentBlog = () => {
  return <div>Test</div>;
};

const BlogIndex = ({ allPostsData }) => {
  const HeaderText = styled(Text)`
    margin-bottom: 0.5rem;
  `;
  const BodyText = styled(Text)`
    line-height: 1.5em;
    color: gray;
    letter-spacing: 0.025rem;
  `;

  return (
    <Body>
      <Heading as="h1" size="2xl" marginBottom="1rem">
        Blog
      </Heading>
      <BodyText>
        I've started blogging after I joined the workforce, mostly about
        projects I've been doing and things I've learnt through the journey.
      </BodyText>
      <Heading as="h1" size="2xl" marginY="2rem">
        Recent Blogs
      </Heading>
      {allPostsData.map(({ slug, date, title, excerpt }) => (
        <Flex flexDir="column">
          <Grid h="100%" marginBottom="2rem">
            <GridItem>
              <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                <Heading as="h3" size="lg">{title}</Heading>
              </Link>
              <BodyText>{excerpt}</BodyText>
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
