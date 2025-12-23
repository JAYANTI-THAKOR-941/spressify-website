import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-20 px-6">

      {/* Title */}
      <h2 className="text-4xl font-bold text-teal-600 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-12 text-center max-w-2xl">
        Have questions about Pressify? Reach out to us through any of the following channels. Our team is always happy to assist you!
      </p>

      {/* Contact Info Cards */}
      <div className="w-full max-w-5xl grid md:grid-cols-3 gap-10 mb-16">
        {/* Email */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaEnvelope className="text-teal-600 mx-auto mb-3 text-3xl" />
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Email</h3>
          <p>support@pressify.com</p>
          <p className="text-gray-500 mt-2">We reply within 24 hours.</p>
        </div>

        {/* Phone */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaPhone className="text-teal-600 mx-auto mb-3 text-3xl" />
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Phone</h3>
          <p>+91 12345 67890</p>
          <p className="text-gray-500 mt-2">Available Mon-Sat, 9AM - 6PM</p>
        </div>

        {/* Address */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaMapMarkerAlt className="text-teal-600 mx-auto mb-3 text-3xl" />
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Address</h3>
          <p>123 Pressify Lane, Ahmedabad, Gujarat, India</p>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full mb-16 text-center">
        <FaClock className="text-teal-600 mx-auto mb-3 text-3xl" />
        <h3 className="text-xl font-semibold text-teal-600 mb-2">Working Hours</h3>
        <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>

      {/* Social Media */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-3xl w-full">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 text-gray-700 text-xl">
          <a href="#" className="hover:text-teal-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-teal-600"><FaInstagram /></a>
          <a href="#" className="hover:text-teal-600"><FaTwitter /></a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
