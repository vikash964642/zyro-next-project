import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import KnowMoreRightIcon from "/image/HomePage/Icon/KnowMoreRightIcon.svg";

const slides = [
  {
    image: "/image/HomePage/herosectionbanner2.webp",

    imageMob: "/image/HomePage/herosectionbanner2mob.webp",
    link: "/pos-machine-system",

    heading1: "Zyro POS Device",
    heading2: "",
    paragraph: "Accepts UPI & Card Payments with a Single Device",
  },

  {
    image: "/image/HomePage/herosoundbox.svg",
    imageMob: "/image/HomePage/herosoundbox.svg",
    link: "/smart-soundbox-speaker",

    heading1: "Zyro Sound Box",
    heading2: "",
    paragraph:
      "Accept digital payments with our Zyro UPI QR Code. The soundbox offers instant secure audio payment confirmations, ensuring a faster, more reliable and efficient customer experience.",
  },
  {
    image: "/image/HomePage/herosectionBanner1.webp",
    imageMob: "/image/HomePage/herosectionBanner1.webp",
    link: "/expense-management-tracking-software",

    heading1: "Simplify, Track, and Control Expense",
    heading2: " in One Place",
    paragraph:
      "Expense management made easy with Zyro. Manage all your business expenses in one place — track, control and optimize easily.",
  },
  {
    image: "/image/HomePage/herosectionbanner.svg",
    imageMob: "/image/HomePage/herosectionbanner.svg",
    link: "/connected-banking",

    heading1: "Accelerate Your Business with our ",
    heading2: "Connected Banking Solutions",
    paragraph:
      "Connect and manage all your business current accounts from different banks in a single dashboard with our connected banking.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
 
  
<section className="hidden lg:flex items-center justify-center gap-[50px] lg:pt-[135px] pt-[80px] relative">
      {currentSlide===0  &&(
        <div className="home-hero_gradient2"></div>
      )}
          {currentSlide===1  &&(
        <div className="home-hero_gradient3"></div>
      )}
      {(currentSlide===2 || currentSlide===3) &&(
        <div className="home-hero_gradient1"></div>
      )}
      
   <button
        
          className="hero-prev absolute z-20 lg:left-[50px] xl:left-[90px] min-[1450px]:left-[8%] min-[1750px]:left-[15%] top-[50%] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true} // ✅ Infinite loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
         onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="max-w-screen-md xl:max-w-screen-lg overflow-hidden relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 min-w-full">
              {/* Left Content */}
              <div className="lg:w-[55%] w-full">
                <h1
                  className={`${
                    index === 1
                      ? "text-[55.547px] heroSectionHeadingGradient2"
                      : index === 2
                      ? "text-[42px]"
                      : index === 3
                      ? "text-[42px] font-medium text-white90"
                      : "text-[42px] heroSectionHeadingGradient4"
                  } font-semibold leading-[54px] lg:mt-[10px]`}
                >
                  {index === 2 ? (
                    <span className="heroSectionHeadingGradient2 font-semibold">
                      {slide.heading1}
                    </span>
                  ) : (
                    slide.heading1
                  )}
                  <span
                    className={`${
                      index === 3
                        ? "heroSectionHeadingGradient1 font-semibold"
                        : ""
                    } text-white90 font-medium`}
                  >
                    {slide.heading2}
                  </span>
                </h1>

                <p
                  className={`${
                    index === 3 || index === 1 || index === 2
                      ? "text-white70 text-[18.28px] mt-[20px] font-normal"
                      : "text-[#FFF] text-[32px] font-medium mt-[30px] text-center lg:text-left"
                  }`}
                >
                  {slide.paragraph}
                </p>

                <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[35px] flex-col lg:flex-row">
                  {index !== 1 ? (
                    <Link href='/contact-us' onClick={ScrollTop} className="bg-[#4F31B4] rounded-[24.77px] h-[45px] w-[148px] text-[#FFF] text-[18px] font-semibold flex justify-center items-center">
                      Get Started
                    </Link>
                  ) : (
                    <Link href='/contact-us' onClick={ScrollTop} className="bg-[#4F31B4] rounded-[24.77px] h-[48px] w-[218px] text-[#FFF] text-[20px] font-semibold flex justify-center items-center">
                      Get Your Speaker
                    </Link>
                  )}

                  <Link
                    href={slide.link} onClick={ScrollTop}
                    className="text-[#FFF] font-medium md:text-[15.6px] lg:text-[16.45px] text-sm flex md:justify-start justify-center"
                  >
                    Know more <img src={KnowMoreRightIcon} className="pl-[4px]" />
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="p-[25px] md:p-[0px] lg:w-[45%] w-full flex justify-center items-center relative">
                <img src={slide.image} alt={`Slide ${index + 1} `} className={` ${index === 0 ? "h-[450px] w-[379px]":"" }  ${index === 1 ? "h-[453px] w-[460px]":""} ${index === 3 ? "h-[370px] w-[370px]":""}`}/>
                {index === 3 && <div className="home-hero_gradientBottom"></div>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    

        <button
          
          className="hero-next cursor-pointer absolute z-20 lg:right-[50px] xl:right-[90px] min-[1450px]:right-[8%] min-[1750px]:right-[15%] top-[50%] text-[18px] text-[#8E8C92]  rounded-full w-[40px] h-[40px] border-[2px] border-[#8E8C92] lg:flex justify-center items-center hidden"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
    </section>




      <section className="block lg:hidden px-[20px]  pt-[50px] relative">
      <div className="home-hero_gradient1"></div>

      <Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  onSlideChangeTransitionEnd={(swiper) => setCurrentSlide(swiper.realIndex)} // sync after animation
  className="overflow-hidden relative"
>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-col justify-center  gap-[25px] ">
              {/* Heading */}
              <div className="text-center ">
                {index === 3 && (
                  <>
                    <div className="max-[350px]:text-[16px] max-[375px]:text-[18px] text-[20px] text-white90 font-medium leading-[24px]">
                      {slide.heading1}
                    </div>
                    <div className="max-[375px]:text-[28px] max-[400px]:text-[30px]  leading-[40px] text-[32px] font-semibold  heroSectionHeadingGradient1">
                      {slide.heading2}
                    </div>
                  </>
                )}
                {index === 1 && (
                  <div className="text-center max-[375px]:text-[28px] max-[400px]:text-[32px] text-[36px] font-semibold leading-[40px] heroSectionHeadingGradient2">
                    {slide.heading1} <span>{slide.heading2}</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="text-center max-[375px]:text-[26px] text-[28px] font-semibold leading-[40px] heroSectionHeadingGradient3Mob">
                    {slide.heading1} <span>{slide.heading2}</span>
                  </div>
                )}
                {index === 0 && (
                  <div className="text-center max-[375px]:text-[32px] text-[36px] font-semibold leading-[40px] heroSectionHeadingGradient4">
                    {slide.heading1} <span>{slide.heading2}</span>
                  </div>
                )}
              </div>

              {/* Paragraph */}
              {index!==3 &&(
                <div className="text-center ">
                <p
                  className={`text-white70 max-[350px]:text-[15px] max-[375px]:text-[16px] max-[400px]:text-[17px] text-[18px] font-normal leading-[22px] ${index===0 ? "text-white90 text-[20px] font-medium leading-[24px]":""}
                   
                  }`}
                >
                  {slide.paragraph}
                </p>
              </div>
              )}

              {/* Image */}
              <div className="flex justify-center items-center ">
                <img
                  src={slide.imageMob}
                  alt={`Slide ${index + 1}`}
                  className={`${
                    index === 3
                      ? "max-[400px]:h-[290px] max-[400px]:w-[100%] h-[290px] w-[290px]"
                      : ""
                  } ${
                    index === 1
                      ? "max-[360px]:h-[275px] max-[375px]:w-[100%] max-[400px]:w-[330px] w-[350px] h-[345px]"
                      : ""
                  } ${
                    index === 2
                      ? "max-[360px]:h-[185px] max-[360px]:w-[275px]  w-[300px] h-[200px] mt-[50px]"
                      : ""
                  } ${index === 0 ? "w-[254px] h-[389px]" : ""}`}
                />
              </div>

 {index===3 &&(
                <div className="text-center ">
                <p
                  className={`text-white80 max-[360px]:text-[13px]  text-[14px] font-normal }`} >
                  {slide.paragraph}
                </p>
              </div>
              )}

              {/* Button */}
              <div className="flex justify-center ">
                <Link href='/contact-us' onClick={ScrollTop}
                  className="bg-[#4F31B4] max-[375px]:w-[100%] w-[325px] h-[50px] rounded-[30px] text-[20px] text-[#FFF] font-medium flex justify-center items-center"
                >
                  {index === 1 ? "Get Your Speaker" : "Get Started"}
                </Link>
              </div>

              {/* Link */}
              <div className="flex justify-center ">
                <Link onClick={ScrollTop}
                  href={slide.link}
                  className="text-[#FFF] font-medium text-[16px] flex justify-center items-center"
                >
                  Know more <img src={KnowMoreRightIcon} className="pl-[4px] h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex justify-center items-center mt-[20px]">
{slides.map((_, index) => (
  <div
    key={index}
    className={`mx-[5px] cursor-pointer ${
      index === currentSlide
        ? "bg-[#4F31B4] w-[13px] h-[7px] rounded-[9.17px]"
        : "bg-[#CACACA] w-[7px] h-[7px] rounded-full"
    } transition-all duration-300`}
   
  ></div>
))}

      </div>
    </section>
    </>
  );
}
