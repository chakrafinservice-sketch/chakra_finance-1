// // import Footer from "@/components/shared/Footer";
// // import Header from "@/components/shared/Header";

// // import { MapPin, Mail, Phone } from "lucide-react";
// // import Link from "next/link";

// // export default function ContactUs() {
// //   return (
// //     <>
// //       {/* <Header/> */}
// //       {/* <div className="lg:h-22"></div> */}
// //       <section className="bg-white py-10 px-6 lg:px-18">
// //         <div className="max-w-7xl mx-auto text-center">
// //           {/* HEADER */}
// //           <p className="text-3xl font-bold tracking-wide mb-3">CONTACT US</p>

// //           <h2 className="text-2xl md:text-2xl  text-blue-400 mb-20">
// //             We are her to Support you with all your financial needs. <br />
// //             Reach out to us through the options below
// //           </h2>

// //           {/* CARDS */}
// //           <div className="grid md:grid-cols-3 gap-10">
// //             {/* Customer Care */}
// //             <a
// //               href="/workwithus"
// //               className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center"
// //             >
// //               <div className="absolute -top-10 left-1/2 -translate-x-1/2">
// //                 <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
// //                   <Phone size={32} className="text-white" />
// //                 </div>
// //               </div>

// //               <h3 className="text-xl font-bold mb-2">Call Us</h3>
// //               <p className="text-gray-600 mb-2">For Assistance</p>
// //               <p className="font-semibold text-gray-900">+91 90309 72851</p>
// //               <p className="text-sm text-gray-500">(Toll-Free, 24/7)</p>
// //               <Link href="/" className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
// //                 Call Now
// //               </Link>
// //             </a>

// //             {/* Email Support */}
// //             <div className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center">
// //               <div className="absolute -top-10 left-1/2 -translate-x-1/2">
// //                 <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
// //                   <Mail size={32} className="text-white" />
// //                 </div>
// //               </div>

// //               <h3 className="text-xl font-bold mb-4">Email Us</h3>
// //               <p className="text-gray-600">info@chakrafinances.com</p>
// //               <p className="text-gray-600">chakrafinservice@gmail.com</p>
// //               <Link href="/">
// //                 <button className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
// //                   Send E-mail
// //                 </button>
// //               </Link>
// //             </div>

// //             {/* Head Office */}
// //             <div className="relative bg-gray-50 rounded-xl p-5 pt-16  text-center shadow-sm hover:shadow-xl  hover:scale-[1.03] transition duration-300  min-h-[150px] flex flex-col justify-center">
// //               <div className="absolute -top-10 left-1/2 -translate-x-1/2">
// //                 <div className="w-16 h-16 rounded-full bg-orange-400  flex items-center justify-center shadow-lg">
// //                   <MapPin size={32} className="text-white" />
// //                 </div>
// //               </div>

// //               <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 Flat No.13/A, 1st Floor, Block C, Sri Sai Krupa Appartment,
// //                 Ramakrishna Nagar, Madeenaguda, Hyderabad-500049
// //               </p>
// //               <Link href="/">
// //                 <button className="bg-blue-400 px-4 py-2 rounded-2xl mt-3">
// //                   Get Directions
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* MAP */}
// //         <div className="py-10">
// //           {/* <iframe
// //             title="Chakra Financial Services Location"
// //             src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2898.585419814703!2d78.33993147516733!3d17.492116883413104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMxLjYiTiA3OMKwMjAnMzMuMCJF!5e1!3m2!1sen!2sin!4v1771342117220!5m2!1sen!2sin"
// //             width="100%"
// //             height="450"
// //             className="rounded-sm"
// //             loading="lazy"
// //           /> */}
// //         </div>
// //       </section>
// //       <Footer />
// //     </>
// //   );
// // }
// "use client";

// import {
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <section
//       className="relative min-h-screen bg-cover bg-center pt-11 pb-16 mt-16"
//       style={{
//         backgroundImage: "url('/Images/contact-bg-page.jpeg')",
//       }}
//     >

//       <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

//         {/* LEFT CONTENT */}
//         <div className="text-white ">

//           <div>
//             <h1 className="text-5xl font-bold">
//               Contact <span className="text-orange-400">Us</span>
//             </h1>

//             <p className="mt-4 text-lg text-white">
//               Get in touch with Chakra Financial Services
//             </p>
//           </div>

//           {/* Contact Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mat-15">

//             {/* Phone */}
//             <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/30">
//               <div className="bg-orange-500 p-3 rounded-full">
//                 <Phone className="text-white" size={20} />
//               </div>
//               <div>
//                 <p className="text-[#1E3A5F] text-md">Call Us</p>
//                 <p className="text-[#1E3A5F] font-semibold">+91 9030972851</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/30">
//               <div className="bg-orange-500 p-3 rounded-full">
//                 <Mail className="text-white" size={20} />
//               </div>
//               <div>
//                 <p className="text-[#1E3A5F] text-md">Email Us</p>
//                 <p className="text-[#1E3A5F] font-semibold">info@chakrafinances.com</p>
//                 <p className="text-[#1E3A5F] ">chakrafinservice@gmail.com</p>
//               </div>
//             </div>
//           </div>

//             {/* Address */}
//             <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md p-5 rounded-xl border border-white/30 m-8">
//               <div className="bg-orange-500 p-3 rounded-full">
//                 <MapPin className="text-white" size={20} />
//               </div>
//               <div>
//                 <p className="text-[#1E3A5F] text-md">Visit Us</p>
//                 <p className="text-[#1E3A5F] font-semibold">
//                   13A, 1st Floor, Block C, Sri Sai krupa Apprtments, Ramakrishna Nagar, Madeenaguda,Hyderabad-500049,India.
//                 </p>
//               </div>
//             </div>
          

//           {/* Help Text */}
//           <div className="mt-8">
//             <h3 className="text-[#1E3A5F] text-2xl font-semibold">
//               How Can We Assist You?
//             </h3>

//             <p className="text-[#1E3A5F]  mt-3 max-w-lg">
//               Get a free consultation or ask any questions about loans
//               and financial services. Our team will respond quickly.
//             </p>
//           </div>

//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/30">

//           <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//             Send Us a Message
//           </h3>

//           <form className="space-y-5">

//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             />

//             <select
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             >
//               <option value = "">Select Loan Service</option>
//               <option value = "Personl Loan">Personal Loan</option> 
//               <option value = "Busines Loan">Busines Loan</option> 
//               <option value = "Home Loan">Home Loan</option>  
//               <option value = "Mortgage Loan">Mortgage Loan</option>
//               <option value = "Education Loan">Eductaion Loan</option>  
//               <option value = "OD/CC">OD/CC</option>
//               <option value = "Insurance">Insurance</option>

//             </select>
            
//              <input
//               type="number"
//               placeholder="Enter mount"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             />
            

//             <textarea
//               placeholder="Your Message"
//               className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
//             />

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:scale-[1.02] transition-all shadow-lg"
//             >
//               Submit Message
//             </button>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
// import ContactUsSection from "@/components/HomePageSections/ContactUsSection";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Chakra Finances | Loan Advisory Services in India",
  description:
    "Contact Chakra Financial Services for personal loans, business loans, home loans, mortgage loans, insurance services and financial advisory across India.",
  keywords: [
    "contact loan consultants india",
    "personal loan consultancy hyderabad",
    "business loan advisors india",
    "home loan assistance hyderabad",
    "loan advisory services india",
  ],
  alternates: {
    canonical: "https://www.chakrafinances.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient/>;
}