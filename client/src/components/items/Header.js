import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <img
          className="navbar-brand mb-0 h1"
          src="https://zalatpizza.com/wp-content/uploads/2017/02/Logo-New-Small.png"
          alt="pizza logo"
        ></img>
      </Link>
    </nav>
  );
}

export default Header;
