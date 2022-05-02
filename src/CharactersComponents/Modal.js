import React from "react";
import { useFetch } from "../hooks/useFetch";

import "./Modal.css";

export default function Modal({ name, surname }) {
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quote/random?author=${name}+${surname}`
  );

  /*const checkData = (string) => {
    if (string) return true;
  };
  const wwjr = checkData(jr);*/

  const quote = (arr) => {
    let output = "";
    if (arr && arr.length === 0) {
      output = "no quotes";
    } else {
      arr.map((el) => {
        output = el.quote;
      });
    }
    return output;
  };

  return (
    <div className="modal position-abs">
      <p>{data && quote(data)}</p>
    </div>
  );
}
