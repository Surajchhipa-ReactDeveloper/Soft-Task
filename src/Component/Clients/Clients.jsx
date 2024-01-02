import React from "react";
import "./Clients.css"
import Primary from "../../Common/Heading/Primery";
import { Icon } from "../../Utility/IconPath";

const Clients = () => {
  return (
    <>
      <div className="Clients_Main_Container">
        <div className="Clients_Main_Heading">
          <Primary Heading1={"OUR LATEST CLIENTS"} />
        </div>
        <div className="Clients_Company_NAme_Container">
          <img src={Icon.Coca_Cola_Logo} alt="" className="Client_Logo" />
          <img src={Icon.Apple_Logo} alt="" className="Client_Logo" />
          <img src={Icon.NetFlix_Logo} alt="" className="Client_Logo" />
          <img src={Icon.Amazon_Logo} alt="" className="Client_Logo" />
          <img src={Icon.Stripe_Logo} alt="" className="Client_Logo" />
        </div>
      </div>
    </>
  );
};

export default Clients;
