import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../Styles/Mystery.css';

const Mystery = () => {
  const { id } = useParams(); 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://book-server-093o.onrender.com";


  useEffect(() => {
    axios
      .get(`${BASE_URL}/Mys/${id}`) 
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
  }, [id,BASE_URL]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mystery-container">
      {books.length > 0 ? (
        <ul className="book-list">
          {books.map((book) => (
            <li className="book-item" key={book.id}>
              <img src={book.image} alt={book.name} />
              <strong>{book.name}</strong>
              <p>
                <span className="ori-price">Rs. 499</span>
                <span className="dis-price">Rs. 299</span>
              </p>
              <span className="stock-left">
                <p>Only 1 left in stock</p>
                <p>Binding: Paperback</p>
                <p>Condition: Gently Used</p>
              </span>
              <span className="add-cart">Add to cart</span>
              <button className="buy">Buy now</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No mystery books found.</p>
      )}
    </div>
  );
};

export default Mystery;
