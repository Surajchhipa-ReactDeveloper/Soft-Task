import React, { useState } from "react";
import "./Footer.css";
import { Icon } from "../../Utility/IconPath";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const Year = new Date().getFullYear();

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
    <div className="Footer_Main_Container">
      <div className="Footer_Left_Container">
        © Copyright {Year}. All right reserved, ATOM.
      </div>
      <div className="Footer_Right_Container">
        <img
          src={isActive ? Icon.FacebookYellow_Logo : Icon.FacebookWhite_Logo}
          alt=""
          className="Media_Logo Common_Logo_Media Media_Logo2"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        <img
          src={isActive2 ? Icon.TweetYellow_Logo : Icon.TweetWhite_Logo}
          alt=""
          className="Media_Logo Common_Logo_Media Media_Logo2"
          onMouseEnter={toggleHover2}
          onMouseLeave={toggleHover2}
        />
        <img
          // Common_Logo_Media
          src={isActive3 ? Icon.SocialYellow_Logo : Icon.SocialWhite_Logo}
          alt=""
          className="Media_Logo Common_Logo_Media Media_Logo2"
          onMouseEnter={toggleHover3}
          onMouseLeave={toggleHover3}
        />
        <img
          src={isActive4 ? Icon.linkedinYellow_Logo : Icon.linkedinWhite_Logo}
          alt=""
          className="Media_Logo Common_Logo_Media Media_Logo2"
          onMouseEnter={toggleHover4}
          onMouseLeave={toggleHover4}
        />
        <img
          src={isActive5 ? Icon.InstaGramYellow_Logo : Icon.InstaGramWhite_Logo}
          alt=""
          className="Media_Logo Common_Logo_Media Media_Logo2"
          onMouseEnter={toggleHover5}
          onMouseLeave={toggleHover5}
        />
      </div>
    </div>
  );
};

export default Footer;
