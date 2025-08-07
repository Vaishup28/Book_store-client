import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/Bundle.css';

const Kids = () => {
  const [kidsColl, setKids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    axios.get(`${BASE_URL}/kidsColl`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setKids(response.data);
        } else {
          setKids([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="allbund">
      <h2>Kids Book Collection</h2>
      <ul className="card-list">
        {kidsColl.map((book) => (
          <li key={book._id} className="css-coll">
            <Link to={`/kidsColl/${book._id}`}>
              <img src={book.image} alt={book.name} />
            </Link>
            <strong>
              <Link to={`/kidsColl/${book._id}`}>{book.name}</Link>
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

export default Kids;
