import React from "react";
import { GoThreeBars } from "react-icons/go";
import "./Hamburger.css";

export default function Icon({ toggle2, setToggle2 }) {
  return (
    <div className="position-abs hamburger">
      <p className="hamburger-icon" onClick={() => setToggle2(!toggle2)}>
        <GoThreeBars />
      </p>
    </div>
  );
}
