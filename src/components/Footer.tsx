import '../styles/Footer.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/Logo for lush horizons.jpg';



function Footer() {
  return (
    
    <footer className="footer text-center text-lg-start bg-light text-muted">
      <div className="container py-4">
        <div className="row align-items-center">
         
          <div className="col-md-4 text-center text-md-start">
          <a href="/" className="text-muted me-3">
             
           <img
              src={logo}
              alt="Website Logo"
              style={{ width: '100px', borderRadius:'50px' }}
            />  </a>
            <p className="mt-2">123 Garden Street, Green City, Earth</p>
          </div>

        
          <div className="col-md-4 text-center">
            <a href="/aboutus" className="text-muted me-3">
              About
            </a>
            <a href="/contactus" className="text-muted me-3">
              Contact
            </a>
            <a href="/cookies" className="text-muted me-3">
              Cookies
            </a>
            <a href="/privacy-policy" className="text-muted me-3">
              Privacy Policy
            </a>
            <a href="/blog" className="text-muted ">
             Blog
            </a>
          </div>

        
          <div className="col-md-4 text-center text-md-end">
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted me-3"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://threads.net/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted me-3"
            >
              <i className="bi bi-chat"></i>
            </a>
            <a
              href="https://youtube.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted me-3"
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">
          &copy; 2026 Lush Horizons. All Rights Reserved.
        </p>
      </div>
      

    
    </footer>
  );
}

export default Footer;
