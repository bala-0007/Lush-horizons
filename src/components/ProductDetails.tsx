import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { plantsdata } from "../common/mockdata/plants.ts";
import { toolsdata } from "../common/mockdata/tools.ts";
import { seedsdata } from "../common/mockdata/seeds.ts";

function ProductDetails() {
  const { category, id } = useParams(); 

  
  let dataSource;
  if (category === "plants") dataSource = plantsdata;
  else if (category === "tools") dataSource = toolsdata;
  else if (category === "seeds") dataSource = seedsdata;

  const product = dataSource?.find((item) => item.id === parseInt(id)); // Find product by ID

  if (!product) {
    return <h1>Product not found</h1>;
  }
else{
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
    
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={product.image} alt="Product Image" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                <strong>Description:</strong> {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong>{" "}
                <span style={{ color: "#007BFF" }}>₹{product.price}</span>
              </Card.Text>
              <Card.Text>
                <strong>Discount:</strong>{" "}
                <span style={{ color: "#d9534f" }}>{product.discount}</span>
              </Card.Text>
              <Card.Text>
                <strong>Reviews:</strong>
              </Card.Text>
              <ListGroup variant="flush">
                {product.reviews.map((review, index) => (
                  <ListGroup.Item key={index}>{review}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );}
}

export default ProductDetails;
