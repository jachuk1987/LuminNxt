import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./responsive-HeaderFooter.css";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer">
      <button className="quote-btn">REQUEST A QUOTE</button>
      <div className="footer-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
        <Link to="/location" className={location.pathname === "/location" ? "active" : ""}>Location</Link>
        <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Catering</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;