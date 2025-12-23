import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-teal-400">Spressify</h1>
          <p className="mt-2 text-gray-400">
            Instant Wrinkle Removing Spray – Smooth your clothes anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul>
            <li>
              <a href="#product" className="hover:text-teal-400">Product</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-teal-400">How It Works</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-teal-400">Reviews</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>Email: support@spressify.com</p>
          <p>Phone: +91 12345 67890</p>

          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-teal-400">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Spressify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
