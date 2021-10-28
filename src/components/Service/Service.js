import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/Ky8yCVq/tour-18-featured-img.jpg" className="service-img" />
                <Card.Body>
                    <Card.Title>15 Days Europe Tour</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
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