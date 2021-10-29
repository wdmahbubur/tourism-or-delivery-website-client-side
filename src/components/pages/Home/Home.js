import React from 'react';
import AboutiTravel from '../../AboutiTravel/AboutiTravel';
import BannerCarousel from '../../BannerCarousel/BanerCarousel';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div id="home">
            <section>
                <BannerCarousel></BannerCarousel>
            </section>
            <section className="py-5 ">
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
        </div>
    );
};

export default Home;