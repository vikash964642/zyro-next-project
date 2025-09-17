
"use client";
import { useRef, useState } from 'react';

const cards = [
  {
    image: '/image/IMPSSwitch/BANLSliderImg1.svg',
    heading: "Error-Free Transactions",
    paragraph: "Ensure accuracy before payments go through",
  },
  {
    image: '/image/IMPSSwitch/BANLSliderImg2.svg',
    heading: "Enhanced Security",
    paragraph: "Prevent suspicious accounts via smart checks",
  },
  {
    image: '/image/IMPSSwitch/BANLSliderImg3.svg',
    heading: "Higher Conversation",
    paragraph: "Builds payer confidence to complete the payment",
  },
  {
    image: '/image/IMPSSwitch/BANLSliderImg4.svg',
    heading: "Better User Experience",
    paragraph: "Transparent, secure payments every time",
  },
    {
    image: '/image/IMPSSwitch/BANLSliderImg5.svg',
    heading: "Payment Reliability",
    paragraph: "Ensures trust in India’s digital payment ecosystem",
  },
];

function BANLSlider() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse leaves scroll area
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // While dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="mt-[190px]">
      <div className='max-w-full lg:max-w-screen-lg lg:mx-auto pl-[22px] xl:px-0 relative'>
     
        <h2 className="BANLSliderHeaderGradient text-center md:text-left text-white text-[24px] sm:text-[34px] lg:text-[38px] font-semibold">
       Why Choose BANL?
        </h2>
      <div
        ref={scrollRef}
        className={`flex gap-4 mt-[30px] overflow-x-auto lg:overflow-x-hidden pb-2 cursor-grab hide-scrollbar`}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => (
            <div  key={index} style={{
                background:
                  " linear-gradient(180deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }} className='flex justify-center items-center rounded-[15.4px] w-[296px] h-[340px] flex-shrink-0 scroll-snap-start'>
  <div
       
            className="bg-[#0B051E] rounded-[15.4px] p-[30px]  w-[calc(100%-2px)]  h-[calc(100%-2.5px)] "
          >
            <div>
              <img
                src={card.image}
                alt={card.heading}
                className="w-full object-contain"
              />
            </div>
            <div className="pt-[31.92px]">
              <h3 className="text-[#FFF] text-[17px] lg:leading-[30px] leading-[22.5px] font-semibold">
                {card.heading}
              </h3>
              <p className="text-[#9E9C9F] text-[16px] lg:leading-[23.46px] leading-[18px] font-normal pt-[10px]">
                {card.paragraph}
              </p>
            </div>
          </div>
            </div>
        
        ))}
      </div>
      </div>
    </section>
  );
}

export default BANLSlider;
