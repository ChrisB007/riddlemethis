import React from 'react'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import logo from '../images/log.png'

const Topbar = () => {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col>
                <Navbar className="navbg" expand="lg">
                    <Navbar.Brand href="#">
                        <img className="sitelogo" src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="mr-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        </Nav>
                        <Nav.Link href="#action1" className="to-right">Submit a Riddle</Nav.Link>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            </Container>        
        </div>
    )
}

export default Topbar;
