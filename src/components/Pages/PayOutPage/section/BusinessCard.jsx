// import React from 'react'
// import BusinessCardImg1 from '/image/PayOut/BusinessCardImg1.png';
// import BusinessCardImg2 from '/image/PayOut/BusinessCardImg2.png';
// import BusinessCardImg3 from '/image/PayOut/BusinessCardImg3.png';
// import BusinessCardImg4 from '/image/PayOut/BusinessCardImg4.png';
// import BusinessCardImg5 from '/image/PayOut/BusinessCardImg5.png';
// import BusinessCardImg6 from '/image/PayOut/BusinessCardImg6.png';
// const CardSlide=[
//     {
//         img:BusinessCardImg1,
//         heading:"All-in-One Platform",
//         paragraph:"Easily manage salaries, vendor payouts, refunds, and bulk disbursals in one place."
//     },
//        {
//        img:BusinessCardImg2,
//         heading:"Cost & Time Saving",
//         paragraph:"Automate disbursals, minimize manual tasks, and save valuable operational time."
//     },
//        {
//         img:BusinessCardImg3,
//         heading:"Real-Time Visibilty",
//         paragraph:"Track and reconcile every transaction instantly with real-time visibility and zero spreadsheet work."
//     },
//        {
//        img:BusinessCardImg4,
//         heading:"Robust Data Security",
//         paragraph:"Keep your financial data safe with advanced encryption and RBI-compliant security infrastructure."
//     },
//        {
//        img:BusinessCardImg5,
//         heading:"Trusted Certification",
//         paragraph:"Backed by PCI DSS and ISO certifications for secure and compliant financial operations."
//     },
//        {
//        img:BusinessCardImg6,
//         heading:"24/7 Customer Support",
//         paragraph:"Our dedicated support team is available 24/7 to assist you with any questions or issues."
//     },
// ]

//  function BusinessCard() {
//   return (
//       <section className="max-w-screen-lg lg:mx-auto mt-[100px] px-[20px] xl:px-[0px]">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
//         {CardSlide.map((card, index) => {
//           const shouldShowRightBorder = [0, 1, 3, 4].includes(index); // 1st, 2nd, 4th, 5th
//           return (
//             <div key={index} className="relative">
//               <div
//                 className={` rounded-xl overflow-hidden p-6 transition duration-300 hover:shadow-xl h-full`}
//               >
//               <div className='bg-[#080219] w-[47px] h-[47px] rounded-[8px] border-[0.341px] border-[#A901A3] flex justify-center items-center'>
//                   <img src={card.img} alt={card.heading} className="" />
//               </div>
//                 <h3 className="text-[22px] text-[#FFF] font-semibold mt-[9px]">{card.heading}</h3>
//                 <p className="text-[16px] font-normal  text-[#F3F3F3] mt-[16px]">{card.paragraph}</p>
//               </div>

//               {shouldShowRightBorder && (
//                 <div
//                   className="absolute top-0 right-0 w-[2px] h-full pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFF 23%, #FFF 82%, rgba(255,255,255,0.00) 100%)",
//                   }}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// export default BusinessCard

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './PayOut.css';
import BusinessCardImg1 from '/image/PayOut/BusinessCardImg1.png';
import BusinessCardImg2 from '/image/PayOut/BusinessCardImg2.png';
import BusinessCardImg3 from '/image/PayOut/BusinessCardImg3.png';
import BusinessCardImg4 from '/image/PayOut/BusinessCardImg4.png';
import BusinessCardImg5 from '/image/PayOut/BusinessCardImg5.png';
import BusinessCardImg6 from '/image/PayOut/BusinessCardImg6.png';
import BusinessCardPayoutBG from '/image/PayOut/BusinessCardPayoutBG.png';
const CardSlide = [
  {
    img: BusinessCardImg1,
    heading: "All-in-One Platform",
    paragraph: "Easily manage salaries, vendor payouts, refunds, and bulk disbursals in one place.",
  },
  {
    img: BusinessCardImg2,
    heading: "Cost & Time Saving",
    paragraph: "Automate disbursals, minimize manual tasks, and save valuable operational time.",
  },
  {
    img: BusinessCardImg3,
    heading: "Real-Time Visibilty",
    paragraph: "Track and reconcile every transaction instantly with real-time visibility and zero spreadsheet work.",
  },
  {
    img: BusinessCardImg5,
    heading: "Robust Data Security",
    paragraph: "Keep your financial data safe with advanced encryption and RBI-compliant security infrastructure.",
  },
  {
    img: BusinessCardImg4,
    heading: "Trusted Certification",
    paragraph: "Backed by PCI DSS and ISO certifications for secure and compliant financial operations.",
  },
  {
    img: BusinessCardImg6,
    heading: "24/7 Customer Support",
    paragraph: "Our dedicated support team is available 24/7 to assist you with any questions or issues.",
  },
];

