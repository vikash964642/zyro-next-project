
const contentData = [
  {
    image: '/image/ConnectedBanking/ConnecteBankingImg1.svg',
    heading: "Link Your Current Account",
    paragraph:
      "Log in to Zyro and link your business bank account in just a few easy steps",
  },
  {
    image: '/image/ConnectedBanking/ConnecteBankingImg2.svg',
    heading: "Approve the Request",
    paragraph:
      "Verify and approve the connected banking request from net banking.",
  },
   {
    image: '/image/ConnectedBanking/ConnecteBankingImg3.svg',
    heading: "Start Making Payouts",
    paragraph:
      "Send vendor payments or view your bank balances directly from the Zyro dashboard.",
  },
];

export default function ConnectedCardSlider() {
 

  return (
    <section className="max-w-screen-lg lg:mx-auto mt-[100px] lg:mt-[200px] px-[20px] xl:px-[0px] relative">
      <div className="ConnectedCardSliderGradient"></div>
      <h2 className="text-[28px] lg:text-[31.72px] font-semibold text-[#FFF] text-center lg:text-left">
        How Zyro{" "}
        <span className="text-[28px] lg:text-[32px] font-semibold connectedBankingCardGradient1">
          Connected
        </span>{" "}
        Banking Works?
      </h2>
   <div className="flex justify-center lg:justify-start pt-[12px] lg:pt-[6px]">
       <p className="text-[14px] lg:text-[20px] text-[#959595] font-normal  text-center lg:text-left max-[400px]:w-full w-[340px] lg:w-full lg:pr-[120px]">
        Zyro Connected Banking makes it easy to link accounts, track balances,
        and streamline payments from a single dashboard.
      </p>
   </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[18px] gap-y-[27px] mt-[35px] lg:mt-[45px]">
        {contentData.map((item, index) => (
          <div
            key={index}
            className=" w-full min-h-[420px] flex flex-col  transform transition-transform duration-300 ease-in-out hover:scale-[1.04]"
          >
            <div className="bg-[#080219] h-[290px] p-3  rounded-t-[13.59px] rounded-b-[0px]  ConnectedSliderBorder">
              <img src={item.image} className="h-[100%] w-[100%]" />
            </div>
            <div className="bg-white py-[13px] px-[15px] rounded-b-[13.59px] rounded-t-[0px] flex-1 flex flex-col justify-start">
              <div className="py-[1.5px] flex justify-center bg-[#F3F0FB] rounded-[3.17px] text-[#6D6D6D] text-[12px] font-medium w-[48px]">
                Step {index + 1}
              </div>
              <h3 className="text-[16px] font-semibold text-[#4F31B4] pt-[11px]">
                {item.heading}
              </h3>
              <p className="text-[14px] font-medium text-[#565656] pt-[3px]">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

