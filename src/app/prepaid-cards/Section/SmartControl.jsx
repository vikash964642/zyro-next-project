
function SmartControl() {
  return (
   <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[150px] mt-[110px]">
    <div className='bg-[#0E0624] rounded-[7px] overflow-hidden relative max-[360px]:px-[15px] px-[25px] pt-[55px] pb-[60px]  lg:px-[70px] lg:pt-[50px] lg:pb-[70px]'>
        <div className='SmartControlGradientTop'></div>
        <h2 className='SmartControlHeaderGradient max-[360px]:text-[22px] text-[24px] md:text-center md:text-[30px] lg:text-[36px] font-semibold '>Smart Controls to Manage your Spending</h2>
        <p className='max-[360px]:text-[14px] text-[16px] text-[#A9A9A9] font-normal md:text-center pt-[8px]'>Take full control of your card at your convenience.</p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[20px] lg:gap-x-[50px] gap-y-[45px] mt-[80px] '>
          <div >
            <div className='flex items-center gap-[16px] md:gap-[22px]'>
               <div className='gradiantBorder flex justify-center items-center h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] rounded-[8.4px] lg:rounded-[11px]'>
                 <div className='flex justify-center items-center h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[8.4px]    lg:rounded-[11px] bg-[#080219]'>
                    <img src={'/image/Prepaid/SmartControlImg1.webp'} className='h-[23px] w-[23px] lg:h-[30px] lg:w-[30px]'/>
                </div>
               </div>
                <div>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Set</p>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Limits</p>
                </div>
            </div>
  <div className='SmartControlHorizentalBorder h-[1px] w-[120px] lg:w-[160px] mt-[17.50px]'></div>
  <p className='text-[12.26px] lg:text-[16px] font-medium text-[#E5E5E5] pt-[16px] xl:pr-[20px]'>Control daily, weekly, or monthly</p>

  <div className='SmartControlGradient1'></div>
        </div>
          <div>
            <div className='flex items-center gap-[16px] lg:gap-[22px]'>
              <div className='gradiantBorder flex justify-center items-center h-[40px] w-[40px] rounded-[8.4px] lg:rounded-[11px] lg:h-[52px] lg:w-[52px]'>
                
                <div className='flex justify-center items-center  h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[8.4px] lg:rounded-[11px] bg-[#080219]'>
                    <img src={'/image/Prepaid/SmartControlImg2.webp'} className='w-[25.50px] h-[19px] lg:w-[33.36px] lg:h-[24.80px]'/>
                </div>
              </div>
                <div>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Channel</p>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Control</p>
                </div>
            </div>
  <div className='SmartControlHorizentalBorder h-[1px] w-[120px] lg:w-[160px] mt-[17.50px]'></div>
  <p className='text-[12.26px] lg:text-[16px] font-medium text-[#E5E5E5] pt-[16px] xl:pr-[40px]'>Enable/disable In-Store (POS) or online usage</p>
   
        </div>
          <div>
            <div className='flex items-center gap-[16px] lg:gap-[22px]'>
                <div className='gradiantBorder flex justify-center items-center h-[40px] w-[40px] rounded-[8.4px] lg:rounded-[11px] lg:h-[52px] lg:w-[52px]'>

                <div className='flex justify-center items-center h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[8.4px]  lg:rounded-[11px] bg-[#080219]'>
                    <img src={'/image/Prepaid/SmartControlImg3.webp'} className='h-[22px] w-[22px] lg:h-[28px] lg:w-[28px]' />
                </div>
                </div>
                <div>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Instant</p>
                    <p className='text-[13.74px] lg:text-[18px] font-semibold text-[#E5E5E5]'>Freeze</p>
                </div>
            </div>
  <div className='SmartControlHorizentalBorder h-[1px] w-[120px] lg:w-[160px] mt-[17.50px]'></div>
  <p className='text-[12.26px] lg:text-[16px] font-medium text-[#E5E5E5] pt-[16px] xl:pr-[60px]'>Block/Unblock your card in one tap</p>
    <div className='SmartControlGradient2'></div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default SmartControl