import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import "./HomePageCss.css"; // Make sure this includes the custom scrollbar CSS
import "./GrowBusinessSection/verticale.css"; // Make sure this includes the custom scrollbar CSS
import sliderImg1 from "/image/sliderImg1.jpg";
import sliderImg2 from "/image/sliderImg2.jpg";
const slides = [
  {
    id: 1,
    image: [sliderImg1],
    title: "Complete Invoicing Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mi pretium, dictum",
  },
  {
    id: 2,
    image: [sliderImg2],
    title: "Complete Invoicing Solutions 2",
    content:
      "Arcu eu, dapibus est. Maecenas sed sapien ac eros sollicitudin vulputate. Proin a ligula.",
  },
  {
    id: 3,
    image: [sliderImg1],
    title: "Complete Invoicing Solutions 3",
    content:
      "Ipsum. Vestibulum id vestibulum arcu, sed sodales nisl. Curabitur aliquam lectus at odio.",
  },
  {
    id: 4,
    image: [sliderImg2],
    title: "Complete Invoicing Solutions 4",
    content:
      "Facilisis mollis. Vestibulum ac felis vitae metus euismod scelerisque eu eu arcu. Curabitur.",
  },
  {
    id: 5,
    image: [sliderImg1],
    title: "Complete Invoicing Solutions 5",
    content:
      "Volutpat, tortor rhoncus tempor sollicitudin, justo nibh iaculis ipsum, ac porttitor elit nulla.",
  },
  {
    id: 6,
    image: [sliderImg2],
    title: "Complete Invoicing Solutions 6",
    content:
      "Non tortor. Vivamus non enim suscipit, sagittis arcu vel, posuere ante. Aenean dignissim.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const BusinessVerticleSlider = () => {
  const containerRef = useRef(null);
  const slideHeight = 500; // px

  // Scroll to image when label is clicked

  useEffect(() => {
    const scroller = document.querySelector(".scroller");

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
    });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const panels = gsap.utils.toArray(".panel");

    gsap.set(panels, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    });
    gsap.set(panels[0], { opacity: 1, y: 0, zIndex: 10 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.black",
        scroller: scroller,
        start: "top top",
        end: `+=${panels.length * window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    panels.forEach((panel, i) => {
      if (i > 0) {
        tl.to(panels[i - 1], {
          opacity: 0,
          y: 0,
          duration: 0.6,
          ease: "cubic-bezier(0.19,1,0.22,1)",
          zIndex: 0,
        }).to(
          panels[i],
          {
            opacity: 1,
            y: 0,
            zIndex: 10,
            duration: 0.6,
            ease: "cubic-bezier(0.19,1,0.22,1)",
          },
          "<"
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      bodyScrollBar.destroy();
    };
  }, []);

  return (
    <div className="scroller" style={{ height: "100vh", overflow: "hidden" }}>
      {/* First Section */}

      {/* Main Section */}
      <section className="black max-w-screen-lg lg:mx-auto mx-4 mt-[120px] ">
        <p className="max-[360px]:text-[22px] text-[24px] lg:text-[34px] font-medium text-[#FFF] text-center lg:mb-[50px] mb-[30px]">
          Grow your <span className="business-gradient max-[360px]:text-[28px] text-[32px] lg:text-[46px] font-semibold">business</span> with simplified billing solutions
        </p>

        <div className="relative p-wrapoverflow-hidden">
          <div className="absolute top-0 right-0 -translate-x-1/2 text-[10px] lg:text-sm text-white z-10">
            1/6
          </div>
          {slides.map((slide, idx) => (
            <div className="flex items-center justify-center business-slider-parent px-3 pt-[20px] pb-[20px] lg:p-6"
                  key={slide.id}>
              <div
                ref={containerRef}
                // onScroll={handleScroll}
                className="relative overflow-y-scroll   custom-scrollbar w-[100%]"
                style={{
                  height: slideHeight,

                  scrollSnapType: "y mandatory",
                }}
              >
                <div
                  className="panel absolute top-0 left-0 w-full h-full flex flex-col-reverse md:flex-row items-center justify-center gap-[50px] pr-[14px] "
                  style={{
                    height: slideHeight,
                    scrollSnapAlign: "start",
                  }}
                >
                  {/* 🎯 Image Container */}
                  <div className="w-full md:w-1/2 flex h-[240px] lg:h-full justify-center items-center business-slider-image-sec">
                    <div className="w-full h-[100%] max-w-[350px] flex justify-center items-center p-[20px] lg:p-0">
                      <img
                        src={slide.image}
                        alt={`Slide ${idx + 1}`}
                        className="w-[100%] h-[100%] lg:w-[280px] lg:h-[350px] rounded-[5px]"
                      />
                    </div>
                  </div>

                  {/* 📝 Content Container */}
                  <div className="w-full md:w-1/2 h-[50%] lg:h-full flex items-center">
                    <div>
                      <h2 className="lg:text-[30px] font-medium text-[#FFF]">
                        {slide.title}
                      </h2>
                      <p className="lg:text-[20px] pt-[20px] text-white70 font-normal">
                        {slide.content}
                      </p>
                      <button className="border-[0.965px] border-solid border-[#6F41D2] bg-[#4F31B4] rounded-[29px] h-[38px] w-[153px] text-[#FFF] text-[19px] font-medium mt-[25px]">
                        Know more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Last Section */}
    </div>
  );
};

// Styles
// const sectionStyle = (bg) => ({
//   width: "100%",
//   height: "100vh",
//   backgroundColor: bg,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "#fff",
//   fontSize: "2rem",
//   position: "relative",
// });

export default BusinessVerticleSlider;
