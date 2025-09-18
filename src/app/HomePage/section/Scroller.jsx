import Image from "next/image";
function Scroller() {
  const logos = [
    "/image/HomePage/Icon/yesIcon.jpg",
    "/image/HomePage/Icon/idfcIcon.jpg",
    "/image/HomePage/Icon/au.svg",
    "/image/HomePage/Icon/fino.svg",
    "/image/HomePage/Icon/canaraIcon.jpg",
    "/image/HomePage/Icon/npci.svg",
  ];

  return (
    <section className="max-w-screen-lg mx-auto scroller-section mt-[130px]">
      <h3 className="text-[23px] font-normal pb-[32px]">
        Our Trusted Partners
      </h3>
      <div className="slider relative">
        <div className="scroller-left-gradient"></div>
        <div className="slider-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <Image width={200} height={45} src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
        <div className="scroller-right-gradient"></div>
      </div>
    </section>
  );
}

export default Scroller;
