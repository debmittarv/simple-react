import React from "react";
import { socialData } from "../data";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="display_footer_icons">
        {socialData.map((item) => (
          <div className="social_div">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <p className="copyright">Copyright @2023-@2024 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
