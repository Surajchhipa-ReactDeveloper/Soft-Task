import React from "react";
import "./Award.css";
import AwardText from "../../Common/AwardText/AwardText";
import { Icon } from "../../Utility/IconPath";
import { Images } from "../../Utility/imagePath";

const Award = () => {
  return (
    <div className="Award_Main_Container">
      <div className="Award_Background_Container ">
        <img src={Images.BackGround_IMG} alt="" className="BackGround_IMG_Award" />
      </div>
      <div className="Award_Item_Container">
        <AwardText
          Img={Icon.project_Logo}
          NumBer={12}
          Status={"Finished Projects"}
        />
        <AwardText Img={Icon.award_Logo} NumBer={3} Status={"Awards Won"} />
        <AwardText Img={Icon.Happy_Logo} NumBer={8} Status={"Happy Clients"} />
        <AwardText Img={Icon.Puzzle_Logo} NumBer={99} Status={"Bugs Fixed"} />
      </div>
    </div>
  );
};

export default Award;
