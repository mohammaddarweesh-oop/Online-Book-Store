import React, { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);
    if (isExist) {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
