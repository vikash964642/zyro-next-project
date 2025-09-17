function RealTimeBeneficiary() {
  return (
    <section className=" mt-[160px] lg:mt-[240px] px-[20px] xl:px-0 relative">
      <div className="max-w-screen-lg lg:mx-auto relative">
        <div className="flex justify-center">
          <p className="w-[280px] sm:w-full RealTimeBeneficiaryHeaderGradient text-[24px] sm:text-[34px] lg:text-[38px] font-semibold lg:leading-[55px] text-center">
            Real-Time Beneficiary Name Validation
          </p>
        </div>

        <div className="flex justify-center  pt-[10px]">
          <p className="w-[320px] sm:w-full text-[16px] font-normal leading-[26px] text-center text-[#9E9C9F]">
            Build trust & ensure payment accuracy with instant confirmation
          </p>
        </div>

        <div className="mt-[33px] lg:mt-[30px] flex justify-center">
          <img
            src={"/image/IMPSSwitch/RealTimeBeneficiaryImg.webp"}
            alt="multilanguage"
            className="hidden md:block lg:w-[960px]"
          />
          <img
            src={"/image/IMPSSwitch/RealTimeBeneficiaryImgMob.svg"}
            alt="multilanguage"
            className="sm:w-full md:hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default RealTimeBeneficiary;
