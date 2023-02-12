import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
