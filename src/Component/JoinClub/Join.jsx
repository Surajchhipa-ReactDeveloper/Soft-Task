import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <>
      <div className="Join_Main_Container">
        <div className="Liner_Container "></div>
        <div className="Join_Main_Text">
          KEEP <span className="Bold">UP-TO-DATE</span> <br />WITH WHAT I'M UP TO
        </div>
        <div className="Club_Link_Button_Container">
          <div className="Club_Input_Container">
            <input
              className="User_Email"
              type="text"
              placeholder="Give me your Email"
            />
          </div>
          <div className="Join_Button ">Join the club</div>
        </div>
      </div>
    </>
  );
};

export default Join;
