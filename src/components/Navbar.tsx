"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FiSun, FiMoon, FiSearch, FiMenu, FiX, FiUser } from "react-icons/fi";

// Define the prop types for Navbar
type NavbarProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};


export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string; role?: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        setAuthLoading(false);
        return;
      }
      try {
        const res = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setIsLoggedIn(true);
          setUser(data.user);
        } else {
          // Token invalid or expired
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch {
        setIsLoggedIn(false);
        setUser(null);
      }
      setAuthLoading(false);
    };
    checkAuth();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearchFocus = () => {
    if (window.location.pathname === "/") {
      router.push("/rooms"); // Redirect to /rooms when search bar is focused on the landing page
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-100/80 dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="text-xl font-bold text-pink-900 dark:text-blue-400 hover:text-green-500 dark:hover:text-green-300 transition-transform transform hover:scale-110 duration-300"
        >
          <div className="flex items-center">
            <img
              src="/logo/pdLogo.png"
              alt="Nestora Logo"
              className="h-12 w-auto"
            />
            <img
              src="/logo/nestoraLogo.png"
              alt="Nestora Logo"
              className="h-12 w-auto"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-100/80 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <a
            href="/"
            className="text-gray-700 dark:text-gray-300 font-bold hover:text-green-500 dark:hover:text-green-300 transition-transform transform hover:scale-110 duration-300"
          >
            Home
          </a>
          <a
            href="/mess"
            className="text-gray-700 dark:text-gray-300 font-bold hover:text-green-500 dark:hover:text-green-300 transition-colors duration-300 transition-transform transform hover:scale-110 duration-300"
          >
            Mess
          </a>
          <a
            href="/rooms"
            className="text-gray-700 dark:text-gray-300 font-bold hover:text-green-500 dark:hover:text-green-300 transition-colors duration-300 transition-transform transform hover:scale-110 duration-300"
          >
            Rooms/Flats
          </a>
        </div>

        {/* Search Bar for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-300">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User Profile and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300"
          >
            {darkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>

          {/* Profile Icon */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-bold hover:text-blue-500 dark:hover:text-blue-300"
              onClick={() => {
                if (isLoggedIn) {
                  handleLogout();
                } else {
                  router.push("/login"); // Redirect to login page
                }
              }}
            >
              <FiUser className="w-6 h-6" />
              <span>{authLoading ? "..." : isLoggedIn ? "Logout" : "Login"}</span>
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}