"use client";
import { useState,useEffect } from "react";
import "./contact.css";
import { motion, AnimatePresence } from "framer-motion";
function Herosection() {
  
  const [isOpen1,setOpen1]=useState(false);
    const [isOpen2,setOpen2]=useState(false);
       const [isOpen3,setOpen3]=useState(false);
  const handleClickOpen1=()=>{
setOpen1(true);
  }
    const handleClickClose1=()=>{
setOpen1(false)
  }

    const handleClickOpen2=()=>{
setOpen2(true)
  }
    const handleClickClose2=()=>{
setOpen2(false)
  }
     const handleClickOpen3=()=>{
setOpen3(true)
  }
    const handleClickClose3=()=>{
setOpen3(false)
  }
    useEffect(() => {
    if (isOpen1 || isOpen2 || isOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto"); // cleanup
  }, [isOpen1,isOpen2,isOpen3]);
  return (
    <section className="mt-[105px]">
      {(isOpen1 || isOpen2 || isOpen3) && (
  <div className="fixed inset-0 z-20 bg-[#2B2B2BBA] opacity-[0.58]"></div>
)}
      <div className="max-w-screen-lg mx-auto">
        <div className="relative" >
          <h1 className="contacthead  text-[25px] lg:text-[38px] lg:leading-[46px] leading-[36px] font-semibold text-center">
            We are here to help you!
          </h1>

          <div className="cardGradiant"></div>
          <div className="cardGradiantTop"></div>
         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-[375px]:px-[25px] px-[48px] xl:px-0">
             <div className="h-[330px] w-full pl-[28px] pr-[12px] pt-[46px]  rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="h-[75%]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                  Customer Support
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Need help? Our dedicated 24/7 customer support team is here to
                  assist you with any queries or issues related to our services.
                </p>
                   </div>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] flex justify-center items-center gap-2" onClick={handleClickOpen1}>
                  <p className="text-[14px] leading-[20px] font-medium text-white">Get Support </p>
                  <img src={'/image/contact/arrow.svg'} alt="" className="h-[10.1px] w-[11.8px]" />
                </button>
           
             </div>
             <div className="h-[330px] w-full pl-[28px] pr-[12px] pt-[46px]  rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="h-[75%]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                 Merchant Support
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Interested in our services? Our sales experts are here to discuss how we can support your business needs
                </p>
                      </div>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] flex justify-center items-center gap-2" onClick={handleClickOpen2}>
                  <p className="text-[14px] leading-[20px] font-medium text-white">Contact Sales  </p>
                  <img src={'/image/contact/arrow.svg'} alt="" className="h-[10.1px] w-[11.8px]" />
                </button>
        
             </div>
             <div className="h-[330px] w-full  pl-[28px] pr-[12px] pt-[46px] rounded-[16.5px] border-[0.69px] border-borderColor  bg-[#0B051E]">
            
              <div className="h-[75%]">
                <h3 className="text-[22px] font-bold leading-[24px] text-[#FFFFFF]">
                  Partnership
                </h3>
                <p className="text-[16px] font-normal leading-[25px] text-[#A9A9A9] pt-[30px]">
                  Let’s collaborate! We are always open to strategic partnerships that drive innovation and growth in the digital banking space.
                </p>
                   </div>
                <button className="h-[37px] w-[147px] rounded-[24.77px] bg-[#4F31B4] flex justify-center items-center gap-2" onClick={handleClickOpen3}>
                  <p className="text-[14px] leading-[20px] font-medium text-white">Partner Now  </p>
                  <img src={'/image/contact/arrow.svg'} alt="" className="h-[10.1px] w-[11.8px]" />
                </button>
           
             </div>
         </div>
        </div>
      </div>
  {isOpen1 && (
    <AnimatePresence>
    <motion.div
      key="contact-modal"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 top-[77px] z-30  flex justify-center items-start md:items-center"
    >

  <div className="FormBorder  md:rounded-[8px] w-full md:w-[600px] lg:w-[915px]  h-screen md:h-auto max-h-screen md:max-h-[90vh]  overflow-y-auto">
        <div className="relative bg-[#0B051E]  md:rounded-[8px] px-[26px] lg:pl-[49px] lg:pr-[33px] pt-[65px] md:pt-[35px] pb-[100px] md:pb-[50px]">
 
        <div className="flex justify-between items-center">
          <h2 className="modalHeaderGradient1 text-[26px] md:text-[30px] lg:text-[32px] font-semibold">
            Get in Touch
          </h2>
          <img
            src={'/image/CrossMark.svg'}
            alt="close"
            className="cursor-pointer h-[16px] w-[16px] md:w-[21px] md:h-[21px]"
            onClick={handleClickClose1}
          />
        </div>

        {/* Form */}
      <form>
          <div className="md:flex items-center gap-[15px] pt-[30px] md:pt-[45px]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-0"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] md:mt-0"
            />
          </div>
        
          <div className="md:flex items-center gap-[15px] lg:pt-[21px]">
            <input
              type="text"
              placeholder="Email ID"
              className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] lg:mt-0"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] lg:mt-0"
            />
          </div>
        
          <div className="pt-[20px] lg:pt-[21px]">
            <textarea
              placeholder="Query"
              className="bg-[#ECECEC] rounded-[6px] h-[125px] w-full md:w-[400px]  lg:w-[560px] px-[22px] pt-[17px] text-[16px] text-[#292929] outline-none"
            />
          </div>
        
          <div className="flex justify-center lg:justify-start pt-[50px] md:pt-[35px] ">
            <button className="bg-[#4F31B4] h-[55px] max-[400px]:w-full w-[290px] rounded-[24.77px] text-[20px] font-semibold text-[#FFF]">
              Send
            </button>
          </div>
      </form>
      </div>
  </div>
    </motion.div>
    </AnimatePresence>
  )}

  {isOpen2 && (
    <AnimatePresence>
    <motion.div
      key="contact-modal"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 top-[77px] z-30  flex justify-center items-start md:items-center"
    >

<div className="FormBorder md:rounded-[8px] w-full md:w-[600px] lg:w-[915px]  h-screen md:h-auto max-h-screen md:max-h-[90vh]  overflow-y-auto">
        <div className="relative bg-[#0B051E]    px-[26px] lg:pl-[49px] lg:pr-[33px] pt-[65px] md:pt-[35px] pb-[100px] md:pb-[50px]">
 
        <div className="flex justify-between items-center">
          <h2 className="modalHeaderGradient1 text-[26px] md:text-[30px] lg:text-[32px] font-semibold">
            Get in Touch
          </h2>
          <img
            src={'/image/CrossMark.svg'}
            alt="close"
            className="cursor-pointer h-[16px] w-[16px] md:w-[21px] md:h-[21px]"
            onClick={handleClickClose2}
          />
        </div>

        {/* Form */}
       <form>
         <div className="md:flex items-center gap-[15px] pt-[30px] md:pt-[45px]">
           <input
             type="text"
             placeholder="Full Name"
             className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-0"
           />
           <input
             type="text"
             placeholder="Company Name"
             className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] md:mt-0"
           />
         </div>
        
         <div className="md:flex items-center gap-[15px] lg:pt-[21px]">
           <input
             type="text"
             placeholder="Email ID"
             className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] lg:mt-0"
           />
           <input
             type="text"
             placeholder="Mobile"
             className="bg-[#ECECEC] rounded-[6px] h-[55px] w-full md:w-[50%] lg:w-[375px] px-[22px] text-[16px] text-[#292929] outline-none mt-[20px] lg:mt-0"
           />
         </div>
        
         <div className="pt-[20px] lg:pt-[21px]">
           <textarea
             placeholder="Query"
             className="bg-[#ECECEC] rounded-[6px] h-[125px] w-full md:w-[400px]  lg:w-[560px] px-[22px] pt-[17px] text-[16px] text-[#292929] outline-none"
           />
         </div>
        
         <div className="flex justify-center lg:justify-start pt-[50px] md:pt-[35px] ">
           <button className="bg-[#4F31B4] h-[55px] max-[400px]:w-full w-[290px] rounded-[24.77px] text-[20px] font-semibold text-[#FFF]">
             Send
           </button>
         </div>
       </form>
      </div>
