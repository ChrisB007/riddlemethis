import React, {useState, useEffect} from 'react';
import { Row, Col, Container, Button, Modal} from 'react-bootstrap';

const HardRiddle = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const [riddleCount, setRiddlecount] = useState(30);

    useEffect(() => {
      const timer =
      riddleCount > 0 && setInterval(() => setRiddlecount(riddleCount - 1), 1000);
      return () => clearInterval(timer);
    }, [riddleCount]);



    function countdown(){
        handleShow();
    }

    function countOnLoad(ridd){
       return 30
    }

    function handleSwap(){
        console.log("Swapped");
    }
  
    return (
      <>
        <Button className="riddlebuttons" id="hard" onClick={countdown}>
          Hard Riddles
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Hard Riddles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
          <Row>
            <Col xs={6} sm={6} md={6} className="riddle-countdown" id="countriddle"></Col>
            <Col xs={6} sm={6} md={6} className="riddle-countdown" id="countriddle">
                {riddleCount === 0 ? 'Time is up' : undefined}
                <div>:{riddleCount} seconds remaining</div>
            </Col>
         </Row>
          </Container>
          <Row>
                <Col xs={12} sm={12} md={12}>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Col>
              </Row>
              <Row>
              <Col xs={12} sm={12} md={12} className="answerbuttoon">
                    <Button onClick={handleSwap} className="answerbutton">Get Answer</Button>
              </Col>
              </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Swap Riddle</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default HardRiddle;
