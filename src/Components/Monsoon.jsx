import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Monsoon.css';

const Monsoon= () => {
  const [monColl, setMonsoon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/monColl")
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setMonsoon(response.data);
        } else {
          setMonsoon([]);
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
    
      {Array.isArray(monColl) && monColl.length > 0 ? (
        monColl.map((book) => (
         <li key={book._id} className="css-coll">
  <img src={book.image} alt={book.name} />
  <strong>
    <a href={`/monColl/${book._id}`}>{book.name}</a>
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

export default Monsoon;

