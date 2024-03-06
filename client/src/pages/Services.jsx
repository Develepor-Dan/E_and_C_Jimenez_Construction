// Services.jsx
import React from 'react';
import { useRouteError } from "react-router-dom";
import Hero from '../components/Hero'


const Services = () => {
    return (
        <div>
            <Hero />
            <div>
            <section id="services">
            <h1>Our Services</h1>
            <p>We offer a wide range of construction services to meet your needs:</p>
            <ul>
                <li>Resedential Framing</li>
                <li>Remodeling and Renovation</li>
                <li>Flooring</li>
                <li>Exterior Door and Window Installation</li>
                <li>Siding</li>
                <li>Porch / Deck</li>
            </ul>
            <p>Contact us today to discuss your project needs!</p>
            </section>
            </div>
            {/* Add contact information or call-to-action button here */}
        </div>
    );
}

export default Services;