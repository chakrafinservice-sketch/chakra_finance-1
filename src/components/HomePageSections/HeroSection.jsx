"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/hero-bg.jpg"
          alt="Financial consulting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-white text-center lg:text-left">

          <p className="text-orange-400 text-lg sm:text-xl lg:text-2xl font-semibold mb-3 mt-6 lg:mt-5">
            Trusted Financial Advisors
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6">
            Empowering Individuals <br /> and <br /> Businesses with Intelligent Funding.
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg">
            At{" "}
            <span className="font-semibold text-[#0d4ca3]">
              Chakra Financial Services
            </span>, we provide expert loan advisory and end-to-end financial
            support — from personal and business loans to home finance and
            insurance — ensuring fast approvals, transparent processes, and
            competitive terms.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">

            <Link
              href="/contact"
              className="bg-orange-400 hover:bg-orange-500 transition px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
            >
              Apply for Loan
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="flex gap-6 flex-col sm:flex-row items-center">

            {/* Card 1 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl p-6 sm:p-8 w-full max-w-[260px] shadow-2xl">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">10+</h2>
              <p className="text-lg sm:text-xl font-semibold mb-4">
                Years of Industry Expertise
              </p>

              <div className="border-t border-white/20 pt-4 text-gray-300 text-sm sm:text-base">
                Delivering financial and business growth
              </div>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl p-6 sm:p-8 w-full max-w-[260px] shadow-2xl">

              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-orange-500" size={26} />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Business Growth Success
                </h3>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Users size={30} className="text-orange-400" />
                <div>
                  <p className="font-bold text-lg">5000+ Our</p>
                  <p className="text-gray-300">Happy Customer</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-orange-400 font-bold text-lg sm:text-xl">
                <CheckCircle size={20} />
                100%
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Services Row */}
      <div className="relative z-10 border-t border-white/20 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-wrap gap-6 sm:gap-8 text-white justify-center lg:justify-between text-sm sm:text-base">

          {[
            "Personal Loans",
            "Business Loans",
            "Home Loans",
            "Mortgage Loans",
            "Education Loans",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={18} className="text-orange-500" />
              {item}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}