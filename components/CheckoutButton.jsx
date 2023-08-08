import React from "react";

const CheckoutButton = ({ cart }) => {
  const text = React.useMemo(
    () =>
      cart.items.reduce(
        (message, product) =>
          message.concat(
            ` ${product.marca} - ${product.kg}Kg - Cantidad:${product.qty},\n`
          ),
        `Hola, me gustaria pedir: `
      ),
    [cart]
  );
  return (
    <div className="CheckoutButton">
      <img src="image/wlogo2.webp" alt="wlogo" />
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
