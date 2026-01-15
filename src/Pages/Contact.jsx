import React from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white pt-28 md:pt-32 pb-16 px-6 md:px-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get in <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or want to work with us? Fill out the form or reach us
          through the details below.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transition hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h3>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <HiLocationMarker className="text-yellow-400 text-2xl mt-1" />
              <a
                href="https://www.google.com/maps?q=Plot+N0.7,+Aadoon+St,+Sahara+Down-Dansoman,+Accra,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                South Lokoe - Diamond Street,Ho
              </a>
            </div>

            {/* Phones */}
            <div className="flex items-center gap-3">
              <HiPhone className="text-yellow-400 text-xl" />
              <div className="flex flex-wrap gap-2 text-gray-700">
                <a href="tel:+233244826788" className="hover:underline">
                  ++233 244 826 788
                </a>
                <span className="text-gray-400">|</span>
                <a href="tel:+233208195530" className="hover:underline">
                  020 819 5530
                </a>
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-center gap-4">
              <HiMail className="text-yellow-400 text-2xl" />
              <div className="flex flex-wrap gap-2 text-gray-700">
                <a
                  href="mailto:mergeseed@gmail.com"
                  className="hover:underline whitespace-nowrap"
                >
                  mergeseed@gmail.com
                </a>
                
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://web.facebook.com/people/Jokams-Limited/100084471634654/"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white rounded-full hover:bg-yellow-700 hover:scale-105 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/233208762708"
              aria-label="Whatsapp"
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white rounded-full hover:bg-yellow-700 hover:scale-105 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/jokams-limited/"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white rounded-full hover:bg-yellow-700 hover:scale-105 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Message Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 transition hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Send Us a Message
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
