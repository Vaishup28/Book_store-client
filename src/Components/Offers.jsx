import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Bundle.css';

const Offers = () => {
  const [off, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/off")
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setOffers(response.data);
        } else {
          setOffers([]);
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
  <h2>Discounted Books</h2>
  <ul className="card-list">
    {off.map((book) => (
      <li key={book._id} className="css-coll">
        <img src={book.image} alt={book.name} />
        <strong>
          <a href={`/off/${book._id}`}>{book.name}</a>
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