function BusinessCard() {
  const [screen, setScreen] = useState('lg'); // default to lg
 const [showExtra, setShowExtra] = useState(false);

  const handleToggle = () => setShowExtra((prev) => !prev);

  // Cards to display (all vs first 4)
 
  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreen('lg');
      } else if (width >= 640) {
        setScreen('sm');
      } else {
        setScreen('xsm');
      }
    };

    updateScreen(); // initial
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  return (
    <section className=" max-w-screen-lg lg:mx-auto mt-[100px] lg:mt-[150px] px-[20px] xl:px-[0px]">
    {/* <div className='hidden sm:block'>
           <div className='relative'>
           <div className='BusinessCardGradient'></div>
       </div>
       <h2 className='text-[34px] font-semibold text-center text-[#FFF] businessCardheaderColor1 px-[180px]' >Your Business Deserves Faster and Smarter Payout</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-10 mt-[50px]">
        {CardSlide.map((card, index) => {
          let shouldShowRightBorder = false;

          if (screen === 'sm') {
            shouldShowRightBorder = [0, 2, 4].includes(index); // 1st, 3rd, 5th
          } else if (screen === 'lg') {
            shouldShowRightBorder = [0, 1, 3, 4].includes(index); // 1st, 2nd, 4th, 5th
          }

          return (
            <div key={index} className="relative">
              
              <div className="rounded-xl overflow-hidden p-6 transition duration-300 hover:shadow-xl h-full">
                <div className="bg-[#080219] w-[47px] h-[47px] rounded-[8px] border-[0.341px] border-[#A901A3] flex justify-center items-center">
                  <img src={card.img} alt={card.heading} />
                </div>
                <h3 className="text-[22px] text-[#FFF] font-semibold mt-[9px]">{card.heading}</h3>
                <p className="text-[16px] font-normal text-[#F3F3F3] mt-[16px]">{card.paragraph}</p>
              </div>

              {shouldShowRightBorder && (
                <div
                  className="absolute top-0 right-0 w-[2px] h-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFF 23%, #FFF 82%, rgba(255,255,255,0.00) 100%)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div> */}
  <div className='hidden md:block'>
  <div className='relative'>
    <div className='BusinessCardGradient'></div>
  </div>

  <h2 className='md:text-[30px] lg:text-[34px] font-semibold text-center text-[#FFF] businessCardheaderColor1 md:px-[115px] lg:px-[180px]'>
    Your Business Deserves Faster and Smarter Payout
  </h2>

<div
  className="w-full bg-no-repeat  bg-center md:bg-[length:970px] min-[850px]:bg-[length:1025px] min-[950px]:bg-[length:1170px] lg:bg-[length:1370px]"
  style={{
    backgroundImage: `url(${BusinessCardPayoutBG})`,
    // backgroundSize: "1370px"
  }}
>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-[10px] sm:gap-y-[30px] mt-[50px]">
    {CardSlide.map((card, index) => {
        let plClass = "";
         let prClass = "";
    // let mlClass = "";
      if(index===1 || index===4){
         plClass = "md:pl-[15px] min-[900px]:pl-[30px] lg:pl-[35px]";
         prClass="md:pr-[8px] lg:pr-[14px]"
         
      }
       else if(index===0 || index===3){
         plClass = "pl-[5px]";
         prClass="pr-[22px] lg:pr-[52px]"
         
      }
       else if(index===2 || index===5){
         plClass = "md:pl-[34px] lg:pl-[60px]";
         prClass="md:pr-[8px] lg:pr-[0px]"
          
      }
      return (
        <div key={index} className="relative  ">
            {/* ml-[20px] */}
            {/* pr-[30px] down */}
          <div className={`rounded-xl overflow-hidden ${plClass} ${prClass}  transition duration-300 hover:shadow-xl h-full`}>
            <div className="bg-[#080219] w-[47px] h-[47px] rounded-[8px]  BusinessCardBorder flex justify-center items-center">
              <img src={card.img} alt={card.heading} className='max-w-full max-h-full object-contain' />
            </div>
            <h3 className="text-[18px] lg:text-[22px]  text-[#FFF] font-medium lg:font-semibold mt-[9px]">{card.heading}</h3>
            <p className="text-[14px] lg:text-[16px] font-normal text-[#F3F3F3] mt-[16px]">{card.paragraph}</p>
          </div>

          {/* Removed the right border gradient */}
        </div>
      );
    })}
  </div>
</div>
</div>

 <div className='block md:hidden'>
      <div className='relative  p-[18px] rounded-[10px] border-[0.4px] PayoutCardBorder bg-[#080219]'>
        <h2 className='max-[360px]:text-[21px] max-[400px]:text-[22.5px]  max-[360px]:pr-[0px] text-[24px] mt-[16px] font-semibold mb-[45px] businessCardheaderColor2 pr-[5px]'>
          Your Business Deserves Faster and Smarter Payout
        </h2>

        {/* Always render first 4 cards */}
        {/* {CardSlide.slice(0, 3).map((card, index,arr) => (
          <div key={index}   className={`mb-6 pb-[32px] ${index !== arr.length - 1 || showExtra ? 'border-b border-businessCardBorder1' : ''}`}>
            <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px] border-[0.341px] border-[#A901A3] flex justify-center items-center">
              <img src={card.img} alt={card.heading} />
            </div>
            <h3 className="max-[360px]:text-[18px] text-[20px] text-[#EAEAEA] font-medium mt-[9px]">{card.heading}</h3>
            <p className="max-[360px]:text-[13px] text-[16px] font-normal text-[#777A88] mt-[16px]">{card.paragraph}</p>
          </div>
        ))} */}
   {CardSlide.slice(0, 3).map((card, index,arr) => (
          <div key={index}   >
            <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px] PayoutCardBorder flex justify-center items-center">
              <img src={card.img} alt={card.heading} />
            </div>
            <h3 className="max-[360px]:text-[18px] text-[20px] text-[#EAEAEA] font-medium mt-[9px]">{card.heading}</h3>
            <p className="max-[360px]:text-[13px] text-[16px] font-normal text-[#777A88] mt-[16px]">{card.paragraph}</p>
            <div  className={`mb-6 mt-[32px] ${index !== arr.length - 1 || showExtra ? ' border-businessCardBorder1' : ''}`}></div>
          </div>
         
        ))}
        {/* Animate only the extra cards (5th and 6th) */}

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
          <div className="bg-[#080219] p-1 w-[34px] h-[34px] rounded-[5.2px]  PayoutCardBorder flex justify-center items-center">
            <img src={card.img} alt={card.heading} />
          </div>
          <h3 className="text-[20px] text-[#EAEAEA] font-medium mt-[9px]">{card.heading}</h3>
          <p className="text-[16px] font-normal text-[#777A88] mt-[16px]">{card.paragraph}</p>
          <div className={`overflow-hidden mb-6 mt-[32px] ${!isLast ? ' border-businessCardBorder1' : ''}`}></div>
        </motion.div>
      );
    })}
</AnimatePresence>


        <div className='flex justify-center mt-2'>
          <button
            onClick={handleToggle}
            className='absolute h-[40px] w-[40px] rounded-full bg-[#6F41D2] flex justify-center items-center shadow-md'
          >
            <img
              src={'/image/AngleDown.png'}
              alt={showExtra ? "Collapse" : "Expand"}
              className={`transition-transform duration-300 ${showExtra ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default BusinessCard;

