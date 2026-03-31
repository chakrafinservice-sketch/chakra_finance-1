"use client"
import { useEffect, useState } from "react";


export default function ServiceSections() {
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
      img: "/Images/services/Insuranceloan.png",
      short:
        "Advisory services to protect life, health, assets, and business interests.",
      long: "Our insurance advisory focuses on protecting what matters most—life, health, assets, and business interests. We assist clients in choosing suitable coverage based on risk profile and long-term needs, ensuring informed decisions rather than product-driven selling.",
    },
    {
      id: 7,
      title: "Overdraft / Cash Credit Facility",
      img: "https://sgaa.in/resource/Image/bann1.jpg",
      short:
        "Flexible funds to manage short-term cash flow needs and unexpected expenses.",
      long: "At Chakra Financial Services, we understand that businesses and individuals occasionally need extra funds to manage day-to-day expenses or deal with unexpected shortfalls. Our overdraft and cash credit facilities provide access to additional funds beyond your account balance, offering a reliable financial safety net to cover short-term cash flow gaps with flexibility and convenience.",
    },
    // updated
    {
      id: 8,
      title: "LC / BG / Purchase Invoice Discounting",
      img: "/Images/services/lcbg.webp",
      short:
        "Secure financial instruments to support domestic and international trade.",
      long: "At Chakra Financial Services, we understand the importance of trust and security in business transactions. Our Letter of Credit (LC), Bank Guarantee (BG), and Standby Letter of Credit (SBLC) facilities provide strong financial backing to ensure smooth and secure domestic and international trade. These instruments help buyers and sellers fulfill contractual obligations with confidence and peace of mind.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === servicesdata.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [servicesdata.length]);

  return (
    <section id="services" className="py-6 lg:pt-30 lg:-mt-20 px-6 lg:px-18">
      <div className="max-w-7xl mx-auto">
        {/* ---------- TITLE ---------- */}
        <div className="text-center pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6FB8]">
            Our Services
          </h2>
        </div>

        {/* ================= MOBILE AUTO SLIDER ================= */}
        <div className="sm:hidden overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {servicesdata.map((service) => (
              <div key={service.id} className="min-w-full px-4">
                <div className="bg-white rounded-2xl shadow-md border-t-4 border-[#1E6FB8] overflow-hidden">
                  <div className="h-40 w-full">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="object-cover h-40 w-full"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.short}
                    </p>

                    <a
                      className="mt-4 inline-block text-sm font-medium text-[#F47C20] hover:underline"
                      href="/services"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesdata.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-[#1E6FB8] hover:scale-[1.03]"
            >
              <div className="h-40 w-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover h-40 w-full"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1E6FB8] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.short}
                </p>

                <a
                  className="mt-4 inline-block text-sm font-medium text-[#F47C20] hover:underline"
                  href="/services"
                >
                  View more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
