import React from "react";
import "./WeAre.css";
import Primary from "../../Common/Heading/Primery";
import Secondary from "../../Common/Heading/Secondery";
import { Icon } from "../../Utility/IconPath";

const WeAre = () => {
  return (
    <>
      <div className="WeAre_Container">
        <div className="WeAre_Left_Container">
          <h1 className="WeAre_Left_Container_Top_Heading">
            <Primary Heading1={"WHO WE ARE?"} />
          </h1>
          <p className="WeAre_Left_Container_Center_Text">
            <Secondary
              Heading2={"We are an offshore software development company"}
            />
          </p>
          <p className="WeAre_Left_Container_Bottom_Text">
            We believe in adding value to your projects. We not only provide you
            with the required web/app development services but also expert
            consultation for your projects to make them distinct from others.
          </p>
          <div className="WeAre_Bottom_Container Common_Img_Text_Container">
            <div className="WeAre_Bottom_Left Common_Text_Img">
              CONNECT WITH ME
            </div>
            <div className="WeAre_Bottom_Center Common_LessThen_Container">
              <img
                src={Icon.LessThen_Logo}
                alt=""
                className="LessThen Common_Logo_Media"
              />
            </div>
            <div className="WeAre_Bottom_Right Common_Main_Img_Container">
              <img
                src={Icon.Facebook_Logo}
                alt=""
                className="Media_Logo Common_Logo_Media"
              />
              <img
                src={Icon.Tweet_Logo}
                alt=""
                className="Media_Logo Common_Logo_Media"
              />
              <img
                src={Icon.Social_Logo}
                alt=""
                className="Media_Logo Common_Logo_Media"
              />
              <img
                src={Icon.linkedin_Logo}
                alt=""
                className="Media_Logo Common_Logo_Media"
              />
              <img
                src={Icon.InstaGram_Logo}
                alt=""
                className="Media_Logo Common_Logo_Media"
              />
            </div>
          </div>
        </div>
        <div className="WeAre_Right_Container">
          <div className="WeARE_Right_Container_Item">
            <div className="Right_Item1">
              <div className="Type_Percentage">
                <div className="Type">HTML & CSS</div>
                <div className="Percentage">85%</div>
              </div>
              <div className="Process_Bar">
                <div className="Bar_Color1 black"></div>
              </div>
            </div>
            <div className="Right_Item2">
              <div className="Type_Percentage ">
                <div className="Type">PYTHON</div>
                <div className="Percentage">70%</div>
              </div>
              <div className="Process_Bar">
                <div className="Bar_Color2"></div>
              </div>
            </div>
            <div className="Right_Item3">
              <div className="Type_Percentage">
                <div className="Type">JAVASCRIPT</div>
                <div className="Percentage">98%</div>
              </div>
              <div className="Process_Bar">
                <div className="Bar_Color3"></div>
              </div>
            </div>
            <div className="Right_Item4">
              <div className="Type_Percentage">
                <div className="Type">REACT</div>
                <div className="Percentage">91%</div>
              </div>
              <div className="Process_Bar">
                <div className="Bar_Color4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAre;
