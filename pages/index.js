import React from 'react'
import Title from '../components/Title'
import { Button, Link } from "@chakra-ui/react"
import Container from '../components/Container';

const BlogButton = () => (
  <div>
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      <Link>Know thy author!</Link>
    </Button>
  </div>
);

const HomeContent = () => (
  <Container>
    <Title contents={['I\'m <strong>a software devloper', 'I\'m <strong>a web and mobile app developer', 'I\'m <strong>an AI/ML enthusiast']} />
    <BlogButton />
  </Container>
);

export default HomeContent;