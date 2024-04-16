import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Authors from "./Pages/Authors/Authors";
import Book from "./Pages/Book/Book";
import HomePage from "./Pages/Home/HomePage";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Register from "./Pages/Forms/Register";
import Login from "./Pages/Forms/Login";

import { books } from "./data/books";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage books={books} />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/Book/:id" element={<Book books={books} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
