// import React from 'react'
import HeroSection from "./section/HeroSection";
import BankAccountManagement from "./section/BankAccountManagement";
import ZyroSoundBox from "./section/ZyroSoundBox";
import InstantPayment from "./section/InstantPayment";
import Scroller from "./section/Scroller";
import ZyroPosMachine from "./section/ZyroPosMachine";
import ManagingCorporate from "./section/ManagingCorporate";
import ExpenceControl from "./section/ExpenceControl";
import ConnectedBanking from "./section/ConnectedBanking";
// import BusinessVerticleSlider from "./section/BusinessVerticleSlider";
import NewsletterBox from "./section/NewsletterBox";
import ControlFinance from "./section/ControlFinance";
// import CardSliders from "./section/CardSliders";
import VerticleSlider from "./section/VerticleSlider";
import CustomHelmet from "../../Utils/Helmet"


export default function HomePage() {
  return (
    <div>
                <CustomHelmet  title={"Best Digital Business Payments Platform Tool for Online payment"} content={"Zyro: The best digital business payments platform tool for easy, secure, and fast online payments. Simplify transactions & grow your business today. Quote Now!"} />

      <HeroSection />
      <Scroller />
      <ConnectedBanking />
      <BankAccountManagement />
      <ZyroSoundBox />
      <InstantPayment />
      <ZyroPosMachine />
      {/* <CardSliders /> */}

      
        <ManagingCorporate />
      <ExpenceControl />
      {/* <BusinessVerticleSlider /> */}
      
      
      <VerticleSlider />
      <ControlFinance />
      <NewsletterBox />
    </div>
  );
}
