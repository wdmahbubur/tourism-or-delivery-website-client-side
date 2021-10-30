import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Testimonials.css';
const Testimonials = () => {
    return (
        <Container>
            <div className="text-center mb-5 section-header">
                <h2 className="my-0">Testimonials</h2>
                <hr className="mx-auto my-0 text-primary rounded" />
            </div>
            <Carousel className="testimonial">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="https://i.ibb.co/5jT2Nk7/img-504768.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <blockquote>"I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays."</blockquote>
                        <p>-Ivan Menezes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="https://i.ibb.co/5jT2Nk7/img-504768.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <blockquote>"I found Travel Online easy to use, and felt that I could email/ call Lisa if I had any queries regarding our accommodation. Everything went to plan and our proposed itinerary was very clear."</blockquote>
                        <p>-Caroline Rowlinson</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="https://i.ibb.co/5jT2Nk7/img-504768.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <blockquote>"I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays."</blockquote>
                        <p>Ivan Menezes</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>
    );
};

export default Testimonials;