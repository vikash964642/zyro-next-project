import { useEffect, useState } from "react";
import Link from "next/link";
import collab2 from "/image/HomePage/Icon/auconnected.svg";
import collab3 from "/image/HomePage/Icon/canara.svg";
import collab4 from "/image/HomePage/Icon/idfc.svg";
import collab6 from "/image/HomePage/Icon/yesbank.svg";
import zyroLogo from "/image/zyro-logo.svg";
import partnership from "/image/HomePage/partners.png";
import './HomePageCss.css';
import KnowMoreRightIcon from '/image/HomePage/Icon/KnowMoreRightIcon.svg'


export default function ConnectedBanking() {
  const [currImg, setCurrImg] = useState(0);

  const collaborators = [ collab2, collab3, collab4, collab6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prev) => (prev + 1) % collaborators.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [collaborators.length]);
 const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (

    <section  className="max-w-screen-lg mx-4 lg:mx-auto mt-[95px] lg:mt-[160px]">
      
<div className=" relative">

  <div className="ConnectedBanking-gradient"></div>
 
        <h1 className="text-[28px] md:text-[40px] lg:text-[60px] text-[#EDEDED] text-center font-semibold">
          Connected Banking
        </h1>
       <div className="flex justify-center lg:mt-[4px]">
         <p className="max-[375px]:w-full w-[340px] sm:w-[620px] md:w-[675px] lg:w-[825px] text-white80 lg:text-[#9E9C9F] text-center text-[14px] sm:text-[15.5px] md:text-[17px] lg:text-[20px] font-normal my-3 lg:leading-[33.6px]">
         Easily link, view, and manage all your bank accounts in one place with our Connected Banking solution. Stay on top of your finances with real-time updates, seamless transactions, and simplified account management.
        </p>
        </div>

       <div className="flex justify-center"> 
        <Link href='/connected-banking' className="bg-[#4F31B4] text-white px-6 py-2 rounded-3xl mt-[35px] mb-[90px] flex items-center " onClick={ScrollTop}>
          Know more <img src={KnowMoreRightIcon} className="pl-[4px] h-[15px] w-[15px]"/>
        </Link>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[22px] md:gap-[36px]">
          <div className="flex items-center justify-center overflow-hidden w-[128px] h-[128px] lg:w-[182px] lg:h-[182px] bg-white rounded-full">
            <img
              src={collaborators[currImg]}
              alt="collaborator"
              className="object-contain p-8"
            />
          </div>

          <img
            src={partnership}
            alt="partnership"
            className="w-[53px] md:w-[76px] object-contain"
          />

          <div className="flex items-center justify-center overflow-hidden w-[128px] h-[128px] lg:w-[182px] lg:h-[182px] bg-white rounded-full">
            <img
              src={zyroLogo}
              alt="Zyro logo"
              className="object-contain p-4"
            />
          </div>
        </div>
     
    </div>
    </section>
    
  );
}
