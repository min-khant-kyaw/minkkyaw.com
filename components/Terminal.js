import styled from 'styled-components'
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';

const TerminalDiv = styled(Jumbotron)`
background: transparent;
padding: 1rem 0;
max-width: 35rem;
margin: 0 auto;
margin-top: 2rem;
width:100%;
display: flex;
align-content: center;
justify-content: center;
flex-direction: column;
`
const TerminalBar = styled.div`
display: flex;
align-items: center;
height: 2rem;
background-color: #E4E3E5;
max-width: 1000px;
border-radius: 10px 10px 0 0;
`
const TerminalButtons = styled.div`
width: 15px;
height: 15px;
background-color: #33c948;
border-radius: 50%;
margin-left: 0.5em;
`
const TerminalBody = styled.div`
justify-content: center;
background: #404040;
color: #fff;
`
const TerminalRow = styled(Row)`
margin: 0;
padding: 1.25rem 1rem;
`
const TerminalLink = styled.a`
color: white;
font-size: 1.1rem;
`

const info = [{
    title: "UD.fullName",
    value: "Min Khant Kyaw",
    link: "https://www.linkedin.com/in/min-khant-kyaw-ud",
    // "UD.skills":  "[\"HTML5\", \"CSS\", \"Javascript\", \"C#\", \"SQL\"]"
},
{
    title: "UD.currentLocation",
    value: "Singapore",
    link: "https://en.wikipedia.org/wiki/Singapore",
}, {
    title: "UD.resume",
    value: "minkhantkyaw.pdf",
    link: "/static/Resume.pdf",
}, {
    title: "UD.education",
    value: "Bachelors of Engineering in Computer Science (NTU)",
    link: "https://www.ntu.edu.sg/education/undergraduate-programme/beng-(computer-science)",
}]

const colors = {
    red: "#F96256",
    yellow: "#FDBC3D",
    green: "#33c948"
}

export default function Terminal() {
    return (
        <TerminalDiv className="jumbotron-fluid">
            <div>
                <TerminalBar>
                    {Object.keys(colors).map((item, i) =>
                        <TerminalButtons key={i}></TerminalButtons>
                    )}
                </TerminalBar>
            </div>
            <TerminalBody>
                {info.map((info, i) =>
                    <TerminalRow key={i}>
                        <Col>
                            <Text>{info.title}</Text>
                            <TerminalLink target="_blank" rel="noopener" href={info.link}>"<strong>{info.value}</strong>"</TerminalLink>
                        </Col>
                    </TerminalRow>
                )}
            </TerminalBody>
        </TerminalDiv>
    );
}