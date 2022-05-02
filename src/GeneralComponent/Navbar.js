import React from "react";
import logo from "../img/Breaking_Bad_logo.svg.png";
import { NavLink, useNavigate } from "react-router-dom";

//style
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav className="row flex-sb flex-center">
        <div className="logo">
          <img
            src={logo}
            onClick={() => navigate("/")}
            alt="breaking bad logo"
          />
        </div>
        <ul className="row">
          <li className="nav__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
