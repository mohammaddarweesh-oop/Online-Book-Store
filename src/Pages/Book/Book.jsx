import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books.js";
import Rating from "../../Components/Book-Slider/Rating";
import CartContext from "../../Context/CartContext.js";
import "./Book.css";

function Book() {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const book = books.find((e) => e.id === Number(id));

  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt="" />
        <div className="book-content-info">
          <h1 className="book-title"> {book.title} </h1>
          <div className="author-book">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating reviews={book.reviews} rating={book.rating} />
          <div className="add-to-cart">
            <input
              type="number"
              className="book-add-to-cart"
              max={100}
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
            <div>
              <button
                className="btn-add-to-cart"
                onClick={() => addToCart({ ...book, quantity: quantity })}
              >
                <i className="bi bi-cart-plus"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="book-describtion">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ipsam
        molestias nemo? Cum eos magnam suscipit commodi, voluptate minima eaque
        ex rem laboriosam nulla ratione quisquam id, alias iusto dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis
        quae quos nam, aliquid eos laudantium, incidunt quasi ab corporis amet
        corrupti voluptas, illo quo ullam voluptatibus et! Debitis, officiis.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small> <b>{book.printLength} Pages</b>
          <i className="bi bi-file-earmark-break"></i>
        </div>
        <div className="book-icon">
          <small>Language</small> <b>{book.language}</b>
          <i className="bi bi-globe"></i>
        </div>
        <div className="book-icon">
          <small>Publication Date</small> <b>{book.PublicationDate}</b>
          <i className="bi bi-calendar"></i>
        </div>
      </div>
    </div>
  );
}

export default Book;
