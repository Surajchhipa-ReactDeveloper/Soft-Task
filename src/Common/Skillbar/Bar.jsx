import React, { useState } from "react";
import "./Bar.css";

const Bar = ({ WImg, WName, WAbout, WImg2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div
        className="company_Service_Main_Container"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="Company_Work_Img_Container">
          {isHovered ? (
            <img src={WImg2} alt="" className="work_Icon" />
          ) : (
            <img src={WImg} alt="" className="work_Icon" />
          )}
        </div>
        <div className={`Work_Name ${isHovered ? "Work_Name_Hover" : ""}`}>
          {WName}
        </div>
        <div className={`Work_About ${isHovered ? "Work_About_Hover" : ""}`}>
          {WAbout}
        </div>
      </div>
    </>
  );
};

export default Bar;
