// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import {HiChevronLeft,HiChevronRight,} from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/aboutimg.png";
import productLoanImage from "../assets/product1.png";
import productTrainingImage from "../assets/product2.png";
import productSupportImage from "../assets/product3.png";
import ProductBannerCard from "../components/ProductBannerCard";
import productHomeImage from "../assets/productt4.png";
import productBusinessImage from "../assets/product6.png";  

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
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
      desc: "Programs that help entrepreneurs build sustainable livelihoods and responsible trading practices.",
      image: productSupportImage,
      alt: "Affordable training and coaching.",
    },
    {
      title: "Home, Water & Sanitation Loans",
      tag: "Product",
      desc: "Credit for household upgrades and basic amenities, improving living conditions for rural communities.",
      image: productBusinessImage,
      alt: "Home Improvement, Water & Sanitation Loans",
    },
    {
      title: "Business Development\nServices",
      tag: "Service",
      desc: "Programs that help entrepreneurs build sustainable livelihoods and responsible trading practices.",
      image: productHomeImage,
      alt: "Business Development Services",
    },
  ];

  // ✅ Carousel refs + controls
  const trackRef = useRef(null);
  const autoScrollTimer = useRef(null);
  const isPaused = useRef(false);

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 320;
    // scroll ~80% of the visible area, feels nice across sizes
    return Math.max(280, Math.floor(el.clientWidth * 0.8));
  };

  const scrollByStep = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;

    const step = getStep() * dir;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  const scrollToStart = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
  };

  const tickAutoScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    // If near the end, loop back to start
    if (el.scrollLeft >= max - 10) {
      scrollToStart();
    } else {
      scrollByStep(1);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollTimer.current = setInterval(() => {
      if (!isPaused.current) tickAutoScroll();
    }, 3500); // change speed here
  };

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
    
  }, []);

  const pause = () => {
    isPaused.current = true;
  };
  const resume = () => {
    isPaused.current = false;
  };

  return (
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
              src={heroImg}
              alt="Community empowerment"
              className="w-full rounded-lg shadow-xl object-cover -rotate-2"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
              Who We Are
            </h2>

            <div className="w-20 h-1 bg-[#d5af0e] mb-10 rounded" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              MERGE Seed Micro-Credit Enterprise (MERGE Seed) is a Bank of Ghana–
              licensed financial institution dedicated to empowering rural
              entrepreneurs and bridging the financial inclusion gap for
              underserved communities, especially women and youth.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              We provide affordable micro-credit, business development services,
              and financial literacy programs that enable small business owners
              to build sustainable livelihoods and strengthen their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              icon: <FaBullseye className="text-5xl text-[#d5af0e]" />,
              title: "Our Mission",
              desc: "MERGE Seed is more than a lender. We empower people, inspire entrepreneurship, and drive social change by providing access to finance, business training, and financial education while maintaining financial sustainability.",
            },
            {
              icon: <FaEye className="text-5xl text-[#d5af0e]" />,
              title: "Our Vision",
              desc: "We aim to create thriving rural communities where entrepreneurship flourishes and every person, regardless of background, has the opportunity to succeed.",
            },
            {
              icon: <FaHandshake className="text-5xl text-[#d5af0e]" />,
              title: "Our Belief",
              desc: "At MERGE Seed, we believe access to finance is the seed of growth. When people are empowered with capital, skills, and confidence, they transform their businesses, families, and communities. Sustainable development begins with empowered entrepreneurs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                {item.icon}
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
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
        >
          {/* Gradient fade edges */}
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" /> */}

          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByStep(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                       h-12 w-12 rounded-full bg-white/90 backdrop-blur
                       shadow-lg border border-gray-200
                       flex items-center justify-center
                       hover:bg-white transition"
          >
            <HiChevronLeft className="text-2xl text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByStep(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                       h-12 w-12 rounded-full bg-white/90 backdrop-blur
                       shadow-lg border border-gray-200
                       flex items-center justify-center
                       hover:bg-white transition"
          >
            <HiChevronRight className="text-2xl text-gray-800" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 pb-6
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {productsAndServices.map((item, index) => (
              <div key={index} className="snap-start shrink-0">
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

      {/* Management Section Placeholder */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
            Our Management
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Our leadership team is committed to integrity, financial inclusion,
            and sustainable community development.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 opacity-60">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center"
              >
                <p className="text-gray-400">Management Profile</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-24 px-6 text-center overflow-hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Join Us in Empowering Rural Entrepreneurs
        </motion.h3>
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
  );
};

export default About;
