import React from "react";
import { useNavigate } from "react-router-dom";

export default function Selector() {
  const navigate = useNavigate();
  return (
    <div className="row container container-selector flex-sb">
      <div>
        <button onClick={() => navigate("/characters")}>Characters</button>
      </div>
      <div>
        <button>Episodes</button>
      </div>
    </div>
  );
}
