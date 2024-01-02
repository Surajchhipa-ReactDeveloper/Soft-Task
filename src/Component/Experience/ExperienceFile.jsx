import React from "react";
import "./ExpFile.css"
import Experience1 from "./Experience";
import Experience2 from "./Experience2";
const ExperienceFile = () => {
  return (
    <>
      <div className="File_Container">
        <div className="File_Container1">
          <Experience1 />
        </div>
        <div className="File_Container2">
          <Experience2 />
        </div>
      </div>
    </>
  );
};

export default ExperienceFile;
