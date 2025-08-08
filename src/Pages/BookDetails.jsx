import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Removed useNavigate (unused)
import axios from "axios";
import "../Styles/App.css";

const BookDetails = () => {
  const { _id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://book-server-093o.onrender.com";

  useEffect(() => {
    console.log("Fetching book with ID:", _id);
    axios
      .get(`${BASE_URL}/book/${_id}`)
      .then((response) => {
        setBook(response.data.book); 
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch book details.");
        setLoading(false);
      });
  }, [_id, BASE_URL]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="book-info">
      <h2>{book.name}</h2>
      <p><del>Rs. 399</del> <span className="price">Rs. {book.price}</span></p>
      <p>Only 1 left in stock</p>
      <p>Binding: Paperback</p>
      <p>Condition: Gently Used</p>
      {/* <button className="cart-btn" onClick={handleAddToCart}>Add to cart</button> */}
      <button className="buy-btn">Buy now</button>
    </div>
  );
};

export default BookDetails;
