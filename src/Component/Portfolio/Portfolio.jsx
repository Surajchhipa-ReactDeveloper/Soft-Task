import React from "react";
import "./Portfolio.css";
import Primary from "../../Common/Heading/Primery";
import Secondary from "../../Common/Heading/Secondery";
import { Images } from "../../Utility/imagePath";

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio_Main_Container Common_All_Main_Container">
        <div className="Portfolio_Main_Heading">
          <Primary Heading1={"CHECK OUT OUR PORTFOLIO"} />
        </div>
        <div className="Portfolio_Main_Sub_Heading">
          <Secondary Heading2={"Here's what we have done with the past"} />
        </div>
        <div className="Portfolio_Screen_Container">
          <div className="Screen_IMG_container">
            <img src={Images.Screen1_IMG} alt="" className="Screen_IMG" />
          </div>
          <div className="Screen_IMG_container">
            <img src={Images.Screen2_IMG} alt="" className="Screen_IMG" />
          </div>
          <div className="Screen_IMG_container">
            <img src={Images.Screen3_IMG} alt="" className="Screen_IMG" />
          </div>
          <div className="Screen_IMG_container">
            <img src={Images.Screen4_IMG} alt="" className="Screen_IMG" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
