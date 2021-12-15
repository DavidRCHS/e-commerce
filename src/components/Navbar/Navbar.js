import React from "react";
import "./navbar.css";
import "./navbarJs.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking,faTimes,faShoppingCart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
    <header className="header">

      <Link to="/" className="logo"><FontAwesomeIcon icon={faHiking} />.NeverStop</Link>

      <nav className="navbar">
          <div id="nav-close" ><FontAwesomeIcon icon={faTimes} /></div>
          <Link to="/">Home</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="icons">
          <div id="menu-btn" ><FontAwesomeIcon icon={faBars} /></div>
          <Link to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <div id="search-btn"><FontAwesomeIcon icon={faSearch} /></div>
      </div>

    </header>

    </>
  );
};

export default Navbar;