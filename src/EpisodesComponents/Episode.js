import React from "react";

export default function Episode(text2) {
  return (
    <div>
      {text2.map((el) => {
        return <p>{el}</p>;
      })}
    </div>
  );
}
