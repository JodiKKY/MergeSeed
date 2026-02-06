import React from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook, FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/mergelogo.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-sm text-gray-700 font-light">
      
      {/* Top Footer */}
      <div className="border-b border-gray-300 py-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + Social */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img
                src={Logo}
                alt="Merge Seed Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-bold text-[#d5af0e]">
                MERGE SEED
              </span>
            </div>
           
            <div className="mt-4 flex justify-center md:justify-start gap-4 text-xl">
              <a href="mailto:jokamslimited@gmail.com" aria-label="Email">
                <FaEnvelope className="hover:text-gray-900" />
              </a>
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="hover:text-gray-900" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="hover:text-gray-900" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <HiLocationMarker className="text-xl text-gray-600" />
                <a
                  href="https://www.google.com/maps?q=South+Lokoe+Diamond+Street+Ho+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  South Lokoe – Diamond Street, Ho
                </a>
              </li>

              <li className="flex items-center gap-2">
                <HiMail className="text-xl text-gray-600" />
                <a
                  href="mailto:info@mergeseed.com"
                  className="hover:underline whitespace-nowrap"
                >
                  info@mergeseed.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <HiPhone className="text-xl text-gray-600" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a
                    href="tel:+233244826788"
                    className="hover:underline whitespace-nowrap"
                  >
                    +233 244 826 788
                  </a>
                  <span className="hidden sm:block text-gray-400">|</span>
                  <a
                    href="tel:+233208195530"
                    className="hover:underline whitespace-nowrap"
                  >
                    020 819 5530
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-900">About MergeSeed</a></li>
              <li><a href="/about" className="hover:text-gray-900">Products & Services</a></li>
              <li><a href="/projects" className="hover:text-gray-900">Impact</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Reach Out</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Weekends & Holidays: Closed</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-center sm:text-left">
          <span className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} MergeSeed. All rights reserved.
          </span>
         
        </div>
      </div>

    </footer>
  );
};

export default Footer;
