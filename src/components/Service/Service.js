import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, shortDesc, photo } = service;
    let history = useHistory();
    const handleBookNow = (id) => {
        history.push(`/booking/${id}`);
    }
    return (
        <Col>
            <Card className="shadow-sm">
                <Card.Img variant="top" src={photo} className="service-img" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {shortDesc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={() => handleBookNow(_id)}>Book Now</Button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Service;