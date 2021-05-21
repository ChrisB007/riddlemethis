import React from 'react'
import { Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';

const Riddles = props => {
    return (
        <>
        <div className="riddlesection">
        <Container>
            <Row>
                <Col className="riddlegrid" xs={12} sm={12} md={4}>
                <Accordion>
                <Card id="easy">
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Easy Riddles
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
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Intermediate Riddles
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
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Hard Riddles
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

