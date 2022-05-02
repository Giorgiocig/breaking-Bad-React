import React from "react";
import "./Infobox.css";

export default function InfoboxEp({ text, characters }) {
  let arr = [];
  if (characters) arr = characters.map((el) => el);

  return (
    <div className="info row">
      <div className="textEp margin-right">
        {text &&
          text.map((el, idx) => {
            return (
              <p className="textTable">
                Episode- {idx + 1} {el}
              </p>
            );
          })}
      </div>
      <div className="textEp">
        {characters &&
          arr.map((el) => {
            return (
              <p className="textTable">
                {el.length}-charaters: {el.join(", ")}
              </p>
            );
          })}
      </div>
    </div>
  );
}
