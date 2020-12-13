import React from 'react'
import Title from '../components/Title'
import Link from 'next/link';
import { Button } from "@chakra-ui/react"


const HomeContent = () => (
  <div>
    <Title contents={['I\'m <strong>a software devloper', 'I\'m <strong>a web and mobile app developer', 'I\'m <strong>an AI/ML enthusiast']}/>
    <BlogButton />
  </div>
);

const BlogButton = () => (
  <div>
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      <Link>Know thy author!</Link>
    </Button>
  </div>
);

export default HomeContent;