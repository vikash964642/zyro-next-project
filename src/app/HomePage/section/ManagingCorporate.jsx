"use client";
import Link from "next/link";
import "./HomePageCss.css";
function ManagingCorporate() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="max-w-screen-lg px-4  xl:px-0 mx-auto mt-[200px] lg:mt-[220px]">
      <div className="lg:flex justify-between items-center relative">
        <div className="lg:w-[50%] sm:px-[70px] md:px-[100px] lg:px-0">
          <h2 className="font-medium text-[#FFF]  max-[400px]:text-[26px] text-[28px] lg:text-[36px] max-[375px]:leading-[38px] leading-[44px] lg:leading-[55px] text-center lg:text-left lg:pr-[12px]">
            Managing{" "}
            <span className="ManagerCorporateHeaderGradient lg:text-[38px] font-semibold">
              Corporate Card and Expense Made Easy with Zyro
            </span>
          </h2>
          <p className="text-white80 lg:text-[#9E9C9F] text-[14px] lg:text-[20px] font-normal leading-[20px] lg:leading-[33.6px] mt-[18px] align-middle text-center lg:text-left ">
            Say goodbye to spreadsheets, delays, reimbursements, and manual
            entries. Zyro makes it simple to track and manage your corporate
            card spending and expense automatically, accurately, and in real
            time.
          </p>
          <div className="flex justify-center lg:justify-start mt-[39px]">
            <Link
              href="/expense-management-tracking-software"
              className="text-white w-[150px] h-[40px] bg-[#4F31B4] rounded-[30px] text-[18.6px] font-medium  flex items-center justify-center gap-[3px]"
            >
              <span onClick={ScrollTop} className="flex items-center gap-1">
                Know more
                <img
                  src={'image/HomePage/Icon/KnowMoreRightIcon.svg'}
                  alt=""
                  className="h-[13px] w-[13px]"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center lg:justify-end mt-[80px] lg:mt-0">
          <div className="ManagingCorporate-gradient"></div>
          <img
            src={'image/ExpenseManagement/ExpenseHero.webp'}
            alt=""
            className="sm:w-[380px] sm::h-[260px]"
          />
        </div>
      </div>
    </section>
  );
}

export default ManagingCorporate;
