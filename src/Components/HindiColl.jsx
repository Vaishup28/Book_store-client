import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link
import '../Styles/Hindi-coll.css';

const HindiColl = () => {
  const [coll, setHindiColl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    axios.get(`${BASE_URL}/coll`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setHindiColl(response.data);
        } else {
          setHindiColl([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [BASE_URL]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="allcoll">
      <h2>Hindi Book Collection</h2>
      <ul className="card-list">
        {coll.map((book) => (
          <li key={book._id} className="css-coll">
            <Link to={`/coll/${book._id}`}>
              <img src={book.image} alt={book.name} />
            </Link>
            <strong>
              <Link to={`/coll/${book._id}`}>{book.name}</Link>
            </strong>
            <p className="price">Rs. {book.price}</p>
            <span className="original">Rs. 399</span>
            <button className="add-to-cart">Add to cart</button>
            <div className="stars">★★★★☆</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HindiColl;
