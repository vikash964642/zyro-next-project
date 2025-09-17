// import React from 'react'
import './PayOut.css'
function HeroSection() {
  return (
      <section className="mt-[80px]">
        <div className='max-w-screen-lg mx-auto  max-[375px]:px-[20px] px-[35px] xl:px-[0px] relative'>
          <div className='HeroSectionGradientLeft'></div>
                <div className='HeroSectionGradientRight'></div>
        <div className='pt-[120px] lg:pt-[75px]'>

        <h2 className='text-[26px] md:text-[30px] lg:text-[34px] font-semibold md:text-center md:px-[80px] lg:px-[180px] heroSectionHeaderGradient'>Simplify Your Business Payouts – Fast, Easy and Reliable</h2>
        <p className='text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#A9A9A9] md:text-center md:px-[80px] lg:px-[180px] pt-[24px]'>Make payouts fast, simple, and secure with instant transfers to banks, UPI IDs and wallets via API, dashboard, or file upload with real-time tracking and automated reconciliation.</p>
       <div className='flex justify-center mt-[120px] lg:mt-[64px]'>
         <button className='w-[275px] h-[55px] lg:w-[225px] lg:h-[45px] bg-[#4F31B4] rounded-[30px] lg:rounded-[24.77px] text-[#FFF] text-[22px] lg:text-[18px] font-semibold'>Get Started</button>
       </div>
        </div>
      </div>
      </section>
  )
}

export default HeroSection