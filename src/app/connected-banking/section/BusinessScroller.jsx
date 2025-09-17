"use client";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./ConnectedBankingCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const cardsData = [
  {
    id: 1,
    video: '/video/Unified.webm',
    heading: "Unified Dashboard",
    paragraph:
      "View all your current account details, transactions, and balances clearly in a single dashboard.",
  },
  {
    id: 2,
    video: '/video/PaymentsManagement.webm',
    heading: "Payments Management",
    paragraph:
      "Make payments to vendors and receive payments from clients directly from the dashboard.",
  },
  {
    id: 3,
    video: '/video/Transparency.webm',
    heading: "Transparency and Accuracy",
    paragraph:
      "Ensure financial records are accurate and transparent, helping to reduce errors and mismatches.",
  },
];

export default function SnapScrollAutoSync() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const headingRefs = useRef([]);
  const cardRefs = useRef([]);
  const rightScrollRef = useRef();

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % cardsData.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + cardsData.length) % cardsData.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  // Observe left scroll for desktop sync
  useEffect(() => {
    const elements = headingRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    elements.forEach((ref) => ref && observer.observe(ref));

    return () => {
      elements.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  // Auto-scroll right card into view when activeIndex changes
  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    const container = rightScrollRef.current;
    if (card && container) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <section className="max-w-screen-lg lg:mx-auto lg:mt-[150px] mt-[100px]">
      <div className="flex justify-center items-center px-[16px]">
        <p className="text-[#FFF] text-center text-[24px] md:text-[26px] lg:text-[28px] max-[375px]:text-[22px] font-semibold md:w-[480px] BusinessScrollerHeaderGradient">
          One Dashboard To Manage All Your Business Accounts
        </p>
      </div>

      {/* Desktop Section */}
      <div className="hidden lg:flex h-[450px] mt-[30px] overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 h-[450px] businessScrollbar overflow-auto bg-black text-white snap-y snap-mandatory">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              data-index={index}
              ref={(el) => (headingRefs.current[index] = el)}
              className="h-[450px] flex items-center justify-center snap-start"
            >
              <video src={card.video} loop muted autoPlay playsInline />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div
          className="w-1/2 h-[450px] overflow-y-scroll hide-scrollbar pr-2"
          ref={rightScrollRef}
        >
          <div className="flex flex-col justify-between h-full px-6">
            {cardsData.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`h-[138px] w-full rounded-[20px] flex justify-center items-center ${
                  activeIndex === index
                    ? "Connecte_gradient-border2"
                    : "border-[0.4px] border-[#4E4E4E]"
                }`}
              >
                <div className="px-[20px] flex flex-col justify-center w-full h-full rounded-[20px]">
                  <h2
                    className={`text-[20px] font-medium ${
                      activeIndex === index ? "text-[#FFF]" : "text-[#CACACA]"
                    }`}
                  >
                    {card.heading}
                  </h2>
                  <p className="text-[#9E9C9F] text-[16px] font-normal pt-[8px]">
                    {card.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="lg:hidden flex flex-col items-center mt-[24px]">
        <div {...swipeHandlers} className="overflow-hidden w-full max-w-md">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cardsData.map((slide, index) => (
              <div
                key={index}
                className="flex-none w-[calc(100%-3.4rem)] flex flex-col items-center max-[375px]:px-[25px] px-[35px] py-[20px] bg-[#0B051E] ConnectedBusinessScrollerBorder mx-[27px]"
              >
                <div className="w-full">
                  <p className="text-[#FFFFFF] text-[18px] font-medium max-[375px]:text-[16px]">
                    {slide.heading}
                  </p>
                </div>
                <div className="w-full mt-[15px]">
                  <p className="text-[#C2C2C2] text-[14px] max-[375px]:text-[12.5px] font-normal">
                    {slide.paragraph}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-[#080219] pt-[20px] px-[16px] pb-[27px] border-[0.129px] border-[#646464] rounded-[12.8px] mt-[20px]">
                  <video src={slide.video} loop muted autoPlay playsInline />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex justify-center gap-5 mt-[45px]">
          <button
            onClick={handlePrev}
            className="rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
