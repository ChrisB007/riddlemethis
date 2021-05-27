import React, {useState} from 'react';
import { Button,Container, Modal, Row, Col} from 'react-bootstrap';

const EasyRiddle = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [riddlecount, setRiddlecount] = useState({
        riddleOnload: 30,
        riddleFunc: "hhhhhh"
    });



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
        <Button className="riddlebuttons" id="easy" onClick={countdown}>
          Easy Riddles
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Easy Riddles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Container>
                    <Row>
                        <Col xs={6} sm={6} md={6} className="riddle-countdown" id="countriddle"></Col>
                        <Col xs={6} sm={6} md={6} className="riddle-countdown" id="countriddle">{riddlecount.riddleOnload ? `: ${countOnLoad()} seconds left` : `: ${riddlecount.riddleOnload}`}</Col>
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
            <Button variant="primary" onClick={handleSwap}>Swap Riddle</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default EasyRiddle
