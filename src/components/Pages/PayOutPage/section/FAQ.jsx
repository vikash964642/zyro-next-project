
import FAQUtils from '../../../Utils/FAQUtils';
function FAQ() {
  const faq = [
    {
      ques: "What are payouts? ",
      ans: "Zyro Payouts is an advanced payment platform that helps businesses efficiently manage and send payments. Whether it’s vendor payouts, customer refunds, salary transfers, or on-demand disbursals, ZYRO simplifies every transaction. Connect your business’s bank accounts with leading banks and securely transfer funds to beneficiaries’ accounts. ",
    },
    {
      ques: "Is business registration required to use Zyro Payouts? ",
      ans: "Yes, you must have a registered business to use ZYRO Payouts.",
    },
    {
      ques: "What payment methods are typically used for payouts? ",
      ans: "ZYRO Payouts offers multiple payment options including IMPS, RTGS, and NEFT. ",
    },
    {
      ques: "How to make a payout? ",
      ans: "To make a payout with Zyro, log in to the dashboard, enter the recipient’s details (bank account or UPI), specify the amount, and confirm the payment. For bulk payouts, upload an Excel or CSV file with the required data. For automated disbursals, use Zyro’s API to trigger real-time payments. You can track transactions instantly and manage approvals as needed. ",
    },
    {
      ques: "Do I need technical expertise to use the bulk transfers feature? ",
      ans: "No, the bulk transfers feature is designed to be user-friendly and does not require technical skills. ",
    },
    {
      ques: "Is there a transaction limit on payouts? ",
      ans: "There are no set limits on the number or value of transactions. However, limits may apply based on the mode of payment and RBI guidelines. ",
    },
    {
      ques: "Can I schedule payouts in advance? ",
      ans: "Yes, you can schedule payouts for a future date to better manage cash flow. ",
    },
    {
      ques: "What information do I need to provide for payouts? ",
      ans: "You need to provide recipient details such as bank account number, name, and the amount to be paid. ",
    },
        {
      ques: "Are payouts secure? ",
      ans: "Yes, Zyro uses encryption and security protocols to ensure safe and secure transactions.",
    },
        {
      ques: "What happens if a payout fails? ",
      ans: "If a payout fails, you’ll be notified, and the funds may be returned to your account. Check provider-specific policies for details. ",
    },
        {
      ques: "Can I track my payouts?  ",
      ans: "Yes, Zyro provides real-time tracking, so you can monitor the status of all your transactions. ",
    },
        {
      ques: "Is there customer support available for payout issues? ",
      ans: "Yes, customer support is available to assist with payout-related queries or issues. ",
    },
  ];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Need help? Our team is always here to support you." faq={faq}/>
  );
}

export default FAQ;
