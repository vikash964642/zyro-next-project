

// import posBulkPayments from '../../../../../public/image/PayOut/posBulkPayments.webp';
import posBulkPayments from '/video/DisburseBulk.webm';
import './PayOut.css';
function BulkPayment() {
  return (
       <section className=" relative">
         <div className='BulkpaymentGradient'></div>
       <div className='max-w-screen-lg mx-auto px-[20px] xl:px-[0px] lg:pt-[150px] pt-[100px]'>
         <div className='md:flex gap-[30px] items-center'>
           
            <div className='md:w-[50%] md:h-[350px] lg:flex flex-col justify-end'>
                <h2 className='max-[360px]:text-[22px] max-[375px]:text-[23px] text-[24px] text-center md:text-left md:text-[30px] lg:text-[34px] font-semibold bulkPaymentHeaderGradient lg:leading-[45px] leading-[39px]'>Disburse Bulk Payments in a Single Click</h2>
                <p className='max-[360px]:text-[13px]  text-[14px] font-normal text-[#959595] text-center md:text-[15px] lg:text-[16px] md:text-left pt-[23px] max-[375px]:px-0 px-[10px] md:px-0 lg:leading-[33px] leadingd-[25px]'>Zyro Bulk Payouts simplify all your disbursements, from salaries and vendor payments to commissions and refunds, through a single dashboard. Just upload an Excel or CSV file, review the details, and send payments quickly.</p>
                <p className='max-[375px]:text-[14px] text-[16px] font-medium text-[#FFF] text-center md:text-left pt-[18px] lg:pt-[5px] leading-[33px]'>No delays | No manual work | No complexity</p>
            </div>
            <div className='max-[375px]:h-[260px] h-[310px] lg:h-[350px] md:w-[50%] flex justify-center mt-[60px] md:mt-0'>
                {/* <img className='h-[100%]' src={posBulkPayments}/> */}
                <video
                 src={posBulkPayments}
                 loop
                 autoPlay
                 muted
                 playsInline
                 ></video>
            </div>
        </div>
       </div>
       </section>
  )
}

export default BulkPayment