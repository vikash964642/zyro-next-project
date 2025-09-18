"use client";
import { useRouter } from "next/navigation";
import "./HomePageCss.css";
function NewsletterBox() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also validate email here if needed
    router.push("/thank-you"); // redirect to thank-you page
  };
  return (
    <section className="max-w-screen-lg mx-auto px-[20px] xl:px-0 mt-[130px]">
      <div className="lg:h-[540px] lg:rounded-[59px] rounded-[19px] bg-newletterBG  border-[0.928px] border-newletterboxBorder  border-solid  relative">
        <div className="flex justify-center items-center h-[100%] m-[10px] lg:m-0 py-[35px] lg:py-0">
          <div>
            <p className="max-[375px]:text-[21px] max-[400px]:text-[23px] text-[27px] md:text-[35px] lg:text-[40px] lg:font-medium md:leading-[60px] lg:leading-[76px] leading-[32px] text-white90 text-center ">
              Newsletter
            </p>
            <p className="max-[375px]:text-[20px] max-[400px]:text-[22px] text-[26px] md:text-[34px] lg:text-[40px] font-medium  md:leading-[60px] lg:leading-[76px] leading-[32px] text-white90 text-center ">
              Join our readers community
            </p>
            <p className="max-[375px]:text-[14px] max-[400px]:text-[15px] text-[16px] lg:text-[20px] pt-[10px] lg:pt-[10px] font-normal lg:leading-[30px] text-white70 text-center">
              Subscribe to receive the latest news and updates
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center md:gap-[15px] md:items-center md:flex-row flex-col mt-[40px]"
            >
              <input
                type="email"
                placeholder="Email"
                required
                className="md:w-[300px] lg:w-[398px] w-[100%] lg:h-[55px] h-[46px] px-[30px] border-[1px] border-solid border-bordercolor1 bg-backgroundColor1 rounded-[30px] text-white text-[15px] font-normal focus:outline-none"
              />
              <button
                type="submit"
                className="h-[46px] lg:h-[55px] md:w-[180px] lg:w-[215px] w-[100%] rounded-[30px] mt-[25px] md:mt-0 Newaletter-subscribe-btn"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center md:justify-center lg:justify-between md:gap-[30px] lg:gap-0 gap-[5px] md:flex-row flex-col mt-[30px] lg:px-[40px] lg:mt-[70px]">
              <p className="text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]">
                No Promotion
              </p>
              <p className="text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]">
                No Spam
              </p>
              <p className="text-grey70 lg:text-[20px] text-[15px] font-medium leading-[30px]">
                Only Finance
              </p>
            </div>
          </div>
        </div>
        <div className="Newsletter-gradient"></div>
      </div>
    </section>
  );
}

export default NewsletterBox;
