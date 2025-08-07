import React from "react";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import "../Styles/Cart.css";
import axios from "axios";

const CartData = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { user } = useAuth(); 
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;



  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const saveCartToDB = async () => {
    try {
      if (!user || !user._id) {
        alert("You must be logged in to save your cart.");
        return;
      }

      const payload = {
        userId: user._id,
        items: cartItems.map((item) => ({
          productId: item.id, 
          productType: item.productType,
          quantity: item.quantity,
        })),
      };

      console.log("Saving cart to DB with payload:", payload);

      const res = await axios.post(`${BASE_URL}/api/cart/save`, payload);
      console.log(res.data);
      alert("Cart saved successfully!");
    } catch (err) {
      console.error("Failed to save cart:", err);
      alert("Error saving cart. Check console for details.");
    }
  };

  if (cartItems.length === 0) {
    return <p className="cart-empty">Your cart is empty.</p>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={`${item.id}-${item.productType}`} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Rs. {item.price} x {item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total: Rs. {getTotal()}</h3>
        <button className="checkout-btn" onClick={saveCartToDB}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartData;
