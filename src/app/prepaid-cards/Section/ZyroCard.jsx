
function ZyroCard() {
  return (
    <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[200px] mt-[110px]">
        <h2 className='max-[360px]:text-[22px] text-[24px] md:text-[30px] lg:text-[34px] font-semibold text-center ZyroCardHeaderGradient'>Track Every Spend in Real Time</h2>
      <div className='flex justify-center items-center pt-[10px]'>
          <p className='max-[360px]:text-[14px] text-[16px] font-normal text-[#A9A9A9] text-center lg:w-[401px]'>Stay in control of your finances with live updates and smart insights</p>
      </div>
      <div className='zyroCardBox mt-[50px] lg:mt-[20px] rounded-[23.163px] max-[360px]:px-[20px] px-[30px] py-[45px] lg:p-[45px] md:flex justify-between items-center'>
        <div>
            <div>
             <div className='flex justify-center items-center gradiantBorder h-[43px] w-[43px] rounded-[9.05px]'>
                   <div className=' flex justify-center items-center h-[calc(100%-1.5px)] w-[calc(100%-2px)]  rounded-[9.05px] bg-[#080219]'>
                <img src={'/image/Prepaid/ZyroCardImg1.svg'} className=''/>
                 </div>
          </div>
                <h3 className='text-[20px] lg:text-[22px] font-semibold text-[#FFF] pt-[8px]'>Live Alerts</h3>

                <p className='text-[14px] lg:text-[16px] font-normal text-[#CACACA] pt-[5px]'>Get notified for every transaction</p>
            </div>
               <div className='pt-[34px]'>
          <div className='flex justify-center items-center gradiantBorder h-[43px] w-[43px] rounded-[9.05px]'>
                   <div className=' flex justify-center items-center h-[calc(100%-1.5px)] w-[calc(100%-2px)]  rounded-[9.05px] bg-[#080219]'>
                <img src={'/image/Prepaid/ZyroCardImg2.svg'} className=''/>
                 </div>
          </div>
                <h3 className='text-[20px] lg:text-[22px] font-semibold text-[#FFF] pt-[8px]'>Monthly Reports</h3>
                <p className='text-[14px] lg:text-[16px] font-normal text-[#CACACA] pt-[5px]'>Visual summaries that make budgeting easy</p>
            </div>
               <div className='pt-[34px]'>
              <div className='flex justify-center items-center gradiantBorder h-[43px] w-[43px] rounded-[9.05px]'>
                   <div className=' flex justify-center items-center h-[calc(100%-1.5px)] w-[calc(100%-2px)]  rounded-[9.05px] bg-[#080219]'>
                <img src={'/image/Prepaid/ZyroCardImg3.svg'} className=''/>
                 </div>
          </div>
                <h3 className='text-[20px] lg:text-[22px] font-semibold text-[#FFF] pt-[8px]'>Smart Summaries</h3>
                <p className='text-[14px] lg:text-[16px] font-normal text-[#CACACA] pt-[5px]'>View your spending categorized for better clarity</p>
            </div>
        </div>
        <div className='flex justify-center mt-[80px] lg:mt-0'>
<img src={'/image/Prepaid/ZyroATMCardImg.webp'} className='h-[300px] w-[235px] lg:h-[350px] lg:w-[276px]'/>
<div className='ZyroCardATMGradient'>

</div>
        </div>
      </div>
    </section>
  )
}

export default ZyroCard