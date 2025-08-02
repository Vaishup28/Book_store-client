import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useAuth } from "../Context/AuthContext"; 

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth(); 

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Kitabay</Link>
      </div>

      <div className="opt">
        <Link to="/" className="opt-1">Home</Link>
        <Link to="/book" className="opt-2">Books</Link>
        <Link to="/save" className="nav-cart">Cart</Link>
      </div>

      <div className="search-box">
        <input type="text" placeholder="🔍 Search for books..." />
      </div>

      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <span className="username">👤 {user?.User}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/signup" className="nav-button signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
