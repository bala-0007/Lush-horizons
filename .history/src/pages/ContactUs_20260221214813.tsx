import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import image1 from '../assets/unplash image1.jpg';
import "../styles/ContactUs.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useInView } from "react-intersection-observer";


function ContactUs(){
    const { ref, inView } = useInView({
        threshold: 0.1, 
      });

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        setStatus('error');
        setErrorMessage('Please fill in all required fields (marked with *)');
        return;
      }

      setStatus('sending');

      try {
        // EmailJS configuration
        const templateParams = {
          from_firstname: formData.firstName,
          from_lastname: formData.lastName,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          to_name: 'Lush Horizons Team'
        };

        await emailjs.send(
          'service_6ecq5z4',      // Service ID
          'template_cwevm7m',     // Template ID
          templateParams,
          'D8si4QHJ_LjwxYI_j'     // Public Key
        );

        setStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);

      } catch (error) {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again later.');
      }
    };

    return(
        <div className="contact-page">
        <Container className="text-center">
          <h2 className="heading">Reach Out to Us</h2>
          <p className="subheading">
            Alternatively, you can reach us by filling out the contact form below.
          </p>

          {status === 'success' && (
            <Alert variant="success" className="mb-3">
              Thank you! Your message has been sent successfully. We'll get back to you soon!
            </Alert>
          )}

          {status === 'error' && (
            <Alert variant="danger" className="mb-3">
              {errorMessage}
            </Alert>
          )}

          <Form className="contact-form" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-input"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Message *"
                  rows={4}
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
            <Button 
              className="submit-btn mt-3" 
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </Button>
          </Form>
        </Container>
        <br></br>

        <div className="contact-us-section">
      <div className="contact-text-container" ref={ref}>
        <div className={`contact-text ${inView ? "slide-in" : ""}`}>
          <h2>Plant care questions? Order issues?</h2>
          <p>
            There are a few ways you can get in touch with us.
          </p>
          <br></br>
          <address>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <br></br>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <br></br>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Saturday: 8am - 10pm</p>
            <p>Sunday: 8am - 11pm</p>
          </address>
        </div>
      </div>
      <div className="background-image">
     
        <img
          src={image1}
          alt="Plant Store Background"
        />
      </div>
    </div>


      </div>
    )
}
export default ContactUs;
