import React from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FaFacebook, FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/mergelogo.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-sm text-gray-700 font-light">
      {/* Top Footer */}
      <div className="w-full border-b border-gray-300 py-10 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + Social */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <img src={Logo} alt="Merge Seed Logo" className="w-16 h-16 object-contain" />
            <span className="text-2xl font-bold text-yellow-400">MERGE SEED</span>
          </div>
          <p className="text-gray-600 mb-3">Your trusted chemical distribution partner.</p>
          <div className="mt-4 flex justify-center md:justify-start gap-4 text-xl">
            <a href="mailto:jokamslimited@gmail.com" aria-label="Email">
              <FaEnvelope className="hover:text-gray-900" />
            </a>
            <a href="https://web.facebook.com/people/Jokams-Limited/100084471634654/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-gray-900" />
            </a>
            <a href="https://www.linkedin.com/company/jokams-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-gray-900" />
            </a>
            <a href="https://wa.me/233208762708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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
                href="https://www.google.com/maps?q=Plot+N0.7,+Aadoon+St,+Sahara+Down-Dansoman,+Accra,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                South Lokoe - Diamond Street,Ho
              </a>
            </li>

  {/* Emails in one line */}
<li className="flex items-center gap-2">
  <HiMail className="text-xl text-gray-600" />
  <div className="flex flex-col sm:flex-row sm:items-center">
    <span className="hidden sm:inline mx-1 text-gray-400">|</span>
    <a href="mailto:jokamslimited@gmail.com" className="hover:underline whitespace-nowrap">
      mergeseed@gmail.com
    </a>
  </div>
</li>



            
            <li className="flex items-center gap-2">
              <HiPhone className="text-xl text-gray-600" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a href="tel:+233244826788" className="hover:underline whitespace-nowrap">
                  +233 244 826 788
                </a>
                <span className="hidden sm:block text-gray-400">|</span>
                <a href="tel:+233302306016" className="hover:underline whitespace-nowrap">
                  020 819 5530
                </a>
              </div>
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="transition hover:text-gray-900">About MergeSeed</a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-gray-900">Products & Services</a>
            </li>
            <li>
              <a href="/projects" className="transition hover:text-gray-900">Impact</a>
            </li>
            <li>
              <a href="/contact" className="transition hover:text-gray-900">Reach Out</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2">
            <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
            <li>Weekends & Holidays: Closed</li>
          </ul>
        </div>
      </div>

      
      <div className="w-full py-5 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-center sm:text-left">
        <span className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} MergeSeed. All rights reserved.
        </span>
        <ul className="flex flex-wrap gap-4 justify-center sm:justify-end text-sm">
          <li>
            <a href="/terms" className="transition hover:text-gray-700">Terms</a>
          </li>
          <li>
            <a href="/cookies" className="transition hover:text-gray-700">Cookies</a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
