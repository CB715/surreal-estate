import React from "react";
import { Link } from "react-router-dom";

import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
