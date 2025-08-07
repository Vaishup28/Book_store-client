import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/Monsoon.css';

const Monsoon = () => {
  const [monColl, setMonsoon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    axios.get(`${BASE_URL}/monColl`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMonsoon(response.data);
        } else {
          setMonsoon([]);
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
    <div className="allcandle">
      {monColl.map((book) => (
        <li key={book._id} className="css-coll">
          <Link to={`/monColl/${book._id}`}>
            <img src={book.image} alt={book.name} />
          </Link>
          <strong>
            <Link to={`/monColl/${book._id}`}>{book.name}</Link>
          </strong>
          <p className="price">Rs. {book.price}</p>
          <span className="original">Rs. 799</span>
          <button className="add-to-cart">Add to cart</button>
          <div className="stars">★★★★☆</div>
        </li>
      ))}
    </div>
  );
};

export default Monsoon;
