import React from "react";
import { useAppContext } from "../context/StateWrapper";

export const Icons = () => {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <div className="icons">
      <a className="fas fa-shopping-cart" onClick={handleOpenCart}>
        ({cart.getNumberOfItems()}){" "}
      </a>
      <div className="fas fa-bars" id="menu-btn" />
    </div>
  );
};
