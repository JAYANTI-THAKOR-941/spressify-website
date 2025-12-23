import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Anita Sharma",
      rating: 5,
      comment: "Absolutely love it! My clothes look wrinkle-free instantly. Highly recommend Pressify!",
    },
    {
      name: "Rohit Patel",
      rating: 4,
      comment: "Very convenient and easy to use. Works well on most fabrics. Will buy again.",
    },
    {
      name: "Priya Desai",
      rating: 5,
      comment: "Amazing product! Saves so much time. My go-to wrinkle remover now.",
    },
  ];

  return (
    <section id="reviews" className="bg-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">Customer Reviews</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            {/* Rating Stars */}
            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4">"{review.comment}"</p>

            {/* Reviewer */}
            <p className="font-semibold text-teal-600">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
