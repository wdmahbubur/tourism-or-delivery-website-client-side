import React from 'react';
import { Carousel } from 'react-bootstrap';
import './BannerCarousel.css';
const BannerCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src="https://i.ibb.co/hcxFHgB/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text-uppercase fw-bold text-white fs-1">Your Journey Begins</h1>
                    <p>Treat yourself with a journey to your inner self.Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src="https://i.ibb.co/K0BpTw0/2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-uppercase fw-bold text-white fs-1">Enjoy the tour with iTravel</h1>
                    <p>Exploring means learning. Bring new experiences from each journey. Meet different cultures, traditions and landscapes. Choose your next destination and start your trip.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BannerCarousel;