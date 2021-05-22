import React, {useState} from 'react';
import { Container, Row, Col, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

const Hero = () => {
    const [close, setClose] = useState("Check the answer");

    const closed = () => {
        if (close === "Check the answer"){
            setClose(
                "Click to close"
            )
        } else {
            setClose(
                "Check the answer"
            )
        }
    }


    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                <Jumbotron className="jumbo">
                    <div>
                        <h1 className="heydev fontsfam">Use me well, keep me clean, and I’ll never tell what I have seen...What am I?</h1>
                        <Accordion>
                        <Card id="heroanswer">
                            <Card.Header>
                            <Accordion.Toggle onClick={closed} value="Check the answer" className="closeonclick" as={Button} variant="link" eventKey="0">
                                {close}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>A Toilet</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion> 
                    </div>
                    <hr className="my-2" />
                    <p className="lead fonts">RiddleMeThis is a free well formatted REST API that serves interesting, and yes funny riddles.</p>
                    <p className="lead fonts"></p>
                    <p className="lead">
                    <Button className="herobutton">Use this API</Button>
                    </p>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Hero;
