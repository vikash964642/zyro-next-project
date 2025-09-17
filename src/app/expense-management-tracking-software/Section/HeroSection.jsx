"use client";
import './Expense.css';
import Link from "next/link";


function HeroSection() {
   const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className='lg:mt-[134px] mt-[50px]'>
      <div className='max-w-screen-lg mx-auto relative '>
        <div className=' hero-left-gradiant'></div>
              <div className='lg:flex justify-between items-center'>
                  <div className='lg:w-[50%] lg:p-3'>
<div className='flex justify-center lg:justify-start'>
                        <h2 className="bg-gradientText bg-clip-text text-transparent max-[375px]:px-[15px] max-[375px]:w-full  w-[360px] sm:w-[530px] lg:w-full font-semibold  text-[26px] sm:text-[33px] lg:text-[36px] leading-[39px] lg:leading-[46px] text-center lg:text-left">Track, Manage & Control Business Expenses with Ease</h2>
</div>
                     <div className='flex justify-center lg:justify-start  mt-[11px] mb-[58px] lg:mb-[47px]'>
                       <p className=" max-[360px]:px-[15px] max-[360px]:w-full w-[334px] sm:w-[550px] lg:w-full text-heroDesc  text-[16px] lg:text-[20px] font-normal leading-[30px]   text-center lg:text-left lg:pr-[40px]">Simplify expense tracking, card & finance management, reimbursements, and policy compliance, all in one smart solution built for growing businesses</p>
                     </div>
                      <div className='hidden lg:flex  lg:justify-start  mt-[45px] '>
                            <Link href='/contact-us' className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-semibold flex justify-center items-center"><span onClick={ScrollTop} >Get Started</span></Link>
      
                      </div>
                  </div>
                  <div className='flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] '>
                      <img src={'/image/ExpenseManagement/ExpenseHero.webp'} alt="" className='sm:w-[484px] sm:h-[331px] lg:w-auto lg:h-auto'/>
                  </div>
                   <div className='flex justify-center mt-[39px] max-[360px]:px-[20px] lg:hidden '>
                            <Link href='/contact-us' className="text-white  max-[360px]:w-full w-[325px] h-[55px] bg-[#4F31B4] rounded-[24.77px] text-[22px] font-semibold flex justify-center items-center"><span onClick={ScrollTop} >Get Started</span></Link>
      
                      </div>
              </div>
               <div className='hero-right-gradiant hidden lg:block'></div>
               </div>
          </section>
  )
}

export default HeroSection