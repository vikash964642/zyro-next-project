"use client";
// import soundbox from "/image/soundbox/soundbox1.svg";
// import newSoundbox from "/image/soundbox/soundbox2.svg";

function SoundboxFeatures() {
  return (
    <section className="mt-[150px]">
      <div className="max-w-screen-lg mx-auto relative overflow-hidden lg:rounded-[25px] ">
        <div className="hidden lg:block">
          <div className="soundboxFeatures-gradient  hidden lg:block"></div>
          <div className="min-h-[700px] relative">
            <div className="SoundBoxBackgroundGradient lg:relative lg:h-[500px] pt-[25px]">
              <div className=" flex flex-col lg:flex-row  justify-between  ">
                <div className="lg:ml-[113px] mt-[80px]">
                  <p className="text-[#FFFFFF]  text-[34.2px] leading-[41.32px] font-semibold w-[200px]">
                    High-Quality Speaker
                  </p>
                  <p className="text-[#ffffff] text-[13.54px] leading-[22.8px] font-medium pt-[15px] w-[289px]">
                    Loud and clear payment sounds, even in the busiest places.
                  </p>
                </div>
                <div className="cardbg w-[370px] h-[370px] relative rounded-[30px] flex justify-center items-center mr-[70px]">
                  <div className="lg:bg-[#080219] z-10 lg:rounded-[30px]  p-[9px] flex justify-center items-center   absolute  h-[calc(100%-2px)] w-[calc(100%-2px)]">
                    {/* <img src={soundbox} alt="" /> */}
                    <video
                     
                        src={'/video/betterspeackerqr.webm'}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-[20px] w-full h-full object-cover"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-around z-10  lg:absolute lg:top-[300px] w-full mt-[70px] lg:mt-0">
              <div className=" cardbg rounded-[25.5px] w-[314px] h-[347px] flex justify-center items-center ">
                <div className="bg-[#080219] rounded-[25.5px]  p-[9px] flex justify-center items-center  h-[calc(100%-2px)] w-[calc(100%-3px)]">
                  {/* <img src={newSoundbox} alt="" /> */}
                  <video
                     src={'/video/highqualityQR.webm'}
                    
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-[20px] w-full h-full object-cover"
                  ></video>
                </div>
              </div>
              <div className="w-[31%] flex flex-col justify-end ">
                <p className="text-[#FFFFFF]  text-[34.2px] leading-[41.32px] font-semibold w-[216px]">
                  Better Visible QR Code
                </p>
                <p className="text-[#ffffff] text-[13.54px] leading-[22.8px] font-medium pt-[15px] w-[266px]">
                  Customer can scan from a distance for hassle-free payments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div>
            <div className="min-h-[620px] relative">
              <div className="SoundBoxBackgroundGradient-mob">
                <div className="p-[45px]">
                  <div className="max-[360px]:text-[30px] text-[34px] text-[#FFF] font-semibold leading-[41px]">
                    <h2>High-Quality</h2>
                    <h2>Speaker</h2>
                  </div>
                  <p className="max-[360px]:text-[12.5px] text-[13.5px] text-[#FFF] font-medium leading-[22px] opacity-[0.7] pt-[12px]">
                    Loud and clear payment sounds, even in the busiest places.
                  </p>
                </div>
              </div>

              <div className="cardbg flex justify-center mx-[20px]">
                <div className="absolute top-[235px]  bg-[#080219] h-[370px]  max-[350px]:w-[280px] max-[375px]:w-[320px] min-[375px]:w-[335px] min-[400px]:w-[370px]  rounded-[20px] border-[0.627px] border-borderColor flex justify-center items-center">
                  {/* <img src={soundbox} alt="" className="p-[40px]" /> */}
                  <video
                        src={'/video/betterspeackerqr.webm'}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-[20px] w-full h-full object-cover"
                    ></video>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="min-h-[620px] relative">
              <div className="SoundBoxBackgroundGradient-mob">
                <div className="p-[45px]">
                  <div className="max-[360px]:text-[30px] text-[34px] text-[#FFF] font-semibold leading-[41px]">
                    <h2>Better Visible</h2>
                    <h2>QR Code</h2>
                  </div>
                  <p className="max-[360px]:text-[12.5px] text-[13.5px] text-[#FFF] font-medium leading-[22px] opacity-[0.7] pt-[12px]">
                    Customer can scan from a distance for hassle-free payments
                  </p>
                </div>
              </div>
              <div className="flex justify-center mx-[20px]">
                <div className="absolute top-[235px]  bg-[#080219] h-[370px] max-[350px]:w-[280px] max-[375px]:w-[320px] min-[375px]:w-[335px] min-[400px]:w-[370px]  rounded-[20px] border-[0.627px] border-borderColor flex justify-center items-center">
                  {/* <img src={newSoundbox} alt="" className="" /> */}
                  <video
                  
                    src={'/video/highqualityQR.webm'}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-[20px] w-full h-full object-cover"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoundboxFeatures;
