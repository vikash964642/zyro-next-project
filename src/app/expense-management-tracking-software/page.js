
import HeroSection from './Section/HeroSection';
import CorporateCardManagement from './Section/CorporateCardManagement';
import ExpenseOverview from './Section/ExpenseOverview';
import ControlAndClarity from './Section/ControlAndClarity';
import SignupTracking from './Section/SignupTracking';
import FeaturesExpenseManage from './Section/FeaturesExpenseManage';
import SmartExpense from './Section/SmartExpense';
import FAQ from './Section/FAQ';
import Digitize from './Section/Digitize';
import RoleBased from './Section/RoleBased';
export const metadata = {
  title: "Best Expense Management Tracking Software System in India",
  description:
    "Best Expense Management Tracking Software System in India to simplify business finances, control spending, & boost efficiency with smart automation. Quote now!",
};


function ExpenseManagement() {
  return (
    <>

    <HeroSection />
    <CorporateCardManagement />
    <ExpenseOverview />
    <ControlAndClarity />
    <RoleBased />
    <SignupTracking />
    <FeaturesExpenseManage />
    <SmartExpense />
    <FAQ />
    <Digitize/>
    </>
  )
}

export default ExpenseManagement