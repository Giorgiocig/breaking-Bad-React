import React from "react";
import Marker from "./Marker";
import { useToggle } from "../hooks/useToggle";

import "./Card.css";
import Modal from "./Modal";
import Hamburger from "./Hamburger";
import InfoBox from "./InfoBox";

export default function Card({
  name,
  photo,
  status,
  appearance,
  birthday,
  occupation,
  nickname,
}) {
  const [toggle1, setToggle1] = useToggle(false);
  const [toggle2, setToggle2] = useToggle(false);

  const convertName = function (string) {
    const arr = string.split(" ");
    return arr;
  };

  const returnedName = convertName(name)[0];
  const returnedSurname = convertName(name)[1];
  const returnedJr = convertName(name)[2];

  const handleClick = (name) => {
    setToggle1(!toggle1);
    convertName(name);
  };

  return (
    <div className="text-center position-rel shadow">
      <img src={photo} className="card__img" />
      <div className="">
        <p>{name}</p>

        <button className="btn" onClick={() => handleClick(name)}>
          {!toggle1 ? "GET a quote" : "HIDE quote"}
        </button>
      </div>
      {status === "Deceased" && <Marker />}
      {toggle1 && (
        <Modal name={returnedName} surname={returnedSurname} jr={returnedJr} />
      )}
      <Hamburger toggle2={toggle2} setToggle2={setToggle2} />

      {toggle2 && (
        <InfoBox
          nickname={nickname}
          appearance={appearance}
          occupation={occupation}
          birthday={birthday}
        />
      )}
    </div>
  );
}
