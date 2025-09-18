// "use client";
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import "./ConnectedBankingCss.css"; 
// import Link from "next/link";

// function HeroSection() {
//   useEffect(() => {
//     const bankLogos = document.querySelectorAll(".bankLogo");

//     const positionLogos = () => {
//       let orbitRadius = 125;
//       let center = 125;

//       // ✅ Responsive adjustments
//       if (window.innerWidth <= 480) { 
//         orbitRadius = 75;   // Mobile
//         center = 70;
//       } else if (window.innerWidth <= 768) { 
//         orbitRadius = 90;  // Tablet
//         center = 90;
//       }

//       const total = bankLogos.length;

//       // Position each bank logo around orbit
//       bankLogos.forEach((logo, i) => {
//         const angle = (i / total) * Math.PI * 2;
//         const x = center + orbitRadius * Math.cos(angle);
//         const y = center + orbitRadius * Math.sin(angle);
//         logo.style.left = `${x}px`;
//         logo.style.top = `${y}px`;
//       });
//     };

//     // Run initially + on resize
//     positionLogos();
//     window.addEventListener("resize", positionLogos);

//     // ✅ Orbit rotation
//     gsap.to(".orbit", {
//       rotation: 360,
//       transformOrigin: "50% 50%",
//       repeat: -1,
//       ease: "linear",
//       duration: 20,
//     });

//     // ✅ Counter-rotate logos so they stay upright
//     bankLogos.forEach((logo) => {
//       gsap.to(logo, {
//         rotation: -360,
//         transformOrigin: "50% 50%",
//         repeat: -1,
//         ease: "linear",
//         duration: 20,
//       });
//     });

//     return () => {
//       window.removeEventListener("resize", positionLogos);
//     };
//   }, []);

//    const ScrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//     <section className="lg:mt-[112px] mt-[50px]">
//       <div className="max-w-screen-lg mx-auto relative">
//         <div className="ConnectedHeroSecGradient1"></div>

//         <div className="flex flex-col-reverse lg:flex-row items-center">
//           {/* Left content */}
//           <div className="lg:w-[55%] w-full lg:px-6">
//             <h1 className="hidden lg:block">
//               <span className="ConnectedHeroHeaderGradient lg:text-[42px] lg:font-semibold">
//                 Connected Banking
//               </span>
//               <span className="lg:text-[34px] lg:font-semibold text-[#EDEDED]">
//                 {" "}
//                 made simple with Zyro
//               </span>
//             </h1>

//             <div className="flex justify-center lg:justify-start">
//               <p className="text-[#9E9C9F] text-[14px] md:text-[14.5px] lg:text-[20px] sm:w-[80%] lg:w-[100%] max-[360px]:px-[20px] px-[30px] sm:px-0  mt-[30px] sm:mt-[60px] lg:mt-[18px] text-center lg:text-left">
//                 Connect and manage all your business accounts in one place with
//                 Zyro Connected Banking. Simplify vendor payments, access
//                 real-time insights, enable smooth integration and automate
//                 reconciliation. Stay on top of your cash flow without logging
//                 into multiple portals.
//               </p>
//             </div>

//             <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[50px] lg:mt-[53px] flex-col lg:flex-row max-[375px]:px-[20px]">
//               <Link href='/contact-us' className="bg-[#4F31B4] rounded-[24px] h-[44px]  max-[375px]:w-[100%] w-[325px] lg:w-[148px] text-[#FFF] text-[18px] font-semibold flex justify-center items-center">
//                <span onClick={ScrollTop}>Get Started</span> 
//               </Link>
//             </div>
//           </div>

//           {/* Right Orbit Section */}
//           <div className="pt-[45px] sm:pt-[60px] lg:pt-0 lg:w-[45%] w-full flex justify-center items-center relative">
//                     <div className="ConnectedHeroSecGradient2"></div>
//             <div className="rotateSection">
//               {/* Center Zyro Logo */}
//               <div className="zyroLogo">
//                 <img src={'/image/zyro-logo.svg'} alt="zyro logo" />
//               </div>

//               {/* Orbit container */}
//               <div className="orbit">
//                 <img src={'/image/ConnectedBanking/canaraMove.svg'} className="bankLogo" />
//                 {/* <img src={iciciMove} className="bankLogo" /> */}
//                 <img src={'/image/ConnectedBanking/idfcMove.svg'} className="bankLogo" />
//                 <img src={'/image/ConnectedBanking/yesMove.svg'} className="bankLogo" />
//                 <img src={'/image/ConnectedBanking/AUSmallMove.svg'} className="bankLogo" />
//               </div>
//             </div>
//           </div>

