"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const servicesdata = [
  {
    id: 1,
    title: "Personal Loans",
    img: "/Images/services/personal-loan.jpeg",
    short:
      "Quick and flexible personal loan solutions for lifestyle, emergency, or personal needs.",
    link: "/services",
  },
  {
    id: 2,
    title: "Business Loans",
    img: "/Images/services/business-loan.webp",
    short:
      "Structured funding solutions to support business growth and operations.",
    link: "/services",
  },
  {
    id: 3,
    title: "Home Loans",
    img: "/Images/services/home-loan.webp",
    short:
      "Guided home loan advisory for purchase, construction, and balance transfer.",
    link: "/services",
  },
  {
    id: 4,
    title: "Mortgage Loans (Loan Against Property)",
    img: "/Images/services/Mortgage-Loans.webp",
    short:
      "Mortgage-based funding by leveraging residential or commercial property.",
    link: "/services",
  },
  {
    id: 5,
    title: "Education Loans",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHB8AEamKRl0TalLTDtUUjSIeurXixfDMr4oZipI4kpX19KIZ7",
    short: "Education financing guidance for studies in India and abroad.",
    link: "/services",
  },
  {
    id: 6,
    title: "Term Insurance",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    short:
      "High-value financial protection for your family's future at affordable premiums.",
    link: "/services/insurance",
  },
  {
    id: 7,
    title: "Life Insurance",
    img: "/Images/services/Insuranceloan.png",
    short:
      "Holistic life coverage and savings plans designed to secure long-term milestones.",
    link: "/services/insurance",
  },
  {
    id: 8,
    title: "Health Insurance",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    short:
      "Comprehensive healthcare cover protecting your family from rising medical expenses.",
    link: "/services/insurance",
  },
  {
    id: 9,
    title: "Mutual Funds",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80",
    short:
      "Goal-based mutual fund investments and SIPs crafted for sustainable wealth creation.",
    link: "/services/other",
  },
  {
    id: 10,
    title: "Overdraft / Cash Credit Facility",
    img: "/Images/services/occ.webp",
    short:
      "Flexible funds to manage short-term cash flow needs and unexpected expenses.",
    link: "/services/other",
  },
  {
    id: 11,
    title: "LC / BG / Purchase Invoice Discounting",
    img: "/Images/services/lcbg.webp",
    short:
      "Secure financial instruments to support domestic and international trade.",
    link: "/services/other",
  },
];

export default function ServiceSections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === servicesdata.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
                <div className="bg-white rounded-2xl shadow-md border-t-4 border-[#1E6FB8] overflow-hidden flex flex-col justify-between">
                  <div>
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
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <Link
                      className="inline-block text-sm font-medium text-[#F47C20] hover:underline"
                      href={service.link || "/services"}
                    >
                      View more
                    </Link>
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
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-[#1E6FB8] hover:scale-[1.03] flex flex-col justify-between"
            >
              <div>
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
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <Link
                  className="inline-block text-sm font-medium text-[#F47C20] hover:underline"
                  href={service.link || "/services"}
                >
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
