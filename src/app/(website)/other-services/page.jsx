import OtherServicesClient from "../services/other/OtherServicesClient";

export const metadata = {
  title: "Other Financial Services in India | Mutual Funds, OD/CC, Trade Finance | Chakra Finances",
  description:
    "Explore other financial solutions by Chakra Financial Services including Mutual Funds, Overdraft / Cash Credit Facilities, and LC / BG / Purchase Invoice Discounting across India.",
  alternates: {
    canonical: "https://www.chakrafinances.com/other-services",
  },
};

export default function OtherServicesAliasPage() {
  return <OtherServicesClient />;
}
