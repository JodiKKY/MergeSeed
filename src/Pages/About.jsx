// src/pages/About.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductBannerCard from "../components/ProductBannerCard";
import ManagementSection from "../components/ManagementSection";
import productLoanImage from "../assets/product1.png";
import productTrainingImage from "../assets/image copy 5.png";
import productSupportImage from "../assets/fin_literacy2.jpg";
import productHomeImage from "../assets/image copy 4.png";
import productBusinessImage from "../assets/product6.png";
import aboutImg from "../assets/about1.webp";
import teamImg1 from "../assets/team.webp";
import teamImg2 from "../assets/team1.webp";
import teamImg3 from "../assets/team3.webp";
import teamImg4 from "../assets/team4.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  // NOTE: In the original file, "Home, Water & Sanitation Loans" used
  // productBusinessImage (product6.png) and "Business Development Services"
  // used productHomeImage (image copy 4.png) — the filenames strongly suggest
  // these two were swapped. Fixed below; please double-check against the
  // actual image contents.
  const productsAndServices = [
    {
      title: "MSME\nMicro Loans",
      tag: "Product",
      desc: "Working capital support for women and youth-led micro-enterprises to help them grow and scale sustainably.",
      image: productLoanImage,
      alt: "MSME Micro Loans",
    },
    {
      title: "Solidarity\nGroup Loans",
      tag: "Product",
      desc: "Group-based credit with mutual guarantee for micro-entrepreneurs to encourage collaboration and accountability.",
      image: productTrainingImage,
      alt: "Solidarity Group Loans",
    },
    {
      title: "Financial\nLiteracy",
      tag: "Service",
      desc: "Workshops and coaching that build money management, savings, and responsible borrowing habits.",
      image: productSupportImage,
      alt: "Affordable training and coaching.",
    },
    {
      title: "Home, Water & Sanitation Loans",
      tag: "Product",
      desc: "Credit for household upgrades and basic amenities, improving living conditions for rural communities.",
      image: productHomeImage,
      alt: "Home Improvement, Water & Sanitation Loans",
    },
    {
      title: "Business Development\nServices",
      tag: "Service",
      desc: "Hands-on mentoring, market linkages, and skills training that help micro-enterprises grow beyond survival mode.",
      image: productBusinessImage,
      alt: "Business Development Services",
    },
  ];

  // Carousel refs + controls
  const trackRef = useRef(null);
  const autoScrollTimer = useRef(null);
  const isPaused = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 320;
    return Math.max(280, Math.floor(el.clientWidth * 0.8));
  };

  const scrollByStep = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: getStep() * dir, behavior: "smooth" });
  };

  const scrollToStart = () => {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const tickAutoScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= max - 10) {
      scrollToStart();
    } else {
      scrollByStep(1);
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    if (prefersReducedMotion) return; // respect reduced-motion preference
    autoScrollTimer.current = setInterval(() => {
      if (!isPaused.current) tickAutoScroll();
    }, 3500);
  };

  const updateEdgeState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    startAutoScroll();

    // Pause the carousel when the tab isn't visible so it doesn't
    // jump forward multiple steps when you switch back.
    const handleVisibility = () => {
      isPaused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const el = trackRef.current;
    updateEdgeState();
    el?.addEventListener("scroll", updateEdgeState, { passive: true });
    window.addEventListener("resize", updateEdgeState);

    return () => {
      stopAutoScroll();
      document.removeEventListener("visibilitychange", handleVisibility);
      el?.removeEventListener("scroll", updateEdgeState);
      window.removeEventListener("resize", updateEdgeState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  const pause = () => {
    isPaused.current = true;
  };
  const resume = () => {
    isPaused.current = false;
  };

  // Lightbox: close on Escape + lock body scroll while open
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedImage, closeLightbox]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="font-sans overflow-hidden bg-white">
        {/* Who We Are */}
        <section className="py-24 px-6 md:px-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-sm mx-auto"
            >
              <img
                src={aboutImg}
                alt="Community empowerment"
                loading="lazy"
                className="w-full rounded-lg shadow-xl object-cover -rotate-2"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d5af0e]/30 bg-[#d5af0e]/10 text-[#8a6d09] text-sm font-semibold px-4 py-1.5 mb-5">
                Licensed by the Bank of Ghana
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
                About Us
              </h1>

              <div className="w-20 h-1 bg-[#d5af0e] mb-10 rounded" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                MERGE Seed Micro-Credit Enterprise (MERGE Seed) is a Bank of
                Ghana–licensed financial institution dedicated to empowering
                rural entrepreneurs and bridging the financial inclusion gap
                for underserved communities, especially women and youth.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We provide affordable micro-credit, business development
                services, and financial literacy programs that enable small
                business owners to build sustainable livelihoods and
                strengthen their communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#1c1a12] via-[#2a2410] to-[#4a3a0c] overflow-hidden">
          {/* subtle radial glow for depth instead of a floating, image-less overlay */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#d5af0e]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#d5af0e]/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaBullseye aria-hidden="true" className="text-5xl text-[#d5af0e]" />,
                title: "Our Mission",
                desc: "MERGE Seed is more than a lender. We empower people, inspire entrepreneurship, and drive social change by providing access to finance, business training, and financial education while maintaining financial sustainability.",
              },
              {
                icon: <FaEye aria-hidden="true" className="text-5xl text-[#d5af0e]" />,
                title: "Our Vision",
                desc: "We aim to create thriving rural communities where entrepreneurship flourishes and every person, regardless of background, has the opportunity to succeed.",
              },
              {
                icon: <FaHandshake aria-hidden="true" className="text-5xl text-[#d5af0e]" />,
                title: "Our Belief",
                desc: "At MERGE Seed, we believe access to finance is the seed of growth. When people are empowered with capital, skills, and confidence, they transform their businesses, families, and communities. Sustainable development begins with empowered entrepreneurs.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-white/95 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  {item.icon}
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products & Services Section */}
        <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
              Our Products & Services
            </h2>
            <div className="w-20 h-1 bg-[#d5af0e] mx-auto mb-10 rounded" />
            <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
              MERGE Seed offers a range of financial products and development
              services tailored to empower rural entrepreneurs and communities.
            </p>
          </div>

          <div
            className="relative max-w-7xl mx-auto"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
            onFocus={pause}
            onBlur={resume}
          >
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByStep(-1)}
              disabled={atStart}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                         h-12 w-12 rounded-full bg-white/90 backdrop-blur
                         shadow-lg border border-gray-200
                         flex items-center justify-center
                         hover:bg-white transition
                         disabled:opacity-0 disabled:pointer-events-none"
            >
              <HiChevronLeft className="text-2xl text-gray-800" />
            </button>

            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByStep(1)}
              disabled={atEnd}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                         h-12 w-12 rounded-full bg-white/90 backdrop-blur
                         shadow-lg border border-gray-200
                         flex items-center justify-center
                         hover:bg-white transition
                         disabled:opacity-0 disabled:pointer-events-none"
            >
              <HiChevronRight className="text-2xl text-gray-800" />
            </button>

            {/* edge fades hint that the row scrolls */}
            <div
              className={`pointer-events-none absolute left-0 top-0 bottom-6 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent transition-opacity duration-300 ${
                atStart ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`pointer-events-none absolute right-0 top-0 bottom-6 w-16 z-10 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${
                atEnd ? "opacity-0" : "opacity-100"
              }`}
            />

            <div
              ref={trackRef}
              role="region"
              aria-label="Products and services"
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 pb-6
                         [-ms-overflow-style:none] [scrollbar-width:none]
                         [&::-webkit-scrollbar]:hidden"
            >
              {productsAndServices.map((item) => (
                <div key={item.title} className="snap-start shrink-0">
                  <ProductBannerCard
                    title={item.title}
                    tag={item.tag}
                    desc={item.desc}
                    image={item.image}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ManagementSection />

        {/* Our Team */}
        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6 text-center"
            >
              Our Team
            </motion.h2>
            <div className="w-20 h-1 bg-[#d5af0e] mx-auto mb-12 rounded" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[teamImg1, teamImg2, teamImg3, teamImg4].map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  aria-label={`View team photo ${i + 1} enlarged`}
                  className="overflow-hidden rounded-2xl shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5af0e] focus-visible:ring-offset-2 cursor-zoom-in"
                >
                  <img
                    src={img}
                    alt={`Team photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged team photo"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={closeLightbox}
            >
              <motion.img
                src={selectedImage}
                alt="Team photo enlarged"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeLightbox}
                autoFocus
                className="absolute top-5 right-5 text-white text-3xl font-bold leading-none hover:text-[#d5af0e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5af0e] rounded"
                aria-label="Close"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <section className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-24 px-6 text-center overflow-hidden">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold mb-8"
          >
            Join Us in Empowering Rural Entrepreneurs
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-100"
          >
            Partner with MERGE Seed and be part of a movement that transforms
            lives, builds businesses, and strengthens communities.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block bg-white text-yellow-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
            >
              Get Involved
            </Link>
          </motion.div>
        </section>
      </div>
    </MotionConfig>
  );
};

export default About;