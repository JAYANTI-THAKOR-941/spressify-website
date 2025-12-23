import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-20 px-6">
        <h1 className="text-4xl font-bold text-teal-600 mb-6">My Orders</h1>
        <p className="text-gray-700 text-center">You have not placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl font-bold text-teal-600 mb-8">My Orders</h1>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-2">{order.product}</h2>
            <p><strong>Price:</strong> ₹{order.price}</p>
            <p><strong>Name:</strong> {order.user.name}</p>
            <p><strong>Email:</strong> {order.user.email}</p>
            <p><strong>Phone:</strong> {order.user.phone}</p>
            <p><strong>Address:</strong> {order.user.address}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            <p><strong>Order Date:</strong> {order.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
