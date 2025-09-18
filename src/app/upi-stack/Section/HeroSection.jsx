"use client";
import { useRouter } from "next/navigation";
function HeroSection() {
  const router = useRouter();
   const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleLinkClick = (pageName) => {
ScrollTop();
  router.push(`/contact-us?page=${encodeURIComponent(pageName)}`);
};
  return (
            <section className=" mt-[83px] lg:mt-[92px] relative">
                <div className='HeroSectionTopGradient'></div>
                 <div className='HeroSectionImageGradient1'></div>
                   <div className='HeroSectionImageGradient2'></div>
               <div className="max-w-screen-lg lg:mx-auto ">
                <h2 className='HeroSectionHeaderGradient max-[375px]:px-[40px] px-[50px] sm:px-0 text-center text-[26px] sm:text-[32px] md:text-[34px] lg:text-[38px] font-semibold lg:leading-[55px]'>India’s Scalable UPI Infrastructure</h2>
                <div className='flex justify-center pt-[8px]'>
                    <p className='max-[360px]:px-[15px] px-[25px] md:w-[641px] text-[#9E9C9F] text-[16px] font-normal leading-[27px] md:leading-[29px] text-center'>From TPAPs to banks and fintechs, the Zyro UPI Stack provides an infrastructure of trust, scale, and speed for issuing, acquiring, and managing UPI transactions</p>
                </div>
<div className='hidden md:flex justify-center pt-[45px]'>
                   <button onClick={() => handleLinkClick("UPI Stack")} className='bg-[#4F31B4] rounded-[24.77px] h-[46px] w-[148px] text-[18px] font-semibold text-[#FFF] flex justify-center items-center'>Contact Us</button>
</div>
<div className='flex justify-center pt-[84px] md:pt-[78px]'>
    <img src={'/image/UPIStack/UPIStackHeroSecImg1.webp'} className='hidden md:block md:h-[400px] md:w-[750px] lg:h-[500px] lg:w-[950px]'/>
    <img src={'/image/UPIStack/UPIStackHeroSecImg1Mob.svg'} className='block md:hidden max-[400px]:px-[10px]' />
</div>
<div className='flex md:hidden justify-center pt-[85px] max-[360px]:px-[15px]'>
                   <button onClick={() => handleLinkClick("UPI Stack")} className='bg-[#4F31B4] rounded-[24.77px] h-[50px] max-[360px]:w-full w-[325px] text-[22px] font-semibold text-[#FFF] flex justify-center items-center'><span onClick={ScrollTop}>Contact Us</span></button>
</div>
               </div>
               </section>
  )
}

export default HeroSection