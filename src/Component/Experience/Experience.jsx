import React from "react";
import "./Experience.css";
import Secondary from "../../Common/Heading/Secondery";
import Primary from "../../Common/Heading/Primery";
import { Icon } from "../../Utility/IconPath";
const Experience_Right_Container_item1 = () => {
  return (
    <>
      <div className="Experience_Main_Container Common_All_Main_Container">
        <div className="Experience_Main_Heading">
          <Primary Heading1={"MY WORK EXPERIENCE"} />
        </div>
        <div className="Experience_Main_Sub_Heading">
          <Secondary Heading2={"Here's what I did before freelancing"} />
        </div>
        <div className="Experience_Item_Container">
          <div className="Experience_Left_Container">
            <div className="Experience_Company_Name_And_Line">
              <div className="Experience_Company_Name">
                <img
                  src={Icon.Spotify_Logo}
                  alt=""
                  className="Experience_Logo"
                />
              </div>
              <div className="Experience_Line"></div>
            </div>
            <div className="Experience_Company_Name_And_Line">
              <div className="Experience_Company_Name">
                <img
                  src={Icon.Microsoft_Logo}
                  alt=""
                  className="Experience_Logo"
                />
              </div>
              <div className="Experience_Line"></div>
            </div>
            <div className="Experience_Company_Name_And_Line">
              <div className="Experience_Company_Name">
                <img src={Icon.Fedex_Logo} alt="" className="Experience_Logo" />
              </div>
              <div className="Experience_Line"></div>
            </div>
          </div>
          <div className="Experience_Mid_Container "></div>
          <div className="Experience_Right_Container ">
            <div className="Experience_Right_Container_item1">
              <div className="Circle_Container"></div>
              <div className="Experience_Arrow_Container">
                <img
                  src={Icon.ArrowColorFull_Logo}
                  alt=""
                  className="ArrowColorFull_Logo"
                />
              </div>
              <div className="Experience_About_Container">
                <div className="Experience_Date_Container">
                  Apr 2015 - Mar 2018
                </div>
                <div className="Experience_Job_Name">FRONTEND DEVELOPER</div>
                <div className="Experience_Job_About">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.
                </div>
              </div>
            </div>
            <div className="Experience_Right_Container_item1">
              <div className="Circle_Container"></div>
              <div className="Experience_Arrow_Container">
                <img
                  src={Icon.ArrowColorFull_Logo}
                  alt=""
                  className="ArrowColorFull_Logo"
                />
              </div>
              <div className="Experience_About_Container">
                <div className="Experience_Date_Container">
                  Mar 2018 - September 2019
                </div>
                <div className="Experience_Job_Name">SOFTWARE ENGINEER</div>
                <div className="Experience_Job_About">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.
                </div>
              </div>
            </div>
            <div className="Experience_Right_Container_item1">
              <div className="Circle_Container"></div>
              <div className="Experience_Arrow_Container">
                <img
                  src={Icon.ArrowColorFull_Logo}
                  alt=""
                  className="ArrowColorFull_Logo"
                />
              </div>
              <div className="Experience_About_Container">
                <div className="Experience_Date_Container">
                  October 2019 - Feb 2021
                </div>
                <div className="Experience_Job_Name">DEVOPS ENGINEER</div>
                <div className="Experience_Job_About">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience_Right_Container_item1;
