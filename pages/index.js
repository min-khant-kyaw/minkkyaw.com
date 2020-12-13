import React from 'react'
import Title from '../components/Title'
import { Button, Link } from "@chakra-ui/react"
import Body from '../components/Container';
import Terminal from '../components/Terminal';


const HomeContent = () => (
  <Body>
    <Title contents={['I\'m <strong>a web developer.', 'I\'m <strong>a mobile app developer.', 'I\'m <strong>an AI/ML enthusiast.']} />
    <p>I'm a developer and a wrtier. I am a software developer working at Arrowcrest Technologies. This is my personal profile - everything about me can be found here.</p>
    <Terminal />
  </Body>
);

export default HomeContent;