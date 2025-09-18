"use client";
import { useEffect, useState } from "react";

const CardSlide = [
  {
    img: '/image/ExpenseManagement/ExpenseCustomControl.svg',
    heading1: "Custom",
    heading2:" Controls",
    paragraph: "Set rules, policies, and spending limits",
  },
  {
    img: '/image/ExpenseManagement/ExpenseLiveSpend.svg',
    heading1: "Live Spend ",
    heading2:" Insights",
    paragraph: "Stay informed with real-time spend alerts",
  },
  {
    img: '/image/ExpenseManagement/ExpenseFullAutomation.svg',
    heading1: "Full ",
    heading2: "Automation",
    paragraph: "Simplify workflows and reduce manual effort",
  },
];

function ControlAndClarity() {
  const [, setScreen] = useState("lg"); // default to lg
  // const [showExtra, setShowExtra] = useState(false);

  // const handleToggle = () => setShowExtra((prev) => !prev);

  // Cards to display (all vs first 4)

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreen("lg");
      } else if (width >= 640) {
        setScreen("sm");
      } else {
        setScreen("xsm");
      }
    };

    updateScreen(); // initial
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);
  return (
    <section className=" mt-[150px] lg:mt-[200px]">
      <div className="max-w-screen-lg lg:mx-auto  px-[7px] md:px-[20px]  xl:px-[0px]">
        <div className="hidden md:block">
          <div className="relative">
            <div className="BusinessCardGradient"></div>
          </div>

          <h2 className="md:text-[30px] lg:text-[34px] font-semibold text-center ControlAndClarityHeaderGradient ">
            Get Full Control & Clarity Over Every Spend
          </h2>
          <p className="text-[16px] leading-[25px] font-normal text-center text-[#A9A9A9] pt-[15px]">
            Monitor every rupee in real-time speed accuracy{" "}
          </p>

          <div
            className="w-full bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(/image/ExpenseManagement/bgGradiant.webp)`,
            }}
          >
            <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-[10px] sm:gap-y-[30px] mt-[50px]">
              {CardSlide.map((card, index) => {
                let plClass = "";
                let prClass = "";
                let imgClass = "";
                if (index === CardSlide.length - 1) {
                  imgClass = "hidden";
                } else {
                  imgClass = "block";
                }
                if (index === 1 || index === 4) {
                  plClass = "md:pl-[34px] min-[900px]:pl-[30px] lg:pl-[60px]";
                  prClass = "md:pr-[8px] lg:pr-[30px]";
                }
                 else if (index === 0 || index === 3) {
                  plClass = "pl-[5px]";
                  prClass = "pr-[22px] lg:pr-[52px]";
                } 
                else if (index === 2 || index === 5) {
                  plClass = "md:pl-[34px] lg:pl-[60px]";
                  prClass = "md:pr-[8px] lg:pr-[0px]";
                }
                return (
                  <div key={index} className="relative flex ">
                    <div
                      className={`rounded-xl overflow-hidden ${plClass} ${prClass}  transition duration-300 hover:shadow-xl h-full`}
                    >
                      <div className="bg-[#080219] w-[52px] h-[52px] border-[0.377px] ExpenseCardBorder rounded-[10.9px]  flex justify-center items-center">
                        <img
                          src={card.img}
                        
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-[18px] lg:text-[22px]  text-[#FFF] font-medium lg:font-semibold mt-[9px]">
                        {card.heading1}<span>{card.heading2}</span>
                      </h3>
                      <p className="text-[14px] lg:text-[16px] font-normal text-[#F3F3F3] mt-[16px]">
                        {card.paragraph}
                      </p>
                    </div>

                    <img src={'/image/ExpenseManagement/line.svg'} className={imgClass} alt="line" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="relative pt-[50px] pb-[80px]  px-[22px] rounded-[10px] overflow-hidden  bg-[#080219]">
            <div className="ControlAndClarityGradientTop"></div>
              <div className="ControlAndClarityGradientMiddle"></div>
                <div className="ControlAndClarityGradientBottom"></div>
            <h2 className="max-[360px]:text-[21px] max-[400px]:text-[22.5px]  max-[360px]:pr-[0px] text-[24px] font-semibold pt-[28px] ControlAndClarityHeaderGradient ">
            Get Full Control & Clarity Over Every Spend
            </h2>
                   <p className="max-[360px]:text-[14px] text-[16px]  font-normal lg:text-center text-[#A9A9A9] pt-[6px]">
            Monitor every rupee in real-time speed accuracy
          </p>
<div className="grid  max-[360px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-[65px] max-[360px]:flex max-[360px]:flex-col max-[360px]:items-center mt-[54px]">

            {CardSlide.map((card, index) => (
              <div key={index}>
                <div className="flex items-center gap-[17px]">

                <div className="bg-[#080219] p-2 w-[40px] h-[40px] rounded-[8.389px] border-[0.341px] ExpenseCardBorder flex justify-center items-center">
                  <img src={card.img}  />
                </div>
                <div>
                  <h3 className=" text-[13.741px] text-[#E5E5E5] font-semibold ">
                  {card.heading1}
                </h3>
                 <h3 className="text-[13.741px] text-[#E5E5E5] font-semibold">
                  {card.heading2}
                </h3>
                </div>
                </div>
                <img src={'/image/ExpenseManagement/HorizentalSeperator.svg'} className="mt-[13.5px]"/>
                <p className=" text-[12.5px] font-medium w-[150px] text-[#E5E5E5] mt-[13px]">
                  {card.paragraph}
                </p>
                {/* <div
                  className={`mb-6 mt-[32px] ${
                    index !== arr.length - 1 || showExtra
                      ? " border-businessCardBorder1"
                      : ""
                  }`}
                ></div> */}
              </div>
            ))}
</div>
            {/* Animate only the extra cards (5th and 6th) */}

            {/* <AnimatePresence>
              {showExtra &&
                CardSlide.slice(3).map((card, index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px] border-[0.341px] border-[#A901A3] flex justify-center items-center">
                        <img src={card.img} alt={card.heading} />
                      </div>
                      <h3 className="text-[20px] text-[#EAEAEA] font-medium mt-[9px]">
                        {card.heading}
                      </h3>
                      <p className="text-[16px] font-normal text-[#777A88] mt-[16px]">
                        {card.paragraph}
                      </p>
                      <div
                        className={`overflow-hidden mb-6 mt-[32px] ${
                          !isLast ? " border-businessCardBorder1" : ""
                        }`}
                      ></div>
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            <div className="flex justify-center mt-2">
              <button
                onClick={handleToggle}
                className="absolute h-[40px] w-[40px] rounded-full bg-[#6F41D2] flex justify-center items-center shadow-md"
              >
                <img
                  src={AngleDown}
                  alt={showExtra ? "Collapse" : "Expand"}
                  className={`transition-transform duration-300 ${
                    showExtra ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlAndClarity;
