import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600">
          <Link to="/">Pressify</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
                 <Link to="/" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Home</Link>
          <Link to="/products" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Product</Link>
          <Link to="/work" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">How it Works</Link>
          <Link to="/reviews" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Reviews</Link>
          <Link to="/contact" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Contact</Link>
        </nav>

        {/* Buy Now Button */}
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
  <Link to="/products">Buy Now</Link>
</button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Home</Link>
          <Link to="/products" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Product</Link>
          <Link to="/work" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">How it Works</Link>
          <Link to="/reviews" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Reviews</Link>
          <Link to="/contact" className="block px-6 py-3 text-gray-700 hover:bg-teal-50">Contact</Link>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
  <Link to="/checkout">Buy Now</Link>
</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
