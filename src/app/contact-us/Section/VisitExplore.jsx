// import React from 'react'
import locationIcon from "/image/contact/location.svg";

function VisitExplore() {
  return (
    <section className="mt-[150px] lg:mt-[250px] ">
      <div className="max-w-screen-lg mx-auto ">
        <div className="pl-[26px] pr-[16px]">
          <h3 className="visitHeader text-[24px] lg:text-[34px] leading-[32px] lg:leading-[46px] font-semibold">
            Visit us and Explore our <br /> Workspace Today!
          </h3>
          <p className="lg:w-[450px] text-[#A9A9A9] text-[15.5px] leading-[25px] font-normal lg:pt-[18px] pt-[8px]">
            Where every corner inspires creativity, and every collaboration
            sparks new possibilities.
          </p>
          <p className="w-[124px] h-[1px] bg-[#D7D7D7] mt-[19px]"></p>
        </div>

        <div className="px-[10px] flex flex-col lg:flex-row gap-[60px] items-center lg:items-end">
          <div className="border-[0.97px] border-borderColor rounded-[23.16px]  w-[300px] lg:w-[50%] mt-[51px] pl-[33px] pt-[30px]">
            <div className="flex  items-center gap-[12px]">
              <img src={locationIcon} alt="" className="h-[32px] w-[32px]" />
              <p className="text-white text-[24px] leading-[46px] font-semibold">
                Our Registered
              </p>
            </div>
            <p className="text-[#F0F0F0] text-[18px] leading-[30px] font-normal pt-[30px]">
              KGC Infotech Pvt. Ltd.
            </p>
            <p className="text-[#F0F0F0] text-[18px] leading-[30px] font-normal pt-[20px]">
              H-31, 5th Floor, Sector-63
            </p>
            <p className="text-[#F0F0F0] text-[18px] leading-[30px] font-normal pt-[20px] pb-[20px]  ">
              Noida-201301, Uttar Pradesh, India
            </p>
          </div>
          <div className="lg:w-[50%]">
            <p className="text-[20px] font-semibold leading-[20px] text-[#FEFEFE]">
              LOCATION
            </p>
           <div className="flex pt-[14px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d218.87527591360728!2d77.37848794287883!3d28.629629789002728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1754879571695!5m2!1sen!2sin"
    className="w-full max-w-[450px] h-[285px] rounded-lg shadow-lg border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitExplore;
