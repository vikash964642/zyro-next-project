"use client"
import './Prepaid.css';
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
      <section className="max-w-screen-lg mx-auto px-[30px] xl:px-0 relative  ">
     
        <div className='HeroSectionGradient'></div>
<div className='pt-[80px] lg:pt-[113px]'>
   <div className='flex items-center flex-col'>
     <h2 className='herosectionHeaderGradient max-[360px]:text-[22px] text-[26px] sm:text-[30px] lg:text-[36px] font-semibold leading-[39px] lg:leading-[46px] sm:text-center sm:w-[500px] lg:w-[670px]'>Your All-in-One Card for Shopping, Travel & More</h2>
    <p className='max-[360px]:text-[13px] text-[16px] sm:text-center leading-[28px] sm:text-[18px] lg:text-[20px] font-normal text-[#A9A9A9] lg:text-center sm:w-[550px] lg:w-[600px] pt-[10px]'>From daily spending to travel adventures, manage it all securely and easily, anytime, anywhere with a single card.</p>

        <button onClick={() => handleLinkClick("Prepaid Card")} className='hidden  md:w-[225px] md:h-[45px] rounded-[24.75px] bg-[#4F31B4] text-[#FFF] lg:text-[22px] font-semibold md:mt-[25px] md:flex justify-center items-center cursor-pointer'>Get Started</button>
   </div>


<div className='flex justify-center mt-[16px]'>
  <video
  src={'/video/prepaidcardHeroSection.webm'}
  autoPlay
  loop
  muted
  playsInline
  className="lg:w-[780px] h-[245px] lg:h-[428px] object-cover"
>
  Your browser does not support the video tag.
</video>
</div>
<div className='flex justify-center md:hidden mt-[60px]'>
  <button onClick={() => handleLinkClick("Prepaid Card")} className=' max-[375px]:w-[100%] w-[325px] h-[55px] rounded-[30px] bg-[#4F31B4] text-[#FFF] text-[22px] font-semibold flex justify-center items-center cursor-pointer'>Get Started</button>
</div>
</div>

      </section>

  )
}

export default HeroSection