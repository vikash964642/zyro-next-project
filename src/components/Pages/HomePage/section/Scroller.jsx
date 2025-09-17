// import React from "react";

import canara from '/image/HomePage/Icon/canaraIcon.jpg'
import idfcIcon from '/image/HomePage/Icon/idfcIcon.jpg'
import yesIcon from '/image/HomePage/Icon/yesIcon.jpg'
import au from '/image/HomePage/Icon/au.svg'
import fino from '/image/HomePage/Icon/fino.svg'
import npci from '/image/HomePage/Icon/npci.svg'
function Scroller() {
  const logos = [

    yesIcon,
    idfcIcon,
    au,
    fino,
    canara,
    npci
   

  ];

  return (
    <section className="max-w-screen-lg mx-auto scroller-section mt-[130px]">
      <h3 className="text-[23px] font-normal pb-[32px]">Our Trusted Partners</h3>
      <div className="slider relative">
        <div className="scroller-left-gradient"></div>
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller-right-gradient"></div>
      </div>
    </section>
  );
}

export default Scroller;
