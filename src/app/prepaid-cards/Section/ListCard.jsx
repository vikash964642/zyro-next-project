
function ListCard() {
  return (
       <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[80px] mt-[110px] ">
        <div className='ListCardGradientTop'></div>
     <div className='gradient-border h-[185px] md:h-[160px] lg:h-[146px] w-full rounded-[10px] lg:rounded-[16.5px] flex justify-center items-center'>
         <div className='rounded-[10px] lg:rounded-[16.5px] flex flex-col justify-center h-[calc(100%-2px)] w-[calc(100%-2px)] bg-[#0B051E] px-[12px]  md:px-[18px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={'/image/Prepaid/ListCardImg1.webp'} className='h-[25px] w-[25px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Accepted Everywhere</h2>
            </div>
        </div> 
      
          <div className='pl-[70px] md:pl-[93px] '>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[12px] sm:pt-0'>Shop Online - Fashion, Food, Travel, subscriptions, and more.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[8px] lg:pt-[4px]'>Pay in store - Swipe, Insert or Tap at any POS machine.</li>
            </ul>
          </div>
        </div>
     </div>

              
    <div className='gradient-border my-[20px] h-[185px] md:h-[160px] lg:h-[146px] w-full rounded-[10px] lg:rounded-[16.5px] flex justify-center items-center'>
         <div className='rounded-[10px] lg:rounded-[16.5px] flex flex-col justify-center h-[calc(100%-2px)] w-[calc(100%-2px)] bg-[#0B051E] px-[12px]  md:px-[18px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={'/image/Prepaid/ListCardImg2.webp'} className='h-[26px] w-[26px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Free Reloads, Always</h2>
            </div>
        </div> 
      
          <div className='pl-[70px] md:pl-[93px] '>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[12px] sm:pt-0'>Zero Top-Up Fees - Every rupee goes directly to your card.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[8px] lg:pt-[4px]'>No Hidden Charges - Know exactly what you’re spending.</li>
            </ul>
          </div>
        </div>
     </div>
           <div className='gradient-border h-[185px] md:h-[160px] lg:h-[146px] w-full rounded-[10px] lg:rounded-[16.5px] flex justify-center items-center'>
         <div className='rounded-[10px] lg:rounded-[16.5px] flex flex-col justify-center h-[calc(100%-2px)] w-[calc(100%-2px)] bg-[#0B051E] px-[12px]  md:px-[18px]'>
          <div>
            <div className='flex items-center gap-[14px] md:gap-[25px]'>
                <div className='flex justify-center items-center h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#4F31B4]'>
                    <img src={'/image/Prepaid/ListCardImg3.webp'} className='h-[24px] w-[24px] md:h-[30px] md:w-[30px]'/>
                </div>
                <h2 className='ListCardHeaderGradient text-[18px] md:text-[20px] font-semibold'>Bank- Level Security, Always On</h2>
            </div>
        </div> 
      
          <div className='pl-[70px] md:pl-[93px] '>
              <ul className='list-disc list-outside'>
               <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[12px] sm:pt-0'>Instantly block, freeze, or restrict cards.</li>
                <li className='max-[360px]:text-[13px] text-[14px] md:text-[16px] font-normal text-[#9E9C9F] pt-[8px] lg:pt-[4px]'>Control how and where your money is spent with custom limits.</li>
            </ul>
          </div>
        </div>
     </div>
        <div className='ListCardGradientBottom'></div>
        </section>
  )
}

export default ListCard