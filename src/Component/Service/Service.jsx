import React from "react";
import "./Service.css";
import Primary from "../../Common/Heading/Primery";
import Secondary from "../../Common/Heading/Secondery";
import { Icon } from "../../Utility/IconPath";
import Bar from "../../Common/Skillbar/Bar";

const Service = () => {
  return (
    <>
      <div className="Service_Main_Container">
        <div className="Service_Main_Heading">
          <Primary Heading1={"HERE'S WHAT WE ARE GOOD AT"} />
        </div>
        <div className="Service_Main_Sub_Heading">
          <Secondary Heading2={"These are the services we offer"} />
        </div>
        <div className="Service_Type_Container">
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.DevelopmentBlack_Logo}
              WImg2={Icon.DevelopmentWhite}
              WName={"WEB DEVELOPMENT"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.contentBlack_Logo}
              WImg2={Icon.contentWhite_Logo}
              WName={"TECHNICAL WRITING"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.MobileBlack_Logo}
              WImg2={Icon.MobileWhite}
              WName={"MOBILE DEVELOPMENT"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.EmailBlack_Logo}
              WImg2={Icon.EmailWhite}
              WName={"EMAIL DEVELOPMENT"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.designBlack_Logo}
              WImg2={Icon.designWhite}
              WName={"GRAPHIC DESIGN"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
          <div className="Service_Type_Main">
            <Bar
              WImg={Icon.GraphicsBlack_Logo}
              WImg2={Icon.GraphicsWhite}
              WName={"WEB DESIGN"}
              WAbout={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
