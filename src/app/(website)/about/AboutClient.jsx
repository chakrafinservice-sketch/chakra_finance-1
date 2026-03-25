"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [showKeyMore, setShowKeyMore] = useState(false);

  return (
    <section id="about" className="pt-16 lg:pt-16 bg-white">
      {/* HEADER IMAGE */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px]">
        <Image
          src="/Images/about-banner1.png"
          alt="Chakra Financial Services Loan Advisory"
          fill
          priority
          className="object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 bg-white">
        {/* ABOUT CONTENT */}
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto pt-10 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-gray-700 mb-6 sm:mb-8">
                Where your financial needs, <br />
                meet reliable solutions.
              </h2>

              <p className="text-gray-600 leading-relaxed mb-2 text-base sm:text-lg">
                At{" "}
                <span className="font-semibold text-[#0d4ca3]">
                  Chakra Financial Services
                </span>
                , we believe financial support should be simple, transparent,
                and accessible to everyone. As a trusted loan advisory and
                financial services company operating across India, we help
                individuals, families, entrepreneurs, and businesses secure the
                right financial solutions with confidence.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-10 text-base sm:text-lg">
                We provide end-to-end assistance across a wide range of services
                including personal loans, business loans, home loans, mortgage
                loans, loan against property, education loans, working capital
                finance, balance transfers, refinancing, and insurance services
                — ensuring smooth processing and competitive terms for every
                client.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[380px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/Images/hero-bg.jpg"
                alt="About Chakra Financial Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* PARAGRAPH */}
        <p className="text-gray-600 leading-relaxed mb-10 text-base sm:text-lg mt-8">
          Our approach begins with understanding our clients’ financial goals
          and challenges before recommending suitable solutions. From
          documentation and eligibility assessment to approval and disbursement
          coordination, we guide clients at every stage of the process. Backed
          by strong relationships with leading banks and financial institutions
          across India, we deliver flexible options with faster turnaround
          times. At{" "}
          <span className="font-semibold text-[#0d4ca3]">
            Chakra Financial Services
          </span>
          , we don’t just process applications — we build trusted financial
          partnerships that support long-term growth and stability.
        </p>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-10">
          <ToggleSection
            title="Our Mission"
            color="#F47C20"
            shortText="Our mission is to empower our clients with the right financial tools, knowledge, and access to opportunities that support growth and security."
            fullText="Our mission is to empower our clients with the right financial tools, knowledge, and access to opportunities that support growth and security. By combining professional expertise with a human approach, we aim to simplify complex financial processes and create meaningful financial progress for every client we serve."
          />

          <ToggleSection
            title="Our Vision"
            color="#1E6FB8"
            shortText="Our vision is to build a financially stronger community by bridging the gap between financial needs and the right solutions."
            fullText="Our vision is to build a financially stronger community by bridging the gap between financial needs and the right solutions. We strive to bring transparency, ethical practices, and modern financial advisory to every client we serve, enabling sustainable growth for individuals and enterprises alike. Through trust-driven relationships and value-based services, we aim to contribute to long-term economic well-being."
          />
        </div>

        {/* KEY PERSON */}
        <div className="border-t-4 border-[#1E6FB8] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:scale-[1.02] transition">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* IMAGE */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden ring-4 ring-[#F47C20]/30">
              <Image
                src="/Images/keyperson.png"
                alt="Key Person"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E6FB8]">
                Our Founder & Key Person
              </h3>

              <p className="text-[#F47C20] font-medium mb-4">
                Chakra Financial Services
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                C S Reddy, the founder of{" "}
                <span className="font-semibold text-[#0d4ca3]">
                  Chakra Financial Services
                </span>
                , brings over 10 years of expertise in the financial sector.
              </p>

              {showKeyMore && (
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  With a strong focus on customer-centric solutions and
                  transparent loan services, Reddy established the company to
                  help individuals and businesses access the right financial
                  support at the right time. His deep industry knowledge and
                  commitment to excellence have been instrumental in building a
                  trusted name in the finance industry across India.
                </p>
              )}

              <button
                onClick={() => setShowKeyMore(!showKeyMore)}
                className="text-sm font-medium text-[#1E6FB8] hover:underline mb-6"
              >
                {showKeyMore ? "Show Less" : "Read More"}
              </button>

              {/* INFO CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoCard
                  title="10+ Years"
                  text="Years of experience"
                  color="#1E6FB8"
                />
                <InfoCard title="95K" text="Happy Customers" color="#F47C20" />
                <InfoCard title="100%" text="Satisfaction" color="#1E6FB8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TOGGLE SECTION */

const ToggleSection = ({ title, shortText, fullText, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md border-l-4 hover:scale-[1.02] transition"
      style={{ borderColor: color }}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color }}>
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        {open ? fullText : shortText}
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-sm font-medium"
        style={{ color }}
      >
        {open ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

/* INFO CARD */

const InfoCard = ({ title, text, color }) => (
  <div
    className="bg-[#F8FAFC] rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm border-t-4 text-center"
    style={{ borderColor: color }}
  >
    <h4 className="text-base sm:text-lg font-bold" style={{ color }}>
      {title}
    </h4>
    <p className="text-sm text-gray-600 mt-1">{text}</p>
  </div>
);
