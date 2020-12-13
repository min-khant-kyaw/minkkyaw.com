import React from 'react'
import Typed from 'react-typed'
import { Button, ButtonGroup } from "@chakra-ui/react"


const HomeContent = () => (
  <div>
    <Title />
    <BlogButton />
  </div>
);


const Title = () => (
  <Typed
    strings={['I\'m <strong>a software devloper', 'I\'m <strong>a web and mobile app developer', 'I\'m <strong>an AI/ML enthusiast']}
    typeSpeed={40}
    backSpeed={50}
    smartBackspace={true}
    loop>
  </Typed>
);

const BlogButton = () => (
  <div>
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      <Link>Know thy author!</Link>
    </Button>
  </div>
);

export default HomeContent;