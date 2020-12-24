import { Avatar, Badge, Flex, Text, Box } from "@chakra-ui/react";
import styled from 'styled-components';

const FlexBox = styled(Box)`
display: flex;
flex-direction: column;
`
const Name = styled(Text)`
font-size: 1.25rem;
font-weight: bold;
`
const Date = styled(Text)`
color: #303030;
`
const Read = styled(Text)`
color: #404040;
`

const BlogTags = ({ author, date, read }) => {
  return (
    <Flex>
      <Box ml="3">
        <Name fontWeight="bold">{author}</Name>
        <Box display="flex" flexDir="column">
          <Date fontSize="mds">{date}</Date>
          <Read>{read}</Read>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlogTags;
