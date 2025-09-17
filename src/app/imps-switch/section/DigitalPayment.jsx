import Link from "next/link";

function DigitalPayment() {
       const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
     <section className="mt-[200px] lg:mt-[240px]">
      <div className='max-w-full lg:max-w-screen-lg lg:mx-auto px-[11px] xl:px-0 '>
        <div className='bg-[#0E0624] h-[600px] sm:h-[460px] rounded-[20px] flex justify-center items-center flex-col relative overflow-hidden'>
            <div className="DigitalPaymentGradient1"></div>
                <div className="DigitalPaymentGradient2"></div>
<div className='flex justify-center max-[360px]:px-[10px] max-[415px]:px-[18px]'>
    <h2 className='min-[416px]:w-[350px] sm:w-[450px] md:w-[550px] lg::w-[625px] text-[#FFF] text-center max-[360px]:text-[25px] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[50px] font-semibold'>Make Every Digital Payment Safe & Secure</h2>
</div>
    <Link href='/contact-us' className='relative  mt-[45px] cursor-pointer z-20' >
            <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                <p className='text-[16px] font-semibold text-[#FFF]'>Contact Sales</p>
            </div>
            <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                <img src={'/image/ConnectedBanking/arrowRight.svg'}/>
            </div>
        </Link>
        </div>
        </div>
        </section>
  )
}

export default DigitalPayment