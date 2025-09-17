"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
// import '../Pages/ConnectedBankingPage/section/ConnectedBankingCss.css';

function FAQUtils({ heading, subheading, faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section >
      <div className="max-w-screen-lg lg:mx-auto mt-[120px] lg:mt-[150px] px-4 xl:px-0 relative">
        <div className="flex justify-center">
          <div className="max-[360px]:w-[275px] max-[400px]:w-[300px] w-[350px] md:w-[400px] lg:w-[443px] faq-utils-bgGradient"></div>
        </div>

        <div className="flex flex-col items-center pb-11 md:pb-25">
          <h2 className="max-[360px]:text-[20px] text-[24px] lg:text-[32px] font-semibold mt-5 faq-gradient text-center">
            {heading}
          </h2>
          <p className="max-[360px]:text-[12px] text-[#959595] text-[14px] lg:text-[20px] font-medium text-center pt-[7px]">
            {subheading}
          </p>
        </div>

        <div className="w-auto">
          {faq.map((item, i) => (
            <div key={i} className="py-[25px] md:py-[35px] border-b-[2px] border-[#555]">
              <div
                className="cursor-pointer"
                onClick={() => toggleOpen(i)}
              >
                <div className="flex justify-between items-center gap-[15px]">
                  <span className="max-[360px]:text-[14px] text-[#DBDBDB] lg:text-[20px] text-[16px] font-medium">
                    {item.ques}
                  </span>
                  <img
                    src={'/image/ConnectedBanking/FAQArrow.svg'}
                    className={`transition-transform duration-300 h-[20px] w-[20px] md:h-[28px] md:w-[28px] ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    alt="Toggle"
                  />
                </div>
              </div>

              {/* Animate answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="max-[360px]:text-[12px] text-[#9E9C9F] lg:text-[16px] text-[14px] font-normal mt-[10px] md:mt-[20px] overflow-hidden pr-[60px]"
                  >
                    {item.ans}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FAQUtils.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  faq: PropTypes.arrayOf(
    PropTypes.shape({
      ques: PropTypes.string.isRequired,
      ans: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQUtils;
