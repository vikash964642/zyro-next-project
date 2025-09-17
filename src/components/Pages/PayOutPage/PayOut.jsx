
import HeroSection from './section/HeroSection';
import BusinessCard from './section/BusinessCard';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import ConnectedCardSlider from './section/ConnectedCardSlider';
// import Scroller from '../HomePage/section/Scroller';
import BulkPayment from './section/BulkPayment';
import BuiltBusinessAnimation from './section/BuiltBusinessAnimation';
import SheduledPayOut from './section/SheduledPayOut';
import Features from './section/Features';
import CustomHelmet from "../../Utils/Helmet"

function PayOut() {
  return (
 <>
                       <CustomHelmet  title={"Zyro Payout: Send instant Bulk Payout Automation for Businesses"} content={"Zyro Payout empowers businesses with Bulk Payout APIs to automate vendor payments, salaries, & refunds—delivering instant, secure,& reliable bulk payouts."} />

 <HeroSection />
 {/* <Scroller /> */}
 <ConnectedCardSlider />
 <Features />
 <BulkPayment />
 <SheduledPayOut />
 <BusinessCard />
 <BuiltBusinessAnimation />
 <FAQ />
 <BusinessBanking />
 </>
  )
}

export default PayOut