//           {/* Mobile heading */}
//           <div className="block lg:hidden">
//             <h1 className="max-[360px]:text-[28px] font-semibold text-[32px] sm:text-[40px] leading-[38px] sm:leading-[55px] bg-gradientText bg-clip-text text-transparent text-center">
//               Connected Banking
//             </h1>
//             <p className="max-[360px]:text-[20px] font-medium text-[22px] text-white90 leading-[24px] text-center pt-[10px]">
//               made simple with Zyro
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import "./ConnectedBankingCss.css"; 
import { useRouter } from "next/navigation";

function HeroSection() {
  useEffect(() => {
    const bankLogos = document.querySelectorAll(".bankLogo");

    const positionLogos = () => {
      let orbitRadius = 120;
      let center = 120;

      // ✅ Responsive adjustments
      if (window.innerWidth <= 375) { 
        orbitRadius = 85;   // Mobile
        center = 90;
      } 
        else if (window.innerWidth <= 400) { 
        orbitRadius = 105;   // Mobile
        center = 110;
      }
        else if (window.innerWidth <= 480) { 
        orbitRadius = 100;   // Mobile
        center = 110;
      }
      else if (window.innerWidth < 768) { 
        orbitRadius = 120;  // Tablet
        center = 120;
      }

      const total = bankLogos.length;

      // Position each bank logo around orbit
      bankLogos.forEach((logo, i) => {
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
    gsap.to(".orbit", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    // ✅ Counter-rotate logos so they stay upright
    bankLogos.forEach((logo) => {
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
  const router = useRouter();
   const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  //    const handleLinkClick = (pageName) => {
  //       ScrollTop();
  //   router.push("/contact-us", { state: { pageName } }); 
  
  // };
  const handleLinkClick = (pageName) => {
ScrollTop();
  router.push(`/contact-us?page=${encodeURIComponent(pageName)}`);
};

  return (
    <section className="lg:px-6 lg:mt-[112px] mt-[50px]">
      <div className="max-w-screen-lg mx-auto relative">
        <div className="ConnectedHeroSecGradient1"></div>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-[55%] w-full ">
            <h1 className="hidden lg:block">
              <span className="ConnectedHeroHeaderGradient lg:text-[42px] lg:font-semibold">
                Connected Banking
              </span>
              <span className="lg:text-[34px] lg:font-semibold text-[#EDEDED]">
                {" "}
                made simple with Zyro
              </span>
            </h1>

            <div className="flex justify-center lg:justify-start">
              <p className="text-[#9E9C9F] text-[14px] md:text-[14.5px] lg:text-[20px] sm:w-[80%] lg:w-[100%] max-[360px]:px-[20px] px-[30px] sm:px-0  mt-[30px] sm:mt-[20px] lg:mt-[18px] text-center lg:text-left">
                Connect and manage all your business accounts in one place with
                Zyro Connected Banking. Simplify vendor payments, access
                real-time insights, enable smooth integration and automate
                reconciliation. Stay on top of your cash flow without logging
                into multiple portals.
              </p>
            </div>

            <div className="flex gap-[20px] lg:gap-[35px] items-center mt-[50px] lg:mt-[53px] flex-col lg:flex-row max-[375px]:px-[20px]">
              <button onClick={() => handleLinkClick("Connected Banking")} className="bg-[#4F31B4] rounded-[24px] h-[44px]  max-[375px]:w-[100%] w-[325px] lg:w-[148px] text-[#FFF] text-[18px] font-semibold flex justify-center items-center">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Orbit Section */}
          <div className=" lg:w-[45%] w-full flex justify-center items-center relative">
                    <div className="ConnectedHeroSecGradient2"></div>
            <div className="rotateSection">
              {/* Center Zyro Logo */}
              <div className="zyroLogo">
                <img src='/image/zyro-logo.svg' alt="zyro logo" />
              </div>

              {/* Orbit container */}
              <div className="orbit">
                <img src='/image/ConnectedBanking/canaraMove.svg' className="bankLogo" />
                {/* <img src={iciciMove} className="bankLogo" /> */}
                <img src="/image/ConnectedBanking/idfcMove.svg" className="bankLogo" />
                <img src="/image/ConnectedBanking/yesMove.svg" className="bankLogo" />
                <img src='/image/ConnectedBanking/AUSmallMove.svg' className="bankLogo" />
              </div>
            </div>
          </div>

          {/* Mobile heading */}
          <div className="block lg:hidden">
            <h1 className="max-[360px]:text-[28px] font-semibold text-[32px] sm:text-[40px] leading-[38px] sm:leading-[55px] bg-gradientText bg-clip-text text-transparent text-center">
              Connected Banking
            </h1>
            <p className="max-[360px]:text-[20px] font-medium text-[22px] text-white90 leading-[24px] text-center pt-[10px]">
              made simple with Zyro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
