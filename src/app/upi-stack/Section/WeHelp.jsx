"use client"

import { useRouter } from "next/navigation";

function Wehelp(){
  const router = useRouter();
   const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  
  const handleLinkClick = (pageName) => {
ScrollTop();
  router.push(`/contact-us?page=${encodeURIComponent(pageName)}`);
};
    return(
            <section className="max-w-screen-lg mx-auto mt-[125px] lg:mt-[197px] ">
               <div className='bg-[#0E0624] overflow-hidden rounded-[20px] lg:pl-[70px]  lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] relative mx-[11px] lg:mx-0'>
                 <div className='WeHelpGradientButton'></div>
                 <div className=' mt-[139px] lg:mt-[0px] lg:w-[56%] flex flex-col justify-center items-center lg:items-start'>
                     <div>
                       <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90 px-[25px] lg:px-0'>We Help You Succeed in Every Transaction</h2>
                   </div>
           <button onClick={() => handleLinkClick("UPI Stack Page")}>
                      <div className='relative  mt-[40px] cursor-pointer z-20' >
                       <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                           <p className='text-[16px] font-semibold text-[#FFF]'>Contact Us</p>
                       </div>
                       <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                           <img src='/image/ConnectedBanking/arrowRight.svg'/>
                       </div>
                   </div>
            </button>
                 </div>
           <div className='flex items-end justify-center lg:justify-start lg:w-[44%] relative  '>
                <img src='/image/UPIStack/weHelp.webp' className=' lg:absolute hidden lg:block z-[15]'/>
                <img src='/image/UPIStack/weHelpMob.webp' className=' lg:hidden lg:absolute pl-[9px] z-[15]'/>
           
                   <div className='WeHelpGradientImg'></div>
            
           </div>
               </div>
             </section>
    )
}

export default Wehelp