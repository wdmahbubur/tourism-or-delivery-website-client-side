import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import InputField from '../InputField/InputField';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="pt-5 pb-2 bg-light">
            <Container>
                <Row>
                    <Col md="4" className="d-flex flex-column justify-content-between">
                        <h2 className="text-primary">iTravel</h2>
                        <p>iTravel is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh.</p>
                        <div className="d-flex">
                            <a href="/#" className="border border-primary rounded-circle social-icon">
                                <FontAwesomeIcon icon={faFacebookF} className="fs-4"></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border border-primary rounded-circle social-icon">
                                <FontAwesomeIcon icon={faTwitter} className="fs-4"></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border border-primary rounded-circle social-icon">
                                <FontAwesomeIcon icon={faLinkedin} className="fs-4"></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border border-primary rounded-circle social-icon">
                                <FontAwesomeIcon icon={faInstagram} className="fs-4"></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border border-primary rounded-circle social-icon">
                                <FontAwesomeIcon icon={faTelegram} className="fs-4"></FontAwesomeIcon>
                            </a>
                        </div>
                    </Col>
                    <Col md="4">
                        <h3 className="text-secondary">Useful Links</h3>
                        <div className="d-flex flex-column">
                            <NavLink to="/home" className="text-decoration-none my-1  text-dark">Home</NavLink>
                            <NavLink to="/home" className="text-decoration-none my-1  text-dark">Home</NavLink>
                            <NavLink to="/home" className="text-decoration-none my-1 text-dark">Home</NavLink>
                            <NavLink to="/home" className="text-decoration-none my-1 text-dark">Home</NavLink>
                        </div>
                    </Col>
                    <Col md="4">
                        <h3 className="text-secondary">Subscribe</h3>
                        <form className="flex flex-col gap-4">
                            <InputField type="email" placeholder="Enter Your Email" required></InputField>
                            <Button type="submit" variant="primary">Subscribe</Button>
                            <p> Get The Latest Updates via email. Any time you may unsubscribe</p>
                        </form>
                    </Col>
                </Row>
                <hr />
                <div>
                    <p>Copyright &copy; 2021. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;