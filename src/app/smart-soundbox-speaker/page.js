// import React from 'react'
import Herosection from "./Section/Herosection";
import Features from "./Section/Features";
import MultiLanguage from "./Section/MultiLanguage";
import SoundboxFeatures from "./Section/SoundboxFeatures";
import FeaturesComparison from "./Section/FeaturesComparison";
import Form from "./Section/Form";
import Faq from "./Section/Faq";
import NeedsSpeaker from "./Section/NeedsSpeaker";

export const metadata = {
  title: ": Best Smart Soundbox Speaker for UPI Payment for Businesses",
  description:
    "Best smart soundbox speaker for UPI payments in businesses. Ensure instant payment confirmation and enhance customer experience with advanced features.",
};

export default function SoundboxPage() {
  return (
    <div>
      <Herosection />
      <Features />
      <MultiLanguage />
      <SoundboxFeatures />
      <NeedsSpeaker />
      <FeaturesComparison />
      <Faq />
      <Form />
    </div>
  );
}
