// Services.jsx
import React from 'react';
import { useRouteError } from "react-router-dom";
import Hero from '../components/hero'


const Services = () => {
    return (
        <div>
            <Hero/>
            <div>
            <section id="services">
            <h1>Our Services</h1>
            <p>We offer a wide range of construction services to meet your needs:</p>
                <div>Resedential Framing</div>
                <div>Remodeling and Renovation</div>
                <div>Flooring</div>
                <div>Exterior Door and Window Installation</div>
                <div>Siding</div>
                <div>Porch / Deck</div>
            <p>Contact us today to discuss your project needs!</p>
            </section>
            </div>
            {/* Add contact information or call-to-action button here */}
        </div>
    );
}

export default Services;