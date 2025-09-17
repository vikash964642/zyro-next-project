import React from 'react'

function UPIPlugin() {
  return (
            <section className=" mt-[130px] ">
               <div className="max-w-screen-lg lg:mx-auto relative">
                <div className='UPIPluginTopGradient'></div>
                <div className='UPIPluginBottomGradient1'></div>
                <div className='UPIPluginBottomGradient2'></div>
                <h2 className='UPIPluginHeaderGradient text-[24px] sm:text-[33px] lg:text-[38px] font-semibold sm:leading-[42px] lg:leading-[55px] text-center'>UPI Plugin</h2>
              <div className='flex justify-center pt-[6px]'>
                  <p className='w-[297px] sm:w-full text-[#9E9C9F] text-[16px] font-normal lg:leading-[33px]  text-center'>One-Click UPI Payments with 90% Success Rates</p>
              </div>
                <div className='flex justify-center relative z-40 mt-[60px] lg:mt-[45px]'>
                    <img src={'/image/UPIStack/UPIPluginImg1.webp'} className='max-[400px]:w-full max-[400px]:px-[12px] max-[375px]:h-[175px] w-[390px] h-[193px] md:w-[650px] md:h-[300px] lg:w-[792px] lg:h-[408px]'/>
                </div>
                </div>
                </section>
  )
}

export default UPIPlugin