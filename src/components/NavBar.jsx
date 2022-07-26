import React from "react";
import "./NavBar.css";
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      
      <div className="icon navbar-nav ">
        <li>
          <Link className="nav-link" to="/cart">
            <CartIcon />
          </Link>
        </li>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;