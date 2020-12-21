import { Avatar, Badge, Flex, Text, Box } from "@chakra-ui/react";

const BlogTags = ({ author, date, read }) => {
  return (
    <Flex>
      <Box ml="3">
        <Text fontWeight="bold">{author}</Text>
        <Text fontSize="sm">
          <Badge colorScheme="green">
            {date}
          </Badge>
          {"  "}
          {read}
        </Text>
      </Box>
    </Flex>
  );
};

export default BlogTags;
