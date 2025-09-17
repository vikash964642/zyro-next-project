// import React from 'react'



const cards = [
  { image: 'image/HomePage/Icon/InstantPaymentIcon1.svg', dimension:"lg:h-[20.14px]  lg:w-[30.21px] h-[14.5px] w-[21.68px]", paragraph: "Replay Last\nTransactions" },
  { image: 'image/HomePage/Icon/InstantPaymentIcon2.svg',dimension:"lg:h-[13.13px]  lg:w-[28.89px] h-[2opx] w-[19px]", paragraph: "Better Battery Life\n(up to 4 days)" },
  { image: 'image/HomePage/Icon/InstantPaymentIcon3.svg',dimension:"lg:h-[27.69px]  lg:w-[26.27px] h-[14.5px] w-[21.68px]", paragraph: "Multiple Language\nSupport" },
  { image: 'image/HomePage/Icon/InstantPaymentIcon4.svg',dimension:"lg:h-[19.5px] lg:w-[24.5px]  h-[14px] w-[17.68px]", paragraph: "Get Instant Audio\nConfirmation" },
  { image: 'image/HomePage/Icon/InstantPaymentIcon5.svg',dimension:"lg:h-[29px] lg:w-[27.5px]  h-[20px] w-[21px]", paragraph: "Quick and Hassle-\nfree Installation" },
  { image: 'image/HomePage/Icon/InstantPaymentIcon6.svg',dimension:"lg:h-[24.5px]  lg:w-[30px] h-[17.75px] w-[21.5px]", paragraph: "High Audio\nQuality" },
];

function InstantPayment() {
  return (
    <section className="max-w-screen-lg mx-4 lg:mx-auto mt-[170px] lg:mt-[200px]">
    

      <div className="flex justify-center">
        <h2 className="instantPaymentHeaderGradient max-[360px]:w-full w-[325px] lg:w-[531px] text-center font-semibold max-[360px]:text-[22px] text-[27px] lg:text-[45px] leading-[46px] lg:leading-[46px]">
          Instant Payment Alerts, Loud and Clear
        </h2>
      </div>

      <div className="mt-[45px] lg:mt-[64px] grid grid-cols-2 sm:grid-cols-3 gap-[16px] lg:gap-x-[62px] sm:px-[30px] md:px-[50px] lg:px-[71px] gap-y-[27px] sm:gap-y-[32px] justify-items-center ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative  max-[360px]:h-[120px] max-[400px]:h-[125px]  h-[130.06px] w-full lg:h-[181.24px] rounded-[9.75px] lg:rounded-[13.59px] border-[0.56px] lg:border-[0.78px] border-solid border-[#45465E]  max-[360px]:pl-[12px] max-[360px]:pt-[12px] max-[400px]:pl-[14px] max-[400px]:pt-[12px] pl-[18.84px] lg:pl-[21.05px] pt-[16.02px] lg:pt-[22.33px]"
          >
           
              <div className="instant-gradient"></div>
           

            <div className="h-[38px] lg:h-[52.53px] w-[38px] lg:w-[52.53px] bg-[#4F31B4] rounded-full flex items-center justify-center">
              <img
                src={card.image}
                alt=""
                className={`${card.dimension}`}
              />
            </div>
            <p className="font-normal text-[#EBEBEB] max-[360px]:text-[12.5px] text-[14.9px] lg:text-[20.76px] leading-[22.62px] lg:leading-[31.52px] mt-[13px]">
              {card.paragraph.split("\n").map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx !== arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default InstantPayment;
