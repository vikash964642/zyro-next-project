

// import './ConnectedBankingCss.css';

import FAQUtils from '../../../Utils/FAQUtils';
function FAQ() {
  const faq = [
    {
      ques: "What is a POS Machine?",
      ans: "A POS (Point of Sale) machine, also known as a card swipe machine or EDC (Electronic Data Capture) machine, is a digital payment device that enables businesses to accept payments from customers via credit cards, debit cards (Visa, Mastercard and RuPay), UPI and digital wallets options.",
    },
    {
      ques: "How does a POS machine work?",
      ans: "A POS machine reads payment details from a card or UPI, processes the transaction securely, and confirms it instantly with a receipt. ",
    },
    {
      ques: "What payment modes are supported by a POS machine?",
      ans: "POS machines support debit/credit cards, UPI, digital wallets, QR payments and EMI options. ",
    },
    {
      ques: "Do I need internet to use a POS machine? ",
      ans: "Yes, most POS devices require internet via 5G SIM and Wi-Fi to process payments in real-time.",
    },
    {
      ques: "Is a POS machine safe to use for digital transactions?",
      ans: "Yes, POS machines are PCI DSS certified and use encrypted channels for secure payments.",
    },
    {
      ques: "Can I print receipts using the POS machine? ",
      ans: "Yes, most POS devices come with a built-in thermal printer for instant receipt generation.",
    },
    {
      ques: "How long does the POS machine battery last?",
      ans: " Zyro POS and similar devices offer long battery life — typically lasting a full business day on a single charge. ",
    },
      {
      ques: "Can I track my sales and transactions?",
      ans: "Yes, POS systems offer dashboards or apps where you can track sales, refunds, settlements, and reports in real time. ",
    },
    {
      ques: "Is EMI payment available through POS?",
      ans: "Yes, selected POS devices support EMI on eligible credit cards, allowing customers to pay in instalments.",
    },
    {
      ques: "What businesses need a POS machine?",
      ans: "POS machines are perfect for retail stores, restaurants, salons, clinics, kirana shops, and any business that accepts digital payments. ",
    },
    {
      ques: "How can I get a POS machine for my business?",
      ans: "You can request a demo or place an order through the POS provider’s website or by contacting their sales/support team.",
    },
  ];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Need help? Our team is always here to support you." faq={faq}/>
  );
}

export default FAQ;
