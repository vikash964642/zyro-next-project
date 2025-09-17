// import React from 'react'

function Form() {
  return (
    <section className="mt-[150px]">
      <div className="max-w-screen-lg mx-auto p-3 m-2">
        <div className="gap-[25px] lg:flex justify-between items-center bg-[#0E0624] rounded-[20px] relative p-[20px] z-40 overflow-hidden">
          <div className="flex-[6] lg:pl-[76px] mt-[56px] lg:mb-[43px]">
            <p className="text-[#ffffff] lg:text-[38px] text-[26px] leading-[34px] lg:leading-[150%] font-semibold">
              Get a Call Back
            </p>
            <p className="text-white70 lg:text-[18px]  text-[14px] leading-[25px] font-normal lg:leading-[30px] lg:font-medium pt-[9px]">
              Join us to simplify payments, increase efficiency, and grow your
              business.
            </p>
            <div className=" mt-[30px] lg:mt-[55px]">
              <div className="flex  gap-[15px] flex-col lg:flex-row">
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] w-full" placeholder="Name" />
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] w-full" placeholder="Phone"  />
              </div>
              <div className="mt-[15px] flex  gap-[15px] flex-col lg:flex-row">
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] w-full" placeholder="Email"  />
                  <input type="text" className="border border-white20 rounded-[30px] h-[46px] lg:h-[53px] bg-backgroundColor2 text-[#B8B8B8] text-[18px] font-medium  outline-none pl-[35px] w-full" placeholder="Pincode"  />
              </div>
              <button className="text-[17px] font-semibold text-[#FFF] bg-[#4F31B4] rounded-[46px] h-[46px] lg:h-[55px] w-[197px] mt-[40px]">Submit</button>
            </div>
          </div>
          <div className="form-input-gradient "></div>
          <div className="form-soundbox-gradient"></div>
          <div className="flex-[4] custom-bg flex justify-center items-center z-10">
            <img src={'/image/soundbox/soundbox.svg'} alt="soundBox" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
