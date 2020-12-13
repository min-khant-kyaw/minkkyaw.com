
export default function Terminal(props) {
    const info = [{
        title: "UD.fullName",
        value: "Min Khant Kyaw"
        // "UD.skills":  "[\"HTML5\", \"CSS\", \"Javascript\", \"C#\", \"SQL\"]"
    },
    {
        title: "UD.currentLocation",
        value: "Singapore"
    }, {
        title: "UD.resume",
        value: "minkhantkyaw.pdf",
        link: Resume
    }, {
        title: "UD.education",
        value: "Diploma in Information Technology (SP)",
        link: "https://www.sp.edu.sg/soc/courses/full-time-diplomas/information-technology/overview"
    }]
    const colors = {
        red: "#F96256",
        yellow: "#FDBC3D",
        green: "#33c948"
    }
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
                            <Typography component="" variant="h6">{info.title}</Typography>
                            <TerminalLink target="_blank" href={info.link}>"<strong>{info.value}</strong>"</TerminalLink>
                        </Col>
                    </TerminalRow>
                )}
            </TerminalBody>
        </TerminalDiv>
    );
}