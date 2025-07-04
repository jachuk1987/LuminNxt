import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../asset/logo.png";
import "./HeaderFooter.css";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="top-bar">
        +1 940-629-5571 &nbsp; | &nbsp; Facebook &nbsp; | &nbsp; Instagram
      </div>
      <div className="header">
        <img className="logo" src={logo} alt="Babai Bandi Logo" />
        <div className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
          <Link to="/location" className={location.pathname === "/location" ? "active" : ""}>Location</Link>
          <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Catering</Link>
        </div>
      </div>
    </>
  );
};

export default Header;