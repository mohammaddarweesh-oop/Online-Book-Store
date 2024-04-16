import React, { useContext } from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import CartContext from "../../../Context/CartContext.js";

function HeaderMiddle() {
  const { cartItemsLength } = useContext(CartContext);

  return (
    <div className="header-middle">
      <Link to={"/"} className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>

      <div className="header-middle-search-box">
        <input
          type="search"
          className="header-middle-search-box-input"
          placeholder="search in book store... "
        />
        <i className="bi bi-search"></i>
      </div>
      <div className="header-middle-cart-wrapper">
        <Link to={"/Cart"}>
          {cartItemsLength > 0 && (
            <b className="cart-notification">{cartItemsLength}</b>
          )}

          <i className="bi bi-cart2"></i>
        </Link>
      </div>
    </div>
  );
}

export default HeaderMiddle;
