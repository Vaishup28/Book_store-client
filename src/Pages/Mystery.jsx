import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/Mystery.css';
import { useCart } from "../Context/CartContext";

const Mystery = () => {
  const { _id } = useParams();  
  const [book, setBook] = useState(null);
   const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const BASE_URL = "https://book-server-093o.onrender.com";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/Mys/${_id}`)
      .then((response) => {
        console.log("Fetched book data:", response.data);
        setBook(response.data.Mys);  
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book:", err);
        setError("Failed to fetch book");
        setLoading(false);
      });
  }, [_id, BASE_URL]);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: book._id,
      name: book.name,
      price: parseFloat(book.price),
      image: book.image,
    };
    addToCart(itemToAdd);
    setShowAlert("Book added to cart!");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>No book found.</p>;

  return (
    <div className="mystery-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
       {showAlert && <div className="custom-alert">Book added to cart!</div>}
      <div className="book-details">
        <div className="book-image">
          <img src={book.image} alt={book.name} />
        </div>
        <div className="book-info">
          <h2>{book.name}</h2>
          <p>
            <span className="ori-price">Rs. 499</span>
            <span className="dis-price">Rs. {book.price}</span>
          </p>
          <div className="stock-left">
            <p>Only 1 left in stock</p>
            <p>Binding: Paperback</p>
            <p>Condition: Gently Used</p>
          </div>
          <button className="cart-btn" onClick={handleAddToCart}>Add to cart</button>
          <button className="buy-btn">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Mystery;
