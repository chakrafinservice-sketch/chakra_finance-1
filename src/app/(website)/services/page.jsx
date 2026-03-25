import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Loan Services in India | Personal, Business, Home Loans | Chakra Finances",
  description:
    "Chakra Financial Services provides personal loans, business loans, home loans, mortgage loans, education loans, insurance services, overdraft facilities and business financial solutions across India.",
  keywords: [
    "personal loans india",
    "business loan consultancy",
    "home loan advisory",
    "loan against property india",
    "education loan assistance",
    "insurance advisory india",
    "cash credit facility",
    "LC BG SBLC finance",
  ],
  alternates: {
    canonical: "https://www.chakrafinances.com/services",
  },
  openGraph: {
    title: "Financial Services | Chakra Finances",
    description:
      "Explore personal loans, business loans, home loans, insurance services and financial advisory solutions across India.",
    url: "https://www.chakrafinances.com/services",
    siteName: "Chakra Finances",
    images: [
      {
        url: "/Images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Chakra Financial Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}