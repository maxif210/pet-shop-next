import React from "react";
import { parseCurrency } from "../helpers/parseCurrency";
import { ProductButton } from "./ProductButton";

export const Product = ({ product, showAs, qty }) => {
  if (showAs === "card") {
    return (
      <div className="box" key={product.id}>
        <h3>{product.marca}</h3>
        
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <h4>Bolsa de: {product.kg}Kg</h4>
          {/* <div className="amount"> {parseCurrency(product.price)}</div> */}
          <ProductButton item={product} />
        </div>
      </div>
    );
  }

  if (showAs === "item") {
    return (
      <div className="boxCart" key={product.id}>
        <div className="image">
          <img className="imageItem" src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <h3>{product.marca}</h3>
          <div className="amount">{parseCurrency(product.price)}</div>
          <div className="qty">Cantidad: {product.qty}</div>
        </div>
      </div>
    );
  }
};
