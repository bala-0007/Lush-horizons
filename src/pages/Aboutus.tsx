import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from '../assets/unplash image3.jpg';
import "../styles/AboutUs.css";

function AboutUs() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
     
      <Container>
      
        <div className="position-relative my-5">
          <Image
            src={image1}
            alt="About Us"
            className="w-100"
            style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}

          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Welcome to Lush Horizons</h2>
            <p>Your one-stop destination for all your gardening needs.</p>
          </div>
        </div>


        
        <Row
          className={`align-items-center my-5 ${scrollPosition > 100 ? "image-move" : ""
            }`}
        >
          <Col md={6}>
            <Image
              className="left-image"
              src={image1}
              alt="Gardening Tools"
              fluid
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              At Lush Horizons, we are passionate about helping gardening
              enthusiasts like you grow thriving gardens. From high-quality
              seeds and plants to top-notch tools, we provide everything you
              need for your gardening journey.</p>

            <p> At Lush Horizons, our mission is to ignite a passion for gardening in every individual,
               from budding enthusiasts to seasoned experts.  </p>
               <p> We aim to make gardening accessible, enjoyable, and fulfilling by providing everything you need to nurture a vibrant green space.
                 From premium-quality seeds and thriving plants to durable tools and eco-friendly gardening solutions, we are dedicated to empowering you on your gardening journey.</p>

            <p>Our commitment extends beyond just products—we’re here to inspire a deeper connection with nature and foster sustainable practices that benefit both our customers and the planet.
               By choosing Lush Horizons, you’re not just growing a garden; you’re cultivating a lifestyle that promotes well-being, creativity, and a greener future. 
               Together, let’s create a world where every home is enriched by the beauty and serenity of nature.</p>

          </Col>
        </Row>

        <Container className="my-5">
        
          <Row
            className={`align-items-center my-5 ${scrollPosition > 100 ? "image-move" : ""
              }`}
          >
            <Col md={6}>
              <h3>This Is Us</h3>
              <p>
                <p> Welcome to Lush Horizons, your trusted partner in building lush, vibrant gardens that transform homes and communities. Our journey began with a simple yet powerful vision: to bring the joy of gardening to every household. Whether you’re a seasoned green thumb or a curious beginner, we’re here to make your gardening experience as fulfilling and rewarding as possible.</p>

                <p>At Lush Horizons, we pride ourselves on offering a carefully curated selection of the highest quality plants, seeds, and gardening tools to suit all your needs. From indoor plants that purify your air to exotic blooms that elevate the aesthetics of your garden, we ensure every product in our collection meets rigorous quality standards. We understand that gardening is not just a hobby but a way to connect with nature, create something beautiful, and even grow your own organic produce.</p>

                <p> Our team is passionate about making gardening accessible to everyone. We strive to inspire and empower our customers to create their green spaces, whether it’s a small balcony, a backyard, or a sprawling community garden. With detailed guidance, expert tips, and premium-quality products, we ensure you have everything you need to turn your vision into reality.</p>

                <p> Lush Horizons is more than a store—it’s a community of plant enthusiasts, nature lovers, and sustainability advocates who share a deep-rooted passion for greenery. Let us help you create your green oasis, where every plant tells a story of care, growth, and endless possibilities.</p>
              </p>
            </Col>
            <Col md={6}>
              <Image
                src={image1}
                alt="Team"
                fluid
                className="right-image"
                style={{ borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default AboutUs;
