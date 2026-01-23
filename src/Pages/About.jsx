// src/pages/About.jsx
import React from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import { HiOutlineCash, HiUsers, HiHome, HiLightBulb, HiBookOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/aboutimg.png";
import heroImg2 from "../assets/aboutimg2.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const products = [
  {
    icon: <HiOutlineCash className="text-4xl text-[#d5af0e]" />,
    title: "Individual MSME Loans",
    desc: "Working capital support for women and youth-led micro-enterprises to help them grow and scale sustainably.",
  },
  {
    icon: <HiUsers className="text-4xl text-[#d5af0e]" />,
    title: "Solidarity Group Loans",
    desc: "Group-based credit with mutual guarantee for micro-entrepreneurs to encourage collaboration and accountability.",
  },
  {
    icon: <HiHome className="text-4xl text-[#d5af0e]" />,
    title: "Home Improvement, Water & Sanitation Loans",
    desc: "Credit for household upgrades and basic amenities, improving living conditions for rural communities.",
  },
  {
    icon: <HiLightBulb className="text-4xl text-[#d5af0e]" />,
    title: "Business Development Services",
    desc: "Affordable training and coaching in entrepreneurship, finance, and operations to strengthen small businesses.",
  },
  {
    icon: <HiBookOpen className="text-4xl text-[#d5af0e]" />,
    title: "Financial Literacy",
    desc: "Programs that help entrepreneurs build sustainable livelihoods and responsible trading practices.",
  },
];

const About = () => {
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
  {/* Main Image (big, tilted left) */}
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
        entrepreneurs and bridging the financial inclusion gap for underserved
        communities, especially women and youth.
      </p>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
        We provide affordable micro-credit, business development services,
        and financial literacy programs that enable small business owners to
        build sustainable livelihoods and strengthen their communities.
      </p>

      <Link
        to="/about"
        className="inline-flex items-center justify-center bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-500 transition"
      >
        Learn More
      </Link>
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
              desc: "At MERGE Seed, we believe access to finance is the seed of growth.  When people are empowered with capital, skills, and confidence, they transform their businesses, families, and communities. Sustainable development begins with empowered entrepreneurs."},
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
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
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
            MERGE Seed offers a range of financial products and development services tailored to empower rural entrepreneurs and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4 hover:shadow-2xl transition"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </div>
          ))}
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
          Partner with MERGE Seed and be part of a movement that transforms lives,
          builds businesses, and strengthens communities.
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
