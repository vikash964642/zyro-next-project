// "use client";
// import { useRef, useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// const contentData = [
//   {
//     IconActive: "/image/ConnectedBanking/BankDetailIconActive1.svg",
//     IconNonActive: "/image/ConnectedBanking/BankDetailIconNonActive1.svg",
//     label: "Enter the bank details",
//     image: "/image/ConnectedBanking/BankDetailsImg2.webp",
//   },
//   {
//     IconActive: "/image/ConnectedBanking/BankDetailIconActive2.svg",
//     IconNonActive: "/image/ConnectedBanking/BankDetailIconNonActive2.svg",
//     label: "Upload your excel file with a simple drag-and-drop",
//     image: "/image/ConnectedBanking/BankDetailsImg1.webp",
//   },
//   {
//     IconActive: "/image/ConnectedBanking/BankDetailIconActive3.svg",
//     IconNonActive: "/image/ConnectedBanking/BankDetailIconNonActive3.svg",
//     label: "Initiate payouts instantly",
//     image: "/image/ConnectedBanking/BankDetailsImg1.webp",
//   },
// ];
// function BankDetails() {
//   const imageRefs = useRef([]);
//   const scrollContainerRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
//             const index = Number(entry.target.dataset.index);
//             setActiveIndex(index);
//           }
//         });
//       },
//       {
//         root: scrollContainerRef.current,
//         threshold: 0.9,
//       }
//     );

//     imageRefs.current.forEach((ref) => ref && observer.observe(ref));
//     return () => {
//       imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % contentData.length);
//     console.log(setCurrentSlide);
//   };

