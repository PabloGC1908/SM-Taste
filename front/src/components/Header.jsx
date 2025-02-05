import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Header = () => (
  <header>
    <Link to="/" className="logo">
      <img src="/images/Restaurant On Site 05.png" alt="Logo" />SM TASTE
    </Link>
    <nav className="navbar">
      <Link to="/home">Inicio</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/menu">Menú</Link>
    </nav>
    <div className="icons">
      <i className="fas fa-bars" id="menu-bars"></i>
      <i className="fas fa-search" id="search-icon"></i>
      <Link to="/cart" className="fas fa-shopping-cart"></Link>
      <Link to="/login" className="fas fa-user"></Link>
    </div>
  </header>
);

export default Header;
