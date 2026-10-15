import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function work_With_Us() {
  return (
    <div>
      <Navbar />
      <div className="h-18"></div>
      <Banner />
      <Forms />
      <Footer />
    </div>
  );
}

export default work_With_Us;

function Banner() {
  return (
    <div>
      <img
        className="w-full h-98 "
        src="/work-with-us-banner.png"
        alt="banner"
      />
    </div>
  );
}

function Forms() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* LEFT SIDE — IMAGES */}
      <div
        className="
          flex flex-col gap-10
          lg:gap-14
        "
      >
        {/* Image 1 */}
        <img
          src="/work-with-us.png"
          alt="Work with us 1"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-start
          "
        />

        {/* Image 2 */}
        <img
          src="/work-with-us2.png"
          alt="Work with us 2"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-end
          "
        />

        {/* Image 3 */}
        <img
          src="/work-with-us3.png"
          alt="Work with us 3"
          className="
            w-full max-w-xs sm:max-w-sm
            rounded-xl shadow-lg
            mx-auto lg:mx-0
            lg:self-start
          "
        />
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className="w-full rounded-x">
        {/* <iframe
          src="https://forms.gle/B7ooPqRcdr18LsPQ7"
          className="w-full h-[1200px] sm:h-[1300px] lg:h-[1400px]"
          frameBorder="0"
          title="Google Form"
        >
          Loading…
        </iframe> */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-6 w-full max-w-3xl mx-auto border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">
            Connector Registration Form
          </h3>

          <form className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="flex gap-4 font-thin">
              <div className="flex gap-4 pl-5">
                <input
                  type="radio"
                  name="Individual"
                  placeholder="Individual"
                />
                <label htmlFor="">Individual</label>
              </div>
              <div className="flex gap-4 pl-25">
                <input type="radio" name="Firm" placeholder="Firm" />
                <label htmlFor="">Firm</label>
              </div>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <div className="flex gap-4">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Other Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <input
                  type="pan"
                  placeholder="Pan Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <input
                  type="aadhar"
                  placeholder="Aadhar Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <input
                  type="pan"
                  placeholder="Firm Pan Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <input
                  type="aadhar"
                  placeholder="Gst Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <select
                  name="State"
                  className="border p-3 rounded-2xl font-thin"
                >
                  <option>Name Of The State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Delhi</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </select>
              </div>
              <div className="pl-8">
                <input
                  type="text"
                  placeholder="City Name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            <div className="w-full max-w-lg">
              <label className="block mb-2 text-sm font-thin text-gray-700">
                Choose Your Expertise
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#1E6FB8]  focus:border-[#1E6FB8] text-gray-700">
                <option value="">Choose</option>
                <option>All</option>
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

            <textarea
              rows="2"
              placeholder="Message"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label htmlFor="file">Pan Upload File</label>
                <br />
                <input type="file" name="" id="file" className="hidden" />
              </div>
              <div>
                <label htmlFor="file">Aadhar Upload File</label>
                <br />
                <input type="file" name="" id="file" className="hidden" />
              </div>
              <div>
                <label htmlFor="file">Firm Pan Upload File</label>
                <br />
                <input type="file" name="" id="file" className="hidden" />
              </div>
              <div>
                <label htmlFor="file">Gst Upload File</label>
                <br />
                <input type="file" name="" id="file" className="hidden" />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 ml-90 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg transition duration-300"
            >
              <a href="/workwithus">Submit</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}