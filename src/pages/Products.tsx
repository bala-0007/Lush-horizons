import React, { useEffect, useState } from "react";
import { allproducts } from "../common/mockdata/allproductsdata.ts";
import { Card } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";

function AllProducts() {
  const [loading, setLoading] = useState(true); // Default to loading
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    
    setTimeout(() => {
      setProducts((allproducts));
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-4">
      {products.map((item: any, index: number) => (
        <Card key={index} style={{ width: "18rem" }} className="m-2">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            {loading ? (
              <>
                <Placeholder as="h5" animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </>
            ) : (
              <>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <button className="btn btn-primary">Buy Now</button>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllProducts;
