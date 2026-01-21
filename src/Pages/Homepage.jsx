// src/pages/Homepage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero1.png";
import productImage from "../assets/micro2.jpg";
import impactImage from "../assets/update3.png";

// Simple Button Component
const Button = ({ children, className = "", variant, ...props }) => {
  const baseClass =
    "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300";
  const variantClass =
    variant === "outline"
      ? "border border-white text-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-gray-200";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Homepage = () => {
  return (
    <div className="w-full text-gray-800">
      
      <section
        className="relative isolate min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
     
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto text-center text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Financial Inclusion for All
            <span className="block text-yellow-400 mt-2">
              Unlocking the potential of rural Ghana, one entrepreneur at a time.
            </span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link to="/contact">
                <Button>Join Us</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link to="/about">
                <Button variant="outline">
                  Learn More <span className="ml-2">→</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            About Us
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-loose mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <strong>MERGE Seed Micro-Credit Enterprise (MERGE Seed)</strong> is a
            Bank of Ghana–licensed financial institution committed to empowering
            rural entrepreneurs and transforming underserved communities.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-loose mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our vision is to build thriving rural communities where
            entrepreneurship flourishes and everyone has the opportunity to
            succeed.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-loose"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At MERGE Seed, access to finance is the seed of growth. We provide
            business training and financial literacy to build sustainable
            livelihoods.
          </motion.p>

          <motion.p
            className="font-semibold text-yellow-400 mt-8 text-lg md:text-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlocking the potential of rural Ghana, one entrepreneur at a time.
          </motion.p>
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link
            to="/about"
            className="inline-block px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full 
            hover:bg-yellow-400 hover:text-white font-semibold transition duration-300"
          >
            View More →
          </Link>
        </div>
      </section>

      <section className="bg-[#0F172A] py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                Our Products & Services
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />
              <p className="mt-4 text-lg text-gray-300">
                Supporting entrepreneurs with the finance, skills, and guidance
                they need to grow sustainable businesses.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={productImage}
                  alt="Community support"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  MERGE Seed provides more than loans. We offer business coaching,
                  financial literacy, and tools that empower women and youth-led
                  enterprises to build sustainable livelihoods.
                  <br />
                  <br />
                  <Link
                    to="/about"
                    className="text-yellow-400 hover:text-yellow-500 font-semibold"
                  >
                    View More →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

  
      <section className="bg-white py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                Our Impact
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded" />
              <p className="mt-4 text-lg text-gray-600">
                Empowering people and strengthening rural communities beyond
                financial support.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={impactImage}
                    alt="Community impact"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  MERGE Seed promotes girl-child education, skills development,
                  and mentorship programs that build confident and independent
                  individuals.
                  <br />
                  <br />
                  <Link
                    to="/projects"
                    className="inline-block bg-yellow-400 rounded-full px-4 py-2 text-black hover:bg-yellow-500 transition"
                  >
                    Know More
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
