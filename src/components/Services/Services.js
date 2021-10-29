import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/services')
            .then(response => {
                setServices(response.data)
                setLoading(false);
            })
    }, [])
    return (
        <Container>
            <div className="text-center mb-5 section-header">
                <h2 className="my-0">Our Services</h2>
                <hr className="mx-auto my-0 text-primary rounded" />
            </div>

            {
                loading ? <div className="text-center">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                    :
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)

                        }
                    </Row>
            }


        </Container>
    );
};

export default Services;