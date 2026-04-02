"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/clients" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <footer className="bg-[#052c4f] text-white relative">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div className="space-y-5">
          <div className="bg-white p-3 rounded-lg inline-block shadow-md">
            <Image
              src="/Images/logo.png"
              alt="Chakra Financial Services"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold tracking-wide">
            CHAKRA FINANCIAL SERVICES
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            Trusted financial advisors delivering reliable loan and investment
            solutions tailored for individuals and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold text-[#F47C20]">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition duration-300 ${
                    isActive(item.href)
                      ? "text-[#F47C20]"
                      : "text-white/80 hover:text-[#F47C20]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold text-[#F47C20]">
            Connect With Us
          </h4>

          <p className="text-sm text-white/70 leading-relaxed">
            Follow us on social media for financial insights and updates.
          </p>

          <div className="flex gap-4 pt-1">
            <a
              href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F47C20] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/chakrafinancialservices"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F47C20] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/chakra-financial-services/"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F47C20] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold text-[#F47C20]">
            Contact Us
          </h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-[#F47C20] mt-1" />
              <span>
                Madeenaguda, Hyderabad - 500049
              </span>
            </li>

            <li className="flex gap-3 items-start">
              <FaEnvelope className="text-[#F47C20] mt-1" />
              <span>info@chakrafinances.com</span>
            </li>

            <li className="flex gap-3 items-start">
              <FaPhoneAlt className="text-[#F47C20] mt-1" />
              <span>+91 93920 37809</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t lg:flex justify-around border-white/10 py-5 text-center text-sm text-white/60">
        <div>
          © {new Date().getFullYear()} Chakra Financial Services. All rights reserved.
        </div>
        <div className="pt-3 lg:pt-0">
          Design & Developed by <a href="https://www.ssdtechinfrasolutions.in/" target="_blank">SSD Techinfra solutions</a>
        </div>
      </div>
    </footer>
  );
}