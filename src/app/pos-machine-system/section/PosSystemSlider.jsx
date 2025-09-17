"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Pos.css"; // Your custom CSS for animation etc.

const CardList=[
    {
        image:'/image/Pos/PosSystemSliderGroceryImg.webp',
        header:"Grocery",
        paragraph:" Instant billing, fast payments and efficient checkout in a single device. "
    },
     {
        image:'/image/Pos/PosSystemSliderLogisticImg.webp',
        header:"Logistic",
        paragraph:" Track orders, generate invoices & collect UPI payments at the doorstep. "
    },
     {
        image:'/image/Pos/PosSystemSliderRetail&SupermarketImg1.webp',
        header:"Retail & Supermarkets",
        paragraph:"Reliable POS for clothing stores, marts, and fast-moving counters."
    },
       {
        image:'/image/Pos/PosSystemSliderEntertainmentImg2.webp',
        header:"Entertainment",
        paragraph:"Easy ticketing and instant card/UPI payments for events & venues. "
    },
   
     {
        image:'/image/Pos/PosSystemSliderRestaurant&CafeImg.webp',
        header:"Restaurant & Cafe",
        paragraph:" Perfect POS solution for managing restaurant and café billing tasks. "
    },
     {
        image:'/image/Pos/PosSystemSliderElectronic&ShopImg.webp',
        header:"Electronic Shops",
        paragraph:"Fast, secure transactions for high-value gadget and appliance purchases."
    },
      {
        image:'/image/Pos/PosSystemSliderRetail&SupermarketImg2.webp',
        header:"Retail & Supermarkets",
        paragraph:"Reliable POS for clothing stores, marts, and fast-moving counters."
    },
     {
        image:'/image/Pos/PosSystemSliderHealthcareImg.webp',
        header:"HealthCare",
        paragraph:"Instant billing and payment collection with always-on connectivity."
    },
        {
        image:'/image/Pos/PosSystemSliderTravelImg.webp',
        header:"Travel",
        paragraph:" Instant billing, fast payments and efficient checkout in a single device. "
    },
        {
        image:'/image/Pos/PosSystemSliderHospitalityImg.webp',
        header:"Hospitality",
        paragraph:"Easy billing & digital payments for hotel, spa & room service."
    },
        {
        image:'/image/Pos/PosSystemSliderEntertainmentImg1.webp',
        header:"Entertainment",
        paragraph:"Easy ticketing and instant card/UPI payments for events & venues. "
    },
     
]

export default function CenteredImageSlider() {
     const [activeIndex, setActiveIndex] = useState(0);
  return (
   <div className="  mt-[180px] px-4 xl:px-0">
    <div className="flex justify-center">
        <h2 className="max-[360px]:text-[22px] text-[24px] md:[28px] lg:text-[32px] font-semibold PosSystemSliderHeaderGradient text-center md:w-[550px] lg:w-[648px]">Zyro POS System : Trusted by Businesses Across Industries</h2>
    </div>
          <p className="max-[360px]:text-[14px] text-[16px] font-medium text-[#9E9C9F] text-center pt-[5px]">A complete solution for all your payment and billing needs</p>

     <div className="relative mt-[50px] lg:mt-[33px]">

      {/* 🔼 Overlay Image (above active card) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <img src={'/image/Pos/PosMachineImg.webp'} className="w-[170px] h-[275px] md:w-[180px] md:h-[290px] lg:w-[200px] lg:h-[300px] min-[1500px]:w-[225px] min-[1500px]:h-[365px]" />
      </div>

      {/* 🔽 Swiper */}
      <Swiper
        modules={[Autoplay]} 
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
    delay: 3000,             
    disableOnInteraction: false,
  }}

        grabCursor={true}
        className="custom-swiper z-10"
         onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex ?? 0;
          setActiveIndex(realIndex);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.6,
            spaceBetween: 30,
          },
        }}
      >
        {CardList.map((data, idx) => (
          <SwiperSlide key={idx} className="">
            <div className="slide-wrapper rounded-[10px] overflow-hidden">
              <img
                src={data.image}
                alt={`POS Image ${idx}`}
                className="w-full h-[371px] md:h-[375px] lg:h-[400px] min-[1500px]:h-[445px] object-cover"
              />
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold">{data.header}</h3>
                <p className="text-sm text-gray-600">{data.paragraph}</p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
      <div className="flex flex-col items-center mt-[34px]">
        <h3 className="max-[360px]:text-[28px] text-[32px] font-semibold text-center PosSystemSliderCardHeader">{CardList[activeIndex].header}</h3>
        <p className="max-[360px]:text-[14px] text-[16px] md:text-[18px] lg:text-[20px] text-[#9E9C9F] mt-2 text-center md:w-[546px]">{CardList[activeIndex].paragraph}</p>
      </div>
   </div>
  );
}
