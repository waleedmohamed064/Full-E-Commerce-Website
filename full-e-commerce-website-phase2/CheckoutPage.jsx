import CheckoutPage from "./CheckoutPage";
function App() {
  return <CheckoutPage />;
}
import "./style.css";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [alert, setAlert] = useState({ message: "", type: "" });

  
  const cartItems = [
    { name: "Fitness Tracker", price: 99.99 },
    { name: "Protein Powder", price: 49.99 },
  ];


  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  
  const validateForm = () => {
    return Object.values(billingDetails).every((v) => v.trim() !== "") && paymentMethod !== "";
  };

  
  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "fit10") {
      setDiscount(0.1);
      setTotal(subtotal * 0.9);
      setAlert({ message: "Coupon applied! You saved 10%.", type: "success" });
    } else {
      setDiscount(0);
      setTotal(subtotal);
      setAlert({ message: "Invalid coupon code.", type: "error" });
    }
  };

  
  const placeOrder = () => {
    if (!validateForm()) {
      setAlert({ message: "Please fill in all fields and select payment method.", type: "error" });
      return;
    }

    const order = {
      ...billingDetails,
      paymentMethod,
      total: discount > 0 ? subtotal * (1 - discount) : subtotal,
      date: new Date().toLocaleString(),
    };

    setAlert({ message: "Order placed successfully!", type: "success" });

  
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>

      
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      
      <div className="section">
        <h2>Billing Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={billingDetails.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={billingDetails.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={billingDetails.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={billingDetails.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={billingDetails.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={billingDetails.zip}
          onChange={handleChange}
        />
      </div>

      <div className="section">
        <h2>Payment Method</h2>
        <label>
          <input
            type="radio"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="PayPal"
            checked={paymentMethod === "PayPal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

    
      <div className="section">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>
              {item.name} — ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        {discount > 0 && <p>Discount: -{(discount * 100).toFixed(0)}%</p>}
        <p>Total: ${(discount > 0 ? subtotal * (1 - discount) : subtotal).toFixed(2)}</p>
      </div>

     
      <div className="section">
        <h2>Coupon</h2>
        <input
          type="text"
          placeholder="Enter coupon"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>

      <div className="section">
        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
