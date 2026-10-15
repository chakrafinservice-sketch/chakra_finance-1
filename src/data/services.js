export const loanServices = [
  {
    id: 1,
    title: "Personal Loans",
    img: "/Images/services/personal-loan.jpeg",
    short: "Quick and flexible personal loan solutions for lifestyle, emergency, or personal needs.",
    long: "We assist individuals in accessing quick and flexible personal loan solutions to meet lifestyle, emergency, or personal financial needs. Our role is to simplify the process, guide you through eligibility and documentation, and connect you with suitable options that match your repayment capacity with minimal turnaround time.",
    link: "/services",
  },
  {
    id: 2,
    title: "Business Loans",
    img: "/Images/services/business-loan.webp",
    short: "Structured funding solutions to support business growth and operations.",
    long: "Chakra Financial Services supports entrepreneurs, MSMEs, and growing businesses with structured funding solutions for working capital, expansion, equipment purchase, and operational needs. We focus on understanding your business model and aligning you with financing options that support sustainable growth.",
    link: "/services",
  },
  {
    id: 3,
    title: "Home Loans",
    img: "/Images/services/home-loan.webp",
    short: "Guided home loan advisory for purchase, construction, and balance transfer.",
    long: "Owning a home is a milestone, and we help make that journey smoother. Our home loan advisory covers purchase, construction, and balance transfer options. We guide you through interest rate choices, documentation, and lender selection to ensure a transparent and comfortable borrowing experience.",
    link: "/services",
  },
  {
    id: 4,
    title: "Mortgage Loans (Loan Against Property)",
    img: "/Images/services/Mortgage-Loans.webp",
    short: "Mortgage-based funding by leveraging residential or commercial property.",
    long: "We facilitate mortgage-based funding for individuals and businesses by leveraging residential or commercial property. Our advisory ensures that clients access competitive terms, appropriate loan structures, and clear repayment planning while unlocking the value of their assets responsibly.",
    link: "/services",
  },
  {
    id: 5,
    title: "Education Loans",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHB8AEamKRl0TalLTDtUUjSIeurXixfDMr4oZipI4kpX19KIZ7",
    short: "Education financing guidance for studies in India and abroad.",
    long: "We help students and families explore education financing options for studies in India and abroad. Our support includes guidance on loan eligibility, co-applicant requirements, documentation, and repayment planning—enabling families to invest in education with financial clarity and confidence.",
    link: "/services",
  },
];

export const insuranceServices = [
  {
    id: 1,
    title: "Term Insurance",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    short: "High-value financial protection for your family's future at affordable premiums.",
    long: "Term Insurance is the purest and most cost-effective form of life cover. It provides substantial financial protection for your family over a defined duration, ensuring your loved ones remain financially independent in your absence. We help evaluate income replacement needs, existing liabilities, and milestones to recommend ideal sum assured, critical illness riders, and payout options from leading insurers in India.",
    link: "/services/insurance",
  },
  {
    id: 2,
    title: "Life Insurance",
    img: "/Images/services/Insuranceloan.png",
    short: "Holistic life coverage and wealth accumulation plans designed to secure long-term goals.",
    long: "Life Insurance bridges comprehensive risk coverage with disciplined, structured savings. At Chakra Financial Services, we assist individuals in selecting whole life, endowment, child education, and pension-oriented policies. Our advisors analyze your long-term goals to ensure optimal life cover while creating an enduring financial cushion for your family.",
    link: "/services/insurance",
  },
  {
    id: 3,
    title: "Health Insurance",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    short: "Comprehensive medical and hospitalization coverage protecting your family from rising healthcare expenses.",
    long: "Medical emergencies can place sudden financial strain on any household. Our health insurance advisory connects you with comprehensive individual, family floater, and critical illness plans. We guide you through cashless hospitalization network hospitals, pre and post-hospitalization coverage, day-care procedures, and zero co-payment options with hassle-free claim support.",
    link: "/services/insurance",
  },
];

export const otherServices = [
  {
    id: 1,
    title: "Mutual Funds",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80",
    short: "Goal-based mutual fund investments and SIPs crafted for wealth creation and capital appreciation.",
    long: "Mutual funds offer an efficient and professionally managed vehicle to grow wealth over time. At Chakra Financial Services, we provide strategic investment advisory based on your risk tolerance, financial objectives, and investment horizon. Whether you want to start a Systematic Investment Plan (SIP) in equity funds, build a conservative debt portfolio, or invest in tax-saving ELSS schemes, we help you make informed decisions for sustainable financial growth.",
    link: "/services/other",
  },
  {
    id: 2,
    title: "Overdraft / Cash Credit Facility",
    img: "/Images/services/occ.webp",
    short: "Flexible liquidity to manage short-term working capital needs and day-to-day business expenses.",
    long: "At Chakra Financial Services, we understand that businesses and individuals occasionally need extra funds to manage day-to-day expenses or deal with unexpected shortfalls. Our overdraft and cash credit facilities provide access to additional funds beyond your account balance, offering a reliable financial safety net to cover short-term cash flow gaps with flexibility and convenience. You only pay interest on the amount utilized.",
    link: "/services/other",
  },
  {
    id: 3,
    title: "LC / BG / Purchase Invoice Discounting",
    img: "/Images/services/lcbg.webp",
    short: "Secure trade finance instruments supporting domestic and cross-border commercial transactions.",
    long: "At Chakra Financial Services, we provide reliable and structured trade finance solutions in India to help businesses manage cash flow, reduce risk, and expand globally. Our expertise in Letter of Credit (LC), Bank Guarantee (BG), Standby Letter of Credit (SBLC), and Purchase Invoice Discounting (PID) ensures smooth and secure financial transactions for manufacturers, traders, importers, and exporters.",
    link: "/services/other",
  },
];

export const allServices = [
  ...loanServices,
  ...insuranceServices,
  ...otherServices,
];

export const services = allServices;