import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import matter from "gray-matter";
import Body from "../../components/Container";
import { Box } from "@chakra-ui/react";
import BlogTags from "../../components/BlogTags";

export default function Posts({ source, frontMatter }) {
  return (
    <Body>
      <h1>{frontMatter.title}</h1>
      <BlogTags author={frontMatter.author} date={frontMatter.date} read={frontMatter.read}/>
      {source}
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

  return {
    props: {
      source: content,
      frontMatter: data,
    },
  };
}
