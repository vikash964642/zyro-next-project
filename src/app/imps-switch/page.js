
import HeroSection from './section/HeroSection';
import IMPSGlance from './section/IMPSGlance';
import KeyCapabilities from './section/KeyCapabilities';
import IMPSService from './section/IMPSService';
import ChannelIntegration from './section/ChannelIntegration';
import RealTimeBeneficiary from './section/RealTimeBeneficiary';
import BeneficiaryAccount from './section/BeneficiaryAccount';
import BANLSlider from './section/BANLSlider';
import DigitalPayment from './section/DigitalPayment';
import IMPSScaleSecurity from './section/IMPSScaleSecurity';
import BankStartup from './section/BankStartup';

export const metadata = {
  title: "IMPS Switch (Immediate Payment Service) – Instant fund transfer",
  description:
    "Immediate Payment Service enables instant, secure interbank fund transfers in India 24/7 via mobile, internet, and ATMs. Connect IMPS Switch Gateway now.",
};
function IMPSSwitch() {
  return (
   <>
   <HeroSection />
   <IMPSGlance />
   <KeyCapabilities />
   <IMPSService />
   <IMPSScaleSecurity />
   <ChannelIntegration />
   <BankStartup />
   <BeneficiaryAccount />
   <RealTimeBeneficiary />
   
   <BANLSlider />
   <DigitalPayment />
   </>
  )
}

export default IMPSSwitch