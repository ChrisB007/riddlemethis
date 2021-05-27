import React, {useState} from 'react';
import { Button,Container, Modal, Row, Col} from 'react-bootstrap';

const EasyRiddle = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [riddlecount, setRiddlecount] = useState(30)



    function countdown(){
        

    }
  
    return (
      <>
        <Button className="riddlebuttons" id="easy" onClick={handleShow}>
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
                        <Col xs={6} sm={6} md={6} className="riddle-countdown">:{riddlecount}</Col>
                    </Row>
              </Container>
            I will not close if you click outside me. Don't even try to press
            escape key.
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

export default EasyRiddle
