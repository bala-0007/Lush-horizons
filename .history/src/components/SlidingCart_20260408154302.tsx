import React from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/SlidingCart.css";
import { useCart } from "./CartContext.tsx";
import { useNavigate } from "react-router-dom";

interface SlidingCartProps {
  show: boolean;
  onClose: () => void;
}

const SlidingCart: React.FC<SlidingCartProps> = ({ show, onClose }) => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    onClose();
    navigate("/checkout");
  };

  return (
    <div className={`sliding-cart ${show ? "show" : ""}`}>
      <div className="cart-header">
        <h4>Your Cart</h4>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <p className="free-shipping">You've unlocked Free Shipping ✅</p>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">Rs {item.price}</p>
                <div className="cart-buttons">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <h5>Subtotal: Rs {getTotal().toFixed(2)}</h5>
        <button
          className="checkout-button"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default SlidingCart;
