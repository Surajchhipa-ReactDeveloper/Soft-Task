import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Images } from "../../Utility/imagePath";
import { Icon } from "../../Utility/IconPath";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(true);
  const HandleClose = () => {
    setOpenNavbar(true);
  };

  useEffect(() => {
    if (!openNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openNavbar]);

  return (
    <>
      <div className="Navbar">
        <div className="navbar_left_logo">
          <img src={Images.Logo_Full_IMG} alt="" className="Main_Logo" />
        </div>
        <div className="navbar_Right_item">
          <div className={openNavbar ? "NavBar_links" : "Mobile_Navbar"}>
            <ul className="Navigation_links">
              <li>
                <Link to="about" spy={true} onClick={HandleClose}>
                  ABOUT
                </Link>
              </li>

              <li>
                <Link to="service" spy={true} onClick={HandleClose}>
                  SERVICE
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} onClick={HandleClose}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="clients" spy={true} onClick={HandleClose}>
                  CLIENTS
                </Link>
              </li>
              <li>
                <Link to="work" spy={true} onClick={HandleClose}>
                  WORK
                </Link>
              </li>
              <li>
                <Link to="statistics" spy={true} onClick={HandleClose}>
                  STATISTICS
                </Link>
              </li>
              <li>
                <Link to="blog" spy={true} onClick={HandleClose}>
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} onClick={HandleClose}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="Menu_button_container">
            <div
              className={`Open_Bar ${openNavbar ? "CloseBar" : ""}`}
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              {openNavbar ? (
                <img
                  src={Icon.OpenMenu_Logo}
                  alt=""
                  className=" Hamburger_Menu"
                />
              ) : (
                <img
                  src={Icon.CloseMenu_Logo}
                  alt=""
                  className="Hamburger_Menu close_Menu"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
