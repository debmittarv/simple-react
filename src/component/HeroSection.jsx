import React from "react";
import "../styles/hero.css";
import basic from "../assets/basic.png"

const HeroSection = () => {
  return (
    <div className="main_hero__section">
      <div className="hero_left__section">
        <h1>Welcome to Our Website</h1>
        <p>We are really glad to meet you. Thank You so much for choosing us</p>
      </div>
      <div className="hero_right__section">
        <img src={basic} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
