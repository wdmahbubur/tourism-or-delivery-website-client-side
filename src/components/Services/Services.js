import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    return (
        <Container>
            <div className="text-center mb-5 section-header">
                <h2 className="my-0">Our Services</h2>
                <hr className="mx-auto my-0 text-primary rounded" />
            </div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Service></Service>
                ))}
            </Row>

        </Container>
    );
};

export default Services;