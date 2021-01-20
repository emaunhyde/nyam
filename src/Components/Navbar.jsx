import React from "react";
import { Link } from "react-router-dom";
import logo from "../peckish_logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/search"> Search </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
