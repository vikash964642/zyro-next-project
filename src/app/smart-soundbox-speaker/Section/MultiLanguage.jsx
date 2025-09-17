

function MultiLanguage() {
  return (
    <section className=' mt-[150px]'>
      <div className='max-w-screen-lg lg:mx-auto'>
        <div className='relative'>
             <div className="multilanguage-gradient"></div>
            <div className='absolute lg:static top-[44%] lg:top-auto left-0 right-0'>
    <p className='bg-textgradiantMid text-transparent bg-clip-text text-[22px] lg:text-[32px] font-semibold leading-[42px] text-center'>
      Support Multiple <span className='text-white'>Language</span>
    </p>
    <p className='text-[14px] lg:text-[16px] font-medium leading-[19px] lg:leading-[25px] text-center text-[#9E9C9F] lg:pt-[24px] px-[35px]'>
      Available in Hindi, English & multiple regional languages for customer
    </p>
  </div>
            <div className='mt-[53px] '>
                <img src={'/image/soundbox/multilanguage.svg'} alt="multilanguage"  height={'483px'} width={'1006.62px'} className='hidden lg:block'/>
                <img src={'/image/soundbox/mobileMultilanguage.webp'} alt="multilanguage"  height={'483px'} width={'1006.62px'} className=' lg:hidden'/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default MultiLanguage