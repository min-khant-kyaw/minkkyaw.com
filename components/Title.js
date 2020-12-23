import { Text } from "@chakra-ui/react"
import Typed from 'react-typed'
import styled from 'styled-components'

const TitleContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
text-align: center;
margin-bottom: 2rem;
@media (min-width: 768px) {
}
`
const TitleText = styled(Text)`
font-size: 2.5rem;
@media (min-width: 768px) {
    font-size: 4rem;
}
`
const TitleGIF = styled(Typed)`
font-size: 1.2rem;
@media (min-width: 350px) {
    font-size: 1.35rem;
}
@media (min-width: 768px) {
    font-size: 3rem;
}
`

export default function Title({ contents }) {
    return (
        <TitleContainer>
            <TitleText>Hi! I'm Min</TitleText>
            <TitleGIF
                strings={contents}
                typeSpeed={40}
                backSpeed={50}
                smartBackspace={true}
                loop>
            </TitleGIF>
        </TitleContainer>
    )
}