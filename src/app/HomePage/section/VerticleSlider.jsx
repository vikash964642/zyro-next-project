"use client";


import { useState } from "react";
import './HomePageCss.css'
const contents = [
  {
    id: 1,
    title: "Fast Onboarding ",
    paragraph:
      "Set up your account quickly and start managing your finances with ease.   ",
  },
  {
    id: 2,
    title: "Real-Time Tracking ",
    paragraph:
      "Track your business finances and transactions in real-time for better control.",
  },
  {
    id: 3,
    title: "User-Friendly Dashboard  ",
    paragraph:
      "Manage accounts, view reports, and track financial performance with our simple, intuitive interface. ",
  },
  {
    id: 4,
    title: "Robust Security  ",
    paragraph:
      "Keep your business transactions safe with advanced encryption and secure payment solutions. ",
  },
  {
    id: 5,
    title: "Scalable Solutions ",
    paragraph:
      "Suitable for businesses of all sizes, from startups to large enterprises. ",
  },
  {
    id: 6,
    title: "24/7 Customer Service  ",
    paragraph:
      "Get expert customer service anytime through email, phone, or WhatsApp. ",
  },
];

export default function VerticleSlider() {
  const [activeIndices, setActiveIndices] = useState([0]);
  const lastIndex = activeIndices[activeIndices.length - 1];

  const handleClick = (index) => {
    const updated = contents.map((_, i) => i).filter((i) => i <= index);
    setActiveIndices(updated);
  };

  return (

    <section className="max-w-screen-lg mx-auto px-4 mt-[170px] lg:mt-[200px]">

      <div className="max-w-screen-lg mx-auto px-4 ">
        <h2 className="max-[360px]:text-[25px] text-center text-[28px] lg:text-[48px] text-white90 font-medium mb-12">
        Why <span className="verticlesliderZyroGradient max-[360px]:text-[25px]   text-[28px] lg:text-[48px] font-bold">ZYRO</span> is perfect for your Business
      </h2>

      {/* --- Desktop Layout --- */}
      <div className="relative hidden lg:flex w-full h-[410px] rounded-md overflow-hidden  border-[0.666px] border-[#3A3C42]">
        {/* Left Titles */}
        <div className="flex items-stretch transition-all duration-500">
          {activeIndices.slice(0, -1).map((index) => (
            <div
              key={contents[index].id}
              className="w-[105px] min-w-[80px] border-r-[0.666px] border-[#3A3C42] py-[25px] flex justify-center cursor-pointer transition-transform duration-500"
              onClick={() => handleClick(index)}
            >
              <p
                className="text-[#686868] text-[23px] font-semibold"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                }}
              >
                {contents[index].title}
              </p>
            </div>
          ))}
        </div>

        {/* Active Content */}
        <div
          key={lastIndex}
          className="flex-1 bg-[#0B0618] flex flex-col justify-center px-[40px] py-8 transition-all duration-500 animate-fadeIn"
        >
          <p className="text-white text-[32px] font-medium">
            {contents[lastIndex].title}
          </p>
          <p className="text-white70 text-[21.4px] font-normal max-w-xl mt-[30px]">
            {contents[lastIndex].paragraph}
          </p>
        </div>

        {/* Right Titles */}
        <div className="flex items-stretch transition-all duration-500">
          <div className="VerticleSliderGradient"></div>
          {contents.map((item, idx) =>
            !activeIndices.includes(idx) ? (
              <div
                key={item.id}
                className="w-[105px] min-w-[80px] border-l-[0.666px] border-[#3A3C42]"
              >
                <button
                  onClick={() => handleClick(idx)}
                  className="w-full h-full px-2 py-[25px] flex justify-center items-end transition-all duration-500"
                >
                  <span
                    className="block text-[#686868] text-[23px] font-semibold vertical-rl rotate-180"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {item.title}
                  </span>
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* --- Mobile Layout --- */}
      <div className="flex lg:hidden flex-col  rounded-md overflow-hidden border-[0.666px] border-[#3A3C42] border-b-0">
        <div className="flex flex-col">
          {contents.slice(0, lastIndex).map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleClick(idx)}
              className="w-full h-[70px] p-3 text-[#686868] text-[18px] max-[360px]:text-[16px] font-medium text-left border-b-[0.666px] border-[#3A3C42] hover:bg-[#1C1C1F]"
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="p-[28px] min-h-[250px] bg-[#0B0618] transition-all duration-500 animate-fadeIn">
          <p className="text-white text-[28px] max-[360px]:text-[25px] font-medium mb-2">
            {contents[lastIndex].title}
          </p>
          <p className="text-white70 text-[16px] max-[360px]:text-[15px] font-normal">
            {contents[lastIndex].paragraph}
          </p>
        </div>

        <div className="relative flex flex-col border-t-[0.666px] border-[#3A3C42] overflow-hidden">
          <div className="VerticleSliderGradientMob"> </div>
          {contents.slice(lastIndex + 1).map((item, idx) => {
            const trueIdx = lastIndex + 1 + idx;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(trueIdx)}
                className="w-full h-[70px] p-3 text-[#686868] text-[18px] max-[360px]:text-[16px] font-medium text-left border-b-[0.666px] border-[#3A3C42] hover:bg-[#1C1C1F]"
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
