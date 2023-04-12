import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SmartCommunicationImage from './Image/Smart-Communication-Image.png'

const SmartCommunication = () => {
    return (
        <Container className='SmartCommunication'>
            <Row className='SmartCommunication-box' >
                <Col xs={0} sm={0} xl={0} lg={0} ></Col>
                <Col xs={12} sm={12} xl={5} lg={5} >
                    <img className='SmartCommunicationImage' src={SmartCommunicationImage} alt="logo" />
                </Col>
                <Col xs={0} sm={0} xl={1} lg={1} ></Col>
                <Col xs={12} sm={12} xl={5} lg={5} className='smart-content-box' >
                    <Row>
                        <h1 className='smart-communication-heading'>Smart communication organization.</h1>
                    </Row>
                    <Row>
                        <p className='smart-communication-text'>Keep track of ll the important conversations your team are having with intelligent communication sorting.</p>
                    </Row>
                    <Row>
                        <ul className='unorderlist'>
                            <li>Collaborate on projects</li>
                            <li>Work in real-time</li>
                            <li>Organize page content</li>
                        </ul>
                    </Row>
                </Col>
                <Col xs={0} sm={0} xl={1} lg={1} ></Col>
            </Row>
        </Container>
    )
}

export default SmartCommunication