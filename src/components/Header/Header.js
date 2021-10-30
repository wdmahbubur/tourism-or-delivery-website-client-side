import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">iTravel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavHashLink} smooth to="/#home">Home</Nav.Link>
                            <Nav.Link as={NavHashLink} smooth to="/#services">Services</Nav.Link>
                            <Nav.Link as={NavHashLink} smooth to="/#about">About</Nav.Link>
                            <Nav.Link as={NavHashLink} smooth to="/#testimonials">Testimonials</Nav.Link>
                            <Nav.Link as={NavHashLink} smooth to="/#contact">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user?.email ? <>

                                    <Nav.Link as={Link} to="/my-booking">My Booking</Nav.Link>
                                    <Nav.Link as={Link} to="/manage-booking">Manage All Booking</Nav.Link>
                                    <Nav.Link as={Link} to="/add-service">Add A New Service</Nav.Link>
                                    <Nav.Link to="/#" className="text-primary">Hi! {user.displayName}</Nav.Link>
                                    <Button variant="danger" onClick={logOut}>Logout</Button>
                                </>
                                    :
                                    <Nav.Link as={Link} to="/login" className="btn btn-success text-white">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;