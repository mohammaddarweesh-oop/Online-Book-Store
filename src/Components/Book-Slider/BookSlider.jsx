import React, { useContext, useState } from "react";
import "./BookSlider.css";
import Rating from "./Rating";
import Modal from "../Modal/Modal";
import CartContext from "../../Context/CartContext";

function BookSlider({ data }) {
  const { addToCart } = useContext(CartContext);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  const sliderHandler = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : data.length - 1);
    } else {
      setSliderIndex(sliderIndex < data.length ? sliderIndex + 1 : 0);
    }
  };

  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
    console.log(book);
  };
  return (
    <div className="book-slider-container">
      <i
        className="bi bi-chevron-double-left book-slider-arrow-left "
        onClick={() => sliderHandler("left")}
      ></i>
      <div
        className="book-slider-wrapper"
        style={{ transform: `translateX(${sliderIndex * -340}px)` }}
      >
        {data.map((item) => (
          <div className="book-slide-item" key={item.id}>
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-image"
            />
            <h2 className="book-slide-item-title"> {item.title} </h2>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slide-item-price">{item.price} $</div>
            <hr />
            <div className="book-slide-icons-wrapper">
              <i
                onClick={() => handleModal(item)}
                className="bi bi-eye-fill"
              ></i>
              {/* To Do */}
              <i
                className="bi bi-cart-plus"
                onClick={() => addToCart({ ...item, quantity: 1 })}
              ></i>
              {/*  */}
            </div>
          </div>
        ))}
      </div>
      <i
        className="bi bi-chevron-double-right book-slider-arrow-right "
        onClick={() => sliderHandler("right")}
      ></i>
      {openModal && <Modal data={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default BookSlider;
