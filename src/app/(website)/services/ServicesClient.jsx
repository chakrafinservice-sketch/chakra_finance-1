"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { loanServices } from "@/data/services";

export default function ServicesClient() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="pt-17 relative">
        <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px]">
          <Image
            src="/Images/services-banner.png"
            alt="Loan Services - Chakra Financial Services"
            fill
            className="object-cover md:object-center"
            priority
          />
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-18 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition bg-[#F47C20] text-white shadow-md hover:bg-[#d96c17]"
          >
            Loan Services
          </Link>
          <Link
            href="/services/insurance"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#F47C20]"
          >
            Insurance Services
          </Link>
          <Link
            href="/services/other"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#F47C20]"
          >
            Other Services
          </Link>
        </div>
      </section>

      {/* ================= LOAN SERVICES LIST ================= */}
      <section className="bg-[#F8FAFC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-18">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#F47C20] font-semibold text-sm uppercase tracking-wider mb-2">
              Tailored Borrowing Solutions
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E4E8C]">
              Comprehensive Loan Services
            </h1>
            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              From personal milestones to commercial expansions, we connect you with 20+ leading partner banks and NBFCs across India with fast approvals, lowest interest rates, and seamless processing.
            </p>
          </div>

          <div className="space-y-16">
            {loanServices.map((service, index) => (
              <div
                key={service.id}
                className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-xl h-[260px] md:h-[340px] ${
                    index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  }`}
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
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                    <ShieldCheck size={16} />
                    <span>Verified Loan Facility</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#F47C20]">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 font-medium text-sm md:text-base">
                    {service.short}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {service.long}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1E6FB8] hover:bg-[#165692] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition duration-300 shadow hover:shadow-md"
                    >
                      <span>Apply for {service.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 bg-gradient-to-r from-[#1E4E8C] to-[#0d3461] rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Need Insurance or Trade Finance Support?
              </h3>
              <p className="text-gray-200 text-sm md:text-base max-w-xl">
                Explore our specialized coverage plans and liquidity facilities tailored for individuals and corporations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/insurance"
                className="bg-[#F47C20] hover:bg-[#d96c17] text-white px-5 py-3 rounded-lg text-sm font-semibold transition shadow"
              >
                Insurance Services
              </Link>
              <Link
                href="/services/other"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded-lg text-sm font-semibold transition"
              >
                Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
