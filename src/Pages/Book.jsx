import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Book.css';



const Book = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/book")
      .then((response) => {
        console.log("API Response:", response.data); 
        if (Array.isArray(response.data)) {
          setBook(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setBook([]); 
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
    <div className="allbook">
      <h2>Books</h2>
           {Array.isArray(book) && book.length > 0 ? (
             book.map((book) => (
               <li key={book._id} className="css-id">
                <strong>
                <a href={`/book/${book._id}`}>{book.book}</a>
                </strong> - {book.city}
              <p>
                See more books
              </p>
              </li>
              ))
        ) : (
          <p>No books available.</p>
        )}
      
      </div>

      
  );
};

export default Book;

