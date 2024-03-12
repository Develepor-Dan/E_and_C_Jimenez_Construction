import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to E&C Jimenez Construction, your premier choice for construction services. We are committed to
            providing high-quality construction solutions to meet your needs.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver exceptional construction services with integrity, professionalism, and
            reliability. We strive to exceed our clients' expectations by delivering projects on time, within budget,
            and to the highest standards of quality.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Team</h2>
          <p>
            At E&C Jimenez Construction, we have a team of experienced and skilled professionals dedicated to delivering
            outstanding results. From project managers to craftsmen, every member of our team is committed to excellence
            and client satisfaction.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Values</h2>
          <ul>
            <li>Quality: We prioritize quality in every aspect of our work.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and fairness.</li>
            <li>Professionalism: We approach every project with professionalism and dedication.</li>
            <li>Customer Focus: We are committed to understanding and meeting our clients' needs.</li>
            <li>Innovation: We embrace innovation and continuously seek improvement in our processes and services.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Why Choose Us</h2>
          <Card>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                With years of experience in the construction industry, we have the expertise to handle projects of any
                size and complexity.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Quality</Card.Title>
              <Card.Text>
                We are committed to delivering the highest quality workmanship and materials to ensure the success of
                every project.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Customer Satisfaction</Card.Title>
              <Card.Text>
                Customer satisfaction is our top priority. We work closely with our clients to understand their needs
                and deliver results that exceed their expectations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
