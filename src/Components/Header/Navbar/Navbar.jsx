import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function Navbar({ toggle, setToggle }) {
  return (
    <div className="navbar" style={{ left: toggle && "0" }}>
      <ul className="navbar-links">
        <Link to={"/"} onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link
          to={"/Authors"}
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Authors
        </Link>
        <Link
          to={"/Contact"}
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Contact Us
        </Link>
        <Link
          to={"/Register"}
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Register
        </Link>
        <Link
          to={"/About"}
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          About
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
