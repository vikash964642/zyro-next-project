
import BusinessBankingMob from '/image/ConnectedBanking/BusinessBankingMob.svg';
function BusinessBanking() {
  return (
  <section className="max-w-screen-lg mx-[12px] lg:mx-auto mt-[100px]">
    <div className='bg-[#0E0624] rounded-[20px] px-[25px] lg:pl-[70px] lg:pr-[45px] lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] overflow-hidden'>
      <div className='relative mt-[55px] lg:mt-[0px] lg:w-[60%] flex flex-col justify-center items-center lg:items-start'>
          <div>
            <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-[#FFF]'>Power Up your Business with Smart Payouts</h2>
            {/* <p className='max-[360px]:text-[12px] text-[14px] lg:text-[16px] font-normal text-center lg:text-left text-white70 pt-[10px]'>Experience faster payments, real-time insights, and seamless financial management with Zyro Connected Banking.</p> */}
        </div>

           <div className='relative  mt-[40px] cursor-pointer z-20'>
            <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                <p className='text-[16px] font-semibold text-[#FFF]'>Get Started</p>
            </div>
            <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                <img src={'/image/ConnectedBanking/arrowRight.svg'}/>
            </div>
        </div>
 <div className='PayoutbusinessBankingGradient1'></div>
      </div>
<div className='flex items-end justify-center lg:justify-start lg:w-[40%] relative'>
     <img src={BusinessBankingMob}/>

        <div className='PayoutbusinessBankingGradient2'></div>
 
</div>
    </div>
  </section>
  )
}

export default BusinessBanking