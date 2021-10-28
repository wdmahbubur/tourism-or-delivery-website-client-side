import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutiTravel = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col md="6">
                    <img src="https://i.ibb.co/DrkP5wP/home-5-acc-img.jpg" alt="" className="w-100" />
                </Col>
                <Col md="6">
                    <p className="font-monospace text-primary">Best Agency</p>
                    <h2 className="my-3">Why Choose <span className="text-info">iTravel</span></h2>
                    <p className="lh-lg">iTravel is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and iTravel will do anything to keep you smiling.</p>
                </Col>
            </Row>
        </Container>

    );
};

export default AboutiTravel;