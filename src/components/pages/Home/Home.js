import React from 'react';
import AboutiTravel from '../../AboutiTravel/AboutiTravel';
import BannerCarousel from '../../BannerCarousel/BanerCarousel';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <section>
                <BannerCarousel></BannerCarousel>
            </section>
            <section className="py-5 ">
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section className="py-5">
                <Services></Services>
            </section>
            <section className="py-5 bg-light">
                <AboutiTravel></AboutiTravel>
            </section>
            <section className="py-5">
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;