// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";


// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const ManagementSection = () => {
//   const [open, setOpen] = useState(false);

//   const ceo = {
//     name: "Mr. George Tokpo",
//     title: "Founder & Chief Executive Officer | Microfinance Consultant",
//     bio: `Mr. George Tokpo is a seasoned microfinance professional with over 18 years of hands-on experience in microfinance and 25 years in banking, spanning both local and international contexts. He is the Founder and Chief Executive Officer of MERGE Seed Microcredit Enterprise and brings deep expertise in credit administration, risk management, financial management, and village banking systems.

// He has played a key role in the design, implementation, and review of group and individual microcredit models across several regions in Ghana, including Greater Accra, Volta, Oti, and Central Regions. His work emphasizes portfolio quality, institutional sustainability, and responsible lending practices.

// Mr. Tokpo is also a respected microfinance trainer and capacity-building consultant, supporting institutions and staff in areas such as SME lending methodologies, customer care, delinquency management, financial performance analysis, and risk control systems.

// He holds a Master’s Degree in General Management from the University of Cape Coast and is a graduate of the Boulder Institute of Microfinance (Turin, Italy). He is a certified microfinance practitioner, with additional professional training supported by the Savings Bank Foundation for International Cooperation and accredited by the Bank of Ghana.`,
//   };

//   return (
//     <section className="py-24 px-6 md:px-16 bg-white relative">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="max-w-6xl mx-auto text-center"
//       >
        
//         <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
//           Our Management
//         </h2>
//         <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />

//         <p className="text-lg md:text-xl text-gray-600 mb-16">
//           Our leadership team is committed to integrity, financial inclusion,
//           and sustainable community development.
//         </p>

        
//         <motion.button
//           onClick={() => setOpen(true)}
//           whileHover={{ y: -4 }}
//           whileTap={{ scale: 0.98 }}
//           className="
//             w-full max-w-5xl mx-auto mb-20
//             rounded-3xl border border-gray-200 bg-white
//             shadow-sm hover:shadow-xl transition
//             focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200
//             overflow-hidden
//           "
//         >
//           <div className="grid md:grid-cols-2 text-left">
            
//             {/* LEFT: IMAGE */}
//             <div className="
//               h-72 md:h-full
//               bg-gray-50
//               border-b md:border-b-0 md:border-r border-gray-200
//               flex items-center justify-center
//             ">
//               <div
//                 className="
//                   h-64 w-64
//                   sm:h-72 sm:w-72
//                   rounded-2xl
//                   border-2 border-dashed border-gray-300
//                   bg-white
//                   flex items-center justify-center
//                 "
//               >
//                 <span className="text-gray-400 text-sm">CEO Image</span>
//               </div>
//             </div>

//             {/* RIGHT: CONTENT */}
//             <div className="p-6 sm:p-10 flex flex-col justify-center">
//               <p className="text-sm font-semibold text-yellow-500 mb-2">
//                 Chief Executive Officer
//               </p>

//               <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 {ceo.name}
//               </h3>

//               <p className="text-gray-600 mt-2 text-sm sm:text-base">
//                 {ceo.title}
//               </p>

//               <p className="mt-4 text-gray-600 text-sm sm:text-base line-clamp-5">
//                 {ceo.bio}
//               </p>

//               <span className="mt-6 text-yellow-600 font-semibold text-sm">
//                 Click to read full profile →
//               </span>
//             </div>

//           </div>
//         </motion.button>

        
//         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
//           {[1, 2, 3].map((_, i) => (
//             <div
//               key={i}
//               className="h-64 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center opacity-70"
//             >
//               <p className="text-gray-400 font-medium">
//                 Management Staff
//               </p>
//               <p className="text-gray-300 text-sm mt-1">
//                 Subordinate Profile
//               </p>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* ================= CEO MODAL ================= */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute inset-0 bg-black/60"
//               aria-label="Close"
//             />

//             <motion.div
//               initial={{ y: 30, opacity: 0, scale: 0.97 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 30, opacity: 0, scale: 0.97 }}
//               transition={{ duration: 0.25 }}
//               className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
//             >
//               {/* Modal Header */}
//               <div className="p-6 sm:p-8 border-b">
//                 <div className="flex items-start gap-6">
//                   <div
//                     className="
//                       h-72 w-72
//                       rounded-3xl
//                       border-2 border-dashed border-gray-300
//                       bg-gray-50
//                       flex items-center justify-center
//                       shrink-0
//                     "
//                   >
//                     <span className="text-gray-400 text-sm">CEO Image</span>
//                   </div>

