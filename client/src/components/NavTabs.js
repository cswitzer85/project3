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
          to="/InfoForm"
          className={location.pathname === "InfoForm" ? "nav-link active" : "nav-link"}
        >
          Information form
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/OrderForm"
          className={location.pathname === "OrderForm" ? "nav-link active" : "nav-link"}
        >
          Order Form
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
      <li className="nav-item">
        <Link
          to="/SignupForm"
          className={location.currentPage === "SignupForm" ? "nav-link active" : "nav-link"}
        >
          Sign UP
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/LoginForm"
          className={location.currentPage === "LoginForm" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
