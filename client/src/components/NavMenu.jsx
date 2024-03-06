//Nav.jsx
import React from "react";
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
    return (
        <Nav className="d-flex justify-content-end " activeKey="/">
        <Nav.Item>
            <Nav.Link href="/#services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about-us">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav.Item>
        </Nav>
    );
}

export default NavMenu;