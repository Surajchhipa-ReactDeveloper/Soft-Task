import React from "react";
import "./Hero.css";
import { Icon } from "../../Utility/IconPath";
import { Images } from "../../Utility/imagePath";
const Hero = () => {
  return (
    <>
      <div className="Hero_Container">
        <div className="Hero_Container_Left_Container">
          <div className="Hero_Imag_Container">
            <img src={Images.LaDy_IMG} alt="" className="Leady_Img" />
          </div>
        </div>
        <div className="Hero_Container_Right_Container ">
          <div className="Hero_Top_Heading">
            Building digital products & brands.
          </div>
          <div className="Hero_Right_Bottom_Container">
            <div className="Hero_Right_Bottom_Left">LET'S CONNECT</div>
            <div className="Hero_Right_Bottom_Center">
              <img src={Icon.LessThen_Logo} alt="" className="LessThen" />
            </div>
            <div className="Hero_Right_Bottom_Right">
              <img src={Icon.Facebook_Logo} alt="" className="Media_Logo" />
              <img src={Icon.Tweet_Logo} alt="" className="Media_Logo" />
              <img src={Icon.Social_Logo} alt="" className="Media_Logo" />
              <img src={Icon.linkedin_Logo} alt="" className="Media_Logo" />
              <img src={Icon.InstaGram_Logo} alt="" className="Media_Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
