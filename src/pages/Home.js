import React from "react";
import Header from "../GeneralComponent/Header";
import Footer from "../HomeComponents/Footer";
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
      <Footer />
    </div>
  );
}
