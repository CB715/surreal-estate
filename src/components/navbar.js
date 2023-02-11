import React from "react";

import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />
    </div>
  );
};

export default NavBar;
