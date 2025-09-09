"use client";

import React, { useState } from "react";

export default function RoomForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    landlord: "",
    contact: "",
    address: "",
    rooms: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.landlord || !formData.contact || !formData.address) {
      alert("Please fill all required fields.");
      return;
    }
    onSubmit(formData);
    setFormData({ title: "", landlord: "", contact: "", address: "", rooms: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Add Property</h2>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Property Name</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 mt-1"
          placeholder="Enter property name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Landlord Name</label>
        <input
          type="text"
          name="landlord"
          value={formData.landlord}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 mt-1"
          placeholder="Enter landlord name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Contact Number</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 mt-1"
          placeholder="Enter contact number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 mt-1"
          placeholder="Enter address"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Property
      </button>
    </form>
  );
}