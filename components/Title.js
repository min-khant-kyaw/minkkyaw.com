import { Text } from '@chakra-ui/react'
import Typed from 'react-typed'

export default function Title({ contents }) {
    return (
        <div>
            <Text fontSize="5xl">I'm Min Khant Kyaw</Text>
            <Typed
                strings={contents}
                typeSpeed={40}
                backSpeed={50}
                smartBackspace={true}
                loop>
            </Typed>
        </div>
    )
}