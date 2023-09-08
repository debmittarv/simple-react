import React from "react";
import "../styles/feature.css";
import { product } from "../data";

const Feature = () => {
  return (
    <div className="feature_section">
      <h1>Explore our Products</h1>
      <div className="product_display__div">
        {product.map((data) => (
          <div className="product_card">
            <img src={data.img} alt="" className="product_img" />
            <p className="product_name">{data.name}</p>
            <p className="product_desc">{data.description}</p>
            <p className="product_price">{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
