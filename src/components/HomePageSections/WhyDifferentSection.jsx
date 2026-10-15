"use client";

import Image from "next/image";

export default function WhyDifferentPremium() {
  return (
    <section className="relative w-full md:min-h-screen overflow-hidden sm:py-5">

      {/* Background Layer */}
      <div className="absolute inset-0">

        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/Images/bg-orange-meeting.jpeg"
            alt="Financial Meeting"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mobile Gradient Background */}
        <div className="absolute inset-0  lg:hidden bg-gradient-to-b from-gray-200 via-[#f59e0b] to-gray-200"></div>

      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-20">

        {/* Heading */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E4E8C]">
            Why We Are <span className="text-[#F47C20]">Different</span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-[#1E4E8C]/30 mt-4 mb-5 sm:mb-6 mx-auto md:mx-0" />

          <p className="text-lg sm:text-xl font-semibold text-[#1E4E8C] mb-5 sm:mb-6">
            Trusted Loan Advisory & Financial Services Company
          </p>

          <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
            At{" "}
            <span className="font-semibold text-[#1E4E8C]">
              Chakra Financial Services
            </span>
            , we go beyond basic loan processing. As a growing loan advisory and
            financial services company in India, we provide{" "}
            <span className="font-semibold">
              structured, transparent, and result-driven
            </span>{" "}
            financial solutions tailored to your needs.
          </p>

          <br />

          <Image
            src="/Images/why-we-services.jpeg"
            alt="Why we different"
            width={600}
            height={120}
            className="object-cover rounded-md mx-auto md:mx-0 w-full sm:w-auto"
            priority
          />

          <br />

          <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
            Whether you need a{" "}
            <span className="font-semibold text-[#1E4E8C]">
              Personal Loan, Business Loan, Home Loan,
              <br className="hidden sm:block" />
              Loan Against Property, Working Capital Finance, and Insurance,
            </span>{" "}
             <br className="hidden sm:block" />
            <span className="font-semibold">our expert advisors </span>
            ensure that you receive the most suitable option
            <br className="hidden sm:block" />
            <span className="font-semibold">
              with competitive interest rates and faster approvals.
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}