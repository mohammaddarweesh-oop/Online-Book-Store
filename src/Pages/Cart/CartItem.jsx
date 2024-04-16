import React from "react";

function CartItem({ item, removeFromCart, addToCart }) {
  const { image, title, author, quantity, price, id } = item;

  return (
    <div className="cart-item">
      <img src={`/books/${image}`} alt="" className="cart-itrm-image" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title : </b> {title}
          </div>
          <div className="cart-item-book-author">
            <b>Author : </b> {author}
          </div>
        </div>
        <div className="cart-item-quantity">
          <button
            onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          {quantity}
          <button
            disabled={item.quantity <= 1}
            onClick={() => addToCart({ ...item, quantity: item.quantity - 1 })}
          >
            <i className="bi bi-dash-lg"></i>
          </button>
          <div className="cart-item-price">
            ${(price * quantity).toFixed(2)}
          </div>
          <i
            onClick={() => removeFromCart(id)}
            className="bi bi-trash-fill delete-item"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
