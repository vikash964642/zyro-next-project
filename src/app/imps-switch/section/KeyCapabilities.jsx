
const cards = [
  {

    heading: "Manage Fund Transfers",
    paragraph: "Supports P2P, P2M, and other IMPS transfers",
  },
  {

    heading: "Multi-Channel Support",
    paragraph: "Works across mobile banking, internet banking, ATMs, USSD, POS, and more",
  },
    {

    heading: "High TPS Performance",
    paragraph:
      "Scalable architecture ensures fast and reliable transactions",
  },
  {
  
    heading: "Account Validation",
    paragraph:
      "Instant bank account verification via Penny drop method",
  },
     {
  
    heading: "Web UI with MIS Reports",
    paragraph:
      "Centralized dashboards for real-time analytics and management",
  },
 {
  
    heading: "Bulk Payments",
    paragraph:
      "Manage large-scale payment with ease",
  },

];
function KeyCapabilities() {
  return (
      <section className=" mt-[131px] px-[15px] xl:px-0 relative">
             <div className="KeyCapabilitiesTopGradient"></div>
           <div className="KeyCapabilitiesBottomGradient"></div>
             <div className="KeyCapabilitiesLeftGradient"></div> 
       <div className="max-w-screen-lg lg:mx-auto">
          
       <div className="flex justify-center items-center ">
         <p className="CompleteSolutionHeaderGradient sm:w-[420px] md:w-[460px] lg:w-[571px] text-transparent bg-clip-text text-[24px] sm:text-[29px] md:text-[31px] lg:text-[38px] font-semibold leading-[40px] lg:leading-[56px] text-center ">
        Key Capabilities
         </p>
       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-[20px] sm:gap-x-[15px] sm:gap-y-[25px] mt-[31px] md:mt-[45px] ">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background:
                  " linear-gradient(180deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }}
              className="flex items-center justify-center rounded-[16.5px] sm:rounded-[11.4px]"
            >
              <div className="text-center bg-[#0B051E] rounded-[16.5px] sm:rounded-[11.4px] pt-[42px] pb-[45px] lg:pt-[38px] lg:pb-[32px] h-[calc(100%-2px)] w-[calc(100%-2px)]">
               
                <p className="CompleteSolBoxHeaderGradient   font-semibold text-[20px] md:text-[18px] leading-[24.11px] lg:leading-[22px] px-[15px]">
                  {card.heading}
                </p>
              <div className="flex justify-center pt-[10px] lg:pt-[14px]">
                  <p className={` text-[#9E9C9F] text-[16px] md:text-[14px] font-normal leading-[22px] max-[375px]:px-[20px] px-[30px] md:px-[10px] lg:px-[25px]`}>
                  {card.paragraph}
                </p>
              </div>
              {
  index === cards.length - 1 && (
  <div className="flex justify-center"> 
      <div  style={{
                background:
                  " linear-gradient(180deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }}
              className="flex items-center justify-center rounded-[11.5px] w-[112px] h-[22px] mt-[12px]">
      <div className="bg-[#0B051E] flex justify-center items-center rounded-[11.5px] h-[calc(100%-2px)] w-[calc(100%-2px)]">
<p className="text-[#633AEB] text-[12px] font-normal ">Coming soon</p>
      </div>
    </div>
  </div>
  )
}

              </div>
            </div>
          ))}
        </div>
        </div> 
  
        
   
  
    </section>
  )
}

export default KeyCapabilities