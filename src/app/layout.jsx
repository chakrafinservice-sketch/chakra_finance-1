import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Chakra Finances | Loans, Insurance, financial consultants",
    template: "%s | Chakra Finances",
  },
  description:
    "Chakra Finances provides Personal Loans, Business Loans, Home Loans, Education Loans, Mortgage Loans, OD/CC, Insurance Services and Company Registrations across India.",

  keywords: [
    "personal loans india",
    "business loans india",
    "education loans india",
    "home loans india",
    "mortgage loans india",
    "od cc finance",
    "insurance services india",
    "company registration india",
  ],

  metadataBase: new URL("https://www.chakrafinances.com"),

  openGraph: {
    title: "Chakra Finances",
    description:
      "Loans, Insurance and Business Registration services across India.",
    url: "https://www.chakrafinances.com",
    siteName: "Chakra Finances",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0CSBQXSY0R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0CSBQXSY0R');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
