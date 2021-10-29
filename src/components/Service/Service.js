import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, shortDesc, photo } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={photo} className="service-img" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {shortDesc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success">Book Now</Button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Service;