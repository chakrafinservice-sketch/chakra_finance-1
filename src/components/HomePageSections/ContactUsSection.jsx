import { BadgeCheck, ShieldCheck, Users } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section
      id="contact"
      className="relative w-full px-4 sm:px-6 lg:pl-16 pt-12 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute -top-20 inset-0 bg-cover bg-center brightness-110 contrast-110"
        style={{ backgroundImage: "url('/whywechoose.png')" }}
      />

      {/* Directional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
            Why Choose Chakra?
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {/* Item 1 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-orange-100 text-orange-500 shadow-md">
                <Users size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Experienced Professionals
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Years of Expertise in Finance
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-blue-100 text-blue-600 shadow-md">
                <ShieldCheck size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Reliable & Secure
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Safe & Trustworthy Transactions
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-yellow-100 text-yellow-600 shadow-md">
                <BadgeCheck size={24} className="sm:size-[28px]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Customer First Approach
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Your Goals, Our Priority
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:pl-30">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-6 w-full max-w-xl mx-auto border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">
              Get in Touch
            </h3>

            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <div className="w-full max-w-md">
                <label className="block mb-2 text-sm font-thin text-gray-700">
                  Type Of Loan
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#1E6FB8]  focus:border-[#1E6FB8] text-gray-700">
                  <option value="">Choose</option>
                  <option>Personal Loans</option>
                  <option>Business Loans</option>
                  <option>Home Loans</option>
                  <option>Mortgage Loans</option>
                  <option>Education Loans</option>
                  <option>OD/CC</option>
                  <option>LC/BG</option>
                  <option>Insurance (Life/Health/General)</option>
                  <option>Others (if any CIBIL issues)</option>
                </select>
              </div>

              <input
                type="amount"
                placeholder="Required Amount"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <textarea
                rows="2"
                placeholder="Message"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <button
                type="submit"
                className="px-4 text-center ml-30 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
              >
                <a href="/workwithus">Request Submit</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
