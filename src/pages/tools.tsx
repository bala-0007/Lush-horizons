import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Placeholder from "react-bootstrap/Placeholder";
import { toolsdata } from "../common/mockdata/tools.ts";
import "../styles/Tools.css";
import { useCart } from "../components/CartContext.tsx";

function Tools() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/product/tools/${id}`);
  };

 

  const { addToCart } = useCart();

  useEffect(() => {

    setTimeout(() => {
      setProducts(toolsdata);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-4">
      {products.map((item: any, index: number) => (
        <Card
          key={index}
          className="tool-card m-2"
          onMouseEnter={() => console.log(`Hovered over ${item.name}`)}
          style={{ width: "18rem", cursor: "pointer" }}
          onClick={() => handleCardClick(item.id)}
        >
          <div className="image-container">
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              className="card-image"
              style={{ width: "18rem", height: "500px" }}
            />
          </div>
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
                <Card.Text>Rs {item.price}</Card.Text>
                <Button
                  variant="primary"
                  className="add-to-cart-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: 1,
                      image:item.image,
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Tools;
