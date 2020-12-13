import { Text } from '@chakra-ui/react'
import Typed from 'react-typed'
import styled from 'styled-components'


export default function Title({ contents }) {

    const TitleTyped = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    font-size: 3em;
    `

    return (
        <TitleTyped>
            <Text fontSize="5xl">I'm Min Khant Kyaw</Text>
            <Typed
                strings={contents}
                typeSpeed={40}
                backSpeed={50}
                smartBackspace={true}
                loop>
            </Typed>
        </TitleTyped>
    )
}