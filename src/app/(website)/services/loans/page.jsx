import ServicesClient from "../ServicesClient";

export const metadata = {
  title: "Loan Services in India | Personal, Business, Home Loans | Chakra Finances",
  description:
    "Explore loan services by Chakra Financial Services including personal loans, business loans, home loans, mortgage loans, and education loans across India.",
  alternates: {
    canonical: "https://www.chakrafinances.com/services/loans",
  },
};

export default function LoansPage() {
  return <ServicesClient />;
}
