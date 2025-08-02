import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Results() {
 const { city, booktype } = useParams();


  console.log("city, booktype -->>>", city, booktype);

  const [books, setBooks] = useState([]);      
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "";

        if (city) {
          url = `http://localhost:8080/cityResponse/${city}`;
        } else if (booktype) {
          url = `http://localhost:8080/bookType/${booktype}`;
        } else {
          setBooks([]);
          setLoading(false);
          return;
        }

        const response = await axios.get(url);
        console.log("Response data:", response.data);
        setBooks(response.data.bookList || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [city, booktype]);

  return (
    <div>
      <h1>Books in {city || booktype || "Our Collection"}</h1>

      {loading && <p>Loading books...</p>}
      {error && <p className="error">{error}</p>}

      <div className="book-list">
        {!loading && !error && books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="book-card">
              <Link to={`/book/${book._id}`} className="book-link">
                <img
                  src={book.image || "/default-book.jpg"}
                  alt={book.book}
                  className="book-image"
                />
                <div className="book-details">
                  <h2>{book.book}</h2>
                  <p>📍 {book.city}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          !loading && !error && <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
