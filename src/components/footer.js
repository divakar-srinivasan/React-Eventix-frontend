import React from "react";
import logo from "../images/EVENTIX.png";

const Footer = () => {
  return (
    <div className="w-full h-96 bg-black pt-10 ps-10">
    <hr></hr>
      <img src={logo} alt="loading" className="h-18 w-32" />
      <div className="flex grid grid-cols-3 my-5 ">
        <div>
          <h1 className="text-white">hello</h1>
        </div>
        <div>
          <h1 className="text-white">hello</h1>
        </div>
        <div>
          <h1 className="text-white">hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
