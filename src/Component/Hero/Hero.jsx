import React, { useState } from "react";
import "./Hero.css";
import { Icon } from "../../Utility/IconPath";
import { Images } from "../../Utility/imagePath";
const Hero = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const toggleHover = () => {
    setIsActive(!isActive);
  };
  const toggleHover2 = () => {
    setIsActive2(!isActive2);
  };
  const toggleHover3 = () => {
    setIsActive3(!isActive3);
  };
  const toggleHover4 = () => {
    setIsActive4(!isActive4);
  };
  const toggleHover5 = () => {
    setIsActive5(!isActive5);
  };

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
              <img
                src={isActive ? Icon.FacebookYellow_Logo : Icon.Facebook_Logo}
                alt=""
                className="Media_Logo"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              />
              <img
                src={isActive2 ? Icon.TweetYellow_Logo : Icon.Tweet_Logo}
                alt=""
                className="Media_Logo"
                onMouseEnter={toggleHover2}
                onMouseLeave={toggleHover2}
              />
              <img
                // Common_Logo_Media
                src={isActive3 ? Icon.SocialYellow_Logo : Icon.Social_Logo}
                alt=""
                className="Media_Logo"
                onMouseEnter={toggleHover3}
                onMouseLeave={toggleHover3}
              />
              <img
                src={isActive4 ? Icon.linkedinYellow_Logo : Icon.linkedin_Logo}
                alt=""
                className="Media_Logo"
                onMouseEnter={toggleHover4}
                onMouseLeave={toggleHover4}
              />
              <img
                src={
                  isActive5 ? Icon.InstaGramYellow_Logo : Icon.InstaGram_Logo
                }
                alt=""
                className="Media_Logo"
                onMouseEnter={toggleHover5}
                onMouseLeave={toggleHover5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
