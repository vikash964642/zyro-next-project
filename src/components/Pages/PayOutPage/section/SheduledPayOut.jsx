
import SheduledPayOutImg1 from '/image/PayOut/SheduledPayOutImg1.svg';
function SheduledPayOut() {
  return (
  <section className="max-w-screen-lg lg:mx-auto mt-[150px]">
    <h2 className='text-[24px] md:text-[30px] lg:text-[34px] text-[#FFF] font-semibold SheduledPayoutHeaderGradient text-center max-[360px]:px-[15px] px-[20px]'>Scheduled Payouts, On Time, Every Time</h2>
    <div className='flex justify-center pt-[12px]'>
        <p className='text-[14px] md:text-[15px] lg:text-[16px] text-[#A9A9A9] font-normal leading-[25px] max-[360px]:w-full w-[325px] md:w-[450px] lg:w-[550px] text-center'>Set future payments with scheduled payouts for efficient, timely, and hassle-free transfers</p>
    </div>
    <div className='lg:h-[525px] border-[0.965px] border-border20 bg-white20Bg rounded-[23px] pl-[18px] pr-[18px] lg:pr-0 lg:pl-[30px] py-[55px] lg:py-[60px] mx-[12px] lg:mx-0 mt-[30px]'>
<div className='flex justify-center lg:justify-start w-[100%]'>
              <div className='w-[2px]  SheduledPayoutsBorder'></div>
<div className='flex flex-col lg:flex-row gap-[55px] lg:gap-0 items-center'>
    <div className='lg:w-[50%] flex items-center  h-full ml-[40px] lg:ml-[45px]'>
  
<ul className='text-[#CACACA] text-[14px] md:text-[16px] lg:text-[18px] font-normal list-disc list-outside'>
    <li>Schedule Payouts via Dashboard, Excel, or API in seconds.</li>
    <li className='py-[23px]'>Automate Payments daily, weekly, or monthly to maintain cash flow.</li>
    <li>Transfer funds securely using IMPS, NEFT, or RTGS anytime.</li>
</ul>
</div>
<div className='lg:w-[50%] w-full flex max-[375px]:justify-end justify-center md:justify-end lg:justify-center'>
<img src={SheduledPayOutImg1} className='max-[360px]:w-[250px] max-[360px]:h-[205px] w-[307px] h-[253px] md:w-[470px] md:h-[388px] lg:w-full lg:h-full'/>
</div>
</div>
</div>
    </div>
    </section>
  )
}

export default SheduledPayOut