//   const handlePrev = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + contentData.length) % contentData.length
//     );
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//   });
//   return (
//     <section className="max-w-screen-lg lg:mx-auto lg:px-[40px] mt-[120px] lg:mt-[200px]">
//       <h3 className="BankDetailsHeaderGradient max-[375px]:text-[24px] text-[28px] lg:text-[32px] text-center lg:text-left font-semibold mb-[20px] lg:mb-[24px] px-[30px] lg:px-0">
//         Make Bulk Transfers in Three Easy Steps
//       </h3>
//       <p className="text-[#959595] max-[375px]:text-[13px] text-[14px] text-center lg:text-left lg:text-[20px] font-normal lg:w-[590px] mx-4 lg:mx-0">
//         Efficiently manage business payouts with instant, automated payments to
//         vendors or employees directly from your connected bank account.
//       </p>
//       <div className="hidden lg:flex gap-6  mt-[40px]">
//         <div className="w-full md:w-1/2 sticky top-0 space-y-[25px]">
//           {contentData.map((item, index) => (
//             <div key={index} className="flex items-center gap-[30px]">
//               <img
//                 src={
//                   activeIndex === index ? item.IconActive : item.IconNonActive
//                 }
//               />
//               <div
//                 className={`border-l-[2.34px] h-[61px] ${
//                   activeIndex === index
//                     ? " border-[#FFF] "
//                     : "border-[#ACACAC] "
//                 } `}
//               ></div>
//               <p
//                 className={`w-[368px] text-[20px] font-normal ${
//                   activeIndex === index ? "text-[#FFF]" : "text-[#959595]"
//                 }`}
//               >
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Image Section - One at a time */}
//         <div className="w-full md:w-1/2 flex justify-end relative">
//           <div className="BankDetailsRightGradient"></div>
//           <div
//             ref={scrollContainerRef}
//             className=" h-[255px] overflow-y-scroll scroll-smooth snap-y space-y-[15px] snap-mandatory no-scrollbar"
//           >
//             {contentData.map((item, index) => (
//               <div
//                 key={index}
//                 data-index={index}
//                 ref={(el) => (imageRefs.current[index] = el)}
//                 className="h-[255px] w-[418px] border-[0.3px] ConnectedSliderBorder rounded-[20px] bg-[#080219] flex justify-center items-end snap-start"
//               >
//                 <img
//                   src={item.image}
//                   alt={`Image ${index}`}
//                   className="h-[225px] w-[339px]"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="lg:hidden flex flex-col items-center mt-[24px]">
//         {/* Slide Container */}
//         <div {...swipeHandlers} className="overflow-hidden w-full max-w-md ">
//           <div
//             className="flex transition-transform duration-700 ease-in-out "
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {contentData.map((slide, index) => (
//               <div
//                 key={index}
//                 className="flex-none flex justify-between flex-col pt-[25px] px-[20px] pb-[15px] w-[calc(100%-3.4rem)] h-[286px] fle border-[0.402px] border-[#4E4E4E] rounded-[10px] mx-[27px] overflow-hidden relative"
//               >
//                 <div className="BankDetailsImageGradient"></div>
//                 <div className="flex gap-[21.5px] items-center">
//                   <img src={slide.Icon} />
//                   <p className="text-[#FFFFFF] max-[350px]:text-[15px] max-[375px]:text-[16px] text-[18px] font-medium ">
//                     {slide.label}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="w-full flex justify-center items-center">
//                   <div className="max-[360px]:px-[18px] border-[0.209px] border-[#646464] rounded-[13.937px] w-[292px] h-[177px] bg-[#080219] flex justify-center items-end">
//                     <img
//                       src={slide.image}
//                       alt={`Slide ${index + 1}`}
//                       className="max-[360px]:w-[100%] w-[236.23px] h-[156.8px]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Prev / Next Buttons */}
//         <div className="flex justify-center gap-5 mt-4">
//           <button
//             onClick={handlePrev}
//             className={`  rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
//           >
//             <FontAwesomeIcon icon={faAngleLeft} />
//           </button>
//           <button
//             onClick={handleNext}
//             className={`  rounded-full w-[22px] h-[22px]  flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
//           >
//             <FontAwesomeIcon icon={faAngleRight} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BankDetails;




"use client"
 import  { useRef, useEffect, useState } from 'react';
 import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
    
  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';



const contentData = [
  {
    IconActive: '/image/ConnectedBanking/BankDetailIconActive1.svg',
    IconNonActive: '/image/ConnectedBanking/BankDetailIconNonActive1.svg',
    label: "Enter the bank details",
    image: '/image/ConnectedBanking/BankDetailsImg2.webp',
  },
  {
    IconActive: '/image/ConnectedBanking/BankDetailIconActive2.svg',
    IconNonActive: '/image/ConnectedBanking/BankDetailIconNonActive2.svg',
    label: "Upload your excel file with a simple drag-and-drop",
    image: '/image/ConnectedBanking/BankDetailsImg1.webp',
  },
  {
    IconActive: '/image/ConnectedBanking/BankDetailIconActive3.svg',
    IconNonActive: '/image/ConnectedBanking/BankDetailIconNonActive3.svg',
    label: "Initiate payouts instantly",
    image: '/image/ConnectedBanking/BankDetailsImg3.webp',
  },
];
function BankDetails() {
  const imageRefs = useRef([]);
  const scrollContainerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.9,
      }
    );

    imageRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      imageRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  // const handleNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % contentData.length);
  //   console.log(setCurrentSlide);
  // };

  // const handlePrev = () => {
  //   setCurrentSlide(
  //     (prev) => (prev - 1 + contentData.length) % contentData.length
  //   );
  // };

  // const swipeHandlers = useSwipeable({
  //   onSwipedLeft: handleNext,
  //   onSwipedRight: handlePrev,
  // });
  return (
 <section className='lg:px-[40px] mt-[120px] lg:mt-[220px]'>
     <div className="max-w-screen-lg lg:mx-auto relative">
      <div className='BankDetailsTopGradient'></div>
      <h3 className="BankDetailsHeaderGradient max-[375px]:text-[24px] text-[28px] lg:text-[32px] text-center lg:text-left font-semibold mb-[20px] lg:mb-[24px] px-[30px] lg:px-0">
        Make Bulk Transfers in Three Easy Steps
      </h3>
   <div className='flex justify-center lg:justify-start max-[375px]:px-[20px] px-[30px] sm:px-0'>
       <p className="sm:w-[450px] lg:w-[590px] text-[#959595] max-[375px]:text-[13px] text-[14px] text-center lg:text-left lg:text-[20px] font-normal ">
        Efficiently manage business payouts with instant, automated payments to
        vendors or employees directly from your connected bank account.
      </p>
   </div>
      <div className="hidden lg:flex gap-6  mt-[40px]">
   
        <div className="w-full md:w-1/2 sticky top-0 space-y-[25px]">
          {contentData.map((item, index) => (
            
            <div key={index} className="flex items-center gap-[30px]">
              <img
                src={
                  activeIndex === index ? item.IconActive : item.IconNonActive
                }
              />
              <div
                className={`border-l-[2.34px] h-[61px] ${
                  activeIndex === index
                    ? " border-[#FFF] "
                    : "border-[#ACACAC] "
                } `}
              ></div>
              <p
                className={`w-[368px] text-[20px] font-normal ${
                  activeIndex === index ? "text-[#FFF]" : "text-[#959595]"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section - One at a time */}
        <div className="w-full md:w-1/2 flex justify-end relative">
        <div className='BankDetailsRightGradient'></div>
          <div
            ref={scrollContainerRef}
            className=" h-[255px] overflow-y-scroll scroll-smooth snap-y space-y-[15px] snap-mandatory no-scrollbar"
          >
            {contentData.map((item, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="h-[255px] w-[418px] border-[0.3px] ConnectedSliderBorder rounded-[20px] bg-[#080219] flex justify-center items-end snap-start"
              >
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className="h-[225px] w-[339px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden flex flex-col items-center mt-[24px]">
  
        <div {...swipeHandlers} className="overflow-hidden w-full max-w-md ">
          <div
            className="flex transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {contentData.map((slide, index) => (
              <div
                key={index}
                className="flex-none flex justify-between flex-col pt-[25px] px-[20px] pb-[15px] w-[calc(100%-3.4rem)] h-[286px] fle border-[0.402px] border-[#4E4E4E] rounded-[10px] mx-[27px] overflow-hidden relative"
              >
                <div className="BankDetailsImageGradient"></div>
                <div className="flex gap-[21.5px] items-center">
                  <img src={slide.Icon} />
                  <p className="text-[#FFFFFF] max-[350px]:text-[15px] max-[375px]:text-[16px] text-[18px] font-medium ">
                    {slide.label}
                  </p>
                </div>

                <div className="w-full flex justify-center items-center">
                  <div className="max-[360px]:px-[18px] border-[0.209px] border-[#646464] rounded-[13.937px] w-[292px] h-[177px] bg-[#080219] flex justify-center items-end">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="max-[360px]:w-[100%] w-[236.23px] h-[156.8px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={handlePrev}
            className={`  rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            onClick={handleNext}
            className={`  rounded-full w-[22px] h-[22px]  flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]`}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div> */}

      <div className="lg:hidden flex flex-col items-center mt-[24px]">
  <Swiper
    modules={[Navigation, Autoplay, FreeMode]}
  slidesPerView={1}
  spaceBetween={10}
  loop={true}
  freeMode={true}
  speed={700} // 👈 faster (2s per slide instead of 5s)
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: ".mobile-next",
    prevEl: ".mobile-prev",
  }}
    className="overflow-hidden w-full max-w-md"
  >
    {contentData.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex-none flex justify-between flex-col pt-[25px] px-[20px] pb-[15px] w-[calc(100%-3.4rem)] h-[286px] border-[0.402px] border-[#4E4E4E] rounded-[10px] mx-[27px] overflow-hidden relative">
          <div className="BankDetailsImageGradient"></div>
          <div className="flex gap-[21.5px] items-center">
            <img src={slide.IconActive} />
            <p className="text-[#FFFFFF] max-[350px]:text-[15px] max-[375px]:text-[16px] text-[18px] font-medium">
              {slide.label}
            </p>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center items-center">
            <div className="max-[360px]:px-[18px] border-[0.209px] border-[#646464] rounded-[13.937px] w-[292px] h-[177px] bg-[#080219] flex justify-center items-end">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="max-[360px]:w-[100%] w-[236.23px] h-[156.8px]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Prev / Next Buttons */}
  <div className="flex justify-center gap-5 mt-4">
    <button className="mobile-prev rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]">
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
    <button className="mobile-next rounded-full w-[22px] h-[22px] flex justify-center items-center border-[1.5px] border-[#6E6E6E] text-[#6E6E6E] hover:border-[#FFF] hover:text-[#FFF]">
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  </div>
</div>
    </div>
 </section>
  );
}

export default BankDetails;
