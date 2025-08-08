import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/HinDetails.css"; 
import { useCart } from "../Context/CartContext";

const MonsoonDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const BASE_URL = "https://book-server-093o.onrender.com";

  
  useEffect(() => {
    axios.get(`${BASE_URL}/monColl/${_id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(() => {
        setBook(null);
        setLoading(false);
      });
  }, [_id,BASE_URL]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: book._id || book._id,
      name: book.name,
      price: parseFloat(book.price),
      image: book.image,
    };
  
    addToCart(itemToAdd);
    setShowAlert("Book added to cart!");
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
    <div className="book-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
       {showAlert && <div className="custom-alert">Book added to cart!</div>}
      <div className="book-details">
        <div className="book-image">
          <img src={book.image} alt={book.name || "Book Cover"} />
        </div>
        <div className="book-info">
          <h2>{book.name}</h2>
          <p><del>Rs. 399</del> <span className="price">Rs. {book.price}</span></p>
          <p>Only 1 left in stock</p>
          <p>Binding: Paperback</p>
          <p>Condition: Gently Used</p>
          <button className="cart-btn" onClick={handleAddToCart}>Add to cart</button>
          <button className="buy-btn">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default MonsoonDetails;
