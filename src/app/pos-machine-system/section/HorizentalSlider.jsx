
"use client";
import { useRef } from "react";

// Sample data
const sliders = [
  { image: '/image/Pos/HorizentalSliderImg1.webp',heading1:"Competitive ",heading2:"Pricing", paragraph: "Low rental fees and leading MDR rates for affordable card payments." },
  { image: '/image/Pos/HorizentalSliderImg2.webp',heading1:"Dashboard ",heading2:"Access", paragraph: "Track all your sales, refunds, settlements & reports in one live dashboard." },
  { image: '/image/Pos/HorizentalSliderImg3.webp',heading1:"User-Friendly ",heading2:"Device", paragraph: "Lightweight, compact, and portable device built for fast, efficient billing." },
  { image: '/image/Pos/HorizentalSliderImg4.webp',heading1:"Bank-Level ",heading2:"Security", paragraph: "Fully PCI DSS certified to ensure safe and compliant digital transactions." },
  { image: '/image/Pos/HorizentalSliderImg5.webp',heading1:"On-Field  ", heading2:"Support",paragraph: "Get onboarding and in-person assistance in select locations." },
];

function HorizentalSlider() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="max-w-screen-lg lg:mx-auto mx-4 lg:px-[16px] xl:px-0 mt-[180px] relative">
      <div className="HoriZentalSliderGradientTop"></div>
      <div>
        <p className="HorizentalSliderHeaderGradient max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] md:text-[31px] lg:text-[34px] font-semibold text-center lg:text-start">
       Why Choose ZYRO POS?
        </p>
      </div>

      <div
        ref={scrollRef}
        className="relative flex overflow-x-auto gap-[22px] lg:gap-[31px] lg:mt-[65px] mt-[50px]  pb-2 cursor-grab hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={` h-[280px] w-[186px] sm:w-[210px] lg:w-[250px] lg:h-[350px] lg:py-[22px] lg:px-[16px] py-[16px] px-[12px]  border-[0.287px] lg:border-[0.4px] last-mt HorizentalSliderBorder rounded-[7.167px] lg:rounded-[10px] flex-shrink-0 scroll-snap-align-start ${
      index === sliders.length - 1 ? 'lg:mr-3' : ''}`}
          >
            <div className="lg:h-[95px] h-[68px] w-[68px] lg:w-[95px] rounded-[14.333px] md:rounded-[17px] lg:rounded-[20px] border-[0.688px] border-border20 bg-[#080219] flex items-center justify-center ">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className="h-[38px] lg:h-[56px] w-[38px] lg:w-[56px]"
              />
            </div>
            <div className="text-[#FFF] text-[14.333px] sm:text-[17px] lg:text-[20px] font-semibold lg:pt-[20px] pt-[13.7px] leading-[23px] lg:leading-[32px]">
  <p className="">{slider.heading1}</p>
   <p className="">{slider.heading2}</p>
            </div>
          
            <p className="text-[#9E9C9F] text-[11.467px] sm:text-[14px] lg:text-[16px] font-normal  lg:pt-[26px] pt-[18.5px] leading-[23px]" >
              {slider.paragraph}
            </p>
           
          </div>
        ))}
         <div className="HoriZentalSliderGradientBottom1"></div>
          <div className="HoriZentalSliderGradientBottom2"></div>
      </div>
    </section>
  );
}

export default HorizentalSlider;
