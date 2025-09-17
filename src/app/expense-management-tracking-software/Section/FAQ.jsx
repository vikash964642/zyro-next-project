
import FAQUtils from '../../../Utils/FAQUtils';
function FAQ() {
  const faq = [
   {
      ques: "What is expense management software?",
      ans: "Expense management software helps businesses track, control, and automate employee expenses, from capturing receipts to approvals, reimbursements, and reporting, all in one centralized platform.",
    },
    {
      ques: "Who can use expense management software?",
      ans: "It’s ideal for startups, SMBs, and enterprises alike. Admins, finance teams, managers, and employees can all use it with role-based access tailored to their responsibilities.",
    },
    {
      ques: "How does the software help with reimbursements?",
      ans: "Employees can submit expense claims with receipts, which are then routed through approval flows. Once approved, reimbursements are processed quickly—either manually or through direct bank integration.",
    },
    {
      ques: "Can I issue corporate cards to employees through the software?",
      ans: "Yes. You can request, assign, and manage physical or virtual corporate cards with real-time controls, spend limits, and transaction tracking.",
    },
    {
      ques: "Is it possible to automate approvals?",
      ans: "Absolutely. You can define multi-level approval workflows based on amount, department or category, ensuring compliance without slowing things down.",
    },
    {
      ques: "Does it support bulk uploads?",
      ans: "Yes. You can upload multiple expenses at once via Excel sheets, built for scaling businesses.",
    },
    {
      ques: "Can I track expenses by team or project?",
      ans: "Yes. You can generate real-time reports by employee, department, project, vendor, or date range, making it easy to track where every rupee goes.",
    },
    {
      ques: "How does the software help with policy compliance?",
      ans: "You can define custom policies with category-level limits, approval rules, and alerts for violations. The system auto-checks entries for duplicates or breaches.",
    },
    {
      ques: "What types of reports can I generate?",
      ans: "You can create reports by employee, department, project, vendor or expense type, with filters for dates, status, and budgets.",
    },
    {
      ques: "Is my financial data secure?",
      ans: "Absolutely. The software uses bank-grade encryption, access controls, and secure cloud infrastructure to keep your data safe and compliant.",
    },
  ];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Need help? Our team is always here to support you." faq={faq}/>
  );
}

export default FAQ;
