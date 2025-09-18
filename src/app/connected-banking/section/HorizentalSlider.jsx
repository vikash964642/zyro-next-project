
// "use client";
// import { useRef } from "react";

// // Sample data
// const sliders = [
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg1.png',heading:"Real-Time Tracking", paragraph: "Our platform provides real-time balance updates, instant transaction tracking, and payment monitoring without any delays." },
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg4.png',heading:"Automated Reconciliation", paragraph: "Automatically match payments, bank statements, and records to save time and improve financial accuracy." },
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg6.png',heading:"Better Customer Experience", paragraph: "Facilitate faster payment processing and smooth financial services to enhance client satisfaction and trust" },
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg3.png',heading:"Customizable Financial Reports", paragraph: "Generate comprehensive financial reports to monitor business performance and support informed decision-making." },
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg5.png',heading:"Complete Financial Control", paragraph: "Easily track, manage, and monitor your cash flow for efficient and transparent financial operations." },
//   { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg2.png',heading:"Scalability for Growth", paragraph: "From startups to large enterprises, our platform grows and adapts seamlessly with your business needs." },
// ];

// function HorizentalSlider() {
//   const scrollRef = useRef(null);
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   const handleMouseDown = (e) => {
//     isDown = true;
//     scrollRef.current.classList.add("cursor-grabbing");
//     startX = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const handleMouseLeave = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("cursor-grabbing");
//   };

//   const handleMouseUp = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("cursor-grabbing");
//   };

//   const handleMouseMove = (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <section className="max-w-screen-lg mx-auto  mt-[100px] lg:mt-[200px] px-[20px] xl:px-0 relative">
//       <div className="HorizentalSliderGradient"></div>
//       <div>
//         <p className="HorizentalSliderHeaderGradient max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] lg:text-[32px] font-semibold text-center">
//      Experience the Benefit of Connected Banking 
//         </p>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto lg:gap-[30px] gap-[22px] lg:mt-[65px] mt-[50px]  pb-2 cursor-grab hide-scrollbar"
//         style={{ scrollSnapType: "x mandatory" }}
//         onMouseDown={handleMouseDown}
//         onMouseLeave={handleMouseLeave}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseMove}
//       >
//         {sliders.map((slider, index) => (
//           <div
//             key={index}
//             className={`lg:w-[260px] w-[187px] lg:pt-[22px] lg:pb-[17px] lg:px-[16px] pt-[15px] pb-[12px] px-[12px]  border-[0.287px] lg:border-[0.4px] last-mt border-[rgba(74,74,74,0.3)] rounded-[7.167px] flex-shrink-0 scroll-snap-align-start ${
//       index === sliders.length - 1 ? 'lg:mr-3' : ''}`}
//           >
//             {/* Connecte_gradient-border2 */}
//         <div className="Connecte_gradient-border2 lg:h-[95px] h-[68px] w-[68px] lg:w-[95px] rounded-[14.333px] lg:rounded-[20px] flex justify-center items-center">
//               <div className=" rounded-[14.333px] lg:rounded-[20px]  bg-[#080219] flex items-center justify-center ">
//               <img
//                 src={slider.image}
//                 alt={slider.paragraph}
//                 className="h-[38px] lg:h-[56px] w-[38px] lg:w-[56px]"
//               />
//             </div>
//         </div>
//             <p className="text-[#FFF] text-[14.333px] lg:text-[20px] font-semibold lg:pt-[18px] pt-[13px]">{slider.heading}</p>
//             <p className="text-[#9E9C9F] text-[11.467px] lg:text-[16px] font-normal  lg:pt-[18px] pt-[13px]" >
//               {slider.paragraph}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HorizentalSlider;








"use client"
import { useRef } from "react";


// Sample data
const sliders = [
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg1.png',heading:"Real-Time Tracking", paragraph: "Our platform provides real-time balance updates, instant transaction tracking, and payment monitoring without any delays." },
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg4.png',heading:"Automated Reconciliation", paragraph: "Automatically match payments, bank statements, and records to save time and improve financial accuracy." },
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg6.png',heading:"Better Customer Experience", paragraph: "Facilitate faster payment processing and smooth financial services to enhance client satisfaction and trust" },
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg3.png',heading:"Customizable Financial Reports", paragraph: "Generate comprehensive financial reports to monitor business performance and support informed decision-making." },
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg5.png',heading:"Complete Financial Control", paragraph: "Easily track, manage, and monitor your cash flow for efficient and transparent financial operations." },
  { image: '/image/HorizentalSliderConnectedBanking/HorizentalSliderImg2.png',heading:"Scalability for Growth", paragraph: "From startups to large enterprises, our platform grows and adapts seamlessly with your business needs." },
];

function HorizentalSlider() {
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
    <section className="max-w-screen-lg mx-auto  mt-[100px] lg:mt-[200px] px-[20px] xl:px-0 relative">
      <div className="HorizentalSliderGradient"></div>
      <div>
        <p className="HorizentalSliderHeaderGradient max-[360px]:text-[22px] max-[400px]:text-[25px] text-[28px] lg:text-[32px] font-semibold text-center">
     Experience the Benefit of Connected Banking 
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto lg:gap-[30px] gap-[22px] lg:mt-[65px] mt-[50px]  pb-2 cursor-grab hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`lg:w-[260px] w-[187px] lg:pt-[22px] lg:pb-[17px] lg:px-[16px] pt-[15px] pb-[12px] px-[12px]  border-[0.287px] lg:border-[0.4px] last-mt border-[rgba(74,74,74,0.3)] rounded-[7.167px] flex-shrink-0 scroll-snap-align-start ${
      index === sliders.length - 1 ? 'lg:mr-3' : ''}`}
          >
            {/* Connecte_gradient-border2 */}
        <div className="Connecte_gradient-border2 lg:h-[95px] h-[68px] w-[68px] lg:w-[95px] rounded-[14.333px] lg:rounded-[20px] flex justify-center items-center">
              <div className=" rounded-[14.333px] lg:rounded-[20px]  bg-[#080219] flex items-center justify-center ">
              <img
                src={slider.image}
                alt={slider.paragraph}
                className={`h-[29.5px] lg:h-[44px]`}
              />
            </div>
        </div>
            <p className="text-[#FFF] text-[14.333px] lg:text-[20px] font-semibold lg:pt-[18px] pt-[13px]">{slider.heading}</p>
            <p className="text-[#9E9C9F] text-[11.467px] lg:text-[16px] font-normal  lg:pt-[18px] pt-[13px]" >
              {slider.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorizentalSlider;
