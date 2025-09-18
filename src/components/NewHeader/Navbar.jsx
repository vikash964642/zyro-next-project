"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useRouter } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const ScrollTop=()=>{
    window.scrollTo({top: 0});
  }

  const handleClick = () => {
    setOpen(false);
    ScrollTop();
  };
  const router=useRouter();
  const handleClickHome=()=>{
    router.push('/')
    ScrollTop();

  }

  return (
    <section className="lg:bg-white bg-[#D9D9D9] sticky top-0 z-50">
      <nav className=" max-w-screen-lg mx-auto">
        <div className="h-[74px] lg:h-[70px] lg:pl-[51px] px-[25px] lg:px-0 flex items-center font-medium justify-between   ">
          <div className="flex justify-between z-50  lg:w-auto w-full ">
            <img src={'/image/zyro-logo.svg'} alt="logo" className="lg:cursor-pointer h-9 custom-style" onClick={handleClickHome}/>
            <div className="flex lg:hidden">
              

              <div
                className="text-3xl lg:hidden text-[#6F41D2]  "
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
                     {/* <ion-icon icon={open ? close : menu}></ion-icon> */}
                     {open ? <IoClose /> : <IoMenu />}

              </div>
            </div>
          </div>

          <div className="flex justify-center items-center lg:mr-8">
            <ul className="lg:flex hidden lg:text-[13px] xl:text-[17.5px] items-center  gap-5 lg:gap-[52px] font-[inter]">
            <NavLinks handleClick={handleClick} />
           
              {/* <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "py-[28px] px-3 inline-block text-primary"
                      : "py-[28px] px-3 inline-block hover:text-primary"
                  }
                  onClick={handleClick}
                >
                  Company
                </NavLink>
              </li> */}
             
              
            </ul>
          </div>
          <div></div>

          {/* Mobile nav */}
          <ul
            className={`lg:hidden bg-[#110A2A]  z-[99] bg-mobileMenuSape fixed overflow-hidden text-[#D9D9D9] w-full text-[22px] top-[73px] overflow-y-auto bottom-0 pb-11 px-[30px] transition-left duration-500 ease-in-out  ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
             <div className="mobileMenuGradient"></div>
            <NavLinks handleClick={handleClick}  />
            {/* <li className=" border-light-gray-600 pb-[13px]">
              <NavLink
                to="/"
                className="pt-[45px] pb-[3px] px-3 inline-block "
                onClick={handleClick}
              >
                 Company
              </NavLink>
            </li> */}
          <div className=" flex justify-center h-[80px] bottom-[0px] fixed w-[90%] bg-[#110A2A] z-50">
              <div className="">
                <Link href="https://play.google.com/store/apps/details?id=com.shopaver" className="border-[#6F41D2] bg-[#6F41D2] border-2 rounded-[30px]  text-center text-primary  text-[16px] py-[8px]  px-[26px] ">
                  Download App
                </Link>
              </div>
          </div>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
