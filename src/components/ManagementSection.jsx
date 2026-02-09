import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import ceoImage from "../assets/ceo.png";

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

  /* ================= SCROLL LOCK ================= */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

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
        {/* ================= HEADER ================= */}
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
            overflow-hidden text-left
          "
        >
          {/* MOBILE CARD */}
          <div className="grid grid-cols-[92px_1fr] gap-4 p-4 md:hidden">
            <img
              src={ceoImage}
              alt={ceo.name}
              className="w-20 h-20 rounded-full object-cover object-top border-4 border-white shadow-md"
            />
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-yellow-500">
                Chief Executive Officer
              </p>
              <h3 className="text-base font-bold text-gray-900 truncate">
                {ceo.name}
              </h3>
              <p className="text-[11px] text-gray-600 line-clamp-2">
                {ceo.title}
              </p>
              <span className="inline-block mt-2 text-yellow-600 font-semibold text-[11px]">
                Read full profile →
              </span>
            </div>
          </div>

          {/* DESKTOP CARD */}
          <div className="hidden md:grid md:grid-cols-2 min-h-[320px]">
            <div className="relative bg-gray-100">
              <img
                src={ceoImage}
                alt={ceo.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-sm font-semibold text-yellow-500 mb-2">
                Chief Executive Officer
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {ceo.name}
              </h3>
              <p className="text-gray-600 mt-2">{ceo.title}</p>
              <p className="mt-4 text-gray-600 line-clamp-4">
                {ceo.bio}
              </p>
              <span className="mt-5 text-yellow-600 font-semibold">
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
              <p className="text-gray-400 font-medium">Management Staff</p>
              <p className="text-gray-300 text-sm">Subordinate Profile</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            {/* BACKDROP */}
            <button
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            />

            {/* MODAL */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative w-full
                max-w-[95vw] sm:max-w-xl md:max-w-2xl
                bg-white rounded-2xl shadow-2xl
                max-h-[78vh]
                flex flex-col overflow-hidden
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute top-3 right-3 z-20
                  h-10 w-10 rounded-full
                  bg-black/70 text-white
                  flex items-center justify-center
                "
              >
                <HiX className="text-2xl" />
              </button>

              {/* MODAL HEADER */}
              <div className="flex items-center gap-5 p-5 sm:p-6 flex-none">
                <img
                  src={ceoImage}
                  alt={ceo.name}
                  className="
                    w-20 h-20
                    sm:w-24 sm:h-24
                    md:w-28 md:h-28
                    rounded-full
                    object-cover object-top
                    border-4 border-white
                    shadow-md
                    flex-shrink-0
                  "
                />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-yellow-500">
                    Chief Executive Officer
                  </p>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 truncate">
                    {ceo.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {ceo.title}
                  </p>
                </div>
              </div>

              {/* MODAL BODY */}
              <div
                className="
                  flex-1 min-h-0
                  px-5 pb-6 sm:px-6
                  overflow-y-auto overscroll-contain
                "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {ceo.bio.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-700 leading-relaxed mb-5 text-sm sm:text-base"
                  >
                    {para}
                  </p>
                ))}
                <div className="h-6" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ManagementSection;
