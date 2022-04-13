import React from "react";
import Header from "../HomeComponents/Header";
import Hero from "../HomeComponents/Hero";
import Icons from "../HomeComponents/Icons";
import Selector from "../HomeComponents/Selector";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Icons />
      <Selector />
    </div>
  );
}
