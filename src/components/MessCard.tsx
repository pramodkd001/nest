"use client";

import React, { useState } from "react";

export default function MessListing() {
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for messes
  const messes = [
    {
      id: 1,
      name: "Green Valley Mess",
      location: "Downtown",
      price: "₹3000/month",
      availability: "Breakfast, Lunch, Dinner",
      image: "/public/messImg/mess01.png", // Corrected path for the image
    },
    {
      id: 2,
      name: "City Center Mess",
      location: "City Center",
      price: "₹2500/month",
      availability: "Lunch, Dinner",
      image: "/home01.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Suburban Mess",
      location: "Suburbs",
      price: "₹2000/month",
      availability: "Breakfast, Dinner",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  // Filter messes based on the search query
  const filteredMesses = messes.filter(
    (mess) =>
      mess.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mess.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Mess Listings
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search mess by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mess Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMesses.map((mess) => (
            <div
              key={mess.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={mess.image}
                alt={mess.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {mess.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Location:</strong> {mess.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Price:</strong> {mess.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Availability:</strong> {mess.availability}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}