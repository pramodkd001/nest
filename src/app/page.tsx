"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState(""); // Add state for search query

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Rentify
          </h1>
          <TypingAnimation>away from home but at home </TypingAnimation>
          <br />
          <a
            href="/rooms"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Rooms & Flats
          </a>
        </div>
      </section>
      
      <div>
        <img src="public/logo/images.jpeg" alt="" />
      </div>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Room or Mess?
          </h2>
          <a
            href="/register"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}