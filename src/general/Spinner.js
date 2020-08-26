import React from "react";
import "../css/spinner.css";

function Spinner(props) {
  return (
    <div className="center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
