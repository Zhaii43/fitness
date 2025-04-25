"use client"; // Add this directive for client-side functionality

import { useState, ChangeEvent, FormEvent } from "react";

// Define interface for form data (fixed capitalization to follow convention)
interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay closing to avoid abrupt closing when hovering over options
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white relative z-40">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide text-black">
          MAPMYFITNESS
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          {/* Workouts Menu Item with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="hover:text-blue-800">
              Workouts
            </a>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href="dashboard" className="block px-4 py-2 text-black hover:bg-gray-200">
                  Dashboard
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-blue-800">Routes</a>
          <a href="#" className="hover:text-blue-800">Community</a>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <a href="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Sign Up
          </a>
        </div>
      </header>

      {/* Login Form Section */}
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="w-full max-w-md p-6 space-y-4 shadow-lg border rounded-md">
          <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
          <p className="text-center text-sm">
            New here? <a href="/signup" className="text-blue-500 underline">Sign Up</a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full border px-4 py-2 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full border px-4 py-2 rounded"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-800"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6 mt-auto mb-4">
        <div className="text-center">
          <p>&copy; 2025 Developed by Hanzzzz. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
