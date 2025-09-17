// import React from 'react'

// import languageSoundbox from '/image/HomePage/languageSoundbox.svg'
import KnowMoreRightIcon from '/image/HomePage/Icon/KnowMoreRightIcon.svg'
// import languageSoundbox from '/image/HomePage/languageSoundbox.svg'
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from 'next/link';
import soundBox1212 from "/image/soundbox/soundbox12121.webp";
import english from "/image/soundbox/english.svg";
import bangla from "/image/soundbox/bangla.svg";
import malyalam from "/image/soundbox/malyalam.svg";
import punjabi from "/image/soundbox/punjabi.svg";
import tamil from "/image/soundbox/marathi.svg";
import kannad from "/image/soundbox/kannad.svg";
import hindi from "/image/soundbox/hindi.svg";
import gujrati from "/image/soundbox/gujrati.svg";
function ZyroSoundBox() {
  useEffect(() => {
    const Language = document.querySelectorAll(".Language");

    const positionLogos = () => {
      let orbitRadius = 142;
      let center = 135;

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
    <section className="max-w-screen-lg lg:px-[20px] xl:px-0 mx-auto mt-[220px]">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-[50%] p-3">
          <h2 className="bg-gradientText bg-clip-text text-transparent font-semibold max-[400px]:text-28px text-[32px] lg:text-[47.74px] leading-[40px] lg:leading-[59.68px] text-center lg:text-left">
            ZYRO Soundbox
          </h2>
          <div className="flex justify-center">
            <p className="max-[360px]:w-full w-[335px] sm:w-[450px] lg:w-full text-white max-[400px]:text-19px text-[20px] lg:text-[31.83px] font-medium leading-[28px] lg:leading-[37px] mt-[15px] align-middle text-center lg:text-left">
              Get Real Time & Instant Audio Confirmations on Successful Payments
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mt-[39px]">
            <Link href="/smart-soundbox-speaker" onClick={ScrollTop} className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center flex items-center justify-center gap-[3px]">
              Know more{" "}
              <img
                src={KnowMoreRightIcon}
                alt=""
                className="h-[13px] w-[13px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[50%] lg:px-[0px] mt-[87px] lg:mt-0">
          {/* <img src={languageSoundbox} alt="" /> */}
          <div className="HeroRotateSection overflow-hidden">
            {/* Center Zyro Logo */}
            <div className="SoundboxImg">
              <img src={soundBox1212} alt="Soundbox-Image" />
            </div>

            {/* Orbit container */}
            <div className="orbit1">
              <img src={gujrati} className="Language" />
              <img src={hindi} className="Language" />
              <img src={kannad} className="Language" />
              <img src={tamil} className="Language" />
              <img src={punjabi} className="Language" />
              <img src={malyalam} className="Language" />
              <img src={bangla} className="Language" />
              <img src={english} className="Language" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZyroSoundBox;
