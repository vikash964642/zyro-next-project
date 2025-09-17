
import "./Soundbox.css";

const cards = [
  {
    image: "/image/soundbox/instantStartup.png",
    heading: "Instant Setup",
    paragraph: "Get started in minutes without any complex installation.",
  },
  {
    image: '/image/soundbox/instantPaymentNoti.png',
    heading: "Instant Payment Notifications",
    paragraph: "Get real-time voice confirmations for every payment.",
  },
    {
    image:  "/image/soundbox/repeatAlerts.png",
    heading: "Repeat Last Payment Alerts",
    paragraph:
      "Replay the last payment voice message anytime with a single button press.",
  },
  {
    image: "/image/soundbox/remoteDeviceControl.png",
    heading: "Remote Device Control",
    paragraph:
      "Easily monitor & manage your Soundbox via the merchant business app.",
  },

];

function Features() {
  return (
    <section className="max-w-screen-lg lg:mx-auto">
        
      <div className="mt-[131px] max-w-screen-xl mx-auto px-[19px] relative">
        
        <div className="features-gradient-right"></div>
       <div className="flex justify-center items-center pb-[55px]">
         <p className="bg-textgradiantMid  lg:w-[619px] text-transparent bg-clip-text text-[24px] lg:text-[38px] font-semibold leading-[40px] lg:leading-[56px] text-center px-[16px]">
           Key Features of ZYRO  Soundbox for Every Business
         </p>
       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background:
                  " linear-gradient(160deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }}
              className="flex items-center justify-center bg-featurediv  bg-clip-text text-transparent  rounded-xl hover:shadow-md transition duration-300 text-center"
            >
              <div className="bg-[#080411] p-5 rounded-xl lg:h-[98.9%] h-[98.9%] w-[99.5%]">
                <div className="flex justify-center items-center">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-[45px] h-[45px]"
                  />
                </div>
                <p className="bg-featuregradientText bg-[#d8d8d8] bg-clip-text text-transparent pt-[11px] font-semibold text-[20px] leading-[24.11px] ">
                  {card.heading}
                </p>
                <p className="pt-[13px] text-[#9E9C9F] text-[16px] leading-[25px] lg:px-[63px] px-[33px]">
                  {card.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="features-gradient-left hidden lg:block"></div>
      </div>
    </section>
  );
}

export default Features;
