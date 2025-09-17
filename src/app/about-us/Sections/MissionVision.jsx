

function MissionVision() {
  return (
    <section className="mt-[230px] lg:mt-[134px]">
        <div className='max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between relative bg-[#110A27] py-[50px]'>
            <div className='leftGradiant'></div>
            <div className='CenterGradiant'></div>
            <div className='RightGradiant'></div>
        <div className='lg:w-[55%] pl-[39px] pr-[15px]'>
            <div>
                <h3 className='missionhead lg:text-[32px] text-[24px] font-semibold lg:leading-[46px]'>Our Mission</h3>
                <p className='text-[15.5px] font-normal leading-[27px] text-[#A9A9A9]'>Our mission is to reshape financial services by delivering innovative, secure, and user-friendly banking solutions for businesses. We are committed to bridging the urban-rural divide and bringing advanced fintech services to every corner of society, enabling all to thrive in the next generation of financial services.</p>
            </div>
            <p className='h-[1px] w-[196px] bg-[#D7D7D7] my-[40px]'></p>
            <div>
                <h3 className='visionHead lg:text-[32px] text-[24px] font-semibold lg:leading-[46px]'>Our Vision</h3>
                <p className='text-[15.5px] font-normal leading-[27px] text-[#A9A9A9]'>We are envisioning a future where innovative solutions bridge the financial divide by providing smooth, secure, and inclusive financial experiences for everyone, everywhere. By removing traditional barriers, we are redefining access and empowering businesses to grow in the digital economy.</p>
            </div>
        </div>
        <div className='flex justify-center items-center  lg:w-[45%] pt-[105px] lg:pt-0 px-[20px]'>
            <img src={'/image/AboutUs/missionVision.webp'} alt="" className='lg:h-[286px] lg:w-[415.5px]'/>
        </div>
        </div>
    </section>
  )
}

export default MissionVision