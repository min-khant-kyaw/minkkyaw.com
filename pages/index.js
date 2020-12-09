import Typed from 'react-typed'

const Title = () => (
  <Typed
    strings={['I\'m <strong>a software devloper', 'I\'m <strong>a web and mobile app developer', 'I\'m <strong>an AI/ML enthusiast']}
    typeSpeed={40}
    backSpeed={50}
    smartBackspace={true}
    loop>
  </Typed>
);

export default Title;