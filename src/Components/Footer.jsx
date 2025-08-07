import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">Kitabay</h2>
        <p className="footer-quote">There is no friend as loyal as a BOOK</p>
      </div>

      <div className="footer-midd">
        <div className="footer-col">
          <h3>Get to Know Us</h3>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/press">Press Releases</a>
        </div>

        <div className="footer-col">
          <h3>Connect With Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="footer-col">
          <h3>Let Us Help You</h3>
          <a href="/account">Your Account</a>
          <a href="/returns">Returns Centre</a>
          <a href="/help">Help</a>
        </div>
      </div>

      <div className="footer-sect">
        <p>© 2025 Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
