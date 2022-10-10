import { useAppContext } from "../context/StateWrapper";
import CheckoutButton from "./CheckoutButton";
import { Product } from "./Product";
export default function ShoppingCart() {
  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function getTotal() {
    console.log(cart)
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );

    return total;
  }

  return (
    <div
      className="shoppingCart"
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      
      <button className="close" onClick={handleCloseCart}>
      ×
      </button>

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
                />
              ))}
          </div>
          <div className="total">Total: ${getTotal()} </div>
          <CheckoutButton cart={cart}/>
        </>
      )}
    </div>
  );
}
