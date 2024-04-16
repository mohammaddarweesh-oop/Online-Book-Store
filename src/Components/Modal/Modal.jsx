import React, { useContext, useState } from "react";
import "./Modal.css";
import Rating from "../Book-Slider/Rating";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

function Modal({ data, setOpenModal }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const { id, title, image, author, reviews, price, rating, inStock } = data;
  return (
    <div className="modal-container" onClick={() => setOpenModal(false)}>
      
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i
          className="bi bi-x-circle-fill icon-modal"
          onClick={() => setOpenModal(false)}
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt="" />
        </div>

        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>In Stock :</b> {inStock ? "Yes" : "No"}
          </div>
          <Rating rating={rating} reviews={reviews} />

          <div className="modal-content-author">
            <b>Author : </b> {author}
          </div>
          <div className="modal-content-price">
            <b>Price : </b>
            {price} $
          </div>
          <div className="modal-content-info-add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              className="modal-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart({ ...data, quantity: qty })}
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>

          <Link to={`/book/${id}`} className="modal-content-info-link">
            see more details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
