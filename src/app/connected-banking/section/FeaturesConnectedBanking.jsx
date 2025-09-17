import './ConnectedBankingCss.css';
function FeaturesConnectedBanking() {
    const features = [
  {
    image: "/image/ConnectedBanking/FeaturesBankingIcon1.svg",
    heading: "Multi-Bank Account Management",
    paragraph:
      "Easily link all your current bank accounts and manage them conveniently from a single dashboard with complete control over your finances.",
  },
    {
    image: "/image/ConnectedBanking/FeaturesBankingIcon3.svg",
    heading: "Real-Time Syncing",
    paragraph:
      "Get real-time updated on balances, transactions, and activity across all your linked business accounts for accurate tracking and control.",
  },
    {
    image: "/image/ConnectedBanking/FeaturesBankingIcon2.svg",
    heading: "API Integrations",
    paragraph:
      "Seamlessly connect our tools with your existing systems, ensure smooth operations, and access clear & concise documentation for efficient implementation.",
  },
    {
    image: "/image/ConnectedBanking/FeaturesBankingIcon4.svg",
    heading: "Bulk Payments & Payouts",
    paragraph:
      "Easily make bulk payments to vendors or employees by uploading an excel file in just a single click for secure processing.",
  },
    {
    image: "/image/ConnectedBanking/FeaturesBankingIcon5.svg",
    heading: "Multiple Payment Mode",
    paragraph:
      "Choose from IMPS, NEFT, and RTGS to make your payments smooth, secure and timely-ensuring reliable transfers whenever you need them.",
  },
    {
    image: "/image/ConnectedBanking/FeaturesBankingIcon6.svg",
    heading: "Cash Flow Management",
    paragraph:
      "Get complete cash flow visibility by linking multiple accounts and tracking all outgoing transactions from a single dashboard.",
  },
  
]
  return (
   <>
    <section className="max-w-screen-lg lg:mx-auto lg:mt-[150px] mt-[110px] relative">
      <div className='FeaturesConnectedBankingGradient1'></div>
      <div className='mx-4'>
       <p className="max-[375px]:text-[22px] text-[28px] md:text-[30px] lg:text-[32px] font-semibold text-white text-center">Key<span className='features-heading-gradient'> Features of  Zyro Connected Banking</span></p> 
      <div className='flex justify-center'>
         <p className="max-[375px]:text-[12.5px] max-[375px]:pt-[13px] text-[14px] md:text-[16.5px] lg:text-[20px] font-normal text-[#9E9C9F] text-center pt-[18px] lg:pt-[22px] md:w-[600px] lg:w-[750px]">Run your business smarter with connected banking by managing, automating, and tracking all your finances on a single platform.</p>
      </div>
      </div>
      <div className="h-[500px] lg:h-[400px] pr-4 overflow-auto feature-scrollbar ml-4 mt-[50px]">
         {features.map((feature,index) => (
         <div key={index} className='mt-[25px] p-[1px] lg:p-0 gradient-border rounded-[16.516px] first:mt-0 lg:h-[133px] lg:w-full flex justify-center items-center'>
           <div  className=" rounded-[16.516px] w-[calc(100%-2px)] h-[calc(100%-2px)] px-[16px] lg:px-[20px] py-[18px]   flex gap-[18px] mt-[25px] first:mt-0 bg-[#0B051E]">
           <div className='h-[50px] w-[50px] bg-[#4F31B4] rounded-full flex  justify-center items-center'>
             <img src={feature.image} ></img>
           </div>
            <div className='flex flex-col flex-1'>
                  <p className="max-[375px]:text-[15.5px] text-[#F1F1F1] text-[17px] lg:text-[20px] font-medium ">{feature.heading}</p>
                  <p className="max-[375px]:text-[12.5px] text-[#9E9C9F] text-[14px] lg:text-[16px] font-normal pt-[12px]">{feature.paragraph}</p>
                </div>
            </div>
         </div>
         ))}
      </div>
    </section>
   </>
  )
}

export default FeaturesConnectedBanking