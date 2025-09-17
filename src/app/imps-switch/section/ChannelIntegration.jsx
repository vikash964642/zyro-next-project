
function ChannelIntegration() {
  return (
      <section className=" mt-[160px] lg:mt-[220px] px-[20px] xl:px-0 relative">
         <div className="max-w-screen-lg lg:mx-auto relative">
             <div className="ChannelIntegrationTopGradient"></div>
            
    <p className='ChannelIntegrationHeaderGradient text-[24px] sm:text-[34px] lg:text-[38px] font-semibold lg:leading-[55px] text-center'>
 Channel Integration
    </p>
  <div className='flex justify-center pt-[12px] md:pt-[8px]'>
      <p className='sm:w-[540px] text-[16px] font-normal leading-[26px] text-center text-[#9E9C9F] '>
     Easily integrates with CBS, mobile, internet banking, wallets, and UPI apps for smooth IMPS transactions
    </p>
  </div>

            <div className='mt-[35px] lg:mt-[22px] flex justify-center'>
                <img src={'/image/IMPSSwitch/ChannelIntegrationImg.svg'} alt="multilanguage"   className='hidden md:block'/>
                <img src={'/image/IMPSSwitch/ChannelIntegrationImgMob.svg'} alt="multilanguage"   className='sm:w-full md:hidden'/>
            </div>
       
         </div>
         </section>
  )
}

export default ChannelIntegration