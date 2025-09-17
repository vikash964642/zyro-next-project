import Icon1 from "/image/PayOut/ApprovalIcon.svg";
import Icon2 from "/image/PayOut/Auto-reconciliationIcon.svg";
import Icon3 from "/image/PayOut/Auto-RetryIcon.svg";
import Icon4 from "/image/PayOut/SmartIcon.svg";
import "./PayOut.css";

const cards = [
  {
    image:Icon1,
    heading: "Approval Workflows",
    paragraph: "Set custom approval rules for transactions and stay in control of every outgoing payment.",
  },
 
  {
    image: Icon3,
    heading: "Auto-reconciliation",
    paragraph:
      "Automatically match and reconcile all transactions with real-time accuracy in a unified dashboard.",
  },
   {
    image: Icon2,
    heading: "Auto-Retry for  Failed Transactions",
    paragraph: "Never miss a payment, failed transactions are retired automatically without any delay.",
  },
  {
    image: Icon4,
    heading: "Smart Transaction Search",
    paragraph:
      "Accurately search your entire transaction history using UTR, account number, or transaction ID.",
  },
];

function Features() {
  return (
    <section className="max-w-screen-lg lg:mx-auto">
        
      <div className="mt-[80px] md:mt-[100px] lg:mt-[131px] max-w-screen-xl mx-auto px-[13px] relative">
        
        <div className="PayOutfeatures-gradient"></div>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[26px] md:gap-y-[35px] lg:gap-y-[50px] mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background:
                  " linear-gradient(160deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
              }}
              className="flex items-center justify-center bg-featurediv  bg-clip-text text-transparent  rounded-xl hover:shadow-md transition duration-300 text-center"
            >
              <div className="bg-[#080411] p-[18px] rounded-xl lg:h-[99%] h-[98.9%] w-[99.7%]">
                <div className="flex justify-center items-center ">
              <div className="h-[52px] w-[52px] bg-[#080219]  border-[0.377px] flex justify-center items-center PayoutCardBorder rounded-[10.9px]">
                    <img
                    src={card.image}
                    alt={card.heading}
                    className=""
                  />
              </div>
                </div>
                <p className="bg-featuregradientText bg-[#d8d8d8] bg-clip-text text-transparent pt-[11px] text-[#3B3B3B] font-semibold text-[16.7px] lg:text-[20px] leading-[24.11px] ">
                  {card.heading}
                </p>
                <p className="pt-[10px] md:pt-[12px] text-[#9E9C9F] text-[13.5px] font-normal md:text-[15px] lg:text-[16px] leading-[25px]  md:px-0 lg:px-[28px] ">
                  {card.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
