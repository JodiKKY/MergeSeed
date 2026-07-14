import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import ProductBannerCard from "../components/ProductBannerCard";

import heroImage from "../assets/image.png";
import heroImageMobile from "../assets/image copy.png";
import mergelogo from "../assets/mergelogo.png";
import impactImage from "../assets/1impact.png";
import productLoanImage from "../assets/product1.png";
import productTrainingImage from "../assets/fin_literacy2.jpg";
import productSupportImage from "../assets/image copy 4.png";

const Button = ({ children, className = "", variant, type = "button", ...props }) => {
  const baseClass =
    "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40";
  const variantClass =
    variant === "outline"
      ? "border border-white text-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-gray-200";

  return (
    <button type={type} className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
};

const HeroImage = ({ src, className }) => {
  const [settled, setSettled] = useState(false);

  return (
    <motion.img
      src={src}
      alt="Hero"
      fetchpriority="high"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={
        settled
          ? { scale: [1, 1.03, 1], opacity: 1 }
          : { scale: 1, opacity: 1 }
      }
      transition={
        settled
          ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
          : { duration: 1.2, ease: "easeOut" }
      }
      onAnimationComplete={() => !settled && setSettled(true)}
      className={className}
    />
  );
};

const Homepage = () => {
  const isDesktop = useIsDesktop();

  const productsAndServices = [
    {
      title: "MSME\nMicro Loans",
      tag: "Product",
      desc: "Flexible working capital to help micro-enterprises grow.",
      image: productLoanImage,
      alt: "MSME Micro Loans",
    },
    {
      title: "Financial\nLiteracy",
      tag: "Service",
      desc: "Practical money management and savings training.",
      image: productTrainingImage,
      alt: "Financial Literacy Training",
    },
    {
      title: "Business\nDevelopment",
      tag: "Service",
      desc: "Mentoring and coaching to help businesses grow sustainably.",
      image: productSupportImage,
      alt: "Business Development Services",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full text-gray-800 overflow-x-hidden">
        <section
          className="
            relative flex items-center overflow-hidden w-full aspect-[3/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-screen
          "
        >
          {isDesktop ? (
            <HeroImage
              src={heroImage}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          ) : (
            <HeroImage
              src={heroImageMobile}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          )}

          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex items-center"
          >
            <div className="max-w-3xl text-left text-white px-6 sm:px-10">
              <h1 className="font-bold leading-tight tracking-tight text-yellow-400 text-2xl sm:text-3xl md:text-6xl">
                Financial Inclusion for All
                <span className="block mt-2 text-white font-semibold italic text-base sm:text-lg md:text-4xl">
                  Unlocking the potential of rural Ghana, one entrepreneur at a time.
                </span>
              </h1>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Link to="/about">
                  <Button variant="outline">
                    Learn More <span className="ml-2">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        {/* ABOUT */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
                About Us
              </h2>
              <div className="w-20 h-1 bg-[#d5af0e] mx-auto mb-10 rounded" />
              <p className="mt-4 text-lg text-gray-700">
                Building thriving rural communities by empowering entrepreneurs
                with finance, skills, and support.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center mb-8 lg:mb-0">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-lg shadow-black/10">
                  <img
                    src={mergelogo}
                    alt="MERGE Seed logo"
                    loading="lazy"
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>MERGE Seed Micro-Credit Enterprise (MERGE Seed)</strong>{" "}
                  is a Bank of Ghana–licensed financial institution committed to
                  empowering rural entrepreneurs.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our vision is to build thriving rural communities where
                  entrepreneurship flourishes and opportunities are accessible to
                  all.
                </p>
                <p className="font-semibold text-yellow-500 text-lg mb-8 italic">
                  Unlocking the potential of rural Ghana, one entrepreneur at a
                  time.
                </p>
                <Link
                  to="/about"
                  className="inline-flex w-fit px-8 py-3 border-2 border-yellow-400 text-yellow-500 rounded-full hover:bg-[#d5af0e] hover:text-white font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5af0e] focus-visible:ring-offset-2"
                >
                  More About Us →
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        {/* PRODUCTS */}
        <section className="bg-[#0F172A] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
                Our Products & Services
              </h2>
              <div className="w-20 h-1 bg-[#d5af0e] mx-auto mb-10 rounded" />
              <p className="text-lg text-gray-300">
                Supporting entrepreneurs with the finance, skills, and guidance
                they need.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {productsAndServices.map((item) => (
                <ProductBannerCard
                  key={item.alt}
                  title={item.title}
                  tag={item.tag}
                  desc={item.desc}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <Link
                to="/about"
                className="px-10 py-4 border-2 border-[#d5af0e] text-[#d5af0e] rounded-full font-semibold
                hover:bg-[#d5af0e] hover:text-[#0F172A] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5af0e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              >
                See All Products & Services →
              </Link>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="bg-[#f3f4f6] py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-6 lg:px-8"
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d5af0e] mb-6">
                Our Impact
              </h2>
              <div className="w-20 h-1 bg-[#d5af0e] mx-auto mb-8 rounded" />
              <p className="text-lg text-gray-600">
                Empowering people and strengthening rural communities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img
                  src={impactImage}
                  alt="MERGE Seed entrepreneurs and staff at work in a rural community"
                  loading="lazy"
                  className="w-full h-[400px] object-cover rounded-2xl "
                />
              </motion.div>
               <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  MERGE Seed promotes education, skills development, and mentorship
                  programs that build confident and independent entrepreneurs.
                </p>
                <Link
                  to="/projects"
                  className="bg-[#d5af0e] text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition shadow-lg shadow-yellow-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5af0e] focus-visible:ring-offset-2"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </MotionConfig>
  );
};
export default Homepage;
