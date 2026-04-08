import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import plantimage from '../assets/ourproducts-image/product-plant.jpg';
import plantseed from '../assets/ourproducts-image/product-seed.jpg';
import planttool from '../assets/ourproducts-image/product-tool.jpg';

function Productcard() {
  return (
    <CardGroup style={{ gap: "20px", padding: "50px", borderRadius: "10px" }}>

      <Card style={{ borderRadius: "10px" }} >
        <Card.Img variant="top" src={plantimage} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Plants</Card.Title>
          <Card.Text>
  Explore a wide variety of indoor and outdoor plants that bring freshness, beauty, and positive energy to your space.
</Card.Text>

        </Card.Body>
        <Card.Footer>
          <a href="/plants" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>


      <Card style={{ borderRadius: "10px" }}>
        <Card.Img variant="top" src={plantseed} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Seeds</Card.Title>
         <Card.Text>
  High-quality seeds for vegetables, fruits, and flowers to help you grow a healthy and thriving garden.
</Card.Text>

        </Card.Body>
        <Card.Footer>
          <a href="/seeds" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>

      <Card style={{ borderRadius: "10px" }}>
        <Card.Img variant="top" src={planttool} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Tools</Card.Title>
         <Card.Text>
  Durable and reliable gardening tools designed to make planting, pruning, and maintenance easier and more efficient.
</Card.Text>

        </Card.Body>
        <Card.Footer>
          <a href="/tools" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Productcard;