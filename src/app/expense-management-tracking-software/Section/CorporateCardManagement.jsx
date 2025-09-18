"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const cardsData = [
  {
    image: "/image/ExpenseManagement/expenseCardRequest.webp",
    heading: "Card Request",
    paragraph: "Employees request cards with digital approvals",
  },
  {
    image: "/image/ExpenseManagement/ExpenseAssignCard.webp",
    heading: "Assign Users",
    paragraph: "Allocate cards with spending limits and role-based access",
  },
  {
    image: "/image/ExpenseManagement/ExpensePhyschicalCard.webp",
    heading: "Generate Cards",
    paragraph: "Instantly issue physical cards",
  },
];

function CorporateCardManagement() {
  return (
    <section className="mt-[130px] lg:mt-[200px]">
      <div className="max-w-screen-lg mx-auto relative">
        <div className="hidden md:block corporateCard-GradientTop"></div>

        {/* Heading */}
        <div className="flex justify-center px-[10px]">
          <h3 className="CorporateCardHead max-w-[360px] sm:max-w-[100%] text-[24px] leading-[32px] sm:text-[30px] lg:text-[34px] lg:leading-[45px] font-semibold text-center">
            Corporate Card Management, Made Easy
          </h3>
        </div>

        {/* Subheading */}
        <div className="flex justify-center pt-[14px]">
          <p className="max-w-[300px] sm:max-w-[100%] leading-[29px] text-center text-[16px] lg:leading-[25px] font-normal text-[#A9A9A9]">
            One dashboard to issue, assign, and control every card
          </p>
        </div>

        {/* Swiper Section */}
        <div className="flex items-center relative bg-[#110A27] lg:bg-bgCorporateCard lg:border-[0.97px] lg:border-borderColor rounded-[23.16px] mt-[47px] lg:mt-[60px] md:px-[25px] lg:px-[34px] md:py-[25px] overflow-hidden">
          <div className="md:hidden block corporateCard-Gradient1"></div>
          <div className="md:hidden block corporateCard-Gradient2"></div>

          <div className="hidden md:block">
            <p className="corporate-gradiant_line"></p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) =>
                `<span class="${className} custom-dot"></span>`,
            }}
            className="h-full w-full"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-between items-center flex-col md:flex-row gap-[40px] md:gap-0">
                  {/* Text Section */}
                  <div className="md:pl-[34px] flex flex-col justify-center pt-[36px] lg:pt-0">
                    <p className="text-[32.9px] lg:text-[34px] leading-[46px] lg:leading-[56px] font-semibold text-center md:text-left text-[#FFFFFF]">
                      {card.heading}
                    </p>
                    <div className="flex justify-center md:justify-start pt-[13px] lg:pt-[14px]">
                      <p
                        className={`text-[16px] leading-[28px] font-normal text-center md:text-left text-[#AFAFAF] ${
                          index === 0 || index === 1
                            ? "w-[300px] md:w-[287px]"
                            : "w-full md:w-[215px]"
                        }`}
                      >
                        {card.paragraph}
                      </p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="px-[10px] sm:px-0">
                    <Image
                      src={card.image}
                      alt={card.heading}
                      width={405}
                      height={333}
                      className="max-h-[333px] h-full w-full max-w-[405px] md:h-[300px] md:w-[350px] lg:h-[333px] lg:w-[405px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="flex justify-center custom-pagination mt-[21px] lg:mt-[30px]"></div>
    </section>
  );
}

export default CorporateCardManagement;
