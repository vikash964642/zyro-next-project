// import React from 'react'
import './about.css';

function HeroSection() {
  return (
    <section className='mt-[117px] lg:mt-[166px]'>
      <div className='max-w-screen-lg mx-auto relative '>
        <div className='left-gradiant'></div>
        <div className='center-gradiant'></div>
        <div>
          <h1 className="aboutheader lg:text-[36px] text-[25px] leading-[36px] px-[20px] font-semibold lg:leading-[46px] text-center">Powering the Future of Business <br className='hidden lg:block' /> Banking</h1>
          <p className="text-[15.5px] leading-[28px] text-center pt-[35px] lg:px-[150px] px-[38px] text-[#A9A9A9]">
            At Zyro Business Banking, we are transforming the way businesses
            manage daily transactions. We offer a unified financial platform
            designed to empower modern enterprises with smarter, faster, and
            more secure tools for banking, payments, and growth. From easy UPI
            collections to real-time analytics, automated payouts to
            multi-account tracking, Zyro is built to give you complete control
            over your financial operations.
          </p>
        </div>
          <div className='right-gradiant hidden lg:block'></div>
      </div>
    </section>
  );
}

export default HeroSection;
