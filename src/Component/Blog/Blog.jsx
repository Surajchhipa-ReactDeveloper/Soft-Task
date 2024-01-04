import React from "react";
import "./Blog.css";
import Secondary from "../../Common/Heading/Secondery";
import Primary from "../../Common/Heading/Primery";
import BlogItem from "../../Common/Blogitem/BlogItem";
import { Images } from "../../Utility/imagePath";

const Blog = () => {
  return (
    <>
      <div className="Blog_Main_Container Common_All_Main_Container">
        <div className="Blog_Main_Heading">
          <Primary Heading1={"OUR BLOGS"} />
        </div>
        <div className="Blog_Main_Sub_Heading">
          <Secondary Heading2={"Check out my latest posts!"} />
        </div>
        <div className="Blog_Item_Container">
          <BlogItem
            IMG={Images.Tree_IMG}
            PrimeHead={"How to become a frontend developer"}
            SecondHead={
              "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam asperiores ullam obcaecati dolor nisi reprehenderit, vitae veniam"
            }
          />
          <BlogItem
            IMG={Images.Light_IMG}
            PrimeHead={"My personal productivity system"}
            SecondHead={
              "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam asperiores ullam obcaecati dolor nisi reprehenderit, vitae veniam"
            }
          />
          <BlogItem
            IMG={Images.Bich_IMG}
            PrimeHead={"My new year in review 2023"}
            SecondHead={
              "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam asperiores ullam obcaecati dolor nisi reprehenderit, vitae veniam"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
