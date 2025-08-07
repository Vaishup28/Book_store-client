import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/HinDetails.css"; 
import { useCart } from "../Context/CartContext";

const HinDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/coll/${_id}`)
      .then((res) => {

        setBook(res.data);
        setLoading(false);
      }) 
      .catch(() => {
        setBook(null);
        setLoading(false);
      });
  }, [_id, BASE_URL]);

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
    alert("Book added to cart!");
  };
  return (
    <div className="book-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="book-details">
        <div className="book-image">
          <img src={book.image} alt={book.title || "Book Cover"} />
        </div>
        <div className="book-info">
          <h2>{book.name}</h2>
          <p><del>Rs. 499</del> <span className="price">Rs. 299</span></p>
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

export default HinDetails;
