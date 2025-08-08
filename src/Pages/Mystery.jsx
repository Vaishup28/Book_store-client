import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../Styles/Mystery.css';

const Mystery = () => {
  const { _id } = useParams(); 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://book-server-093o.onrender.com";


  useEffect(() => {
    axios
      .get(`${BASE_URL}/Mys/${_id}`) 
      .then((response) => {
        const result = response.data;
        if (result) {
          setBooks([result]);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [_id,BASE_URL]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

return (
  <div className="mystery-container">
    {books.length > 0 ? (
      books.map((book) => (
        <div className="book-details" key={book._id}>
          <div className="book-image">
            <img src={book.image} alt={book.name} />
          </div>
          <div className="book-info">
            <h2>{book.name}</h2>
            <p>
              <span className="ori-price">Rs. 499</span>
              <span className="dis-price">Rs. 299</span>
            </p>
            <div className="stock-left">
              <p>Only 1 left in stock</p>
              <p>Binding: Paperback</p>
              <p>Condition: Gently Used</p>
            </div>
            <button className="cart-btn">Add to cart</button>
            <button className="buy-btn">Buy now</button>
          </div>
        </div>
      ))
    ) : (
      <p>No mystery books found.</p>
    )}
  </div>
 );

};

export default Mystery;
