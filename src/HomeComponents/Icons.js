import React from "react";
import { FaAngellist } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { GoRocket } from "react-icons/go";

import Icon from "./Icon";

import "./Icon.css";

export default function Icons() {
  return (
    <div className="row container flex-sb container-icons">
      <Icon icon={<FaAngellist />} text={"characters"} />
      <Icon icon={<GoBook />} text={"quotes"} />
      <Icon icon={<GoRocket />} text={"more"} />
    </div>
  );
}
