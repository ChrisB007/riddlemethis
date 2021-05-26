import React, {useState} from 'react'
import { Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';

const Riddles = props => {

      const levelStatus = {
        easy: "Easy Riddles",
        medium: "Intermediate Riddles",
        hard: "Hard Riddles"
    }

    const collapseButton = "Click to close"

    const [close, setClose] = useState({
        easy: false,
        medium: false,
        hard: false
      });
    


       //Countdown (function)


      //Reset Riddle (function)
       

      //Handle click
      const handleClick = (e) => {
          setClose({
              easy:true,
              medium: true,
              hard: true
          })
            
        // setClose(prevCloseState => {
        //    ...prevCloseState,
        //     easy: true,
        //     medium: true,
        //     hard: true
        //  })    
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
                        <Accordion.Toggle id="easy" onClick={handleClick} as={Button} variant="link" eventKey="0">
                        {close.easy ? collapseButton : levelStatus.easy }
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col xs={6} sm={6} md={6}>Countdown</Col>
                                <Col className="resetlink" xs={6} sm={6} md={6}>Switch</Col>
                            </Row>
                            <div>
                            Hello! I'm the body
                            <div className="close-button-div"> 
                                <Button onClick={handleClick} className="close-button">close</Button>    
                            </div>                         
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion> 
                    </Col>
                    <Col  className="riddlegrid" xs={12} sm={12} md={4}>
                    <Accordion>
                    <Card id="medium">
                        <Card.Header>
                        <Accordion.Toggle id="medium" onClick={handleClick} as={Button} variant="link" eventKey="1">
                        {close.medium ? collapseButton : levelStatus.medium }
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Row>
                                <Col xs={6} sm={6} md={6}>Countdown</Col>
                                <Col className="resetlink" xs={6} sm={6} md={6}>Switch</Col>
                            </Row>
                            <div>
                            Hello! I'm the body
                            <div className="close-button-div">
                                <Button className="close-button" onClick={handleClick}>
                                    close
                                </Button>
                            </div>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion> 
                    </Col>
                    <Col className="riddlegrid" xs={12} sm={12} md={4}>
                    <Accordion>
                    <Card id="hard">
                        <Card.Header>
                        <Accordion.Toggle id="hard" onClick={handleClick} as={Button} variant="link" eventKey="2">
                        {close.hard ? collapseButton : levelStatus.hard }
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Row>
                                <Col xs={6} sm={6} md={6}>Countdown</Col>
                                <Col className="resetlink" xs={6} sm={6} md={6}>Switch</Col>
                            </Row>
                            <div>
                            Hello! I'm the body
                            <div className="close-button-div"><Button id="closebutton-id" className="close-button" onClick={handleClick}>close</Button></div>
                            </div>
                        </Card.Body>
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

