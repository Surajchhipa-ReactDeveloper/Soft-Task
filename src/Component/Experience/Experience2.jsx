import React from "react";
import "./Experience.css";

import { Icon } from "../../Utility/IconPath";
import Secondary from "../../Common/Heading/Secondery";
import Primary from "../../Common/Heading/Primery";

const Experience2 = () => {
  return (
    <div className="Experience_Main_Container Common_All_Main_Container">
      <div className="Experience_Main_Heading">
        <Primary Heading1={"MY WORK EXPERIENCE"} />
      </div>
      <div className="Experience_Main_Sub_Heading">
        <Secondary Heading2={"Here's what I did before freelancing"} />
      </div>
      <div className="Experience_Item_Container Second_Experience_Item_Container">
        <div className="Experience_Item">
          <div className="Experience_Company_Name_And_Line">
            <div className="Experience_Company_Name">
              <img src={Icon.Spotify_Logo} alt="" className="Experience_Logo" />
            </div>
          </div>
          <div className="Experience_Right_Container_item1 ">
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
        </div>
        <div className="Experience_Item">
          <div className="Experience_Company_Name_And_Line">
            <div className="Experience_Company_Name">
              <img
                src={Icon.Microsoft_Logo}
                alt=""
                className="Experience_Logo"
              />
            </div>
          </div>
          <div className="Experience_Right_Container_item1">
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
        </div>
        <div className="Experience_Item">
          <div className="Experience_Company_Name_And_Line">
            <div className="Experience_Company_Name">
              <img src={Icon.Fedex_Logo} alt="" className="Experience_Logo" />
            </div>
          </div>
          <div className="Experience_Right_Container_item1">
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
  );
};

export default Experience2;
