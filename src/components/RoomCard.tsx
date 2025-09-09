"use client";

import React from "react";

export default function RoomCard({ property, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">{property.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Landlord:</strong> {property.landlord}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Contact:</strong> {property.contact}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Address:</strong> {property.address}
        </p>
        <button
          onClick={onDelete}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}