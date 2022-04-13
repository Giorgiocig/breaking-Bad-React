import React from "react";
import Marker from "./Marker";
import { useToggle } from "../hooks/useToggle";

import "./Card.css";
import Modal from "./Modal";

export default function Card({ name, photo, status }) {
  const [toggle, setToggle] = useToggle(false);

  const convertName = function (string) {
    const arr = string.split(" ");
    return arr;
  };

  const returnedName = convertName(name)[0];
  const returnedSurname = convertName(name)[1];
  const returnedJr = convertName(name)[2];

  const handleClick = (name) => {
    setToggle(!toggle);
    convertName(name);
  };

  return (
    <div className="text-center position-rel shadow">
      <img src={photo} className="card__img" />
      <div className="">
        <p>{name}</p>
        <button onClick={() => handleClick(name)}>Get A Quote</button>
      </div>
      {status === "Deceased" && <Marker />}
      {toggle && (
        <Modal name={returnedName} surname={returnedSurname} jr={returnedJr} />
      )}
    </div>
  );
}
