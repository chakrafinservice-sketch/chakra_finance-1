import InsuranceClient from "./InsuranceClient";

export const metadata = {
  title: "Insurance Services in India | Term, Life & Health Insurance | Chakra Finances",
  description:
    "Protect your family and health with Chakra Financial Services. We offer Term Insurance, Life Insurance, and Health Insurance advisory with competitive premiums across India.",
  keywords: [
    "term insurance india",
    "life insurance consultants",
    "health insurance advisory",
    "family health cover",
    "critical illness insurance",
    "insurance services hyderabad",
    "chakra financial services insurance",
  ],
  alternates: {
    canonical: "https://www.chakrafinances.com/services/insurance",
  },
  openGraph: {
    title: "Insurance Services | Term, Life & Health Insurance | Chakra Finances",
    description:
      "Comprehensive Term Insurance, Life Insurance, and Health Insurance solutions tailored for your peace of mind.",
    url: "https://www.chakrafinances.com/services/insurance",
    siteName: "Chakra Finances",
    locale: "en_IN",
    type: "website",
  },
};

export default function InsurancePage() {
  return <InsuranceClient />;
}
