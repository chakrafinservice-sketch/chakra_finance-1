"use client";

import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FloatingBar() {
  return (
    <div className="fixed right-5 top-[70%] -translate-y-1/2 flex flex-col gap-4 z-[9999]">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919392037809"
        target="_blank"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-xl
        bg-green-500 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/people/Chakra-Financial-Services/61587570840796/"
        target="_blank"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-xl
        bg-blue-600 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaFacebookF />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/chakrafinancialservices?igsh=N2Y0ajIwYjRyY2h6"
        target="_blank"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-xl
        bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/sunrise-morning/"
        target="_blank"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-xl
        bg-blue-700 shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaLinkedinIn />
      </a>

    </div>
  );
}