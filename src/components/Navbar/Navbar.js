import React from "react";
import "./navbar.css";
import "./navbarJs.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking,faTimes,faShoppingCart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from "antd";


const Navbar = () => {
  return (
    <>
    <header className="header">

      <Link to="/" className="logo"><FontAwesomeIcon icon={faHiking} />.NeverStop</Link>

      <nav className="navbar">
          <div id="nav-close" onClick={() => {
          let navbar = document.querySelector('.header .navbar');
          navbar.classList.remove('active');}}><FontAwesomeIcon icon={faTimes} /></div>
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/login">Login</Link>
      </nav>

      <div className="icons">
          <div id="menu-btn" onClick={() => {
          let navbar = document.querySelector('.header .navbar');
          navbar.classList.add('active');}}><FontAwesomeIcon icon={faBars} /></div>
          <Link to="/VerCarrito"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <div id="search-btn" onClick={() => {
          let searchForm = document.querySelector('.search-form');  
          searchForm.classList.add('active');}}>   
          <FontAwesomeIcon icon={faSearch} /></div>
      </div>

      <div className="search-form">

    <div id="close-search" onClick={() => {
          let searchForm = document.querySelector('.search-form');  
          searchForm.classList.remove('active');}}>
            <FontAwesomeIcon icon={faTimes} /></div>
        
      <form action="/buscar" method="GET">
          <input
           type="search" 
           name="item"
           placeholder="Buscar aqui..." 
           id="search-box"/>
          <label for="i-busqueda"><FontAwesomeIcon icon={faSearch} /><input type='submit' id="i-busqueda" value=''/></label>
      </form>
    </div>

    </header>

    </>
  );
};

export default Navbar;

