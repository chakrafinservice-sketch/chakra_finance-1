"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, PhoneIncoming, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);

  const serviceSubmenus = [
    { label: "Loan Services", href: "/services" },
    { label: "Insurance Services", href: "/services/insurance" },
    { label: "Other Services", href: "/services/other" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasSubmenu: true },
    { label: "Clients", href: "/#clients" },
    { label: "Blog", href: "/blog" },
  ];

  const isServicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/insurance-services" ||
    pathname === "/other-services";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="Chakra Financial Services"
            width={170}
            height={60}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-semibold tracking-wide">
          {navLinks.map((item) => {
            if (item.hasSubmenu) {
              return (
                <div key={item.href} className="relative group py-4">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 transition duration-300 ${
                      isServicesActive
                        ? "text-[#F47C20]"
                        : "text-gray-700 hover:text-[#F47C20]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#F47C20]"
                    />
                  </Link>

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 bottom-2 h-[2px] bg-[#F47C20] transition-all duration-300 ${
                      isServicesActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50">
                    <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 px-1.5">
                      {serviceSubmenus.map((sub) => {
                        const isSubActive =
                          pathname === sub.href ||
                          (sub.href === "/services" &&
                            (pathname === "/services" ||
                              pathname === "/services/loans"));
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition duration-200 ${
                              isSubActive
                                ? "bg-orange-50 text-[#F47C20] font-semibold"
                                : "text-gray-700 hover:bg-orange-50 hover:text-[#F47C20]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group transition duration-300 py-4 ${
                  pathname === item.href
                    ? "text-[#F47C20]"
                    : "text-gray-700 hover:text-[#F47C20]"
                }`}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-2 h-[2px] bg-[#F47C20] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex flex-row gap-2 ml-4 px-6 py-2.5 rounded-md text-sm font-semibold bg-[#F47C20] text-white shadow-md hover:shadow-lg hover:bg-[#d96c17] transition duration-300">
          <Link href="/contact">Contact Us</Link>
          <PhoneIncoming size={18} />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-3 text-base font-medium">
          {navLinks.map((item) => {
            if (item.hasSubmenu) {
              return (
                <div key={item.href} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between px-4 py-2.5 rounded-md transition ${
                      isServicesActive
                        ? "bg-orange-50 text-[#F47C20] font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex-1"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      }}
                      className="p-1 text-gray-500 hover:text-[#F47C20]"
                      aria-label="Toggle services dropdown"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="pl-4 py-1 flex flex-col gap-1 border-l-2 border-orange-200 ml-4 my-1">
                      {serviceSubmenus.map((sub) => {
                        const isSubActive =
                          pathname === sub.href ||
                          (sub.href === "/services" &&
                            (pathname === "/services" ||
                              pathname === "/services/loans"));
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className={`px-3 py-2 rounded-md text-sm transition ${
                              isSubActive
                                ? "bg-[#F47C20] text-white font-semibold"
                                : "text-gray-600 hover:bg-orange-50 hover:text-[#F47C20]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-md transition ${
                  pathname === item.href
                    ? "bg-[#F47C20] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-6 py-2.5 rounded-md bg-[#F47C20] text-white font-semibold shadow hover:bg-[#d96c17] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
