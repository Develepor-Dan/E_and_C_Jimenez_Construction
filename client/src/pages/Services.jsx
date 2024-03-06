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
                <li>Residential Construction</li>
                <li>Commercial Construction</li>
                <li>Remodeling and Renovation</li>
                <li>General Contracting</li>
                <li>Project Management</li>
                <li>Interior Design</li>
                <li>Custom Home Building</li>
                <li>Landscaping and Exterior Design</li>
                <li>Foundation Repair</li>
                <li>Roofing and Siding</li>
                <li>...and much more</li>
            </ul>
            <p>Contact us today to discuss your project needs!</p>
            </section>
            </div>
            {/* Add contact information or call-to-action button here */}
        </div>
    );
}

export default Services;