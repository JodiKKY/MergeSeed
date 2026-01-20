import React, { useRef } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75irtr3",   // Replace with your EmailJS service ID
        "template_l8x6ls8",  // Replace with your EmailJS template ID
        form.current,
        "3JPiWa2oAnkoy1TnY"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! Thank you for your interest.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white pt-28 md:pt-32 pb-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get In<span className="text-yellow-400"> Touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Interested in investing in MERGE Seed? Fill out the form below or reach us
          through the details provided.
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
            <div className="flex items-start gap-4">
              <HiLocationMarker className="text-yellow-400 text-2xl mt-1" />
              <a
                href="https://www.google.com/maps?q=South+Lokoe+-+Diamond+Street,+Ho,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-700"
              >
                South Lokoe - Diamond Street, Ho, Ghana
              </a>
            </div>

            <div className="flex items-center gap-3">
              <HiPhone className="text-yellow-400 text-xl" />
              <div className="flex flex-wrap gap-2 text-gray-700">
                <a href="tel:+233244826788" className="hover:underline">
                  +233 244 826 788
                </a>
                <span className="text-gray-400">|</span>
                <a href="tel:+233208195530" className="hover:underline">
                  020 819 5530
                </a>
              </div>
            </div>

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
              href="https://wa.me/233244826788"
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

        {/* Investor Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6 transition hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Investor Inquiry Form
          </h3>
          <p className="text-gray-600 mb-4">
            Please provide your details and investment interest, and our team will get back to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              required
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Investment Interest or Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 hover:scale-105 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
