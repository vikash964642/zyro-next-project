import { useRef } from "react";
import multipalbank3 from "/assets/icons/multipal-bank.webp";
import multipalbank4 from "/assets/icons/real-time.webp";
import multipalbank2 from "/assets/icons/account-to-account.webp";
import multipalbank1 from "/assets/icons/account-system.webp";
import multipalbank5 from "/assets/icons/seamless-fund.webp";
import multipalbank6 from "/assets/icons/enhanced.webp";
import multipalbank7 from "/assets/icons/user-friendly.png";

import CardBg2 from '/image/HomePage/CardImg2.svg'
import CardImgBg from '/image/HomePage/CardImgBg2.svg'
// Sample data
const sliders = [
  { image: multipalbank3, paragraph: "Multiple Bank Account" },
  { image: multipalbank4, paragraph: "Real-Time Monitoring" },
  { image: multipalbank2, paragraph: "Account-to- Account Payments" },
  { image: multipalbank5, paragraph: "Seamless Fund Transfers" },
  { image: multipalbank7, paragraph: "User-Friendly Dashboard" },
  { image: multipalbank1, paragraph: "Accounting System  Integration" },
  { image: multipalbank6, paragraph: "Enhanced Security" },
];

function BankAccountManagement() {
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

    <section className="max-w-screen-lg mx-auto px-[17px] md:px-[20px] xl:px-0 mt-[173px]">
    

       <div className="hidden lg:flex justify-center">
        <p className=" text-[#FFF]  font-medium lg:text-[36px]  text-center lg:w-[665px]">
          Bank Account <span className="BankAccountManagementHeaderGradient font-semibold">Management Made </span>
Simple & Easy
        </p>
      </div>
<p className="BankAccountManagementHeaderGradientMob lg:hidden max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] font-semibold text-center">Bank Account Management made Simple & Easy</p>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto lg:gap-[24px] lg:mt-[92px] mt-[68px] pr-[5%] pb-2 cursor-grab hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
          style={ {backgroundImage: `url(${CardBg2})`,
        
        }}
            className="lg:w-[173.63px] w-[166.11px] h-[216.52px] rounded-[16.5px] lg:h-[247px]  flex-shrink-0 scroll-snap-align-start bg-contain bg-center bg-no-repeat"
          >
            <div style={ {backgroundImage: `url(${CardImgBg})`,}} className="lg:h-[116.47px] h-[109px] w-[109px] lg:w-[116.47px]  flex items-center justify-center mt-[24.09px] ml-[19.27px]  bg-cover bg-center bg-no-repeat">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className="h-[50px] lg:h-[56px] w-[50px] lg:w-[56px]"
              />
            </div>
            <p className="text-white text-[15px] lg:text-[16px] lg:font-semibold font-medium leading-[24px] align-middle ml-[17px] mr-[9px] mt-[19.51px]">
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>     
    </section>
  );
}

export default BankAccountManagement;
