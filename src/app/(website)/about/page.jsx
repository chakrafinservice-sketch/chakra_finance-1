import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Chakra Finances | Loan Advisory & Financial Services in India",
  description:
    "Learn about Chakra Financial Services, a trusted loan advisory and financial services company in India offering personal loans, business loans, home loans, mortgage loans, insurance and financial solutions.",

  keywords: [
    "Chakra Financial Services",
    "loan advisory india",
    "financial services company india",
    "personal loan consultants",
    "business loan advisory",
    "home loan consultancy",
    "mortgage loan services",
    "loan against property india",
  ],

  openGraph: {
    title: "About Chakra Financial Services",
    description:
      "Trusted financial advisors providing personal loans, business loans, home loans and insurance services across India.",
    url: "https://www.chakrafinances.com/about",
    siteName: "Chakra Financial Services",
    images: [
      {
        url: "/Images/about-bg.png",
        width: 1200,
        height: 630,
        alt: "Chakra Financial Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Chakra Financial Services",
    description:
      "Trusted financial advisory services across India for loans and insurance.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "Chakra Financial Services",
      url: "https://www.chakrafinances.com",
      logo: "https://www.chakrafinances.com/logo.png",
      description:
        "Chakra Financial Services provides loan advisory, personal loans, business loans, mortgage loans and insurance services across India.",
      areaServed: "India",
      serviceType: "Financial Advisory",
    }),
  }}
/>