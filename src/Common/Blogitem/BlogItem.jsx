import React from "react";
import "./BlogItem.css";

const BlogItem = ({ IMG, PrimeHead, SecondHead }) => {
  return (
    <>
      <div className="BlogItem_Main_Container ]">
        <div className="BlogItem_Img_Container">
          <img src={IMG} alt="" className="BlogItem_IMG" />
        <div className="BlogItem_Button_Container">Read More</div>
        </div>
        <div className="BlogItem_About_Container">
          <div className="BlogItem_Primary_Heading">{PrimeHead}</div>
          <div className="BlogItem_Secondary_Heading">{SecondHead}</div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
