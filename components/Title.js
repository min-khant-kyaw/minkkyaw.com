import Typed from 'react-typed'

export default function Title({contents}) {
    return (
        <Typed
          strings={contents}
          typeSpeed={40}
          backSpeed={50}
          smartBackspace={true}
          loop>
        </Typed>

    )
}