import OtherServicesClient from "./OtherServicesClient";

export const metadata = {
  title: "Other Financial Services in India | Mutual Funds, OD/CC, Trade Finance | Chakra Finances",
  description:
    "Explore other financial solutions by Chakra Financial Services including Mutual Funds, Overdraft / Cash Credit Facilities, and LC / BG / Purchase Invoice Discounting across India.",
  keywords: [
    "mutual funds advisory india",
    "sip investments hyderabad",
    "overdraft facility india",
    "cash credit facility",
    "letter of credit lc bg finance",
    "purchase invoice discounting",
    "trade finance consultants india",
  ],
  alternates: {
    canonical: "https://www.chakrafinances.com/services/other",
  },
  openGraph: {
    title: "Other Financial Services | Mutual Funds, OD/CC, LC/BG | Chakra Finances",
    description:
      "Strategic investment advisory, cash credit liquidity, and trade finance instruments tailored for your financial success.",
    url: "https://www.chakrafinances.com/services/other",
    siteName: "Chakra Finances",
    locale: "en_IN",
    type: "website",
  },
};

export default function OtherServicesPage() {
  return <OtherServicesClient />;
}
