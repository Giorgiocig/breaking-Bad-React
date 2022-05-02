import React from "react";
import { useToggle } from "../hooks/useToggle";

import "./CardEp.css";
import InfoboxEp from "./InfoboxEp";

export default function CardEp({ text, image, title, characters }) {
  const [toggle, setToggle] = useToggle(false);
  console.log(title);
  return (
    <div className="card">
      <p className="position-abs cardEpText">{text}</p>
      <div>
        <img
          src={image}
          className="img2"
          onClick={() => setToggle(!toggle)}
          alt="season brochure"
        ></img>
        {toggle && <InfoboxEp text={title} characters={characters} />}
      </div>
    </div>
  );
}
