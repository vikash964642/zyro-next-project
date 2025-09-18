// // import React from 'react'

// import Link from 'next/link';

// function BusinessBanking() {
//    const ScrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//   <section className="max-w-screen-lg lg:mx-auto mt-[100px]">
//     <div className='bg-[#0E0624] rounded-[20px] px-[25px] lg:px-[55px] lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] overflow-hidden'>
//       <div className='relative mt-[55px] lg:mt-[0px] lg:w-[60%] flex flex-col justify-center items-center lg:items-start'>
//           <div>
//             <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90 lg:w-[684px]'>Start smart spending today</h2>
//             <div className='flex'>
//               <p className='max-[360px]:text-[12px] text-[14px] lg:text-[20px] font-normal text-center lg:text-left text-white70 pt-[10px] lg:w-[435px]'>Experience the future of spending with Zyro Prepaid Card</p>
//             </div>
//         </div>

//            <Link href='/contact-us' className='relative  mt-[40px] cursor-pointer z-20'>
//             <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
//                 <p className='text-[16px] font-semibold text-[#FFF]'>Get Your Card</p>
//             </div>
//             <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
//                 <img src={'/image/ConnectedBanking/arrowRight.svg'}/>
//             </div>
//         </Link>
//  <div className='PrepaidbusinessBankingGradient1 '></div>
//       </div>
// <div className='flex items-end justify-center lg:justify-start lg:w-[40%] relative'>
//      <img src={'/image/Prepaid/PrepaidBusinessBanking.svg'} className='z-10'/>

//         <div className=' PrepaidbusinessBankingGradient2'></div>
 
// </div>
//     </div>
//   </section>
//   )
// }

// export default BusinessBanking



"use client"

// import React from 'react'
import { useRouter } from "next/navigation";


function BusinessBanking() {
    const router = useRouter();
   const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleLinkClick = (pageName) => {
ScrollTop();
  router.push(`/contact-us?page=${encodeURIComponent(pageName)}`);
};
  return (
  <section className="max-w-screen-lg lg:mx-auto mt-[100px]">
    <div className='bg-[#0E0624] rounded-[20px] px-[25px] lg:px-[55px] lg:h-[460px] flex flex-col lg:flex-row gap-[100px] lg:gap-[0px] overflow-hidden'>
      <div className='relative mt-[55px] lg:mt-[0px] lg:w-[60%] flex flex-col justify-center items-center lg:items-start'>
          <div>
            <h2 className='max-[360px]:text-[22px] text-[26px] lg:text-[48px] font-semibold text-center lg:text-left text-white90 lg:w-[684px]'>Start smart spending today</h2>
            <div className='flex'>
              <p className='max-[360px]:text-[12px] text-[14px] lg:text-[20px] font-normal text-center lg:text-left text-white70 pt-[10px] lg:w-[435px]'>Experience the future of spending with Zyro Prepaid Card</p>
            </div>
        </div>

           <button onClick={() => handleLinkClick("Prepaid Card")} className='relative  mt-[40px] cursor-pointer z-20'>
            <div className=' w-[180px] h-[50px] bg-[#4F31B4] rounded-[44px] flex justify-center items-center'>
                <p className='text-[16px] font-semibold text-[#FFF]'>Get Your Card</p>
            </div>
            <div className='h-[50px] w-[50px] bg-[#FBF9F1] rounded-[50%] absolute top-0 left-[158px] flex justify-center items-center'>
                <img src='/image/ConnectedBanking/arrowRight.svg'/>
            </div>
        </button>
 <div className='PrepaidbusinessBankingGradient1 '></div>
      </div>
<div className='flex items-end justify-center lg:justify-start lg:w-[40%] relative'>
     <img src='/image/Prepaid/PrepaidBusinessBanking.svg' className='z-10 sm:h-[358px] sm:w-[367px]'/>

        <div className=' PrepaidbusinessBankingGradient2'></div>
 
</div>
    </div>
  </section>
  )
}

export default BusinessBanking