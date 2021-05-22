import React, {useState} from 'react'
import { Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';

const Riddles = props => {

    const [close, setClose] = useState("");


    const closed = () =>{
        setClose("Click to close");
    }

    return (
        <>
        <div className="riddlesection">
        <Container>
            <Row>
                <Col className="riddlegrid" xs={12} sm={12} md={4}>
                <Accordion>
                <Card id="easy">
                    <Card.Header>
                    <Accordion.Toggle onClick={closed} value="Easy Riddles" as={Button} variant="link" eventKey="0">
                        {close}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion> 
                </Col>
                <Col  className="riddlegrid" xs={12} sm={12} md={4}>
                <Accordion>
                <Card id="medium">
                    <Card.Header>
                    <Accordion.Toggle onClick={closed} value="Intermediate Riddles" as={Button} variant="link" eventKey="0">
                        {close}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the bodyHello! I'm the bodyHello! I'm the bodyHello! I'm the bodyHello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion> 
                </Col>
                <Col className="riddlegrid" xs={12} sm={12} md={4}>
                <Accordion>
                <Card id="hard">
                    <Card.Header>
                    <Accordion.Toggle onClick={closed} value="Hard Riddles" as={Button} variant="link" eventKey="0">
                        {close}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion> 
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default Riddles;

