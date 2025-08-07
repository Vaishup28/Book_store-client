import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/Bundle.css';

const Offers = () => {
  const [off, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    axios.get(`${BASE_URL}/off`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setOffers(response.data);
        } else {
          setOffers([]);
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
    <div className="allbund">
      <h2>Discounted Books</h2>
      <ul className="card-list">
        {off.map((book) => (
          <li key={book._id} className="css-coll">
            <Link to={`/off/${book._id}`}>
              <img src={book.image} alt={book.name} />
            </Link>
            <strong>
              <Link to={`/off/${book._id}`}>{book.name}</Link>
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

export default Offers;
