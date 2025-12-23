import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productImg from "../assets/assetes.js"; // Update path if needed
import { FaStar } from "react-icons/fa";

const Home = () => {
  // Sample Reviews
  const reviews = [
    { name: "Anita Sharma", rating: 5, comment: "Absolutely love it! My clothes look wrinkle-free instantly." },
    { name: "Rohit Patel", rating: 4, comment: "Very convenient and easy to use. Works well on most fabrics." },
    { name: "Priya Desai", rating: 5, comment: "Amazing product! Saves so much time. My go-to wrinkle remover now." },
  ];

  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-teal-100 to-white">
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Instant Wrinkle Removing Spray
          </h1>
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            Smooth your clothes in seconds, anytime, anywhere.
          </p>
          <Link to="/checkout">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all">
              Buy Now
            </button>
          </Link>
        </motion.div>

        {/* Product Image */}
<motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
>
  <img 
    src={productImg} 
    alt="Spressify Spray" 
    className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
  />
</motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">
          How It Works
        </h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            { step: 1, title: "Spray", desc: "Spray directly on wrinkled area." },
            { step: 2, title: "Smooth", desc: "Smooth the fabric with hands." },
            { step: 3, title: "Enjoy", desc: "Enjoy wrinkle-free clothes instantly." },
          ].map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-teal-600 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Features Section */}
      <section id="product" className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">
          Why Choose Spressify?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Works in Seconds", desc: "Get smooth clothes instantly." },
            { title: "Portable", desc: "Take it anywhere easily." },
            { title: "Safe on Fabrics", desc: "Suitable for all types of clothes." },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-teal-50 p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600">
          Customer Reviews
        </h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <p className="font-semibold text-teal-600">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;
