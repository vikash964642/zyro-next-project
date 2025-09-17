
import CardPayOutImg1 from "/image/PayOut/CardPayOutImg1.svg";
import CardPayOutImg2 from "/image/PayOut/CardPayOutImg2.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './PayOut.css';
gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    image: CardPayOutImg1,
    heading: "Instant Beneficiary Setup",
    paragraph:
      "No cool-off period between adding a beneficiary and sending payments.",
  },
  {
    image: CardPayOutImg2,
    heading: "Multiple Payment Modes",
    paragraph:
      "Choose from IMPS, NEFT, RTGS, or UPI for convenient payment transfers.",
  },
 
];

export default function ConnectedCardSlider() {


  return (
    <section className="max-w-screen-lg lg:mx-auto px-[20px] xl:px-[0px] relative ">
      <div className="ConnectedCardSliderTopGradient"></div>
   <div className="pt-[100px] lg:pt-[158px]">
     <div className="flex justify-center">
        <h2 className="text-[24px] md:text-[30px]   lg:text-[34px] font-semibold text-center md:w-[500px] lg:w-[602px]  ConnectedCardSliderHeader">
       Advanced Payout designed to Scale with your Business
      </h2>
    </div>
      <div className="flex flex-col sm:flex-row gap-[45px] sm:gap-[20px]  justify-center xl:justify-between mt-[35px] lg:mt-[45px] relative">
        <div className="ConnectedCardSliderBottomGradient"></div>
        {contentData.map((item, index) => (
          <div
            key={index}
            className=" min-h-[420px] flex flex-col  transform transition-transform duration-300 ease-in-out hover:scale-[1.04]"
          
          >
            <div className="bg-[#080219] h-[290px] p-3  rounded-t-[13.59px] rounded-b-[0px] border-[0.627px] borderFade">
              <img src={item.image} className="h-[100%] w-[100%]" />
            </div>
            <div className="bg-white py-[13px] px-[15px] rounded-b-[13.59px] rounded-t-[0px] flex-1 flex flex-col justify-start">
             
              <h3 className="text-[16.5px] md:text-[18px] lg:text-[20px]  font-semibold text-[#4F31B4] pt-[11px]">
                {item.heading}
              </h3>
              <p className="text-[14px] md:text-[15px] lg:text-[16px]  font-medium text-[#565656] pt-[3px]">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div> 
   </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2   gap-4 mt-[35px] lg:mt-[45px]">
  {contentData.map((item, index) => (
    <div
      key={index}
      className="transform transition-transform duration-300 ease-in-out hover:scale-[1.03]"
    >
      <div className="bg-[#080219] h-[350px]  p-3 rounded-t-[13.59px] border-[0.627px] border-[#797979] ">
        <img src={item.image} className="h-[100%] w-[100%] rounded-[8px]" />
      </div>
      <div className="bg-white pt-[15px]  pl-[20px] pr-[50px] pb-[21px] rounded-b-[13.59px] flex flex-col flex-1 justify-start">
        <h3 className="max-[360px]:text-[15px] text-[16px] font-semibold text-[#4F31B4]">
          {item.heading}
        </h3>
        <p className="max-[360px]:text-[13px] text-[14px] lg:text-[16px] font-medium text-[#565656] pt-[10px]">
          {item.paragraph}
        </p>
      </div>
    </div>
  ))}
</div> */}

    </section>
  );
}

