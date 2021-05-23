import React, {useState} from 'react'
import { Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';

const Riddles = props => {

    const [close, setClose] = useState({
        easy: "Easy Riddles",
        medium: "Intermediate Riddles",
        hard: "Hard Riddles"
      });
       
      const closed = (e) => {
        const id = e.target.id;
        setClose({
          ...close, 
          [id]: "Click to close"
        });
      };

    return (
        <>
        <div className="riddlesection">
        <Container>
            <Row>
                <Col className="riddlegrid" xs={12} sm={12} md={4}>
                <Accordion>
                <Card id="easy">
                    <Card.Header>
                    <Accordion.Toggle id="easy" onClick={closed} value="Easy Riddles" as={Button} variant="link" eventKey="0">
                        {close.easy}
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
                    <Accordion.Toggle id="medium" onClick={closed} value="Intermediate Riddles" as={Button} variant="link" eventKey="0">
                    {close.medium}
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
                    <Accordion.Toggle id="hard" onClick={closed} value="Hard Riddles" as={Button} variant="link" eventKey="0">
                    {close.hard}
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

