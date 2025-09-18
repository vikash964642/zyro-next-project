"use client";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import "./Soundbox.css";

function Herosection() {
  useEffect(() => {
    const Language = document.querySelectorAll(".Language");

    const positionLogos = () => {
      let orbitRadius = 140;
      let center = 140;

      // ✅ Responsive adjustments
      if (window.innerWidth <= 480) {
        orbitRadius = 120; // Mobile
        center = 120;
      } else if (window.innerWidth <= 768) {
        orbitRadius = 135; // Tablet
        center = 135;
      }

      const total = Language.length;

      // Position each bank logo around orbit
      Language.forEach((logo, i) => {
        const angle = (i / total) * Math.PI * 2;
        const x = center + orbitRadius * Math.cos(angle);
        const y = center + orbitRadius * Math.sin(angle);
        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
      });
    };

    // Run initially + on resize
    positionLogos();
    window.addEventListener("resize", positionLogos);

    // ✅ Orbit rotation
    gsap.to(".orbit1", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    // ✅ Counter-rotate logos so they stay upright
    Language.forEach((logo) => {
      gsap.to(logo, {
        rotation: -360,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "linear",
        duration: 20,
      });
    });

    return () => {
      window.removeEventListener("resize", positionLogos);
    };
  }, []);

  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto  mt-[80px] lg:mt-[150px] relative">
        <div className="SoundBoxHerosectionGradient"></div>
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[50%] p-3">
            <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold max-[400px]:text-28px text-[32px] sm:text-[36px] lg:text-[40px] leading-[42px] lg:leading-[56px] text-center lg:text-left">
              ZYRO Soundbox
            </h2>
            <p className="hidden lg:block text-white max-[400px]:text-19px text-[20px] lg:text-[24px] font-medium leading-[39px] mt-[12px] align-middle text-center lg:text-left lg:pr-[40px]">
              The Smart Way to Accept Payments with Instant Voice Alerts
            </p>
            <div className="text-center lg:text-left mt-[39px] hidden lg:block">
              <Link
                href="/contact-us"
                className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center flex justify-center items-center"
              >
                <span
                onClick={ScrollTop}>

                Get Your Speaker
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-[50%] px-[30px] lg:px-[0px] ">
            <div className="HeroRotateSection">
              {/* Center Zyro Logo */}
              <div className="SoundboxImg">
                <img
                  src={"/image/soundbox/soundbox12121.webp"}
                  alt="Soundbox Image"
                />
              </div>

              {/* Orbit container */}
              <div className="orbit1">
                <img src={"image/soundbox/gujrati.svg"} className="Language" />
                <img src={"image/soundbox/hindi.svg"} className="Language" />
                <img src={"image/soundbox/kannad.svg"} className="Language" />
                <img src={"image/soundbox/marathi.svg"} className="Language" />
                <img src={"image/soundbox/punjabi.svg"} className="Language" />
                <img src={"image/soundbox/malyalam.svg"} className="Language" />
                <img src={"image/soundbox/bangla.svg"} className="Language" />
                <img src={"image/soundbox/english.svg"} className="Language" />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:hidden mt-[44px] max-[360px]:px-[20px] px-[35px] sm:px-0">
            <p className=" sm:w-[500px] text-white max-[400px]:text-19px text-[20px] sm:text-[24px] font-medium leading-[36px]  align-middle text-center ">
              The Smart Way to Accept Payments with Instant Voice Alerts
            </p>
          </div>
          <div className="flex justify-center mt-[39px] lg:hidden ">
            <Link
              href="/contact-us"
              className="text-white w-[224px] h-[46px] bg-[#4F31B4] rounded-[24.77px] text-[18px] font-medium text-center flex justify-center items-center"
            >
              <span
              onClick={ScrollTop}>
              Get Your Speaker

              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
