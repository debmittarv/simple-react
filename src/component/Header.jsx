import React from "react";
import logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="main_nav">
      <img src={logo} alt="" className="logo"/>
      <div className="nav_url">
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Header;
