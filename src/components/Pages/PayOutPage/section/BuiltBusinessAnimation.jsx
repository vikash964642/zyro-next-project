
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState,useEffect } from "react";
import SquareShadowBox from '/image/PayOut/SquareShadowBox.png'
import SquareShadowBox2 from '/image/PayOut/SquareShadowBox2.png'
import BgSape_mob from '/image/PayOut/bg_sape_Mob.png';
import BgSape from '/image/PayOut/bg_sape.png'
//  "Gaming & Rewards",
const cardData = [
  "HR & Payroll",         // [0,0]
  "Vendor Payments",      // [0,1]
  "Fintech & Lending",    // [1,0]
  "Voucher & Rewards",     // [1,1]
  "Logistics & Fleet",    // [1,2]
  "EdTech & Coaching",    // [2,1]
  "Agencies & Services",  // [2,2]
];

// Grid layout: 3x3 with empty slots at [0,2], [2,0]
const gridLayout = [
  0, 1, null,
  2, 3, 4,
  null, 5, 6
];

// Zoom animation
const zoomVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delayIndex) => ({
    opacity: [1, 0, 1],
    scale: [1, 0.9, 1],
    transition: {
      delay: delayIndex * 0.2,
      duration: 2,
      repeat:Infinity,
      ease: "easeOut",
    },
  }),
};

// Card component with grid-based alternate styles
function CardItem({ text, delayIndex, gridIndex }) {
      
  const isAlt = gridIndex % 2 === 1;

  const baseClasses = "rounded-[12px] p-[12px] lg:p-[20px] text-white text-[11px] lg:text-[16.72px] font-semibold text-center max-[350px]:w-[75px] max-[350px]:h-[75px] max-[375px]:w-[85px] max-[375px]:h-[85px] h-[95px] w-[95px] lg:h-[160px] lg:w-[160px] flex items-center justify-center bg-contain bg-no-repeat";
  
  const bgUrl = isAlt?SquareShadowBox:SquareShadowBox2;
  return (
   <>
    <motion.div
      className={`${baseClasses} `}
      style={{ backgroundImage: `url(${bgUrl})`}}
      custom={delayIndex}
      variants={zoomVariant}
      initial="hidden"
      animate="visible"
      
    >
      {text}
    </motion.div>
    </>
  );
}

CardItem.propTypes = {
  text: PropTypes.string.isRequired,
  delayIndex: PropTypes.number.isRequired,
  gridIndex: PropTypes.number.isRequired,
};

export default function IndustryCards() {
  const blinkingOrder = {
    0: 0, 1: 1, 2: 1,
    3: 2, 4: 3, 5: 3,
    6: 4
  };
const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024; // Tailwind's lg breakpoint
      setBgImage(isLargeScreen ? BgSape : BgSape_mob);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="max-w-screen-lg lg:mx-auto mt-[100px] lg:mt-[140px] px-[20px] xl:px-[0px] relative">
      <div className="BuiltBusinessGradient"></div>
           <h2 className="text-center max-[360px]:text-[21px] text-[24px] lg:text-[34px] font-semibold BuiltBusinessHeaderGradient">Zyro Payout : Built for Every Business </h2>
          <div className=" flex justify-center pt-[10px] lg:pt-[15px]">
             <p className="text-center max-[360px]:text-[13px] text-[16px] font-normal lg:font-medium text-[#ADACB3] w-[326px] lg:w-[420px]">Zyro Payout Simplifies Secure Payments Across All Industries</p>
          </div>
    <div className="flex max-[350px]:w-[300px] max-[375px]:w-[335px] max-[525px]:w-[100%] w-[450px] lg:w-[770px] mx-auto  justify-center mt-[55px] lg:mt-[35px]"   style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        
          <div className="grid grid-cols-3 gap-4 mr-[20px] lg:mr-[35px] mt-[26px]">
        {gridLayout.map((cardIndex, gridIndex) => {
          if (cardIndex === null) return <div key={gridIndex} />;
          
          return (
            <CardItem
              key={gridIndex}
              text={cardData[cardIndex]}
              delayIndex={blinkingOrder[cardIndex]}
              gridIndex={gridIndex}
            />
          );
        })}
      </div>
    </div>
    </section>
  );
}


