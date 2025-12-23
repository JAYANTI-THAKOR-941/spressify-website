import React from "react";
import { FaSprayCan, FaTshirt, FaSmile } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSprayCan className="text-4xl text-teal-600 mb-4" />,
      title: "Spray on Fabric",
      description: "Hold the bottle 6-8 inches from your garment and spray evenly over the wrinkles."
    },
    {
      icon: <FaTshirt className="text-4xl text-teal-600 mb-4" />,
      title: "Smooth Gently",
      description: "Gently pull or smooth the fabric with your hands to remove wrinkles instantly."
    },
    {
      icon: <FaSmile className="text-4xl text-teal-600 mb-4" />,
      title: "Wear & Enjoy",
      description: "Your garment looks fresh and wrinkle-free, ready to wear immediately!"
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">How It Works</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transform transition-transform duration-300"
          >
            {step.icon}
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
