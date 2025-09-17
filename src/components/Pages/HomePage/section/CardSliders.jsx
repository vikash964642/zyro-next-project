
import { useRef, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "/image/sliderImg1.png"

const cardsData = [
    { id: 1,image:sliderImg1, heading: "Card 1",paragraph:"1 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
    { id: 2,image:sliderImg1, heading: "Card 2", paragraph:"2 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
    { id: 3,image:sliderImg1, heading: "Card 3" ,paragraph:"3 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
    { id: 4,image:sliderImg1, heading: "Card 4",paragraph:"4 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
     { id: 5,image:sliderImg1, heading: "Card 5" ,paragraph:"5 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
      { id: 6,image:sliderImg1, heading: "Card 6" ,paragraph:"6 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
       { id: 7,image:sliderImg1, heading: "Card 7" ,paragraph:"7 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
        { id: 8,image:sliderImg1, heading: "Card 8" ,paragraph:"8 Offer your customers the option to pay in easy EMIs using their credit or debit cards, backed by a wide network of our leading banking partners." },
  ];

function Responsive() {
  const sliderRef = useRef();
  const [centerSlide, setCenterSlide] = useState(0); // Track center


useEffect(() => {
  const autoplayInterval = setInterval(() => {
    setCenterSlide((prev) => {
      const next = (prev + 1) % cardsData.length; // loop back to 0
      sliderRef.current?.slickGoTo(next);
      return next;
    });
  }, 2500); // autoplay every 2.5 seconds

  return () => clearInterval(autoplayInterval); // cleanup
}, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
   
    speed: 300,
  
    afterChange: (current) => setCenterSlide(current), // 🔥 key line
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center items-center gap-1 lg:gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` rounded-full transition-all duration-300 ${
          i === centerSlide ? "bg-[#6F41D2] w-[8px] h-[8px] lg:w-3 lg:h-3" : "bg-white w-[8px] h-[8px] lg:w-3 lg:h-3"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15%",
        },
      },
         {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto mt-[100px] lg:mt-[130px]">
      <Slider ref={sliderRef} {...settings}>
        {cardsData.map((data, index) => (
          <div key={data.id} className="px-2 ">
    <div className="flex justify-center items-center min-h-[400px]">
         <div
  onClick={() => handleCardClick(index)}
  className={`flex justify-center items-center flex-col transition-all duration-200 ease-in rounded-[23px] shadow-md p-3 lg:p-6 text-center cursor-pointer ${
  centerSlide === index
    ? "slider-bg-gradient min-h-[400px]  border-[0.69px] border-[#45465E] z-10 scale-100 "
    : " min-h-[280px]  border-[0.716px] border-[#FFF] opacity-60 scale-95 abcd"
} `}
>
  <img src={data.image} className={`${centerSlide === index
    ? "w-[103px] h-[112px]"
    : "w-[56.25px] h-[61.50px]"
}`}></img>
              <h3 className={` mb-2 mt-[22px]  ${
  centerSlide === index
    ? "text-[20px] lg:text-[30px] text-white90 font-semibold text-center"
    : "text-[16px] text-white90 font-medium text-center"
}`}>{data.heading}</h3>
              <p
  className={`  text-white90 text-center ${
    centerSlide === index
      ? "opacity-100 mt-4 text-[14px] lg:[18px]"
      : "opacity-0 text-[8px]"
  }`}
>{data.paragraph}</p>
            </div>
    </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Responsive;

