"use client";
import { useRef } from 'react';

const sliders = [
  {
    image: '/image/ExpenseManagement/UserOnboarding.svg',
    Head: "User\nOnboarding",
    paragraph: "Quick and simple digital signup"
  },
  {
    image: '/image/ExpenseManagement/KYC.svg',
    Head: "Complete\nKYC",
    paragraph: "Secure, compliant identity verification"
  },
  {
    image: '/image/ExpenseManagement/CardIssu.svg',
    Head: "Card\nIssuance",
    paragraph: "Set limits and issue cards by category"
  },
  {
    image: '/image/ExpenseManagement/AutoApprovels.svg',
    Head: "Auto\nApprovals",
    paragraph: "Instant approval for policy compliant spends"
  },
  {
    image: '/image/ExpenseManagement/TrackSpending.svg',
    Head: "Track\nSpending",
    paragraph: "Secure, compliant identity verification"
  }
];

function SignupTracking() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="mt-[100px] lg:mt-[200px]">
      <div className='max-w-full lg:max-w-screen-lg lg:mx-auto   relative'>
      <div className='signupTracking-Gradinat'></div>
      <div className='flex justify-center items-center'>
        <p className="signupTrackinghead text-white text-[28px] max-[360px]:text-[22px] max-[400px]:text-[25px] lg:text-[36px] font-medium text-center w-[382px] lg:w-[587px]">
          From Signup to Tracking - A Fully Digital Experience
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 mt-[68px] lg:mt-[92px] overflow-x-auto lg:overflow-x-hidden pb-2 cursor-grab hide-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`w-[175px] h-[284px] border border-[#4F31B4] rounded-[16.52px] flex-shrink-0
              ${index === 0 ? 'ml-4' : ''}`}
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="mt-[24px] ml-[19px]">
              <img
                src={slider.image}
                alt={slider.Head}
                className="h-[116px] w-[116px]"
              />
            </div>
            <p className="text-white text-[15px] lg:text-[16px] font-medium leading-[24px] ml-[19px] mt-[21px] whitespace-pre-line pb-[10px]">
              {slider.Head}
            </p>
            <p className="text-[13px] leading-[23px] text-[#C7C7C7] ml-[17px] mr-[6px]">
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default SignupTracking;
