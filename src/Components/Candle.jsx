import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Candle.css';

const Candle= () => {
  const [candleColl, setCandle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/candleColl")
      .then((response) => {
        console.log("API Response:", response.data);

        // Your API returns an array directly, so:
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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="allcandle">
    
      {Array.isArray(candleColl) && candleColl.length > 0 ? (
        candleColl.map((book) => (
         <li key={book._id} className="css-coll">
  <img src={book.image} alt={book.name} />
  <strong>
    <a href={`/candleColl/${book._id}`}>{book.name}</a>
  </strong>
  <p className="price">Rs. {book.price}</p>
      <span className="original">Rs. 799</span>
     
  
  <button className="add-to-cart">Add to cart</button>
  <div className="stars">★★★★☆</div> 
</li>

        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default Candle;
