"use client"
import  {useEffect,useRef, useState } from "react";

const cardData = [
  {
    image: '/image/Prepaid/staticCardImg1.webp',
    heading: "Instant Top-Up",
    heading1: "Instant",
    heading2: "Top-Up",
    paragraph: "Add money via UPI directly from your ZyroPay app.",
  },
  {
    image: '/image/Prepaid/staticCardImg2.webp',
    heading: "Fast Access",
    heading1: "Fast",
    heading2: "Access",
    paragraph: "Spend your balance with just a few taps.",
  },
  {
    image: '/image/Prepaid/staticCardImg3.webp',
    heading: "24/7 Availability",
    heading1: "24/7",
    heading2: "Availability",
    paragraph: "Real-time processing, day or night.",
  },
];

export default function HoverSlideCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prevIndexRef = useRef(null);

  useEffect(() => {
    prevIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  return (
    <section className="max-w-screen-lg mx-auto max-[360px]:px-[15px] px-[30px] xl:px-[10px] relative lg:mt-[80px] mt-[110px]">
      <h2 className="text-[24px] lg:text-[36px] font-medium cardBoxHeaderGradient text-center">
        Load & Spend Funds Instantly
      </h2>
      <p className="text-[16px] lg:text-[20px] font-normal text-[#A9A9A9] text-center pt-[10px]">
        Use your money anytime with ease and speed
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[40px] justify-items-center">
        {cardData.map((card, index) => {
          const isActive = hoveredIndex === index;
          return (
            <div
              key={index}
              className="relative w-full h-[240px] lg:h-[280px] rounded-[16.51px] overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Default View */}
              <div
                className={`cardBoxGradient3 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[16.51px] ${
                  isActive
                    ? "transition-all duration-500 ease-in-out opacity-0 translate-y-full"
                    : "transition-all duration-200 ease-in-out opacity-100 translate-y-0"
                }`}
              >
                <div className="px-[24px] pt-[35px] pb-[40px] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#0B051E] rounded-[16.51px] flex flex-col justify-between">
                  <img src={card.image} className="h-[42px] w-[42px]" />
                  <div>
                    <h3 className="text-[30px] lg:text-[32px] text-[#E5E5E5] font-medium">
                      {card.heading1}
                    </h3>
                    <h3 className="text-[30px] lg:text-[32px] text-[#E5E5E5] font-medium">
                      {card.heading2}
                    </h3>
                  </div>
                </div>
                <div className="staticCardBoxGradient"></div>
              </div>

              {/* Hover View */}
              <div
                className={`cardBoxGradient2 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[16.51px] transition-all duration-500 ${
                  isActive
                    ? " ease-in-out opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                <div className="bg-[#0B051E] rounded-[16.51px] w-[calc(100%-2px)] h-[calc(100%-2px)] flex flex-col justify-between px-[24px] pt-[35px] pb-[40px]">
                  <div className="flex w-full justify-between items-center">
                    <h3 className="text-[21.236px] font-semibold text-white">
                      {card.heading}
                    </h3>
                    <img
                      src={card.image}
                      alt=""
                      className="h-[28px] w-[28px]"
                    />
                  </div>
                  <p className="text-[16px] lg:text-[16.41px] text-[#E5E5E5] font-medium w-[175px]">
                    {card.paragraph}
                  </p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
