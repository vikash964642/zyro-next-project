import Link from 'next/link';

import './IMPSSwitch.css';
function HeroSection() {
    const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
      <section className=" mt-[60px] lg:mt-[73px] relative">
        <div className='IMPSHeroSectionGradient'></div>
             <div className="max-w-screen-lg lg:mx-auto lg:px-[25px] xl:px-0">
<div className='flex items-center justify-between flex-col lg:flex-row gap-[32px]'>
    <div className='flex flex-col items-center lg:items-start '>
        <h2 className='IMPSSwitchHeroSectionHeaderGradient px-[28px] sm:px-0 text-center lg:text-left text-[28px] sm:text-[30px] lg:text-[34px] font-semibold leading-[39px] lg:leading-[45px]'>IMPS  Switch, Every Transfer instant</h2>
        <p className=' text-center max-[375px]:px-[28px] max-[375px]:w-full w-[355px] lg:w-[580px] lg:text-left text-[18.2px] lg:text-[30px] text-white70 lg:text-[#FFF] font-normal leading-[26px] lg:leading-[42px] pt-[18px] lg:pt-[15px]'>Secure, Complaint and Instant payment-Anytime, Anywhere</p>
        <Link href='/contact-us'  className='mt-[50px] w-[148.6px] h-[46px] bg-[#4F31B4] rounded-[24.77px] hidden lg:flex justify-center items-center text-[18.1px] text-[#FFF] font-semibold'>Contact Us</Link>
    </div>
    <img src={'/image/IMPSSwitch/IMPSHeroSectionImg1.webp'} className=' max-[375px]:h-[325px]  w-[370px] h-[368px] lg:w-[329.5px] lg:h-[338.5px]'/>
    {/* <img src={IMPSHeroSectionImgMob} className='block lg:hidden px-[20px] sm:px-0 sm:w-[370px] md:w-[425px]'/> */}
      <Link href='/contact-us'  className='mt-[40px] max-[360px]:w-[300px] max-[360px]:h-[50px] w-[325px] h-[55px] bg-[#4F31B4] rounded-[30px] flex justify-center items-center lg:hidden text-[22px] text-[#FFF] font-semibold'>Contact Us</Link>
</div>
             </div>
      </section>
  )
}

export default HeroSection