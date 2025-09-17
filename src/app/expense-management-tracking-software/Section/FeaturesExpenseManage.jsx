// import React from 'react'


const cards = [
  {
    image: '/image/ExpenseManagement/AutomaticInvoice.svg',
    heading: "Automatic Invoice Handling",
    paragraph:
      "Upload receipts digitally with smart categorization & built-in audit trails for enhanced accuracy.",
  },
  {
    image: '/image/ExpenseManagement/ReduceFraud.svg',
    heading: "Reduce Fraud & Misuse",
    paragraph:
      "Integrated audit trails and policy controls help prevent duplicate or non-compliant claims.",
  },
  {
    image: '/image/ExpenseManagement/realtime.svg',
    heading: "Real-Time Dashboard & Reports",
    paragraph:
      "Monitor expenses across teams with dynamic dashboards and exportable, easy-to-read reports.",
  },
  {
    image: '/image/ExpenseManagement/betterbuget.svg',
    heading: "Better Budget Control",
    paragraph:
      "Use data-driven insights to manage budgets, track trends, and improve financial planning.",
  },
];

function FeaturesExpenseManage() {
  return (
    <section className="mt-[200px]">
      <div className="max-w-full lg:max-w-screen-lg lg:mx-auto">
        <div className="mt-[131px] max-w-screen-xl mx-auto px-[19px] relative">
          <div className="features-gradient"></div>
          <div className="flex justify-center items-center lg:block">
            <p className="featuremanagementHead max-[400px]:w-[320px] w-[390px] lg:w-[693px] text-[24px] lg:text-[34px] font-semibold leading-[39px] lg:leading-[45px] lg:text-left text-center ">
              Run your Business smarter with better Expense Management software
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="w-[126px] h-[2px] bg-[#D7D7D7] mt-[26px] text-center"></p>
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[60px]">
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  background:
                    " linear-gradient(160deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
                }}
                className="flex items-center justify-center bg-featurediv  bg-clip-text text-transparent  rounded-xl hover:shadow-md transition duration-300 text-center"
              >
                <div className="bg-[#080411] p-5 rounded-xl lg:h-[99%] h-[98.9%] w-[99.5%]">
                  <div className="flex justify-center items-center">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-[52px] h-[52px]"
                    />
                  </div>
                  <p className="bg-featuregradientText bg-[#d8d8d8] bg-clip-text text-transparent pt-[13px]  font-semibold text-[20px] leading-[24.11px] ">
                    {card.heading}
                  </p>
                  <p className="pt-[11px] text-[#9E9C9F] text-[16px] leading-[20px] lg:px-[36px] px-[25px]">
                    {card.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesExpenseManage;
