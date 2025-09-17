

function RoleBased() {
  return (
   <section className='max-w-screen-lg mx-auto mt-[221px]'>
    <div className='relative'>
        {/* <div className='roleBased-gradiant'></div> */}
        <div className='flex justify-center flex-col items-center'>
            <h2 className='w-[380px] lg:w-[661px] max-[400px]:w-[300px] role-Gradiant-head font-semibold lg:text-[32px] text-[24px] leading-[32px] lg:leading-[46px] text-center'>Flexible, Role-Based Approvals that Grow with Your Business</h2>
            <p className='w-[366px] lg:w-[656px]  max-[400px]:w-[300px] lg:font-medium font-normal lg:text-[16px] text-[16.45px] leading-[23px] lg:leading-[30px] text-center text-[#A9A9A9] lg:pt-[24px] pt-[21px]'>Set approval flows by hierarchy, auto-delegate when needed, and route requests based on amount, category, or department.</p>
        </div>
        <div className='flex justify-center items-center lg:pt-[107px] pt-[91px]'>
            <video src={'/video/ExpenceRoleBased.webm'} muted autoPlay loop playsInline  className='lg:w-[697px]  lg:h-[537.6px] hidden lg:block' />
            <video src={'/video/ExpenceRoleBased.webm'} muted autoPlay loop playsInline  className=' w-[374px]  h-[498.6px] lg:hidden'  />
        </div>
    </div>
   </section>
  )
}

export default RoleBased