import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function Cookies() {
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const acceptCookies = () => {
    setAccepted(true);
    setShow(false);
    
    localStorage.setItem("cookiesAccepted", "true");
  };

  return (
    <div>
     
      {!accepted && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cookies Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>We use cookies to improve your experience</h5>
            <p>
              Our website uses cookies to enhance your browsing experience. By
              continuing to use this site, you agree to our use of cookies.
              Please review our cookie policy for more information.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Reject
            </Button>
            <Button variant="primary" onClick={acceptCookies}>
              Accept Cookies
            </Button>
          </Modal.Footer>
        </Modal>
      )}

     
      <Container className="my-5">
        <h2>Cookies Page</h2>
        <p>
          This is the Cookies page where we explain our use of cookies in
          detail. Below are the details of the cookies used in our website:
        </p>
        <ul>
          <li>Essential cookies: These cookies are necessary for the website to function.</li>
          <li>Performance cookies: These cookies help us understand how visitors interact with our website.</li>
          <li>Functionality cookies: These cookies help the website remember choices you make (e.g., language or region).</li>
        </ul>

        <p>
          For more details on how we use cookies, please refer to our full
          <strong> cookie policy</strong>.
        </p>

        <Button variant="info" onClick={handleShow}>
          Read Cookie Policy
        </Button>
      </Container>
    </div>
  );
}

export default Cookies;
