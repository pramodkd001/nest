"use client";

import React, { useState } from "react";
import RoomForm from "../../components/RoomForm";
import RoomCard from "../../components/RoomCard";

export default function LandlordDashboard() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Apartment",
      landlord: "John Doe",
      contact: "9876543210",
      address: "Downtown, 123456",
      rooms: [
        {
          id: 1,
          type: "2 BHK",
          capacity: 4,
          price: 20000,
          availability: "Available",
          images: ["/image1.png", "/image2.png"],
        },
      ],
    },
  ]);

  const addProperty = (newProperty) => {
    setProperties([...properties, { ...newProperty, id: properties.length + 1 }]);
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Landlord Dashboard
        </h1>

        {/* Add Property Form */}
        <RoomForm onSubmit={addProperty} />

        {/* Property List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {properties.map((property) => (
            <RoomCard
              key={property.id}
              property={property}
              onDelete={() => deleteProperty(property.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}