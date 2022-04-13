import React from "react";

export default function Icon({ icon, text }) {
  return (
    <div className="col text-center font-big">
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
}
