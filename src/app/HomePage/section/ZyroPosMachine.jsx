// import languageSoundbox from "/image/HomePage/zyroposmachine.png";
"use client";
import Link from "next/link";
// import ZyroPosVideo from "public/";

function ZyroPosMachine() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="max-w-screen-lg lg:px-[20px] xl:px-0 mx-auto mt-[180px] lg:mt-[210px]">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-[50%] relative">
          <div className="ZyroPosMachine-gradient"></div>
          <h2 className=" text-white90 font-semibold max-[400px]:text-[26px] text-[32px] lg:text-[48px] leading-[40px] lg:leading-[59.68px] text-center lg:text-left">
            ZYRO POS Machine
          </h2>
          <p className="pr-[20px] mt-[19px] lg:mt-[17px] lg:mb-[25px] max-[400px]:text-[24px] text-[28px] leading-[40px] font-medium text-center lg:text-left lg:text-[36px] text-[#FFF] ">
            {" "}
            <span className="ZyroPosMachineHeaderGradient font-semibold">
              Fast, Flexible
            </span>{" "}
            and Built for In-Store Payments
          </p>
          <p className="text-[#9E9C9F] text-[14px] lg:text-[20px] font-normal leading-[26px] lg:leading-[33px] align-middle text-center lg:text-left px-[40px] lg:px-[0px] ">
            Whether you run a retail shop, cafe, restaurant, spa, or salon- our
            all-in-one POS system helps you manage sales and accept payments
            easily.
          </p>
          <div className="flex justify-center lg:justify-start mt-[39px]">
            <Link
              href="/pos-machine-system"
              className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium flex items-center justify-center gap-[3px]"
            >
              <span onClick={ScrollTop} className="flex items-center gap-1">
                Know more{" "}
                <img
                  src={'image/HomePage/Icon/KnowMoreRightIcon.svg'}
                  alt=""
                  className="h-[13px] w-[13px]"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center lg:justify-end px-[20px] md:px-0 mt-[100px] lg:mt-0">
          <video
            className="h-[357px] w-[386px]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="video/zyroPos.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default ZyroPosMachine;
