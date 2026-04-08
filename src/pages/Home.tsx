import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from "../components/ProductCard.tsx";


import { Container, Row, Col } from "react-bootstrap";
import { FaLeaf, FaSeedling, FaTree } from "react-icons/fa";

import '../styles/Home.css'

import image1 from '../assets/carouselimages/image3.jpg';
import image2 from '../assets/carouselimages/image2.jpg';
import image3 from '../assets/carouselimages/image1.jpg';

function Home() {

  return (
    <div className="home-container">

     
      <Carousel>
        <Carousel.Item style={{ height: "90vh" }}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Lush Horizons</h3>
            <p>Your One-Stop Gardening Destination</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "90vh" }}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Plants, Tools, and Seeds</h3>
            <p>Everything You Need to Build Your Green Oasis</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "90vh" }}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ objectFit: 'cover' }}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Join the Gardening Community</h3>
            <p>Grow with Us for a Greener Tomorrow</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* {home.home.loading?(<Spinner animation="border" variant="primary"/>):("")} */}

      {/* <button onClick={()=>{dispatch(homeSlice.actions.stopLoading());}}>Hello</button> */}

      <br />
      <section style={{padding:'10px',backgroundColor:'#435648'}}>

      {/* About Section */}
      <section className="about-section" >
        <h2>About <span className="highlight" style={{color:'#c0dbcc'}}>Lush Horizons</span></h2>
        <p>
          At <b>Lush Horizons</b>, we’re passionate about bringing the joys of gardening to every home. 
          Whether you're a seasoned gardener or just starting, we provide everything you need to cultivate 
          a lush, vibrant garden.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our <span className="highlight">Story</span></h2>
        <p>
          It all began in 2025 with a single seed of an idea—creating a space where gardening enthusiasts 
          could find not just products, but inspiration. From a small family-owned store to a thriving online 
          marketplace, Lush Horizons has grown into a trusted name for garden plants, tools, and seeds.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What <span className="highlight">We Offer</span></h2>
        <ul className="offer-list">
          <li><b>Plants:</b> A wide selection of indoor and outdoor plants, from vibrant flowering plants to air-purifying greens.</li>
          <li><b>Seeds:</b> High-quality seeds for flowers, vegetables, and herbs.</li>
          <li><b>Tools:</b> Durable and ergonomic gardening tools for beginners and experts alike.</li>
          <li><b>Accessories:</b> Pots, planters, fertilizers, and more to nurture your plants.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why <span className="highlight">Choose Us?</span></h2>
        <p>
          <b>Sustainability at Heart:</b> We’re committed to eco-friendly practices, offering biodegradable packaging and organic gardening solutions.
        </p>
        <p>
          <b>Quality Assurance:</b> Our plants and seeds are handpicked to ensure health and vitality.
        </p>
        <p>
          <b>Expert Guidance:</b> Our blog, <i>Garden Gurus</i>, is packed with tips, tutorials, and seasonal advice.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join the <span className="highlight">Community</span></h2>
        <p>Follow us on social media for daily inspiration, special offers, and success stories from fellow gardeners.</p>
      </section>
      </section>

      <footer className="bg-light text-center py-4" >
      <Container >
        <Row className="justify-content-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="my-2">
              <div className="text-success">
                {index % 3 === 0 && <FaLeaf size={24} />}
                {index % 3 === 1 && <FaSeedling size={24} />}
                {index % 3 === 2 && <FaTree size={24} />}
              </div>
             
              <div className="fw-bold text-muted " style={{color:'#ffffff'}}>Plants Grow People</div>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
      <ProductCard />

    </div>
  );
}

export default Home;
