
function IMPSGlance() {
  return (
       <section className=" mt-[180px] lg:mt-[150px] ">
               <div className="max-w-screen-lg lg:mx-auto ">
<div className='hidden lg:flex flex-col items-center gap-[20px] lg:gap-[18px]'>
                    <h2 className='IMPSGlanceHeaderGradient text-center lg:text-[38px] font-semibold lg:leading-[55px]'>IMPS at a Glance</h2>
<img src={'/image/IMPSSwitch/IMPSGlanceImg.webp'} alt="" className=' lg:w-[960px] lg:h-[444px]'/>

</div>
<div className='block lg:hidden'>
  <h2 className='IMPSGlanceHeaderGradient text-[24px] sm:text-[33px] font-semibold leading-[40px] text-center'>IMPS at a Glance</h2>
<div className='bg-[#110A27] rounded-[20.5px] flex justify-center mt-[20px] pt-[65px] pb-[40px] px-[25px] relative'>
  <div className='IMPSGlanceImgGradientMob'></div>
    <img src={'/image/IMPSSwitch/IMPSGlanceImgMob.webp'} className='sm:w-[425px]'/>
</div>
</div>
               </div>
       </section>
  )
}

export default IMPSGlance