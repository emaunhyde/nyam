import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/peckish_logo_red.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="navlinks">
        <ul className="nav">
          <li className="navLink">
            <Link to="/"> Home </Link>
          </li>
          <li className="navLink">
            <Link to="/search"> Search </Link>
          </li>
          <li className="navLink">
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
