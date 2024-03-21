import React, { useState } from "react";
import "./Form.css";
import Secondary from "../../Common/Heading/Secondery";
import Primary from "../../Common/Heading/Primery";
import { Icon } from "../../Utility/IconPath";
import { useForm, ValidationError } from "@formspree/react";
import Input from "../../Try/Try";

const Form = () => {
  const [state, handleSubmit] = useForm("xoqgnprl");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
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
        <form
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div className="From_Input_Container">
            <div className="Contact_Input">
              <div className="Name_Input Input_Container">
                <Input
                  Type="Name"
                  required
                  value={name}
                  name="name"
                  onchange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="Email_Input Input_Container ">
                <Input
                  Type="Email"
                  required
                  value={email}
                  name="email"
                  onchange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="Massage_Input">
              <textarea
                className="Query Input"
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Message..."
                required
                value={message}
                autoComplete=""
                onKeyUp={adjustTextareaHeight}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" className="Submit_Button">
                Send
                <img
                  src={Icon.NextArrow_Logo} 
                  alt=""
                  className="NextArrow_Logo"
                />
              </button>
            </div>
          </div>
        </form>
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
        {/* <img src={Images.Map_IMG} alt="" className="Map_IMG" />
         */}
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Titiwangsa Sentral condominium&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://strandsgame.net/">Strands NYT</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
