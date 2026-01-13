import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImg from "../assets/logo.jpg"; 
// import companyImg from "../assets/about.mp4";

import {Link} from "react-router-dom";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  

  return (
    <div className="font-sans overflow-hidden bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Jokams Ltd Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            About <span className="text-red-400">Jokams Limited</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-100">
            Your trusted chemical distribution partner in Ghana, delivering
            quality products and exceptional service.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      {/* <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <video
            src={companyImg}
            autoPlay
            loop
            muted
            className="rounded-3xl shadow-2xl hover:scale-105 transform transition duration-700 ease-in-out w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Jokams Limited is a leading chemical distribution company based in
            Accra, Ghana. We specialize in providing high-quality chemicals to
            a variety of industries, ensuring safety, reliability, and timely
            delivery.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our experienced team is committed to delivering exceptional service
            and building long-term relationships with our clients.
          </p>
        </motion.div>
      </section> */}

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              icon: <FaBullseye className="text-5xl text-yellow-400" />,
              title: "Our Mission",
              desc: "MERGE Seed is more than a lender. We empower people, inspire entrepreneurship, and drive social change while maintaining financial sustainability. With MERGE Seed, rural dreams can truly grow and thrive.",
            },
            {
              icon: <FaEye className="text-5xl text-yellow-400" />,
              title: "Our Vision",
              desc: "We aim to create thriving rural communities where entrepreneurship flourishes and every person, regardless of background has the opportunity to succeed.",
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
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl font-extrabold text-gray-900 mb-16 text-center"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Call-to-Action */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-28 px-6 text-center overflow-hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Partner with Jokams Limited Today
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-100"
        >
          Experience unmatched quality and service in chemical distribution.
        </motion.p>
        <motion.div
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/contact"
    className="inline-block bg-white text-red-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
  >
    Contact Us
  </Link>
</motion.div>
      </section>
    </div>
  );
};

export default About;
