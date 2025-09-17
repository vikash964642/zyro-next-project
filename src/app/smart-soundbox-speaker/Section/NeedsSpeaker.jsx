"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const CardSlide = [
  {
    heading: "Boosts Customer Trust",
    paragraph: "Earn instant credibility with clear, reliable transaction alerts.",
  },
  {
    heading: "Robust Data Security",
    paragraph: "Your data stays protected with advanced encryption and secure protocols.",
  },
  {
    heading: "Smart Dashboard & TMS Access",
    paragraph: "Easily monitor transactions, manage devices, and access insights in real time.",
  },
];

function NeedsSpeaker() {
  const [showExtra, setShowExtra] = useState(false);
  const handleToggle = () => setShowExtra((prev) => !prev);

  return (
    <section className="mt-[150px]">
      <div className="max-w-screen-lg mx-auto  px-[20px] xl:px-0">
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="BusinessCardGradient"></div>
          </div>

          <h2 className="text-[34px] font-semibold text-center text-[#FFF] businessCardheaderColor1 ">
           Why Every Business Needs a <br /> Payments Speaker
          </h2>

          <div
            className="w-full bg-no-repeat bg-cover bg-center mt-[50px] py-6"
            style={{ backgroundImage: `url('/image/ExpenseManagement/bgGradiant.webp')` }}
          >
            <div className="flex items-center gap-6">
              {CardSlide.map((card, index) => (
                <div key={index} className="relative flex items-center gap-4 px-2">
                  <div className="rounded-xl h-full">
                    <h3 className="text-[18px] lg:text-[20px] text-[#FFF] font-semibold lg:leading-[31px] leading-[25px]">
                      {card.heading}
                    </h3>
                    <p className="text-[16px] lg:font-semibold font-normal lg:leading-[28px] leading-[22px] text-[#F3F3F3] mt-[16px]">
                      {card.paragraph}
                    </p>
                  </div>
                  {index !== CardSlide.length - 1 && (
                    <img src={'/image/ExpenseManagement/line.svg'} alt="line" className="h-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="relative p-[18px] rounded-[10px]  bg-[#080219]">
            <h2 className="text-[24px] mt-[16px] font-semibold mb-[45px] businessCardheaderColor2">
             Why Every Business Needs a Payments Speaker
            </h2>

            {CardSlide.map((card, index) => (
              <div key={index}>
                <h3 className="text-[20px] text-[#EAEAEA] font-medium mt-[9px]">
                  {card.heading}
                </h3>
                <p className="text-[16px] font-normal text-[#777A88] mt-[16px]">
                  {card.paragraph}
                </p>
                {index !== CardSlide.length - 1 && (
                  <div className="border-b border-bordercolor1 my-6"></div>
                )}
              </div>
            ))}

            {/* Show toggle only if you have more than 3 cards */}
            {CardSlide.length > 3 && (
              <>
                <AnimatePresence>
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
                          <h3 className="text-[20px] text-[#EAEAEA] font-medium mt-[9px]">
                            {card.heading}
                          </h3>
                          <p className="text-[16px] font-normal text-[#777A88] mt-[16px]">
                            {card.paragraph}
                          </p>
                          {!isLast && (
                            <div className="border-b border-[#A901A3] my-6"></div>
                          )}
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
                      src={'/image/AngleDown.png'}
                      alt={showExtra ? "Collapse" : "Expand"}
                      className={`transition-transform duration-300 ${
                        showExtra ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeedsSpeaker;
