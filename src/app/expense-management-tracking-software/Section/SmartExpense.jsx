"use client";
import { useRef, useState } from 'react';

const cards = [
  {
    image: '/image/ExpenseManagement/heFinance.svg',
    heading: "HR & Finance Teams",
    paragraph: "Simplify approvals, manage budgets, and automate reimbursements with ease.",
  },
  {
    image: '/image/ExpenseManagement/sales&field.svg',
    heading: "Sales & Field Employees",
    paragraph: "Capture and submit expenses on the go, anytime, anywhere.",
  },
  {
    image: '/image/ExpenseManagement/startups.svg',
    heading: "Startups, SMEs & Enterprises",
    paragraph: "Scale expense management with full visibility, control, and compliance.",
  },
  {
    image: '/image/ExpenseManagement/travel.svg',
    heading: "Travel-Intensive Businesses",
    paragraph: "Scale expense management with full visibility, control, and compliance.",
  },
];

function SmartExpense() {
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
    <section className="mt-[200px]">
      <div className='max-w-full lg:max-w-screen-lg lg:mx-auto  relative'>
      <div className="text-center">
        <p className="smartExpenseHead text-white text-[24px] lg:text-[32px] font-semibold">
          Smart Expense Solution, <br className="hidden lg:block" />
          Designed for You
        </p>
      </div>
            <div className='smartExpense-gradiant'></div>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className={`flex gap-4 mt-[68px] lg:mt-[80px] overflow-x-auto lg:overflow-x-hidden pb-2 cursor-grab hide-scrollbar`}
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
          <div
            key={index}
            className="bg-[#0B051E] rounded-[16px] p-[21px] w-[221px] lg:w-[295px] lg:h-[364px] h-[273px] text-left border-[0.6px] border-[#4F31B4] flex-shrink-0 scroll-snap-start"
          >
            <div>
              <img
                src={card.image}
                alt={card.heading}
                className="h-[100px] w-[177px] lg:h-[134px] lg:w-[237px] object-contain"
              />
            </div>
            <div className="pt-[23px]">
              <h3 className="text-white text-[13px] lg:text-[17px] lg:leading-[30px] leading-[22.5px] font-semibold">
                {card.heading}
              </h3>
              <p className="text-[#9E9C9F] text-[12px] lg:text-[16px] lg:leading-[23.46px] leading-[18px] font-normal pt-[10px] pl-[10px]">
                {card.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default SmartExpense;
