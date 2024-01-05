import React from "react";
import "./Try.css";
const Try = ({ Value }) => {
  return (
    <>
      <div className="Input_Container">
        <input type="text" className="Input" id="Name" required="required" />
        <span className="label">{Value}</span>
      </div>
    </>
  );
};

export default Try;
