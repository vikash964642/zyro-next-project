// "use client"
// import { useRef, useState ,useEffect} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import sliderImg1 from "/image/sliderImg1.png"

// const cardsData = [
//     { id: 1,image:"/image/sliderImg1.png", heading: "Card 1",paragraph:"1 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//     { id: 2,image:"/image/sliderImg1.png", heading: "Card 2", paragraph:"2 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//     { id: 3,image:"/image/sliderImg1.png", heading: "Card 3" ,paragraph:"3 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//     { id: 4,image:"/image/sliderImg1.png", heading: "Card 4",paragraph:"4 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//      { id: 5,image:"/image/sliderImg1.png", heading: "Card 5" ,paragraph:"5 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//       { id: 6,image:"/image/sliderImg1.png", heading: "Card 6" ,paragraph:"6 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//        { id: 7,image:"/image/sliderImg1.png", heading: "Card 7" ,paragraph:"7 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//         { id: 8,image:"/image/sliderImg1.png", heading: "Card 8" ,paragraph:"8 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
//   ];

// function CardSliders() {
//   const sliderRef = useRef();
//   const [centerSlide, setCenterSlide] = useState(0); // Track center


// useEffect(() => {
//   const autoplayInterval = setInterval(() => {
//     setCenterSlide((prev) => {
//       const next = (prev + 1) % cardsData.length; // loop back to 0
//       sliderRef.current?.slickGoTo(next);
//       return next;
//     });
//   }, 2500); // autoplay every 2.5 seconds

//   return () => clearInterval(autoplayInterval); // cleanup
// }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: "0px",
//     arrows: false,
   
//     speed: 300,
  
//     afterChange: (current) => setCenterSlide(current), // 🔥 key line
//     appendDots: (dots) => (
//       <div className="">
//         <ul className="flex justify-center items-center gap-1 lg:gap-3">{dots}</ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         className={` rounded-full transition-all duration-300 ${
//           i === centerSlide ? "bg-[#6F41D2] w-[8px] h-[8px] lg:w-3 lg:h-3" : "bg-white w-[8px] h-[8px] lg:w-3 lg:h-3"
//         }`}
//       ></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           centerPadding: "15%",
//         },
//       },
//          {
//         breakpoint: 450,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           centerPadding: "10%",
//         },
//       },
//     ],
//   };

//   const handleCardClick = (index) => {
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   };

//   return (
//     <section className="">
//       <div className="max-w-screen-lg mx-auto mt-[100px] lg:mt-[130px]">
//       <Slider ref={sliderRef} {...settings}>
//         {cardsData.map((data, index) => (
//           <div key={data.id} className="px-2 ">
//     <div className="flex justify-center items-center min-h-[400px]">
//          <div
//   onClick={() => handleCardClick(index)}
//   className={`flex justify-center items-center flex-col transition-all duration-200 ease-in rounded-[23px] shadow-md p-3 lg:p-6 text-center cursor-pointer ${
//   centerSlide === index
//     ? "slider-bg-gradient min-h-[400px]  border-[0.69px] border-[#45465E] z-10 scale-100 "
//     : " min-h-[280px]  border-[0.716px] border-[#FFF] opacity-60 scale-95 abcd"
// } `}
// >
//   <img src={data.image} className={`${centerSlide === index
//     ? "w-[103px] h-[112px]"
//     : "w-[56.25px] h-[61.50px]"
// }`}></img>
//               <h3 className={` mb-2 mt-[22px]  ${
//   centerSlide === index
//     ? "text-[20px] lg:text-[30px] text-white90 font-semibold text-center"
//     : "text-[16px] text-white90 font-medium text-center"
// }`}>{data.heading}</h3>
//               <p
//   className={`  text-white90 text-center ${
//     centerSlide === index
//       ? "opacity-100 mt-4 text-[14px] lg:[18px]"
//       : "opacity-0 text-[8px]"
//   }`}
// >{data.paragraph}</p>
//             </div>
//     </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
//     </section>
//   );
// }

// export default CardSliders;




// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const cardsData = [
//   { id: 1, image: "/image/sliderImg1.png", heading: "Card 1", paragraph: "1 Offer your customers the option..." },
//   { id: 2, image: "/image/sliderImg1.png", heading: "Card 2", paragraph: "2 Offer your customers the option..." },
//   { id: 3, image: "/image/sliderImg1.png", heading: "Card 3", paragraph: "3 Offer your customers the option..." },
//   { id: 4, image: "/image/sliderImg1.png", heading: "Card 4", paragraph: "4 Offer your customers the option..." },
//   { id: 5, image: "/image/sliderImg1.png", heading: "Card 5", paragraph: "5 Offer your customers the option..." },
//   { id: 6, image: "/image/sliderImg1.png", heading: "Card 6", paragraph: "6 Offer your customers the option..." },
//   { id: 7, image: "/image/sliderImg1.png", heading: "Card 7", paragraph: "7 Offer your customers the option..." },
//   { id: 8, image: "/image/sliderImg1.png", heading: "Card 8", paragraph: "8 Offer your customers the option..." },
// ];

// function CardSliders() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section>
//       <div className="max-w-screen-lg mx-auto mt-[100px] lg:mt-[130px]">
//         <Swiper 
//           modules={[Autoplay]}
//           // autoplay={{ delay: 2500, disableOnInteraction: false }}
          
//           centeredSlides={true}
//           slidesPerView='auto'
          
//           // spaceBetween={20}
//           loop={true}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           breakpoints={{
//             1024: { slidesPerView: 3, centeredSlides: true },
//             768: { slidesPerView: 1, centeredSlides: true },
//             450: { slidesPerView: 1, centeredSlides: true},
//           }}
//           className="pb-10"
//         >
//           {cardsData.map((data, index) => (
//             <SwiperSlide key={data.id} >
//               {/* className={`${ activeIndex === index ? 'w-[500px]' : 'w-[250px]'}`} */}
//               <div className="flex justify-center items-center min-h-[400px]">
//                 <div
//                   className={`flex justify-center items-center flex-col transition-all duration-300 ease-in rounded-[23px] shadow-md p-3 lg:p-6 text-center cursor-pointer ${
//                     activeIndex === index
//                       ? "slider-bg-gradient min-h-[400px]   border-[0.69px] border-[#45465E] z-10 "
//                       : "min-h-[280px] border-[0.716px]  border-[#FFF] opacity-60 "
//                   }`}
//                 >
//                   <img
//                     src={data.image}
//                     className={`${
//                       activeIndex === index
//                         ? "w-[103px] h-[112px]"
//                         : "w-[56.25px] h-[61.50px]"
//                     }`}
//                     alt={data.heading}
//                   />
//                   <h3
//                     className={`mb-2 mt-[22px] ${
//                       activeIndex === index
//                         ? "text-[20px] lg:text-[30px] text-white90 font-semibold"
//                         : "text-[16px] text-white90 font-medium"
//                     }`}
//                   >
//                     {data.heading}
//                   </h3>
//                   <p
//                     className={`text-white90 text-center transition-all duration-300 ${
//                       activeIndex === index
//                         ? "opacity-100 mt-4 text-[14px] lg:text-[18px]"
//                         : "opacity-0 text-[8px] "
//                     }`}
//                   >
//                     {data.paragraph}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default CardSliders;




"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination  } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const cardsData = [
  { id: 1, image: "/image/HomePage/sliderImg1.svg", heading: "Brand EMI Offers", paragraph: "Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
  { id: 2, image: "/image/HomePage/sliderImg2.svg", heading: "Multiple payment Methods", paragraph: "Easily accept payments from your customers via credit cards, debit cards and dynamic UPI QR Code" },
  { id: 3, image: "/image/HomePage/sliderImg3.svg", heading: "Billing & Receipts", paragraph: "Speed up checkout times with the integrated scanner and printer. Generate GST-Compliant invoices and provide customers with both printed and digital receipts for convenience." },
  { id: 4, image: "/image/HomePage/sliderImg4.svg", heading: "Integrated Billing System", paragraph: "Effortlessly integrated your POS system with third-party applications and plugins, boosting functionality and improving overall operational efficiency." },
  { id: 5, image: "/image/HomePage/sliderImg5.svg", heading: "Refund & Dispute Management", paragraph: "Zyro merchants can process refunds until midnight on the transaction day, efficiently manage chargebacks, and recover funds through our Dispute Resolution System (DRS)." },
];

