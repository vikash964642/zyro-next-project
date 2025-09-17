"use client";
import Link from "next/link";

function Digitize() {
   const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="">
      <div className="max-w-full lg:max-w-screen-lg mx-[12px] lg:mx-auto mt-[100px]">
      <div className="bg-[#0E0624] overflow-hidden relative rounded-[20px]  pt-[93px]  flex flex-col lg:flex-row gap-[140px] lg:gap-0">
            <div className='DigitizeGradient1'></div>
        <div className="relative mt-[55px] lg:mt-[0px] lg:pl-[73px]  flex flex-col justify-start items-center lg:items-start">
         
            <h2 className="max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90">
              Digitize your Business Expenses
            </h2>
          

          <Link href='/contact-us' onClick={ScrollTop} className="relative  mt-[40px] cursor-pointer z-20">
            <div className=" w-[199px] h-[52px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center">
              <p className="text-[16px] font-semibold text-[#FFF]">
                Get Started Today
              </p>
            </div>
            <div className="h-[52px] w-[52px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[176px] flex justify-center items-center">
              <img src={'/image/ConnectedBanking/arrowRight.svg'} />
            </div>
          </Link>
          <div className="absolute DizitizebusinessGradient-left "></div>
        </div>
        <div className="flex items-end justify-center lg:justify-start">
          <img src={'/image/ExpenseManagement/digitalizebusiness.webp'}  className="h-[321px] lg:h-[373px]  lg:min-w-[494px]"/>

          <div className="absolute w-[200px] h-[250px] lg:w-[300px] lg:h-[300px] DizitizebusinessGradient-right"></div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Digitize;
