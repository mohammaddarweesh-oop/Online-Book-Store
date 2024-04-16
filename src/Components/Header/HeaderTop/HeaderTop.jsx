import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function HeaderTop({ setToggle, toggle }) {
  return (
    <div className="header-top">
      <div
        className="header-top-menu"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
        123-456-789
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link to="/Login" className="header-top-link">
        <i className="bi bi-person-fill"></i>
        Login
      </Link>
    </div>
  );
}

export default HeaderTop;
