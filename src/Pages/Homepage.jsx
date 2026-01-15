// src/pages/Homepage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/logo.jpg";
import volunteerImage from "../assets/micro2.jpg"; 
import impactImage from "../assets/merge22.png";

// Simple Button Component
const Button = ({ children, className = "", variant, ...props }) => {
  const baseClass = "px-8 py-4 rounded-full font-semibold transition";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};





const Homepage = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section
        className="relative isolate h-screen flex flex-col justify-center bg-cover bg-center text-center px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-4xl mx-auto text-white z-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl flex flex-wrap justify-center gap-2 sm:gap-3">
            Spreading{" "}
            <span className="text-yellow-400">
              Unlocking the potential of rural Ghana, one entrepreneur at a time.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-yellow-400">Merge Seed</span>, we
            are dedicated to empowering rural entrepreneurs. Our programs provide
            healthcare, learning opportunities, and joy to children across
            communities in Ghana and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/">
                <Button>Join Us</Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/about">
                <Button variant="outline">
                  Learn More <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
            className="text-lg md:text-xl text-gray-700 leading-loose text-justify mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <strong>MERGE Seed Micro-Credit Enterprise (MERGE Seed)</strong> is a
            Bank of Ghana–licensed financial institution committed to empowering
            rural entrepreneurs and transforming underserved communities.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-loose text-justify mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our vision is to build thriving rural communities where
            entrepreneurship flourishes and every individual has the opportunity
            to succeed.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-loose text-justify"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At MERGE Seed, access to finance is the seed of growth. We provide
            business training and financial literacy to build sustainable
            livelihoods.
          </motion.p>

          <motion.p
            className="font-semibold text-yellow-400 text-center mt-8 text-lg md:text-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlocking the potential of rural Ghana, one entrepreneur at a time.
          </motion.p>
        </motion.div>
      </section>

      { /* Products & Services Section */}
      <section className="bg-black  py-24 sm:py-32">
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
            <p className="mt-4 text-lg text-gray-400">
              Supporting entrepreneurs with the finance, skills, 
              and guidance they need to grow sustainable businesses and strengthen their communities.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={volunteerImage}
                alt="Volunteer helping the community"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
          
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
               MERGE Seed provides more than loans.We offer the tools and training entrepreneurs need to succeed. 
               From affordable credit to business coaching and financial literacy, our services support growth at every stage.
               We focus on empowering women and youth-led enterprises to build sustainable livelihoods. 
               Together, we help communities thrive, one entrepreneur at a time.
                <br />
                <br />
                <Link
            to="/about"
            className="inline-block text-yellow-400 hover:text-yellow-800 font-semibold text-base transition duration-200"
          >
            View More &rarr;
          </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </section>
      {/*Outreach & Impact Section */}
     <section className="bg-[#ffffff] py-24 sm:py-32">

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
                Our outreach efforts and community impact initiatives are designed to empower rural entrepreneurs and strengthen local economies.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div         
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >
             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-white">
                <img
                  src={impactImage}
                  alt="Volunteer helping the community"
                  className="w-full h-full object-cover"
                />
              
              </div>
               </motion.div>
   <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
    
        >
              <div className="flex flex-col justify-center">
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">MERGE Seed creates lasting change by investing in people and empowering communities beyond financial support. 
                  We promote girl-child education, skills development, and reproductive health awareness to build confident and independent individuals. 
                  Through training, mentorship, and community partnerships, we help transform lives and strengthen rural livelihoods.<br />
                  <br />
                   <Link to="/about" 
                   className="inline-block bg-yellow-400 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-black hover:bg-yellow-500 transition">
                    Know More
                  </Link>

                </p>
              </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;



