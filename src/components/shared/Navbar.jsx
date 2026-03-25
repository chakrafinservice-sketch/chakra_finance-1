"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, PhoneIncoming, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/#clients" },
    { label: "Blog", href: "/Blog" },
    { label: "Work With Us", href: "/workwithus" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="Chakra Financial Services"
            width={200}
            height={80}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[16px] font-semibold tracking-wide">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group transition duration-300 ${
                pathname === item.href
                  ? "text-[#F47C20]"
                  : "text-gray-700 hover:text-[#F47C20]"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#F47C20] transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-row gap-2 ml-4 px-6 py-2.5 rounded-md text-sm font-semibold bg-[#F47C20] text-white shadow-md hover:shadow-lg hover:bg-[#d96c17] transition duration-300">
          <Link href="/contact">Contact Us</Link>
          <PhoneIncoming />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4 text-base font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-md transition ${
                pathname === item.href
                  ? "bg-[#F47C20] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center px-6 py-3 rounded-full bg-[#F47C20] text-white font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
