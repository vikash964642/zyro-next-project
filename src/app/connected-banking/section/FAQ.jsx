

// import './ConnectedBankingCss.css';

import FAQUtils from '../../../Utils/FAQUtils';
function FAQ() {
  const faq = [
    {
      ques: "What is Connected Banking?",
      ans: "It smoothly integrates banking services with digital platforms, allowing users to manage their accounts, make transactions, check balances, and download statements conveniently through a single dashboard.",
    },
    {
      ques: "What are the benefits of this service?",
      ans: "This allows businesses to make payouts seamlessly, automate statement reconciliation, and enhance security. It saves time and money while streamlining financial processes. ",
    },
    {
      ques: "How secure is my data with this service? ",
      ans: "These services typically employ high-level security measures, including encryption, secure authentication processes, and compliance with regulatory standards to protect your information. ",
    },
    {
      ques: "Can I link multiple current accounts with ZYRO Connected Banking? ",
      ans: "Yes! ZYRO allows you to link to as many current accounts as you need, without restrictions. ",
    },
    {
      ques: "Can I use this service on my smartphone? ",
      ans: "Yes, many platforms offer mobile applications that allow you to access and manage your financial information anytime, anywhere. ",
    },
    {
      ques: "Can I schedule payouts using ZYRO Connected Banking? ",
      ans: "Absolutely! With ZYRO, you can effortlessly schedule both single and bulk payouts. ",
    },
    {
      ques: "Can I access transaction history through the ZYRO Connected Banking platform? ",
      ans: "Yes, you can easily view your transaction history and download bank statements for better tracking with ZYRO Connected Banking. ",
    },
    {
      ques: "Who can benefit from this? ",
      ans: "It is beneficial for a wide range of users, including individuals, small businesses, and large enterprises, to simplify financial management. ",
    },
      {
      ques: "What is the per-day transaction limit through Connected Banking at ZYRO? ",
      ans: "ZYRO Connected Banking has no daily transaction limit, allowing you to perform unlimited transactions. ",
    },
  ];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Need help? Our team is always here to support you." faq={faq}/>
  );
}

export default FAQ;
