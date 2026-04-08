import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext.tsx";
import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = getTotal();
  const shipping: number = 0;
  const total = subtotal + shipping;

  const orderId = useMemo(() => {
    return `LH-${Math.floor(100000 + Math.random() * 900000)}`;
  }, []);

  const validateForm = () => {
    if (!fullName || !email || !phone || !address || !city || !pincode) {
      alert("Please fill all checkout details.");
      return false;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (pincode.length < 5) {
      alert("Please enter a valid pincode.");
      return false;
    }

    return true;
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    if (!validateForm()) return;

    setPlacingOrder(true);
    setTimeout(() => {
      setPlacingOrder(false);
      setOrderPlaced(true);
      clearCart();
    }, 1000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-success-card">
          <h2>Order Confirmed</h2>
          <p>Your order has been placed successfully.</p>
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>
          <button className="checkout-primary-button" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-content">
        <div className="checkout-form-card">
          <h2>Checkout</h2>
          <p className="checkout-subtitle">Step 1: Shipping Details</p>

          <div className="checkout-grid">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="checkout-address-input"
            />
          </div>

          <p className="checkout-subtitle">Step 2: Payment Method</p>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Card</option>
          </select>

          <button
            className="checkout-primary-button"
            onClick={placeOrder}
            disabled={placingOrder || cart.length === 0}
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        <div className="checkout-summary-card">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty. Add products to continue.</p>
          ) : (
            cart.map((item) => (
              <div className="checkout-summary-item" key={item.id}>
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>Rs {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          )}

          <div className="checkout-total-row">
            <span>Subtotal</span>
            <span>RS {subtotal.toFixed(2)}</span>
          </div>
          <div className="checkout-total-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `RS ${shipping.toFixed(2)}`}</span>
          </div>
          <div className="checkout-grand-total">
            <span>Total</span>
            <span>RS {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
