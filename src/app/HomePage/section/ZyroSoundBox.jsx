"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";





function ZyroSoundBox() {
  useEffect(() => {
    const Language = document.querySelectorAll(".Language");

    const positionLogos = () => {
      let orbitRadius = 142;
      let center = 135;

      if (window.innerWidth <= 480) {
        orbitRadius = 120;
        center = 120;
      } else if (window.innerWidth <= 768) {
        orbitRadius = 135;
        center = 135;
      }

      const total = Language.length;

      Language.forEach((logo) => {
        const i = Array.from(Language).indexOf(logo);
        const angle = (i / total) * Math.PI * 2;
        const x = center + orbitRadius * Math.cos(angle);
        const y = center + orbitRadius * Math.sin(angle);
        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
      });
    };

    positionLogos();
    window.addEventListener("resize", positionLogos);

    gsap.to(".orbit1", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

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
            <Link
              href="/smart-soundbox-speaker"
              onClick={ScrollTop}
              className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium text-center flex items-center justify-center gap-[3px]"
            >
              Know more{" "}
              <Image
                src={'image/HomePage/Icon/KnowMoreRightIcon.svg'}
                alt="zyro right icon"
                width={13}
                height={13}
                className="h-[13px] w-[13px]"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center lg:w-[50%] lg:px-[0px] mt-[87px] lg:mt-0">
          <div className="HeroRotateSection overflow-hidden">
            <div className="SoundboxImg">
              <img src={'image/soundbox/soundbox12121.webp'} alt="Soundbox-Image" />
            </div>

            <div className="orbit1">
              <img src={'image/soundbox/gujrati.svg'} className="Language" />
              <img src={'image/soundbox/hindi.svg'} className="Language" />
              <img src={'image/soundbox/kannad.svg'} className="Language" />
              <img src={'image/soundbox/marathi.svg'} className="Language" />
              <img src={'image/soundbox/punjabi.svg'} className="Language" />
              <img src={'image/soundbox/malyalam.svg'} className="Language" />
              <img src={'image/soundbox/bangla.svg'} className="Language" />
              <img src={'image/soundbox/english.svg'} className="Language" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZyroSoundBox;
