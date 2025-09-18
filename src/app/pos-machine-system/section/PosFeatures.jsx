"use client"
import './Pos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay,Pagination  } from 'swiper/modules';
const CardData=[
    {
        image:'/image/Pos/PosFeatureImg1.webp',
        heading:"Multiple Payment Methods",
        paragraph:"Accept payments via UPI, Cards, EMI, Payment Link and Wallets"
    },
       {
        image:'/image/Pos/PosFeatureImg2.webp',
        heading:"Long-Lasting Battery",
        paragraph:"Full-day usage without charging interruptions"
    },
       {
        image:'/image/Pos/PosFeatureImg3.webp',
        heading:"High-Speed Connectivity",
        paragraph:"Full-day usage without charging interruptions"
    },
       {
        image:'/image/Pos/PosFeatureImg4.webp',
        heading:"Built-in-Printer",
        paragraph:"Instant & Clear receipts with built-in-high-speed thermal printer."
    },
       {
        image:'/image/Pos/PosFeatureImg5.webp',
        heading:"Real-Time Payment Alerts",
        paragraph:"On-Screen notifications for every successful transaction."
    },
]
function PosFeatures() {
  return (
    <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0  mt-[100px] lg:mt-[120px]">
     <div className='flex justify-center'>
      <h2 className='text-center text-[24px] sm:text-[30px] lg:text-[34px] sm:w-[480px] lg:w-[570px] leading-[32px] md:leading-[40px] lg:leading-[48px] font-semibold PaymentHeaderGradient'>Advanced POS Features that Simplify all Payments</h2> 
     </div>
      <div className='h-[580px] overflow-hidden md:h-[445px]  mt-[45px] md:mt-[40px] relative  bg-[#0E0624] rounded-[23px] '>
        <div className='PosFeatureGradientTop1'></div>
       
 <Swiper
       className='h-full'
        modules={[Autoplay,Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
         pagination={{
    el: ".custom-Pos-pagination", // connect to custom div
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} PosCustom-dot"></span>`;
    },
  }}
      >
        {CardData.map((card, index) => (
          <SwiperSlide key={index}>
           

              <div className='flex flex-col md:flex-row h-full max-[360px]:px-[15px] max-[400px]:px-[25px] px-[40px] md:px-0'>
                <div className='md:w-[50%] relative h-[40%] md:h-full pt-[45px] md:pt-0 md:pl-[30px] lg:pl-[57px] flex flex-col md:justify-center  items-center md:items-start'>
                <h3 className='max-[360px]:text-[28px] max-[400px]:text-[31px] text-[32.895px] lg:text-[36px] font-semibold text-[#FFF] text-center md:text-left md:w-[340px]'>{card.heading}</h3>
                <div className='hidden md:block w-[1px] h-[117px] PaymentBorderLineGradient mt-[18px]'></div>
                <p className='max-[360px]:text-[14px] max-[400px]:text-[15.5px] text-[16.44px] lg:text-[18px] font-normal text-[#C7C9D1] pt-[15px] text-center md:text-left md:pr-[80px]'>{card.paragraph}</p>
                 <div className='PosFeatureGradientBottom1'></div>
                </div>
                <div className='relative md:w-[50%] h-[60%] md:h-full flex flex-col justify-center items-center'>
                  <img src={card.image} className='max-[360px]:w-[258px] max-[360px]:h-[230px] w-[298px] h-[258px]'/>
<div className='PosFeatureGradientBottom2'></div>
                </div>
              </div>
    
          </SwiperSlide>
        ))}
            </Swiper>
      </div>
      <div className=" flex justify-center  custom-Pos-pagination mt-[21px] lg:mt-[35px]"></div>
    </section>    
  )
}

export default PosFeatures