function CardSliders() {
  const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);


  
  return (
    <section>
      <div className="max-w-screen-lg mx-auto mt-[100px]  lg:mt-[130px]">
    <div className="hidden md:block h-[520px]">
          <Swiper
          modules={[Autoplay,Pagination]}
          speed={1200}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView="auto"           // 🔑 allow dynamic widths
          centeredSlides={true}
          spaceBetween={10}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
           pagination={{
    el: ".custom-Pos-pagination", // connect to custom div
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} PosCustom-dot"></span>`;
    },  
  }}
      
        
        >
          {cardsData.map((data, index) => (
            <SwiperSlide 
              key={data.id}
              style={{
                width: activeIndex === index ? "51%" : "23%",  
               
              }}
              // className={`${activeIndex === index ? "w-[51%]" : "w-[23%]"}`}
            >
            
              <div
                className={`flex justify-center items-center flex-col transition-all duration-600 ease-in-out rounded-[23px] shadow-md md:px-[25px] lg:px-[30px] text-center cursor-pointer
                  ${
                    activeIndex === index
                      ? "slider-bg-gradient h-[500px] border-[0.69px] border-[#45465E] z-10"
                      : "h-[400px] mt-[45px] border-[0.716px] border-[#FFF] opacity-60"
                  }
                `}
              >
                <img
                  src={data.image}
                  alt={data.heading}
                  className={`transition-all duration-300 ${
                    activeIndex === index ? "w-[103px] h-[112px]" : "w-[56.25px] h-[61.50px]"
                  }`}
                />
                <h3
                  className={` mt-[22px]  CardSliderHeaderColor ${
                    activeIndex === index
                      ? "text-[20px] lg:text-[30px]  font-semibold"
                      : "text-[16px] font-medium"
                  }`}
                >
                  {data.heading}
                </h3>
             {
             activeIndex===index &&(
                <p
                  className="CardSliderParaColor text-center mt-4 text-[14px] lg:text-[18px]  "
                >
                  {data.paragraph}
                </p>
             )
             }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>


    {/* Mobile Swiper */}
<div className="block md:hidden h-[330px]">
<Swiper
    modules={[Pagination, Autoplay]}
        speed={1200}
         autoplay={{ delay: 2500, disableOnInteraction: false }}
    slidesPerView={1.2}
    spaceBetween={16}
     centeredSlides={true}
    loop={true}
    onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)} // ✅ update activeIndex
    pagination={{
      el: ".custom-Pos-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} PosCustom-dot"></span>`;
      },
    }}
  >
     {cardsData.map((data, index) => (
            <SwiperSlide 
              key={data.id}
            
            >
            
              <div
                className={`flex justify-center items-center flex-col transition-all duration-600 ease-in-out rounded-[23px] shadow-md px-[19px]  text-center cursor-pointer
                  ${
                    activeIndex2 === index
                      ? "slider-bg-gradient h-[320px] border-[0.69px] border-[#45465E] z-10"
                      : "h-[285px] mt-[20px] border-[0.716px] border-[#FFF] opacity-60"
                  }
                `}
              >
                <img
                  src={data.image}
                  alt={data.heading}
                  className={`transition-all duration-300 ${
                    activeIndex2 === index ? "w-[55px] h-[59.7px]" : "w-[40px] h-[43px]"
                  }`}
                />
                <h3
                  className={` mt-[19px]  CardSliderHeaderColor ${
                    activeIndex2 === index
                      ? "text-[20px] lg:text-[30px]  font-semibold"
                      : "text-[13px] font-medium"
                  }`}
                >
                  {data.heading}
                </h3>
             {
             activeIndex2===index &&(
                <p
                  className="CardSliderParaColor text-center mt-4 text-[14px] leading-[19px]  "
                >
                  {data.paragraph}
                </p>
             )
             }
              </div>
            </SwiperSlide>
          ))}
  </Swiper>
  {/* <div className="mobile-pagination flex justify-center mt-4"></div> */}
</div>
         <div className=" flex justify-center abc custom-Pos-pagination mt-[21px] lg:mt-[60px]"></div>
      </div>
    </section>
  );
}

export default CardSliders;
