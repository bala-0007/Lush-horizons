import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";


function PrivacyPolicy() {
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const acceptPrivacyPolicy = () => {
    setAccepted(true);
    setShow(false);
   
    localStorage.setItem("privacyPolicyAccepted", "true");
  };

  return (
    <div>
      
     
      {!accepted && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Your Privacy Matters to Us</h5>
            <p>
              We are committed to protecting your personal information. This
              privacy policy explains how we collect, use, and protect your data
              when you use our website.
            </p>
            <ul>
              <li>
                We collect personal information such as name, email, and IP
                address.
              </li>
              <li>
                Your data will not be shared with third parties without your
                consent.
              </li>
              <li>
                We use cookies and other technologies to improve your experience
                on our site.
              </li>
            </ul>
            <p>
              By using this site, you consent to the terms outlined in this
              Privacy Policy. Please review the full policy for more details.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Reject
            </Button>
            <Button variant="primary" onClick={acceptPrivacyPolicy}>
              Accept Privacy Policy
            </Button>
          </Modal.Footer>
        </Modal>
      )}

     
      <Container className="my-5">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy outlines how we handle your personal data. We
          are committed to safeguarding your information.
        </p>
        <p>
          <strong>Collection of Personal Data</strong>
        </p>
        <p>
          We collect the following types of personal data:
          <ul>
            <li>Name, email, and contact details</li>
            <li>Information about your usage of our services</li>
            <li>IP address and device details</li>
          </ul>
        </p>

        <p>
          <strong>Use of Data</strong>
        </p>
        <p>
          We use your data for the following purposes:
          <ul>
            <li>Providing our services to you</li>
            <li>Improving user experience</li>
            <li>Communicating important information</li>
          </ul>
        </p>

        <p>
          <strong>Third-Party Sharing</strong>
        </p>
        <p>
          We do not share your personal information with third parties without
          your consent, except where required by law.
        </p>

        <p>
          <strong>Security</strong>
        </p>
        <p>
          We take the security of your data seriously and use encryption and
          other measures to protect it.
        </p>

        <p>
          By using our website, you agree to the terms of this Privacy Policy.
          For more information, please contact us.
        </p>

        <Button variant="info" onClick={handleShow}>
          Read Privacy Policy
        </Button>
      </Container>
     
    </div>
  );
}

export default PrivacyPolicy;
