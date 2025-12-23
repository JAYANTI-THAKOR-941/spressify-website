import React from "react";
import productImg from "../assets/spray.png"; // Your product image
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={productImg}
            alt="Pressify Spray"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-teal-600">Pressify - Instant Wrinkle Removing Spray</h1>
          <p className="text-gray-700 text-lg">
            Say goodbye to wrinkles instantly! Pressify is a portable, safe spray for all fabrics that smooths clothes in seconds—perfect for home or travel.
          </p>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-600">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Works in seconds</li>
              <li>Portable spray bottle</li>
              <li>Safe for all fabrics</li>
              <li>No ironing needed</li>
            </ul>
          </div>

          {/* Price & Buy Button */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
            <span className="text-3xl font-bold text-teal-600">₹170</span>
           <Link to="/checkout" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold">
  Buy Now
</Link>
          </div>
        </div>

      </div>

      {/* Optional: Small Reviews Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-700 mb-2">"Amazing! My shirt is wrinkle-free in seconds!"</p>
            <span className="font-semibold text-teal-600">- Riya</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-700 mb-2">"Compact and effective, perfect for travel."</p>
            <span className="font-semibold text-teal-600">- Raj</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-700 mb-2">"Safe for all my clothes, highly recommended!"</p>
            <span className="font-semibold text-teal-600">- Anjali</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;
