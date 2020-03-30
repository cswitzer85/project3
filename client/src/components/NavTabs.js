import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Secondary"
          className={location.pathname === "Secondary" ? "nav-link active" : "nav-link"}
        >
          Secondary
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tertiary"
          className={location.pathname === "Tertiary" ? "nav-link active" : "nav-link"}
        >
          Tertiary
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Quaternary"
          className={location.pathname === "Quaternary" ? "nav-link active" : "nav-link"}
        >
          Quaternary
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
