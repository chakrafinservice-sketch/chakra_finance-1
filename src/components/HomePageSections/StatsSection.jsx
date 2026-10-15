"use client";

export const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "₹100Cr+", label: "Loans Processed" },
    { number: "20+", label: "Partner Banks" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f4f8ff] to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4E8C]">
            Trusted Financial Partner Across India
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Helping individuals and businesses grow with reliable financial solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 sm:p-8 text-center border border-orange-100 hover:-translate-y-1"
            >

              {/* Number */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4E8C]">
                {item.number}
              </h3>

              {/* Brand Accent Line */}
              <div className="w-8 sm:w-10 h-1 bg-[#F47A20] mx-auto my-2 sm:my-3 rounded"></div>

              {/* Label */}
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};