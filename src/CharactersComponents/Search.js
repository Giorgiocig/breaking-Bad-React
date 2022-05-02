import React, { useState } from "react";
import "./Search.css";
import { GrSearch } from "react-icons/gr";

export default function Search({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="box">
      <form className="search">
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          name="search"
          value={text}
          className="input"
        />
      </form>
      <GrSearch className="icon" />
    </div>
  );
}
