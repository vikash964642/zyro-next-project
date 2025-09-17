
function CorporateCardManagement() {
  return (
    <section className="mt-[130px] lg:mt-[200px]">
      <div className="max-w-screen-lg mx-auto  ">
        <h3 className="CorporateCardHead text-[24px] leading-[32px] lg:text-[34px] lg:leading-[45px] font-semibold text-center px-[24px]">
          Corporate Card Management, Made Easy
        </h3>
        <p className="leading-[29px] text-center text-[16px] lg:leading-[25px] font-normal text-[#A9A9A9] pt-[14px] px-[56px]">
          One dashboard to issue, assign, and control every card
        </p>

        <div className="flex relative overflow-hidden justify-between items-center flex-col lg:flex-row bg-[#110A27] lg:bg-bgCorporateCard lg:border-[0.97px] lg:border-borderColor rounded-[23.16px] mt-[47px] lg:mt-[60px] px-[34px]">
          <div className="lg:hidden block corporateCard-Gradient corporateCard-Gradient-2"></div>
          <div className="lg:hidden block corporateCard-Gradient corporateCard-Gradient-1"></div>
          <div className="flex">
            <div className="hidden lg:block">
              <p className="corporate-gradiant_line"></p>
            </div>

            <div className="pl-[34px] flex flex-col justify-center  pt-[36px] lg:pt-0">
              <p className="text-[32.9px] leading-[46.26px] lg:text-[34px] lg:leading-[56px] font-semibold text-center lg:text-left text-[#FFFFFF]">
                Card Request
              </p>
              <p className="text-[16.45px] leading-[28px] font-normal text-center lg:text-left text-[#AFAFAF] pt-[15px]">
                Employees request cards with digital approvals
              </p>
            </div>
          </div>
          <div>
            <img
              src={'/image/ExpenseManagement/expenseCardRequest.webp'}
              alt=""
              className="lg:h-[333px] lg:w-[405px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateCardManagement;
