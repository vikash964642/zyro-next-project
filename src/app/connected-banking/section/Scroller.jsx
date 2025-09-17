
// import React from "react";
function Scroller() {
  const logos = [
    "/image/HomePage/icon/canara-icon.jpg",
    "/image/HomePage/icon/icici.jpg",
    "/image/HomePage/icon/idfc-icon.jpg",
    "/image/HomePage/icon/npci.jpg",
    "/image/HomePage/icon/pine-labs.jpg",
    "/image/HomePage/icon/yes-bank-icon.jpg",
    "/image/HomePage/icon/rbl-icon.jpg"
    
  ];

  return (
    <section className="max-w-screen-lg lg:mx-auto mx-4 scroller-section mt-[131px]">
      <h1>Our Partners</h1>
      <div className="slider">
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
       
    </section>
  );
}

export default Scroller;
