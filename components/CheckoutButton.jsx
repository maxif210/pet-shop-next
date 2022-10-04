import React from "react";
import { parseCurrency } from "../helpers/parseCurrency";

const CheckoutButton = ({ cart }) => {
  const text = React.useMemo(
    () =>
      cart.items
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.marca} - ${parseCurrency(product.price)} - ${
                product.qty
              }\n`
            ),
          ``
        )
        .concat(
          `\nTotal: ${parseCurrency(
            cart.items.reduce((total, product) => total + product.price, 0)
          )}`
        ),
    [cart]
  );
  return (
    <div className="CheckoutButton">
      <img src="image/wlogo2.webp" alt="wlogo"/>
      <a
        className="button-59"
        href={`https://wa.me/3516890981?text=${encodeURIComponent(text)}`}
      >
        {" "}
        Realizar Pedido
      </a>
    </div>
  );
};

export default CheckoutButton;
