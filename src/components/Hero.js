import React from 'react';
import { Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';

const Hero = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                <Jumbotron className="jumbo">
                <h1 className="heydev fontsfam">Use me well, keep me clean, and I’ll never tell what I have seen...What am I?</h1>
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
