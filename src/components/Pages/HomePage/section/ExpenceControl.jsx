import { useRef, useEffect, useState } from "react";
import RealTimeTracking from "/video/RealTimeTracking.webm";
import CustomControl from "/video/CustomControl.webm";
import FullAutomation from "/video/FullAutomation.webm";
import AutomaticReconciliation from "/video/AutomaticReconciliation.webm";
import SamrtDashboardReport from "/video/SamrtDashboardReport.webm";
import EasyReimbursements from "/video/EasyReimbursements.webm";

import Checked from "/image/HomePage/ExpenseRadioChecked.webp";
import UnChecked from "/image/HomePage/ExpenseRadioUnChecked.webp";

const features = [
  {
    label: "Real Time Card Tracking",
    video: RealTimeTracking,
  },
  {
    label: "Full Automation",
    video: FullAutomation,
  },
  {
    label: "Custom Controls",
    video: CustomControl,
  },
  {
    label: "Automatic Reconciliations",
    video: AutomaticReconciliation,
  },
  {
    label: 'Easy Reimbursements',
    video: EasyReimbursements,
  },
  {
    label: "Smart Dashboards & Reports",
    video: SamrtDashboardReport,
  },
];

function ExpenceControl() {
  const imageRefs = useRef([]);
  const imageScrollRef = useRef(null);
  const labelScrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const isManuallyScrolling = useRef(false);

  const handleLabelClick = (index) => {
    setActiveIndex(index);
    imageRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  // Observe which image is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const newIndex = parseInt(visibleEntry.target.dataset.index, 10);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);

            // Scroll labels to match
            labelScrollRef.current?.children[newIndex]?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }
      },
      {
        root: imageScrollRef.current,
        threshold: 0.6, // 60% of image visible
      }
    );

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <section className="max-w-screen-lg mx-auto px-2 sm:px-4 xl:px-0 mt-[100px] lg:mt-[200px]">
      <h3 className="text-center text-[26px] md:text-[28px] lg:text-[30px] font-semibold mb-[50px] ExpenceControlHeaderGradient">
        Complete Expense Control at Your Fingertips
      </h3>

      <div className="hidden md:flex items-center flex-row gap-6">
        {/* Labels */}
        <div
          className="w-1/2 max-h-[420px] overflow-y-auto pr-2 space-y-[25px] scroll-smooth"
          ref={labelScrollRef}
        >
          {features.map((item, index) => (
            <label
              key={index}
              onClick={() => handleLabelClick(index)}
              className={`block p-[2px] rounded-md cursor-pointer ${
                activeIndex === index
                  ? "text-[20px] font-semibold text-[#FFF]"
                  : "text-[20px] font-normal text-[#B6B6B6]"
              }`}
            >
              <div className="flex items-center gap-[20px]">
                <img
                  src={activeIndex === index ? Checked : UnChecked}
                  className="h-[20px] w-[20px]"
                  alt=""
                />
                <span>{item.label}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Images */}
        <div
          className="w-1/2 h-[420px] overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
          ref={imageScrollRef}
        >
          {features.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="h-[420px] flex justify-center items-center  snap-start"
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full max-h-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
      {/* ✅ Mobile View */}
      <div className="flex flex-col md:hidden space-y-4 border-[0.309px] border-[#444] rounded-[10.30px] bg-[#0B051E] py-[30px] px-[20px]">
        {features.map((item, index) => (
          <div key={index}>
            <label
              onClick={() => handleLabelClick(index)}
              className={`block p-[2px] rounded-md cursor-pointer mb-2 ${
                activeIndex === index
                  ? "max-[360px]:text-[16px] text-[18px] font-semibold text-white"
                  : "max-[360px]:text-[16px] text-[18px] font-normal text-[#B6B6B6]"
              }`}
            >
              <div className="flex items-center gap-[16px]">
                <img
                  src={activeIndex === index ? Checked : UnChecked}
                  className="max-[360px]:h-[16px] max-[360px]:w-[16px] h-[20px] w-[20px]"
                  alt=""
                />
                <span>{item.label}</span>
              </div>
            </label>

            {activeIndex === index && (
              <div
                data-index={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="mt-3 mb-4 max-[450px]:flex justify-center"
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-[375px]:w-[100%] w-[350px] max-h-[300px] object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpenceControl;
