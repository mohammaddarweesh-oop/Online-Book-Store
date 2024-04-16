import React, { useState } from "react";
import "../Header/Header.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle={toggle} />
      <HeaderMiddle />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
}
