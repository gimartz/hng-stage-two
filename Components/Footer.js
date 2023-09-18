import React from "react";
import { NavLink } from "react-router-dom";
import { faFacebook,faTwitter,faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const data = [
    {
      icon: ` ${faFacebook}`,
      name: "Facebook",
      link: "https://facebook.com",
      id: 1,
    },
    {
      icon:` ${faTwitter}`,
      name: "Twitter",
      link: "https://twitter.com",
      id: 2,
    },
    {
      icon: `${faInstagram}`,
      name: "Instagram",
      link: "https://instagram.com",
      id: 3,
    },
    {
      icon: ` ${faYoutube}`,
      name: "Youtube",
      link: "https://youtube.com",
      id: 4,
    },
  ];
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
            {data.map((Val) => {
              return (
                <>
                  <NavLink to={`${Val.link}`}>
                    <button
                      className="col-sm-2 col-md-2 btn btn-dark"
                      key={Val.id}
                    >
                      <FontAwesomeIcon  size="lg" />
                      <br />
                      <h5 className="pt-1 fs-6">{Val.name}</h5>
                    </button>
                  </NavLink>
                </>
              );
            })}
            <div className="text-white footer1">
             ©2023  By: Chukwuka nonye
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
