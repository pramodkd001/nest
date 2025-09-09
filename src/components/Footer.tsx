"use client";

import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand and Description */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Rentify</h1>
            <p className="text-sm text-gray-400">
              Your trusted platform for finding rooms, flats, and mess services.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center md:text-left">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Rentify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}