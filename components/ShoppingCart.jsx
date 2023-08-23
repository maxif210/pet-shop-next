import { useAppContext } from "../context/StateWrapper";
import CheckoutButton from "./CheckoutButton";
import MpCheckoutButton from "./MpCheckoutButton";
import { Product } from "./Product";
export default function ShoppingCart() {
  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function handleRemove(item) {
    cart.removeItem(item);
  }

  // function getTotal() {
  //   console.log(cart);
  //   const total = cart.items.reduce(
  //     (acc, item) => acc + item.qty * item.price,
  //     0
  //   );

  //   return total;
  // }

  return (
    <div
      className="shoppingCart"
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <div className="closeContainer">
        <button className="close" onClick={handleCloseCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {cart.items.length === 0 ? (
        <div className="empty">Cart is empty</div>
      ) : (
        <>
          <h3>Productos que agregaste</h3>
          <div className="items">
            {cart.items &&
              cart.items.length > 0 &&
              cart.items.map((item, i) => (
                <Product
                  key={item + i.toString()}
                  product={item}
                  showAs="item"
                  qty={item.qty}
                  onRemove={() => handleRemove(item)}
                />
              ))}
          </div>
          {/* <div className="total">Total: ${getTotal()} </div> */}
          <CheckoutButton cart={cart} />
          {/* <MpCheckoutButton cart={cart}/> */}
        </>
      )}
    </div>
  );
}
