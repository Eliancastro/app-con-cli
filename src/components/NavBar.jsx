import React from "react";
import "./NavBar.css";
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
      <Link to="/">Home</Link>
      <Link to="/detalle">Detalle</Link>
      <Link to="/categoria/drama">Drama</Link>
        <li>Inicio</li>
        <li>Categoría B</li>
        <li>Categoría A</li>
        <li>Categoría C</li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;