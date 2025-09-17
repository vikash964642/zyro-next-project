
import './UPIStack.css';
const cards = [
  {
    image: "/image/UPIStack/completeSolIcon1.svg",
    heading: "UPI SDK & APIs",
    paragraph: "Quick integration with your app",
  },
  {
    image: "/image/UPIStack/completeSolIcon2.svg",
    heading: "Smart Routing",
    paragraph: "Optimized paths for maximum success rates",
  },
    {
    image: "/image/UPIStack/completeSolIcon3.svg",
    heading: "API-Based Integration",
    paragraph:
      "Enables smooth and flexible system interaction",
  },
  {
    image: "/image/UPIStack/completeSolIcon4.svg",
    heading: "All-Channel Certified",
    paragraph:
      "Fully compliant and certified across all payment channels",
  },

];
function CompleteSolution() {
  return (
      <section className=" mt-[131px] px-[15px] xl:px-0 relative">
             <div className="CompleteSol-gradient-Top"></div>
           <div className="CompleteSol-gradient-left hidden sm:block"></div>
            <div className="CompleteSol-gradient-Right hidden sm:block"></div>
       <div className="max-w-screen-lg lg:mx-auto">
          
       <div className="flex justify-center items-center ">
         <p className="CompleteSolutionHeaderGradient sm:w-[420px] md:w-[460px] lg:w-[571px] text-transparent bg-clip-text text-[24px] sm:text-[29px] md:text-[31px] lg:text-[38px] font-semibold leading-[40px] lg:leading-[56px] text-center ">
         Complete Solution to Process UPI Transactions
         </p>
       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[22px] gap-y-[15px] sm:gap-y-[49px] mt-[49px]">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background:
                  " linear-gradient(160deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }}
              className="flex items-center justify-center    rounded-[16.5px]  text-center"
            >
              <div className="bg-[#0B051E] rounded-[16.5px] pt-[22px] pb-[40px] h-[calc(100%-2px)] w-[calc(100%-2px)]">
                <div className="flex justify-center items-center">
                  <img
                    src={card.image}
                    alt={card.heading}
                   
                  />
                </div>
                <p className="CompleteSolBoxHeaderGradient  pt-[7px]  font-semibold text-[20px] leading-[24.11px]">
                  {card.heading}
                </p>
              <div className="flex justify-center pt-[13px]">
                  <p className={` text-[#9E9C9F] text-[16px] font-normal leading-[25px] ${index===0 ? "w-[228px]":""} ${index===1 ? "max-[360px]:px-[30px] max-[360px]:w-full w-[310px] sm:w-[228px]":""} ${index===2 ? "max-[360px]:px-[30px] max-[360px]:w-full sm:px-[20px] md:px-0 w-[310px] sm:w-full md:w-[310px]":""} ${index===3 ? "max-[360px]:px-[30px] max-[360px]:w-full sm:px-[20px] md:px-0 w-[310px] sm:w-full md:w-[310px] ":""}`}>
                  {card.paragraph}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
        </div> 
  
        
   
  
    </section>
  )
}

export default CompleteSolution