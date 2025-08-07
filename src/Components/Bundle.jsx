import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import '../Styles/Bundle.css';

const Bundle = () => {
  const [bundleColl, setBundle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/bundleColl")
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setBundle(response.data);
        } else {
          setBundle([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="allbund">
      <h2>Book Bundles</h2>
      <ul className="card-list">
        {bundleColl.length > 0 ? (
          bundleColl.map((book) => (
            <li key={book._id} className="css-coll">
              <Link to={`/bundleColl/${book._id}`}>
                <img src={book.image} alt={book.name} />
              </Link>

              <strong>
                <Link to={`/bundleColl/${book._id}`}>{book.name}</Link>
              </strong>

              <p className="price">Rs. {book.price}</p>
              <span className="original">Rs. 1999</span>
              <button className="add-to-cart">Add to cart</button>
              <div className="stars">★★★★☆</div>
            </li>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </ul>
    </div>
  );
};

export default Bundle;
