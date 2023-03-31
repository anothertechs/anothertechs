import React,{useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from "../components/NavBar";
import Seo from "../components/seo";
import emailjs from 'emailjs-com';
import { Facebook, Instagram, Twitter, Github } from "react-bootstrap-icons";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, 
        process.env.REACT_APP_EMAILJS_PUB_KEY)
      .then(result => {
        alert('Your message has been sent successfully.');
        e.target.reset();
      }, error => {
        console.log(error.text);
        alert('Sorry, something went wrong. Please try again later.');
      });
  };
  return (
    <div>
        <Seo title='Contact Us'/>
           <NavBar />
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have a question about our products and services, want to report an issue, or just want to say hello, please feel free to reach out to us using the contact form below.</p>
          <p>Our team is always happy to assist you and will do our best to respond to your inquiry as soon as possible.</p>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange}  placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" onChange={handleChange}  placeholder="Enter the subject of your message" required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5}  onChange={handleChange}  placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={4}>
          <h4>Contact Information</h4>
          <hr />
          <p><strong>Address:</strong> 46/2 Lakkhad Pitha,Ratlam (M.P),India</p>
          <p><strong>Email:</strong> anothertechs@gmail.com</p>
          <hr />
          <p>Follow us on social media:</p>
          <a href="https://www.facebook.com/Another-Techs-102190855452182" className="btn btn-primary mr-2"><Facebook /></a>
          <a href="https://www.instagram.com/hatim_master/" className="btn btn-primary mr-2"><Instagram /></a>
          <a href="https://twitter.com/masterhatim1" className="btn btn-primary mr-2"><Twitter /></a>
          <a href="https://github.com/Master52" className="btn btn-primary mr-2"><Github /></a>
                  <style jsx>{`
            a.btn {
              margin-right: 10px;
            }
          `}</style>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default ContactUs;
