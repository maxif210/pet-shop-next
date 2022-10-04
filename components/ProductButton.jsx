import React from "react";
import { useAppContext } from "../context/StateWrapper";

export const ProductButton = ({ item }) => {

  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
   
     <button className="comprarButton" onClick={handleClick}>
     Comprar
   </button>
  )
};
