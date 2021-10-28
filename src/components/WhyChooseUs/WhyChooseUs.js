import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WhyChooseUs = () => {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <img src="https://i.ibb.co/DrkP5wP/home-5-acc-img.jpg" alt="" className="w-100" />
                </Col>
                <Col md="6">
                    <p className="font-monospace text-primary">Best Agency</p>
                    <h2 className="my-3">Why Choose <span className="text-info">iTravel</span></h2>
                    <p className="lh-md">It is very important for you to choose your travel agency very wisely. When you take one or two weeks off from your regular schedule just for some relaxation, you must expect nothing but pleasure, satisfaction and enjoyment to refresh yourself and get you back on track. Therefore, iTravel travel agency is there to ensure that your holidays do not go to a waste with their top quality services and cheap tour packages from Bangladesh. Starting from your visa processing, as we are one of the best visa processing agency in Bangladesh, buying your tickets, booking your accommodation, tour arrangements and till returning you safely to your home it is all on our shoulders. All you have to do is to choose your desired tour package, sit back, relax, and let us do the rest. We guarantee that you will not get the chance to complain about anything.</p>
                </Col>
            </Row>
        </Container>

    );
};

export default WhyChooseUs;