import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Secondary"
          onClick={() => props.handlePageChange("Secondary")}
          className={props.currentPage === "Secondary" ? "nav-link active" : "nav-link"}
        >
          Secondary
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Tertiary"
          onClick={() => props.handlePageChange("Tertiary")}
          className={props.currentPage === "Tertiary" ? "nav-link active" : "nav-link"}
        >
          Tertiary
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Quaternary"
          onClick={() => props.handlePageChange("Quaternary")}
          className={props.currentPage === "Quaternary" ? "nav-link active" : "nav-link"}
        >
          Quaternary
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#SignupForm"
          onClick={() => props.handlePageChange("SignupForm")}
          className={props.currentPage === "SignupForm" ? "nav-link active" : "nav-link"}
        >
          Sign UP
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
