import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/App.css";

const BookDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
  }, [_id,BASE_URL]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.username && newReview.comment) {
      const updatedReviews = [...(book.reviews || []), newReview];
      setBook({ ...book, reviews: updatedReviews });
      setNewReview({ username: "", rating: 5, comment: "" });
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const averageRating = book.reviews?.length
    ? (book.reviews.reduce((sum, review) => sum + review.rating, 0) /book.reviews.length).toFixed(1)
    : "No Ratings Yet";

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

