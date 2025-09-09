"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"; // Navbar component
import Footer from "../../components/Footer";
import { FiSearch } from "react-icons/fi"; // Search icon

interface Property {
  id: number;
  title: string;
  landlord: string;
  area: string;
  landmark: string;
  description: string;
  image: string;
  details: string;
}

export default function RoomsListing() {
  // State to manage properties
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate fetching data from a backend
  useEffect(() => {
    // Simulated backend data
    const fetchData = async () => {
    const backendData: Property[] = [
        {
          id: 1,
          title: "Luxury Apartment",
          landlord: "John Doe",
          area: "Downtown",
          landmark: "Near City Mall",
          description: "2 BHK with modern amenities",
      image: "/home04.png", // Path from public folder
          details: "Located at MIT-CSN with 24/7 security and parking.",
        },
        {
          id: 2,
          title: "Cozy Studio",
          landlord: "Jane Smith",
          area: "Suburbs",
          landmark: "Near Green Park",
          description: "1 BHK perfect for students",
          image: "/home01.png", // Placeholder image
          details: "Affordable and close to public transport.",
        },
        {
          id: 3,
          title: "Spacious Villa",
          landlord: "Michael Johnson",
          area: "Countryside",
          landmark: "Near River View",
          description: "4 BHK with a private garden",
          image: "/home02.png", // Placeholder image
          details: "Ideal for families, located in a peaceful neighborhood.",
        },
        {
          id: 4,
          title: "Modern Flat",
          landlord: "Emily Davis",
          area: "City Center",
          landmark: "Next to Central Library",
          description: "3 BHK with a balcony view",
          image: "/home03.png", // Placeholder image
          details: "Fully furnished flat with all modern facilities.",
        },
      ];
      setProperties(backendData);
    };

    fetchData();
  }, []);

  // Filter properties based on the search query
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.landmark.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-1 pt-24"> {/* padding to offset fixed navbar */}
        {/* Mobile Search Bar */}
        <div className="md:hidden container mx-auto px-4 pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search rooms/flats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-300" aria-label="Search">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Property Cards Section */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Rooms/Flats Listings
          </h1>

          {filteredProperties.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">No results found.</p>
          )}

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <button
                key={property.id}
                type="button"
                className="text-left bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => alert(`Details: ${property.details}`)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {property.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {property.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <strong>Landlord:</strong> {property.landlord}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Area:</strong> {property.area}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Landmark:</strong> {property.landmark}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}