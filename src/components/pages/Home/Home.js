import React from 'react';
import AboutiTravel from '../../AboutiTravel/AboutiTravel';
import BannerCarousel from '../../BannerCarousel/BanerCarousel';

const Home = () => {
    return (
        <div>
            <section>
                <BannerCarousel></BannerCarousel>
            </section>
            <section>
                <AboutiTravel></AboutiTravel>
            </section>
        </div>
    );
};

export default Home;