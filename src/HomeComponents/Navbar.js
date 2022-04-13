import React from "react";
import logo from "../img/Breaking_Bad_logo.svg.png";

//style
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="row flex-sb flex-center">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className="row">
          <li className="nav__item">Home</li>
          <li className="nav__item">Item</li>
        </ul>
      </nav>
    </div>
  );
}
