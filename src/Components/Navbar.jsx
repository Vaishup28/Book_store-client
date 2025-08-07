import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();

  return (
    <nav className="navbar">
  
      <div className="nav-left">
        <Link to="/" className="logo">Kitabay</Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/book" className="nav-link">Books</Link>
          <Link to="/candleColl" className="nav-link">Merchandise</Link>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search for books..." />
        
      </div>

      <div className="nav-right">
        {isLoggedIn ? (
          <>
           <Link to="/save" className="nav-cart">
             <i className="fas fa-shopping-cart"></i>
            </Link>
            <button className="logout-btn" onClick={logout}>Logout</button>
            <i className="fa-regular fa-circle-user"></i>
          </>
        ) : (
          <>
          
            <Link to="/save" className="nav-cart">
             <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/signup" className="nav-button signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
