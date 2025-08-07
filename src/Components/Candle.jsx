import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // <-- Import Link
import '../Styles/Candle.css';

const Candle = () => {
  const [candleColl, setCandle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    axios.get(`${BASE_URL}/candleColl`)
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setCandle(response.data);
        } else {
          setCandle([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [BASE_URL]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="allcandle">
      {Array.isArray(candleColl) && candleColl.length > 0 ? (
        candleColl.map((candle) => (
          <li key={candle._id} className="css-coll">
            <Link to={`/candleColl/${candle._id}`}>
              <img src={candle.image} alt={candle.name} />
            </Link>
            <strong>
              <Link to={`/candleColl/${candle._id}`}>{candle.name}</Link>
            </strong>
            <p className="price">Rs. {candle.price}</p>
            <span className="original">Rs. 799</span>
            <button className="add-to-cart">Add to cart</button>
            <div className="stars">★★★★☆</div> 
          </li>
        ))
      ) : (
        <p>No candles available.</p>
      )}
    </div>
  );
};

export default Candle;
