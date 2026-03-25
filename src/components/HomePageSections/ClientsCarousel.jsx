"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ClientsCarousel = () => {
  const partners = [
    { id: 1, title: "Godrej Capital", image: "/Images/partners/godrej-capital.png" },
    { id: 2, title: "Aditya Birla Housing Finance", image: "/Images/partners/aditya-birla-housing.png" },
    { id: 3, title: "LIC Housing Finance", image: "/Images/partners/lic-housing.png" },
    { id: 4, title: "Utkarsh Small Finance Bank", image: "/Images/partners/utkarsh.png" },
    { id: 5, title: "Tata Capital", image: "/Images/partners/tata-capital.png" },
    { id: 6, title: "Muthoot Finance", image: "/Images/partners/muthoot.png" },
    { id: 7, title: "Bajaj Housing Finance", image: "/Images/partners/bajaj-housing.png" },
    { id: 8, title: "HDFC Bank", image: "/Images/partners/hdfc.png" },
    { id: 9, title: "ICICI Bank", image: "/Images/partners/icici.png" },
    { id: 10, title: "Axis Bank", image: "/Images/partners/axis.png" },
    { id: 11, title: "YES Bank", image: "/Images/partners/yes.png" },
    { id: 12, title: "Federal Bank", image: "/Images/partners/federal.png" },
    { id: 13, title: "Kotak Mahindra Bank", image: "/Images/partners/kotak.png" },
    { id: 14, title: "Piramal Finance", image: "/Images/partners/piramal.png" },
    { id: 15, title: "Poonawalla Fincorp", image: "/Images/partners/poonawalla.png" },
  ];

  const duplicated = [...partners, ...partners];
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;

    const move = () => {
      setOffset((prev) => {
        const trackWidth = trackRef.current.scrollWidth / 2;
        return prev >= trackWidth ? 0 : prev + 0.8;
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="clients" className="py-5 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4E8C] mb-3">
          Our Trusted Partner Banks
        </h2>

        <p className="text-center text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl mx-auto">
          We collaborate with leading banks and financial institutions across India
        </p>

        {/* Carousel */}
        <div className="overflow-hidden">

          <div
            ref={trackRef}
            className="flex items-center gap-10 sm:gap-14"
            style={{
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >

            {duplicated.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center"
              >
                <Image
                  src={partner.image}
                  alt={partner.title}
                  width={160}
                  height={80}
                  className="object-contain w-[140px] sm:w-[150px] md:w-[160px] h-auto opacity-80 hover:opacity-100 transition duration-300 hover:scale-110"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};