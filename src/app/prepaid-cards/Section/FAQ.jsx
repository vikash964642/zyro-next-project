

// import './ConnectedBankingCss.css';

import FAQUtils from '../../../Utils/FAQUtils';
function FAQ() {
  const faq = [
    {
      ques: "What is a prepaid card?",
      ans: "A prepaid card is a payment card that you load with money in advance. You can use it just like a debit card for purchases, online payments, ATM withdrawals, and more—without linking it to a bank account. ",
    },
    {
      ques: "Are Zyro Prepaid Cards physical or virtual?  ",
      ans: "You can issue both virtual and physical prepaid cards depending on your needs.",
    },
    {
      ques: "How is a prepaid card different from a debit or credit card?",
      ans: "Unlike debit cards (linked to bank accounts) or credit cards (which offer credit limits), prepaid cards work on a pay-before-you-use model. You can only spend the amount loaded onto the card. ",
    },
    {
      ques: "Who can use a prepaid card?",
      ans: "Prepaid cards are ideal for businesses, employees, freelancers, students, travelers, and anyone looking for better control over spending.",
    },
    {
      ques: "Where can I use a prepaid card?",
      ans: "You can use prepaid cards at any store or website that accepts debit/credit cards in India.",
    },
    {
      ques: "Can I use a prepaid card for online purchases?",
      ans: "Absolutely. Prepaid cards are great for online transactions, including shopping, subscriptions, and utility payments.",
    },
    {
      ques: "Is KYC required for issuing prepaid cards?",
      ans: "Yes, KYC verification is mandatory as per RBI guidelines for issuing both physical and virtual cards. It ensures a smooth and quick KYC process.",
    },
    {
      ques: "Is there a limit on how much money I can load?",
      ans: "Yes, most cards have minimum and maximum load limits based on KYC status (e.g., ₹10,000 for min-KYC, up to ₹2 lakh for full-KYC).",
    },
      {
      ques: "Can I reload the prepaid card multiple times",
      ans: "Yes, most prepaid cards are reloadable. You can top them up as often as needed, within your card limits. ",
    },
    {
      ques: "Are prepaid cards safe to use?",
      ans: "Yes, prepaid cards offer a secure payment method and are often protected by PINs, OTPs, and mobile notifications. ",
    },
    {
      ques: "What happens if my prepaid card is lost or stolen?",
      ans: "Immediately block the card via the app or customer support. Most providers offer fraud protection or card replacement options.",
    },
    {
      ques: "Can I track transactions made using my prepaid card?",
      ans: "Yes, you can monitor all card activity, balances, and spending through the ZyroPay app.",
    },
  ];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Need help? Our team is always here to support you." faq={faq}/>
  );
}

export default FAQ;
