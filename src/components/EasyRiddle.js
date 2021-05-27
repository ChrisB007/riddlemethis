import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';

const EasyRiddle = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
