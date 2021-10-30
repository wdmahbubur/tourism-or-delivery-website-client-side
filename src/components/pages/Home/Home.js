import React from 'react';
import AboutiTravel from '../../AboutiTravel/AboutiTravel';
import BannerCarousel from '../../BannerCarousel/BanerCarousel';
import Contact from '../../Contact/Contact';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div id="home">
            <section>
                <BannerCarousel></BannerCarousel>
            </section>
            <section className="py-5 bg-light">
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section className="py-5" id="services">
                <Services></Services>
            </section>
            <section className="py-5 bg-light" id="about">
                <AboutiTravel></AboutiTravel>
            </section>
            <section className="py-5" id="testimonials">
                <Testimonials></Testimonials>
            </section>
            <section className="py-5" id="contact">
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;