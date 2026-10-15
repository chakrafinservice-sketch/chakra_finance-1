// "use client"
// import { useEffect, useState } from "react";
// import { Star } from "lucide-react";

// export default function Testmonials() {
//   const reviews = [
//     {
//       name: "Sudheer Kumar  Reddy (CA)",
//       role: "CEO",
//       image: "/person1.png",
//       text: "Excellent support from Chakra Financial Services for our commercial property purchase loan. From initial consultation to final disbursement, their team guided us at every step. They compared multiple banks, negotiated better terms, and ensured fast processing with minimal hassle. Very professional, responsive, and reliable service. Strongly recommended for anyone looking for commercial loans, mortgage loans, or business finance.",
//     },
//     {
//       name: "Rajesh",
//       role: "Founder",
//       image: "/person1.png",
//       text: "We availed a mortgage loan through Chakra Financial Services and had a very smooth experience. The team explained all options clearly, supported us with documentation, and ensured quick approval with a competitive interest rate. Reliable and professional service.",
//     },
//     {
//       name: "Radhika",
//       role: "Director",
//       image: "/person.png",
//       text: "We approached Chakra Financial Services for a mortgage loan against property. Their professional approach, multiple bank options, and strong follow-up helped us secure the loan on time. Trustworthy financial consultants for business and property loans.",
//     },
//     {
//       name: "Parvez Khan",
//       role: "Director",
//       image: "/person1.png",
//       text: "Very happy with the home loan service from Chakra Financial Services. Good guidance, clear communication, and quick processing. Thank you for helping us get our dream home.",
//     },
//     {
//       name: "Srihari Reddy",
//       role: "Director",
//       image: "/person1.png",
//       text: "The mortgage loan process was handled professionally with clear communication and timely updates. Good support from application to disbursement. Overall, a reliable and smooth experience.",
//     },
//      {
//       name: "Bhuvaneswari",
//       role: "Saftware Employee",
//       image: "/person.png",
//       text: "I was worried about documentation, but everything was handled professionally. Excellent support and quick approval.",
//     },
//   ];
//   const Avatars = [
//     "/person1.png",
//     "/person.png",
//     "/person1.png",
//     "/person.png",
//   ];
//   const [index, setIndex] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [reviewCount, setReviewCount] = useState(0);

//   useEffect(() => {
//     // SLIDER
//     const slider = setInterval(() => {
//       setIndex((prev) => (prev + 1) % reviews.length);
//     }, 4500);

//     // RATING COUNT 0 → 4.5
//     let ratingStart = 0;
//     const ratingInterval = setInterval(() => {
//       ratingStart += 0.1;
//       if (ratingStart >= 4.5) {
//         ratingStart = 4.5;
//         clearInterval(ratingInterval);
//       }
//       setRating(Number(ratingStart.toFixed(1)));
//     }, 40);

//     // REVIEW COUNT 0 → 1000
//     let reviewStart = 0;
//     const reviewInterval = setInterval(() => {
//       reviewStart += 1;
//       if (reviewStart >= 100) {
//         reviewStart = 100;
//         clearInterval(reviewInterval);
//       }
//       setReviewCount(reviewStart);
//     }, 20);

//     return () => {
//       clearInterval(slider);
//       clearInterval(ratingInterval);
//       clearInterval(reviewInterval);
//     };
//   }, []);

//   return (
//     <section className=" bg-gradient-to-r from-orange-100 via-blue-100 to-white lg:px-18 py-4 rounded-2xl shadow-2xl font-poppins font-normal ">
//       <div className="max-w-7xl mx-auto px-6 py-4 grid grid-rows-1 lg:grid-cols-2 lg:gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-2 h-2 bg-orange-500 rounded-full" />
//             <p className="text-sm font-medium text-gray-600">Client Review</p>
//           </div>

//           <h2 className="text-2xl lg:text-5xl font-extrabold leading-tight">
//             <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
//               What our clients
//             </span>
//             <br /> have to say about working with us
//           </h2>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="relative p-10">
//           {/* 🔥 ABOVE COUNT */}
//           <p className="text-sm font-medium text-gray-500 mb-2">
//             Trusted by
//             <span className="font-semibold text-gray-900">{reviewCount} +</span>
//             customers worldwide
//           </p>

//           {/* TOP BAR */}
//           <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
//             {/* Google Logo */}
//             <img
//               src="/google.png"
//               alt="Google"
//               width={130}
//               height={30}
//               className="lg:w-[30%] w-[80%] h-auto"
//             />

//             {/* Avatars + Rating */}
//             <div className="flex items-center gap-4">
//               {/* Avatars */}
//               <div className="flex -space-x-2">
//                 {Avatars.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img}
//                     alt="User"
//                     width={36}
//                     height={36}
//                     className="rounded-full border-2 border-white"
//                   />
//                 ))}
//               </div>

//               {/* Rating */}
//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="font-bold text-lg">{rating}</span>

