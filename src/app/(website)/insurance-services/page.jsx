import InsuranceClient from "../services/insurance/InsuranceClient";

export const metadata = {
  title: "Insurance Services in India | Term, Life & Health Insurance | Chakra Finances",
  description:
    "Protect your family and health with Chakra Financial Services. We offer Term Insurance, Life Insurance, and Health Insurance advisory with competitive premiums across India.",
  alternates: {
    canonical: "https://www.chakrafinances.com/insurance-services",
  },
};

export default function InsuranceServicesAliasPage() {
  return <InsuranceClient />;
}
