import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import Body from "../../components/Container";
import { Box, Heading, Text } from "@chakra-ui/react";
import BlogDetails from "../../components/BlogDetails";
import styled from "styled-components";
import BlockQuote from "../../components/mdx-styles/BlockQuote";
import Serious from "../../components/mdx-styles/Serious";
import Code from "../../components/mdx-styles/Code";
import MultiCode from "../../components/mdx-styles/MultiCode";

const components = { BlockQuote, Serious, Code, MultiCode };

const BlogTitle = styled(Heading)`
margin-top: 0 !important;
margin-bottom: 1.5rem;
letter-spacing: -0.012rem;
@media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const BlogContent = styled(Text)`
  line-height: 2rem;
  margin-top: 2rem;
`;

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <Body>
      <BlogTitle as="h1">{frontMatter.title}</BlogTitle>
      <BlogDetails
        author={frontMatter.author}
        date={frontMatter.date}
        read={frontMatter.read}
      />
      <BlogContent>{content}</BlogContent>
    </Body>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
