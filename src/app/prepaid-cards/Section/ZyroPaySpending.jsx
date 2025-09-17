
function ZyroPaySpending() {
  return (
  <section className="max-w-screen-lg mx-auto px-[12px] xl:px-0 relative lg:mt-[80px] mt-[110px]">
    <div className='  flex justify-center'>
 <h2 className='max-[360px]:text-[22px] text-[24px] md:text-[30px] lg:text-[34px] lg:leading-[44px] w-[607px] font-semibold ZyroPaySpendingHeaderGradient1 text-center'>Say Goodbye to Overspending & hello to smarter spending</h2>
    </div>
    <p className='max-[360px]:text-[13px] text-[14px] lg:text-[16px] font-normal text-[#A9A9A9] text-center pt-[10px]'>Full Control in your hands</p>
    <div className='h-auto md-[400px] lg:h-[465px] w-[100%] ZyroPaySpendingBoxGradient border-[0.688px] border-[#434343] rounded-[24px] md:rounded-[30px] lg:rounded-[50px] mt-[34px]  lg:mt-[42px]'>
<div className='h-[100%] w-[100%] pt-[50px] pb-[28px] max-[360px]:px-[15px] px-[25px] md:px-[20px] lg:px-[45px] flex md:flex-row flex-col  items-center justify-between lg:gap-[40px]'>
    <div className='md:w-[calc(100%-400px)]'>
    <h3 className='max-[360px]:text-[20px] text-[22px] lg:text-[34px] font-semibold ZyroPaySpendingHeaderGradient2'>Manage <span className='max-[360px]:text-[20px] text-[22px] font-semibold  lg:text-[30px] lg:font-medium'>everything on the go with the</span> ZyroPay App</h3>
    <ul className='list-disc list-outside pl-[20px] pt-[10px] lg:pt-[38px]'>
        <li className='max-[360px]:text-[13px] text-[14px] lg:text-[16px] font-normal text-[#B9B9B9]'>Instantly issue virtual or physical cards</li>
        <li className='max-[360px]:text-[13px] text-[14px] lg:text-[16px] font-normal text-[#B9B9B9] pt-[10px] lg:pt-[15px]'>Approve top-ups and set spending limits in a tap</li>
    </ul>
</div>
<div className='mt-[40px] md:mt-[0px] h-[305px] w-[100%] min-[414px]:w-[352px] lg:h-[350px] lg:w-[400px]  rounded-[19.67px] flex justify-center items-center '>
{/* <img src={Image}/> */}
  <video
    src={'/video/PrepaidCard12.webm'} // put your mp4 path here
    autoPlay
    loop
    muted
    playsInline
    className="h-full w-full object-cover rounded-[19.67px]"
  />
</div>
</div>
    </div>
    </section>
  )
}

export default ZyroPaySpending