//                   <div className="flex-1">
//                     <p className="text-sm font-semibold text-yellow-500">
//                       Chief Executive Officer
//                     </p>
//                     <h3 className="text-3xl font-bold text-gray-900">
//                       {ceo.name}
//                     </h3>
//                     <p className="text-gray-600 mt-2">
//                       {ceo.title}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => setOpen(false)}
//                     className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 font-bold"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>

//               {/* Modal Body */}
//               <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
//                 {ceo.bio.split("\n\n").map((para, i) => (
//                   <p key={i} className="text-gray-700 leading-relaxed mb-5">
//                     {para}
//                   </p>
//                 ))}
//               </div>

//               {/* Modal Footer */}
//               <div className="p-6 sm:p-8 border-t flex justify-end">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ManagementSection;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =====================
   Animation
===================== */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ManagementSection = () => {
  const [open, setOpen] = useState(false);

  const ceo = {
    name: "Mr. George Tokpo",
    title: "Founder & Chief Executive Officer | Microfinance Consultant",
    bio: `Mr. George Tokpo is a seasoned microfinance professional with over 18 years of hands-on experience in microfinance and 25 years in banking, spanning both local and international contexts. He is the Founder and Chief Executive Officer of MERGE Seed Microcredit Enterprise and brings deep expertise in credit administration, risk management, financial management, and village banking systems.

He has played a key role in the design, implementation, and review of group and individual microcredit models across several regions in Ghana, including Greater Accra, Volta, Oti, and Central Regions. His work emphasizes portfolio quality, institutional sustainability, and responsible lending practices.

Mr. Tokpo is also a respected microfinance trainer and capacity-building consultant, supporting institutions and staff in areas such as SME lending methodologies, customer care, delinquency management, financial performance analysis, and risk control systems.

He holds a Master’s Degree in General Management from the University of Cape Coast and is a graduate of the Boulder Institute of Microfinance (Turin, Italy). He is a certified microfinance practitioner, with additional professional training supported by the Savings Bank Foundation for International Cooperation and accredited by the Bank of Ghana.`,
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-white relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
          Our Management
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />

        <p className="text-lg md:text-xl text-gray-600 mb-16">
          Our leadership team is committed to integrity, financial inclusion,
          and sustainable community development.
        </p>

        {/* ================= CEO CARD ================= */}
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full max-w-3xl mx-auto mb-20
            rounded-3xl border border-gray-200 bg-white
            shadow-sm hover:shadow-lg transition
            focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200
            overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2 text-left min-h-[320px]">
            
            {/* LEFT: IMAGE FILLS */}
            <div className="relative bg-gray-100">
              {/* Replace this div with <img /> later */}
              <div className="
                absolute inset-0
                bg-gray-200
                border-r border-gray-200
                flex items-center justify-center
              ">
                <span className="text-gray-400 text-sm">CEO Image</span>
              </div>
            </div>

            {/* RIGHT: CONTENT */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-sm font-semibold text-yellow-500 mb-2">
                Chief Executive Officer
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {ceo.name}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {ceo.title}
              </p>

              <p className="mt-4 text-gray-600 text-sm sm:text-base line-clamp-4">
                {ceo.bio}
              </p>

              <span className="mt-5 text-yellow-600 font-semibold text-sm">
                Click to read full profile →
              </span>
            </div>
          </div>
        </motion.button>

        {/* ================= SUBORDINATES ================= */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="h-56 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center opacity-70"
            >
              <p className="text-gray-400 font-medium">
                Management Staff
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Subordinate Profile
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60"
              aria-label="Close"
            />

            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="grid md:grid-cols-2">
                
                {/* Image fills modal left */}
                <div className="relative min-h-[320px] bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">CEO Image</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold text-yellow-500">
                    Chief Executive Officer
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">
                    {ceo.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {ceo.title}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                {ceo.bio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 sm:p-8 border-t flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ManagementSection;
