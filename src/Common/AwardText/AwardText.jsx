import React from "react";
import "./AwardText.css"
const AwardText = ({ Img, NumBer, Status }) => {
  return (
    <>
      <div className="Award_Text_Main_Container">
        <div className="Award_About_Img_Container">
          <img src={Img} alt="" className="AwardImg" />
        </div>
        <div className="Award_Number_And_Status_Container">
          <div className="Award_Number">{NumBer}</div>
          <div className="Award_Status">{Status}</div>
        </div>
      </div>
    </>
  );
};

export default AwardText;