//                   {/* Stars */}
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={18}
//                         className="fill-current"
//                         style={{
//                           color: i < 4 ? "#F97316" : "#2563EB",
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <p className="text-xs text-gray-500">
//                   ({reviewCount}+ reviews)
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* REVIEW SLIDER */}
//           <div className="relative min-h-[120px]">
//             {reviews.map((review, i) => (
//               <div
//                 key={i}
//                 className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                   i === index
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 translate-x-8"
//                 }`}
//               >
//                 <p className="text-gray-700 text-xs lg:text-sm text-justify">
//                   <span className="text-2xl text-orange-400 font-bold">“</span>
//                   {review.text}
//                   <span className="text-2xl text-orange-400 font-bold">”</span>
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* REVIEWER */}
//           <div className="flex items-center gap-4 mt-25">
//             <img
//               src={reviews[index].image}
//               alt={reviews[index].name}
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <div>
//               <p className="font-semibold text-gray-900">
//                 {reviews[index].name}
//               </p>
//               {/* <p className="text-sm text-gray-500">{reviews[index].role}</p> */}
//             </div>
//           </div>

//           {/* COUNTER */}
//           <div className="absolute bottom-6 right-8 text-sm text-gray-400">
//             {index + 1} / {reviews.length}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Testmonials() {
  const reviews = [
    {
      name: "Sudheer Kumar Reddy (CA)",
      role: "CEO",
      image: "/person1.png",
      text: "Excellent support from Chakra Financial Services for our commercial property purchase loan. From initial consultation to final disbursement, their team guided us at every step. They compared multiple banks, negotiated better terms, and ensured fast processing with minimal hassle. Very professional, responsive, and reliable service. Strongly recommended for anyone looking for commercial loans, mortgage loans, or business finance.",
    },
    {
      name: "Rajesh",
      role: "Founder",
      image: "/person1.png",
      text: "We availed a mortgage loan through Chakra Financial Services and had a very smooth experience. The team explained all options clearly, supported us with documentation, and ensured quick approval with a competitive interest rate. Reliable and professional service.",
    },
    {
      name: "Radhika",
      role: "Director",
      image: "/person.png",
      text: "We approached Chakra Financial Services for a mortgage loan against property. Their professional approach, multiple bank options, and strong follow-up helped us secure the loan on time. Trustworthy financial consultants for business and property loans.",
    },
    {
      name: "Parvez Khan",
      role: "Director",
      image: "/person1.png",
      text: "Very happy with the home loan service from Chakra Financial Services. Good guidance, clear communication, and quick processing. Thank you for helping us get our dream home.",
    },
    {
      name: "Srihari Reddy",
      role: "Director",
      image: "/person1.png",
      text: "The mortgage loan process was handled professionally with clear communication and timely updates. Good support from application to disbursement. Overall, a reliable and smooth experience.",
    },
    {
      name: "Bhuvaneswari",
      role: "Software Employee",
      image: "/person.png",
      text: "I was worried about documentation, but everything was handled professionally. Excellent support and quick approval.",
    },
  ];

  const Avatars = [
    "/person1.png",
    "/person.png",
    "/person1.png",
    "/person.png",
  ];

  const [index, setIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    let ratingStart = 0;
    const ratingInterval = setInterval(() => {
      ratingStart += 0.1;
      if (ratingStart >= 4.5) {
        ratingStart = 4.5;
        clearInterval(ratingInterval);
      }
      setRating(Number(ratingStart.toFixed(1)));
    }, 40);

    let reviewStart = 0;
    const reviewInterval = setInterval(() => {
      reviewStart += 1;
      if (reviewStart >= 100) {
        reviewStart = 100;
        clearInterval(reviewInterval);
      }
      setReviewCount(reviewStart);
    }, 20);

    return () => {
      clearInterval(slider);
      clearInterval(ratingInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-100 via-blue-100 to-white px-4 sm:px-6 lg:px-16 py-12 rounded-2xl shadow-2xl font-poppins">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            <p className="text-sm font-medium text-gray-600">Client Review</p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              What our clients
            </span>
            <br />
            have to say about working with us
          </h2>

        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-white/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-xl">

          {/* COUNT */}
          <p className="text-sm font-medium text-gray-500 mb-3">
            Trusted by
            <span className="font-semibold text-gray-900"> {reviewCount}+ </span>
            customers worldwide
          </p>

          {/* TOP BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

            <img
              src="/google.png"
              alt="Google"
              className="w-32 sm:w-36 h-auto"
            />

            <div className="flex items-center gap-4">

              {/* AVATARS */}
              <div className="flex -space-x-2">
                {Avatars.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              {/* RATING */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{rating}</span>

                  <div className="flex">
                    {[1,2,3,4,5].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-current"
                        style={{
                          color: i < 4 ? "#F97316" : "#2563EB",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  ({reviewCount}+ reviews)
                </p>
              </div>

            </div>
          </div>

          {/* REVIEW SLIDER */}
          <div className="relative min-h-[140px] sm:min-h-[120px]">

            {reviews.map((review, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                  <span className="text-2xl text-orange-400 font-bold">“</span>
                  {review.text}
                  <span className="text-2xl text-orange-400 font-bold">”</span>
                </p>
              </div>
            ))}

          </div>

          {/* REVIEWER */}
          <div className="flex items-center gap-4 mt-10 sm:mt-12">
            <img
              src={reviews[index].image}
              alt={reviews[index].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {reviews[index].name}
              </p>
            </div>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-4 right-6 text-sm text-gray-400">
            {index + 1} / {reviews.length}
          </div>

        </div>
      </div>
    </section>
  );
}