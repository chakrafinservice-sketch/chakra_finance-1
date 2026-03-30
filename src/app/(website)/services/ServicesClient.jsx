"use client";

import { useState } from "react";
import Image from "next/image";
const servicesdata = [
  {
    id: 1,
    title: "Personal Loans",
    img: "/Images/services/personal-loan.jpeg",
    short:
      "Quick and flexible personal loan solutions for lifestyle, emergency, or personal needs.",
    long: "We assist individuals in accessing quick and flexible personal loan solutions to meet lifestyle, emergency, or personal financial needs. Our role is to simplify the process, guide you through eligibility and documentation, and connect you with suitable options that match your repayment capacity.",
  },
  {
    id: 2,
    title: "Business Loans",
    img: "/Images/services/business-loan.webp",
    short:
      "Structured funding solutions to support business growth and operations.",
    long: "Chakra Financial Services supports entrepreneurs, MSMEs, and growing businesses with structured funding solutions for working capital, expansion, equipment purchase, and operational needs. We focus on understanding your business model and aligning you with financing options that support sustainable growth.",
  },
  {
    id: 3,
    title: "Home Loans",
    img: "/Images/services/home-loan.webp",
    short:
      "Guided home loan advisory for purchase, construction, and balance transfer.",
    long: "Owning a home is a milestone, and we help make that journey smoother. Our home loan advisory covers purchase, construction, and balance transfer options. We guide you through interest rate choices, documentation, and lender selection to ensure a transparent and comfortable borrowing experience.",
  },
  {
    id: 4,
    title: "Mortgage Loans (Loan Against Property)",
    img: "/Images/services/Mortgage-Loans.webp",
    short:
      "Mortgage-based funding by leveraging residential or commercial property.",
    long: "We facilitate mortgage-based funding for individuals and businesses by leveraging residential or commercial property. Our advisory ensures that clients access competitive terms, appropriate loan structures, and clear repayment planning while unlocking the value of their assets responsibly.",
  },
  {
    id: 5,
    title: "Education Loans",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHB8AEamKRl0TalLTDtUUjSIeurXixfDMr4oZipI4kpX19KIZ7",
    short: "Education financing guidance for studies in India and abroad.",
    long: "We help students and families explore education financing options for studies in India and abroad. Our support includes guidance on loan eligibility, co-applicant requirements, documentation, and repayment planning—enabling families to invest in education with financial clarity and confidence.",
  },
  {
    id: 6,
    title: "Insurance Services",
    img: "data:image/jpeg;base64,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",
    short:
      "Advisory services to protect life, health, assets, and business interests.",
    long: "Our insurance advisory focuses on protecting what matters most—life, health, assets, and business interests. We assist clients in choosing suitable coverage based on risk profile and long-term needs, ensuring informed decisions rather than product-driven selling.",
  },
  {
    id: 7,
    title: "Overdraft / Cash Credit Facility",
    img: "/Images/services/occ.webp",
    short:
      "Flexible funds to manage short-term cash flow needs and unexpected expenses.",
    long: "At Chakra Financial Services, we understand that businesses and individuals occasionally need extra funds to manage day-to-day expenses or deal with unexpected shortfalls. Our overdraft and cash credit facilities provide access to additional funds beyond your account balance, offering a reliable financial safety net to cover short-term cash flow gaps with flexibility and convenience.",
  },
  {
    id: 8,
    title: "LC / BG / SBLC Facilities",
    img: "/Images/services/lcbg.webp",
    short:
      "Secure financial instruments to support domestic and international trade.",
    long: "At Chakra Financial Services, we provide reliable and structured trade finance solutions in India to help businesses manage cash flow, reduce risk, and expand globally. Our expertise in Letter of Credit (LC), Bank Guarantee (BG), and Purchase Invoice Discounting(PID) ensures smooth and secure financial transactions for importers, exporters, and businesses.",
  },
];

export default function ServicesClient() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      {/* ================= BANNER ================= */}

      <section className="pt-17 relative">
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/Images/services-banner.png"
            alt="Financial Services"
            fill
            className="object-center"

            priority
          />

          {/* overlay */}
          {/* <div className="absolute inset-0 bg-black/50" /> */}

          {/* <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-18 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                Our Services
              </h1>

              <p className="max-w-xl text-white/90 text-sm md:text-lg">
                Trusted financial advisory and funding solutions designed to
                help individuals and businesses grow with confidence.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-18 space-y-16">

          {servicesdata.map((service, index) => (
            <div
              key={service.id}
              className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center"
            >
              {/* IMAGE */}

              <div
                className={`relative rounded-3xl overflow-hidden shadow-xl h-[260px] md:h-[340px]
                ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}

              <div
                className={`space-y-4 ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#F47C20]">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base">
                  {service.short}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {service.long}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

