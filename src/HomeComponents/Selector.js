import React from "react";
import { useNavigate } from "react-router-dom";

import "./Selector.css";

export default function Selector() {
  const navigate = useNavigate();
  return (
    <div className="row container flex-sb">
      <div>
        <button onClick={() => navigate("/characters")} className="btnSel">
          Characters
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/episodes")} className="btnSel">
          Episodes
        </button>
      </div>
    </div>
  );
}
