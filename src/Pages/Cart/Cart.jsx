import React, { useContext } from "react";

import "./Cart.css";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import CartContext from "../../Context/CartContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
