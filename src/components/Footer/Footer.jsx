"use client"
import Link from "next/link";
import NavLinks from "../NewHeader/NavLinks";
import { useRouter } from "next/navigation";

function Footer() {
   const router = useRouter();
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
 const handleHomeClick = () => {
    ScrollTop();
    router.push("/"); // ✅ Next.js way
  };
  const handleLinkClick = (pageName) => {
      // ScrollTop();
       router.push("/contact-us", { state: { pageName } }); 
  
  };
  return (
    <section className="relative overflow-hidden">
      <div className="FooterGradient1"></div>
   <div className="border-white20 border-solid border-t-[1px]  lg:mt-[120px] mt-[80px]"></div>
      <div className="bg-secondary p-[20px] min-[450px]:px-[50px] lg:p-[50px] pt-[30px]">
         
        <div className="flex lg:justify-between    flex-col lg:flex-row  ">
          <div className=" lg:w-[30%]">
            <img src={'/image/zyro-logo.svg'} className="cursor-pointer" onClick={handleHomeClick}></img>
            <p className="text-white70 pt-[30px] text-[14px] lg:text-[15px]">
              ZYRO is designed to empower businesses by providing a
              next-generation banking platform that simplifies financial
              process, enhances operational efficiency and ensures precise
              control over your finances.
            </p>

            <div className="flex gap-3 mt-[30px]">
              <a href="https://play.google.com/store/apps/details?id=com.ZYRO" target="_blank">
                <img
                  src={'/image/FooterImage/playstore.svg'}
                  className="hidden lg:block h-[45px] w-[152px] cursor-pointer "
                ></img>
              </a>
              <a href='https://apps.apple.com/in/app/zyro/id6743227331' target="_blank">
                <img
                  src={'/image/FooterImage/appStore.svg'}
                  className="hidden lg:block  h-[45px] w-[141px] cursor-pointer"
                ></img>
              </a>

            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around   lg:w-[40%]">
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link href="/smart-soundbox-speaker" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link href="/pos-machine-system" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link href="/expense-management-tracking-software" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link href="/prepaid-cards" onClick={ScrollTop}>
                    Prepaid Card
                  </Link>
                </li>
                <li>
                  <Link href="/upi-stack" onClick={ScrollTop}>
                    UPI Stack
                  </Link>
                </li>
                <li>
                     <Link href="/imps-switch" onClick={ScrollTop}>
                   IMPS Switch & BANL
                  </Link>
                </li>
                {/* <li>
                  <Link href="" onClick={ScrollTop}>
                   UPI Stack
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link href="/connected-banking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                {/* <li>
                  <Link href="/payout-payment" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="">Bank Account Verification</Link>
                </li> */}
                {/* <li>
                  <Link href="">Escrow Account</Link>
                </li> */}
                {/* <li>
                  <Link href="">Zyro Capital</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around  lg:w-[30%] ">
            <div className="lg:ml-[12px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Company
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link href="/" onClick={ScrollTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="https://zyro.in/blog/" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <button  onClick={() => handleLinkClick("Footer")}>
                    Contact Us
                  </button>
                </li>
                {/* <li>
                  <Link href="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className=" max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link href="/terms-and-conditions" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link href="">Cookies Policy</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[25px] flex justify-between gap-0 min-[450px]:justify-center min-[450px]:gap-[80px] lg:hidden ">
          <div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Product
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link href="/smart-soundbox-speaker" onClick={ScrollTop}>
                    Zyro Soundbox
                  </Link>
                </li>
                <li>
                  <Link href="/pos-machine-system" onClick={ScrollTop}>
                    Zyro POS
                  </Link>
                </li>
                <li>
                  <Link href="/expense-management-tracking-software" onClick={ScrollTop}>
                   Expense Management
                  </Link>
                </li>
                <li>
                  <Link href="/prepaid-cards" onClick={ScrollTop}>
                   Prepaid Card
                  </Link>
                </li>
                <li>
                 <Link href="/upi-stack" onClick={ScrollTop}>
                    UPI Stack
                  </Link>
                </li>
                <li>
                  <Link href="/imps-switch" onClick={ScrollTop}>
                   IMPS Switch & BANL
                  </Link>
                </li>
                {/* <li>
                  <Link href="" onClick={ScrollTop}>
                  UPI Stack
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="pt-[30px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Company
              </p>
              <ul className="font-normal text-white70 text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
                <li>
                  <Link href="/" onClick={ScrollTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="https://zyro.in/blog/" onClick={ScrollTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <button onClick={() => handleLinkClick("Footer")}>
                    Contact Us
                  </button>
                </li>
                {/* <li>
                  <Link href="" onClick={ScrollTop}>
                    Careers
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div>
            <div className="">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Banking +
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link href="/connected-banking" onClick={ScrollTop}>
                    Connected Banking
                  </Link>
                </li>
                {/* <li>
                  <Link href="/payout-payment" onClick={ScrollTop}>
                    Payout
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="">Bank Account Verification</Link>
                </li>
                <li>
                  <Link href="">Escrow Account</Link>
                </li>
                <li>
                  <Link href="">Zyro Capital</Link>
                </li> */}
              </ul>
            </div>
            <div className="pt-[154px] min-[768px]:pt-[100px]">
              <p className="text-white90 font-medium text-[16px] leading-[21px]">
                Resources
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px] text-white70">
                <li>
                  <Link href="/terms-and-conditions" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link href="">Cookies Policy</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden pt-[40px]">
          <img src={'/image/FooterImage/certificateNew1.svg'} className="rounded-[7.83px]"></img>
        </div>
    <div className="flex min-[450px]:justify-center lg:hidden mt-[25px]">
          <div className="">
          {/* <div className="flex items-center gap-[20px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Support:
            </p>
            <a
              href="tel:9560050703"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              +919560050703
            </a>
          </div> */}
          <div className="flex items-center gap-[40px] pt-[8px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Email:
            </p>
            <a
              href="mailto:support@myzyro.com"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              support@myzyro.com
            </a>
          </div>

          {/* <div className="flex gap-[20px] pt-[5px]">
            <p className="text-[14px] font-medium leading-[21px] text-white90">
              Address:
            </p>
            <p
              href="tel:9560050703"
              className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
            >
              H-31, 5th Floor, Sector-63 Noida, Uttar-Pradesh 201301
            </p>
 
          </div> */}
        </div>
    </div>
        <div className="mt-[30px] flex lg:hidden  justify-start min-[450px]:justify-center flex-wrap max-[375px]:flex-col max-[375px]:gap-[20px] gap-[30px]">
          <div className="flex max-[375px]:justify-between max-[350px]:gap-1  min-[375px]:gap-5">
            <a href="https://play.google.com/store/apps/details?id=com.ZYRO" target="_blank">
              <img src={'/image/FooterImage/playstore.svg'} className="h-[32px] w-[108.5px]"></img>
            </a>
          
            <a href='https://apps.apple.com/in/app/zyro/id6743227331' target="_blank">
               <img src={'/image/FooterImage/appStore.svg'} className="h-[32px] w-[96px]"></img>
           
           </a>
          </div>
          <div className="flex items-center gap-[20px]">
            <Link href="https://www.facebook.com/zyrobank/?ti=as" target="_blank">
              <img src={'/image/FooterImage/Facebook.svg'} />
            </Link>
            <Link href="https://www.instagram.com/my_zyro/?utm_medium=copy_link" target="_blank">
              <img src={'/image/FooterImage/Instagram.svg'} className=""></img>
            </Link>
            {/* <Link href="https://www.youtube.com/@Zyro-y9l" target="_blank">
              <img src={'/image/FooterImage/Youtube.svg'} className=""></img>
            </Link> */}
            <Link href="https://www.linkedin.com/company/myzyro/" target="_blank">
              <img src={'/image/FooterImage/LinkedIn.svg'} className=""></img>
            </Link>
            <Link href="https://x.com/myzyro" target="_blank">
              <img src={'/image/FooterImage/XTwitter.svg'} className=""></img>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-end pt-[30px]">
          <div>
            {/* <div className="flex items-center gap-[20px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Support:
              </p>
              <a
                href="tel:9560050703"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                +919560050703
              </a>
            </div> */}
            <div className="flex items-center gap-[40px] pt-[8px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Email:
              </p>
              <a
                href="mailto:support@myzyro.com"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                support@myzyro.com
              </a>
            </div>

            {/* <div className="flex items-center gap-[20px] pt-[5px]">
              <p className="text-[14px] font-medium leading-[21px] text-white90">
                Address:
              </p>
              <p
                href="tel:9560050703"
                className="text-[14px] font-normal leading-[21px] text-[#9E9C9F]"
              >
                H-31, 5th Floor, Sector-63 Noida, Uttar-Pradesh 201301
              </p>
            </div> */}
          </div>
          <img src={'/image/FooterImage/certificateNew1.svg'}></img>
        </div>
        <div className="border-t border-white20 mt-[35px]"></div>
        <div className="flex justify-center lg:justify-between items-center mt-[30px]">
          <div className="hidden lg:flex items-center gap-[20px] ">
            <Link href="https://www.facebook.com/zyrobank/?ti=as" target="_blank">
              <img src={'/image/FooterImage/Facebook.svg'} />
            </Link>
            <Link href="https://www.instagram.com/my_zyro/?utm_medium=copy_link" target="_blank">
              <img src={'/image/FooterImage/Instagram.svg'} className=""></img>
            </Link>
            {/* <Link href="https://www.youtube.com/@Zyro-y9l" target="_blank">
              <img src={'/image/FooterImage/Youtube.svg'} className=""></img>
            </Link> */}
            <Link href="https://www.linkedin.com/company/myzyro/" target="_blank">
              <img src={'/image/FooterImage/LinkedIn.svg'} className=""></img>
            </Link>
            <Link href="https://x.com/myzyro" target="_blank">
              <img src={'/image/FooterImage/XTwitter.svg'} className=""></img>
            </Link>
          </div>
          <p className="text-[12px] lg:text-[14px] text-white70 font-normal">
            © 2025 KGC Infotech Pvt.Ltd.. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
