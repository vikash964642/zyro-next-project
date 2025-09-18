
import Link from 'next/link';

function ControlFinance() {
   const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className='max-w-screen-lg mx-auto  relative'>
        <div className="ControlFinance-gradiant"></div>
      <div  style={{backgroundImage:`url(${'/image/AboutUs/backgroundImage.svg'})`}} className="sap_ControlFinance bg-center bg-no-repeat bg-contain min-h-[65vh] flex flex-col justify-center items-center">
      

        <p className="max-[360px]:text-[24px] text-[28px] lg:text-[45px] text-center text-white90 font-medium max-[360px]:w-full w-[327px] sm:w-full">Take control of your Finance now</p>  
    <p className="max-[375px]:text-[14px] text-[18px] lg:text-[29px] text-white70 font-normal pt-[19px] ">Accelerate your business with ZYRO</p>


     <Link href='/contact-us' onClick={ScrollTop} className="h-[45px] w-[140px] bg-[#4F31B4] rounded-[44px] shadow-ControlFinance-custom-shadow text-[#FFF] text-[16px] font-medium mt-[45px] flex justify-center items-center">Get Started</Link>
      </div>
    </section>
  );
}

export default ControlFinance;

