import React, { useState } from "react";
import "./Form.css";
import Secondary from "../../Common/Heading/Secondery";
import Primary from "../../Common/Heading/Primery";
import { Icon } from "../../Utility/IconPath";
import { Images } from "../../Utility/imagePath";
const Form = () => {
  const [active, setActive] = useState();
  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <div
        className="Form_Main_Container Common_All_Main_Container"
        id="contact"
      >
        <div className="Form_Main_Heading">
          <Primary Heading1={"HERE'S A CONTACT FORM"} />
        </div>
        <div className="Form_Main_Sub_Heading">
          <Secondary Heading2={"Have Any Questions?"} />
        </div>
        <div className="Form_About_Text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
          condimentum turpis nisl sem, viverra habitasse urna ante lobortis
          fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
          accumsan.
        </div>
        <div className="From_Input_Container">
          <div className="Contact_Input">
            <div className={`Name_Input Input_Container `}>
              <input
                className="Name_User Input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div
              className={`Email_Input Input_Container ${
                active ? "Active" : ""
              }`}
            >
              <input className="Email Input" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="Massage_Input">
            <textarea
              className="Query Input"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Massage..."
              required
              onKeyUp={adjustTextareaHeight}
            ></textarea>
            <div className="Submit_Button">
              <h3 className="Submit_Text">Send</h3>
              <img
                src={Icon.NextArrow_Logo}
                alt=""
                className="NextArrow_Logo"
              />
            </div>
          </div>
        </div>
        <div className="Contact_Container">
          <div className="Phone_Container">
            <div className="Logo_Number_Container">
              <img src={Icon.Call_Logo} alt="" className="Contact_Logo" />
              MY PHONE
            </div>
            <div className="Contact_Number">(+881) 111 222 333</div>
          </div>
          <div className="Phone_Container">
            <div className="Logo_Number_Container">
              <img src={Icon.Massage_Logo} alt="" className="Contact_Logo" />
              MY EMAIL
            </div>
            <div className="Contact_Number">name@mydomain.com</div>
          </div>
          <div className="Phone_Container">
            <div className="Logo_Number_Container">
              <img src={Icon.Location} alt="" className="Contact_Logo" />
              MY ADDRESS
            </div>
            <div className="Contact_Number">
              123 New York D Block 1100, 2011 USA
            </div>
          </div>
        </div>
      </div>
      <div className="Map_Container">
        <img src={Images.Map_IMG} alt="" className="Map_IMG" />
      </div>
    </>
  );
};

export default Form;