</div>
    </motion.div>
    </AnimatePresence>
  )}

{isOpen3 && (
     <AnimatePresence>
    <motion.div
      key="contact-modal"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 top-[77px] z-30  flex justify-center items-start md:items-center"
    >

   <div className="FormBorder  md:rounded-[8px] w-full md:w-[600px] lg:w-[915px]  h-screen md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto">
       <div className="bg-[#0B051E]  md:rounded-[8px]   pt-[55px] md:pt-[36px] pb-[100px]  px-[20px] md:px-[39px]">
          <div className="flex justify-between items-center">
          <h2 className="modalHeaderGradient2 text-[26px] md:text-[30px] lg:text-[32px] font-semibold">
           Need Help?
          </h2>
          <img
            src={'/image/CrossMark.svg'}
            alt="close"
            className="cursor-pointer "
            onClick={handleClickClose3}
          />
        </div>
        <div className="flex flex-col items-center">
        <div className="pt-[70px]">
            <img src={'/image/contact/ContactFormImg3.svg'} />
        </div>
          <h3 className="text-[24px] lg:text-[26px] font-semibold modalHeaderGradient3 pt-[45px] md:pt-[39px] text-center">Our team is ready to assist you</h3>
          
            <p className="hidden md:block text-[14px] lg:text-[16px] font-medium text-[#A9A9A9] lg:w-[480px] text-center pt-[21px] leading-[28px]">Email us at <a href="mailto:support@zyro.com" className="text-[#FFF] pb-[2px] border-b-[2px]">support@myzyro.com</a> or call <a href="tel:+919560050703" className="text-[#FFF]">+91-9560050703</a>, and we’ll get back to you shortly.</p>
            <div className="block md:hidden pt-[8px]">
              <p className="text-[14px] lg:text-[16px] font-medium text-[#A9A9A9] lg:w-[480px] text-center  leading-[28px]">
                Email us at <a href="mailto:support@zyro.com" className="text-[#FFF] pb-[2px] border-b-[2px]">support@myzyro.com</a> or call
              </p>
              <p className="text-[14px] lg:text-[16px] font-medium text-[#A9A9A9] lg:w-[480px] text-center leading-[28px]"><a href="tel:+919560050703" className="text-[#FFF]">+91-9560050703</a>, and we’ll get back to you shortly.</p>
            </div>
          </div>
        </div>
   </div>

</motion.div>
</ AnimatePresence>
)}

    </section>
  );
}

export default Herosection;
