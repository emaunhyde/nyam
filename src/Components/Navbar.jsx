import React from "react";
import { Link } from "react-router-dom";
import logo from "../peckish_logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/search"> Search </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </>
  );
};

export default Navbar;
