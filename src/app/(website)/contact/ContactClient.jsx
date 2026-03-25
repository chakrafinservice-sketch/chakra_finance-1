"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    loanAmount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.loanType) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("data", data);

      if (data.status) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          loanType: "",
          loanAmount: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative md:min-h-screen pt-20 pb-16 
        bg-gradient-to-b from-blue-300 via-[#f59e0b] to-blue-300
        lg:bg-cover lg:bg-center lg:bg-[url('/Images/contact-bg-page.jpeg')]
        "
    >
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Contact <span className="text-orange-400">Us</span>
          </h1>

          <p className="mt-3 text-white/90 text-sm md:text-lg">
            Get in touch with Chakra Financial Services
          </p>

          {/* Contact Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {/* Phone */}

            <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/20">
              <div className="bg-orange-500 p-3 rounded-full">
                <Phone className="text-white" size={20} />
              </div>

              <div>
                <p className="text-[#1E3A5F] text-sm">Call Us</p>
                <p className="text-[#1E3A5F] font-semibold">+91 9030972851</p>
              </div>
            </div>

            {/* Email */}

            <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/20">
              <div className="bg-orange-500 p-3 rounded-full">
                <Mail className="text-white" size={20} />
              </div>

              <div>
                <p className="text-[#1E3A5F] text-sm">Email Us</p>
                <p className="text-[#1E3A5F] font-semibold text-sm">
                  info@chakrafinances.com
                </p>
                <p className="text-[#1E3A5F] text-sm">
                  chakrafinservice@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Address */}

          <div className="flex items-start gap-4 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/20 mt-6">
            <div className="bg-orange-500 p-3 rounded-full">
              <MapPin className="text-white" size={20} />
            </div>

            <div>
              <p className="text-[#1E3A5F] text-sm">Visit Us</p>

              <p className="text-[#1E3A5F] font-semibold text-sm leading-relaxed">
                13A, 1st Floor, Block C, Sri Sai Krupa Apartments, Ramakrishna
                Nagar, Madeenaguda, Hyderabad – 500049, India
              </p>
            </div>
          </div>

          {/* Help Text */}

          <div className="mt-10">
            <h3 className="text-[#1E3A5F] text-xl md:text-2xl font-semibold">
              How Can We Assist You?
            </h3>

            <p className="text-[#1E3A5F] mt-3 max-w-lg text-sm md:text-base">
              Get a free consultation or ask any questions about loans and
              financial services. Our team will respond quickly.
            </p>
          </div>
        </div>

        {/* FORM */}

        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-6 md:p-10 border border-white/30">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              // maxLength="10"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="" disabled>
                Select Loan Service
              </option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Mortgage Loan">Mortgage Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="OD/CC">OD/CC</option>
              <option value="Insurance">Insurance</option>
            </select>

            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Loan Amount"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <textarea
              placeholder="Ask any quarries....."
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:scale-[1.02] transition shadow-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {success && (
              <p className="text-orange-600 text-sm text-center">
                ✅ Thank you! We will contact you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
