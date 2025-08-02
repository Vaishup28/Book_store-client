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

  useEffect(() => {
     console.log("Fetching book with ID:", _id);
    axios
    
      .get(`http://localhost:8080/book/${_id}`)
      
      .then((response) => {
        setBook(response.data.book); 
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch book details.");
        setLoading(false);
      });
  }, [_id]);

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
    <div className="book-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
      <h1 className="book-title">{book.book}</h1>
      <img src={book.image || "/default-book.jpg"} alt={book.book} className="book-detail-image" />
      <p className="book-city">📍 Location: {book.city}</p>
      <p className="book-description">A digital platform where customers can browse, search, and purchase books (physical or digital) over the internet.</p>
      <p className="average-rating">⭐ {averageRating} / 5</p>
      
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {book.reviews?.length > 0 ? (
          book.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      
      <div className="add-review-section">
        <h2>Add a Review</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
            required
          />
          <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>{rating} Stars</option>
            ))}
          </select>
          <textarea
            placeholder="Write a review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default BookDetails;

