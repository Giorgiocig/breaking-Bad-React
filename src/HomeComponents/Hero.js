import React from "react";
import hero from "../img/breakingbadHero.jpg";

//style
import "./Hero.css";
export default function Hero() {
  return (
    <div className="container row flex-justCenter">
      <div className="heroImg__container">
        <img className="fill" src={hero} />
      </div>
      <div className="hero__text">
        <h1>Discover Characters, Episode and More...</h1>
      </div>
    </div>
  );
}
