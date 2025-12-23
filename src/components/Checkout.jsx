import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Prepare order data
    const order = {
      product: "Pressify Spray",
      price: 170,
      user: userDetails,
      paymentMethod: "Cash on Delivery",
      date: new Date().toLocaleString(),
    };

    // Save to localStorage (or append if there are previous orders)
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert("✅ Your order has been placed successfully!");
    navigate("/my-orders"); // Redirect to My Orders page
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">Checkout</h1>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        You are one step away from getting your Pressify Instant Wrinkle Removing Spray!
      </p>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl flex flex-col gap-6">
        
        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Pressify Spray</span>
            <span>₹170</span>
          </div>
          <div className="flex justify-between mb-4 font-bold">
            <span>Total</span>
            <span>₹170</span>
          </div>
        </div>

        {/* User Details Form */}
        <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg"
            required
          />
          <textarea
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            placeholder="Delivery Address"
            className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none text-lg"
            rows="4"
            required
          />

          <div className="flex items-center gap-3 mt-2">
            <input type="radio" id="cod" name="payment" value="cod" checked readOnly className="w-4 h-4" />
            <label htmlFor="cod" className="text-gray-700 text-lg">Cash on Delivery (COD)</label>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold text-lg mt-4"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
