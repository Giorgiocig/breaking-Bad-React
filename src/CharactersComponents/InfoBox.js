import React from "react";
import "./InfoBox.css";

export default function InfoBox({
  nickname,
  appearance,
  occupation,
  birthday,
}) {
  const convertArray = function (arr) {
    const arrStr = arr.map((el) => el.toString());
    const string = arrStr.join();
    return string;
  };

  return (
    <div className="infobox position-abs">
      <ul className="infobox-list">
        <li className="infobox-listItem">nickname - {nickname}</li>
        <li className="infobox-listItem">
          seasons - {convertArray(appearance)}
        </li>
        <li className="infobox-listItem">occupation - {occupation}</li>
        <li className="infobox-listItem">birthday - {birthday}</li>
      </ul>
    </div>
  );
}
