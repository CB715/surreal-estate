import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import "../styles/sidebar.css";

const Sidebar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <span className="sidebar-text-city">Search by City:</span>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
      </ul>

      <ul className="sidebar-links">
        <span className="sidebar-text-price">Sort by Price:</span>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
