"use client";
import { useRef } from "react";
import Image from "next/image";

const sliders = [
  { image: '/assets/icons/multipal-bank.webp', paragraph: "Multiple Bank Account" },
  { image: '/assets/icons/real-time.webp', paragraph: "Real-Time Monitoring" },
  { image: '/assets/icons/account-to-account.webp', paragraph: "Account-to- Account Payments" },
  { image: '/assets/icons/seamless-fund.webp', paragraph: "Seamless Fund Transfers" },
  { image: '/assets/icons/user-friendly.png', paragraph: "User-Friendly Dashboard" },
  { image: '/assets/icons/account-system.webp', paragraph: "Accounting System  Integration" },
  { image: '/assets/icons/enhanced.webp', paragraph: "Enhanced Security" },
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
          Bank Account{" "}
          <span className="BankAccountManagementHeaderGradient font-semibold">
            Management Made{" "}
          </span>
          Simple & Easy
        </p>
      </div>
      <p className="BankAccountManagementHeaderGradientMob lg:hidden max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] font-semibold text-center">
        Bank Account Management made Simple & Easy
      </p>

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
            className="lg:w-[173.63px] w-[166.11px] h-[235.52px] rounded-[16.5px] lg:h-[247px] flex-shrink-0 scroll-snap-align-start bg-contain bg-center bg-no-repeat relative mx-[10px]"
          >
            {/* Background image */}
            <img
              src={'image/HomePage/CardImg2.svg'}
              alt="Card background"
              className="object-contain"
            />
            <div className="absolute top-0.5">
            <div className="lg:h-[116.47px] h-[109px] w-[109px] lg:w-[116.47px] flex items-center justify-center mt-[24.09px] ml-[19.27px] relative">
              <img
                src={'image/HomePage/CardImgBg2.svg'}
                alt="Card inner bg"
                className="object-cover"
              />
              <img
                src={slider.image}
                alt={slider.paragraph}
                width={56}
                height={56}
                className="h-[50px] lg:h-[56px] w-[50px] lg:w-[56px] absolute "
              />
            </div>

            <p className="text-white text-[15px] lg:text-[16px] lg:font-semibold font-medium leading-[24px] align-middle ml-[17px] mr-[9px] mt-[19.51px]">
              {slider.paragraph}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BankAccountManagement;
