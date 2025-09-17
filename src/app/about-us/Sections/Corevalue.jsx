

const cardData = [
  {
    title: "Security First, Always-On",
    description:
      "Your data is safe with us. We follow RBI standards, encrypt everything end-to-end, and never compromise on privacy.",
    icon: '/image/AboutUs/security.svg',
  },
  {
    title: "Customer-Centric Focus",
    description:
      "You are at the center of everything we do. Your needs, aspirations, and feedback guide our innovation and shape our journey.",
    icon: '/image/AboutUs/customer.svg',
  },
    {
    title: "Tech-Driven Growth",
    description:
      "Powered by innovation and smart tech, we deliver intelligent, scalable, and future-ready solutions built to grow with you.",
    icon: '/image/AboutUs/techdriven.svg',
  },

  {
    title: "Innovative Fintech Solutions",
    description:
      "We build smart financial tools to simplify complexity and change how money works for businesses and individuals.",
    icon: '/image/AboutUs/innovative.svg',
  },
    {
    title: "Empowering Growth at Every Step",
    description:
      "We believe finance should be transparent, accessible, and user-first. Our tools are designed to put control, clarity, and confidence in your hands.",
    icon: '/image/AboutUs/empowering.svg',
  },

];

function Corevalue() {
  return (
    <section className="mt-[227px] lg:mt-[200px]">
      <div className="max-w-screen-lg mx-auto px-4 relative">
        <h3 className="coreheader text-center text-[34px] leading-[46px] font-semibold">
          Our Core Values
        </h3>
                    <div className="Core-Values-gradiant"></div>


        {/* Desktop & Tablet View */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4  mt-[35px]">
          {/* First row: 3 cards */}
          {cardData.slice(0, 5).map((card, index) => (
            <div
              key={index}
              className="lg:h-[305px] lg:w-[318px] w-[287px] h-[276px] bg-[#0B051E] border-borderColor border-[0.6px] rounded-[25px] flex flex-col items-center text-center p-6"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-[52px] h-[52px] mb-5"
              />
              <h3 className="text-[#FFFFFF] lg:text-[20px] text-[18px] font-semibold mb-4 lg:w-[210px] text-center">
                {card.title}
              </h3>
              <p className="text-[#A9A9A9] text-[14px] lg:text-[16px] font-normal">
                {card.description}
              </p>
            </div>
          ))}

          {/* Second row: 2 cards centered */}
          {/* <div className="col-span-3 flex justify-center gap-6 mt-6">
            {cardData.slice(3).map((card, index) => (
              <div
                key={index}
                className="h-[305px] w-[318px] bg-[#0B051E] border rounded-[25px] flex flex-col items-center text-center p-6"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-[52px] h-[52px] mb-5"
                />
                <h3 className="text-[#FFFFFF] lg:text-[20px] text-[18px] font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-[#A9A9A9] text-[14px] lg:text-[16px] font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        {/* Mobile View - Horizontal Scroll */}
<div
  className="sm:hidden overflow-x-auto mt-[35px] hide-scrollbar ">
  <div className="flex gap-3">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="flex-shrink-0 bg-[#0B051E] border-borderColor border-[0.6px] rounded-[25px] flex flex-col items-center text-center p-6"
        style={{ width: "287px", height: "276px" }}
      >
        <img
          src={card.icon}
          alt={card.title}
          className="w-[52px] h-[52px] mb-5"
        />
        <h3 className="text-[#FFFFFF] text-[18px] font-semibold mb-4">
          {card.title}
        </h3>
        <p className="text-[#A9A9A9] text-[14px] font-normal">
          {card.description}
        </p>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}

export default Corevalue;
