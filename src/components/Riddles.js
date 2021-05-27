import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import EasyRiddle from './EasyRiddle';
import Intermediate from './IntermediateRiddle';
import HardRiddle from './HardRiddle';

const Riddles = props => {


    return (
        <>
        <div className="riddlesection">
        <Container>
            <Row>
                <Col className="riddlegrid" xs={12} sm={12} md={4}>
                    <EasyRiddle />
                    </Col>
                    <Col  className="riddlegrid" xs={12} sm={12} md={4}>
                        <Intermediate/>
                    </Col>
                    <Col className="riddlegrid" xs={12} sm={12} md={4}>
                        <HardRiddle />
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default Riddles;

