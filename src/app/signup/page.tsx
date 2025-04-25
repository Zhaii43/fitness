"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

// Define interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  country: string;
  newsletter: boolean;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    country: "Philippines",
    newsletter: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement; // Type assertion for checkbox
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white relative z-40">
        <div className="text-lg font-bold tracking-wide text-black">
          <Link href="/">MAPMYFITNESS</Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="hover:text-blue-800">
              Workouts
            </Link>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="dashboard" className="block px-4 py-2 text-black hover:bg-gray-200">
                  Dashboard
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-blue-800">
            Routes
          </Link>
          <Link href="#" className="hover:text-blue-800">
            Community
          </Link>
        </nav>
        <div className="space-x-4">
          <Link href="/login" className="text-black hover:text-blue-800">
            Log In
          </Link>
        </div>
      </header>

      {/* Signup Form */}
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="w-full max-w-md p-6 space-y-4 shadow-lg border rounded-md mb-10"> {/* Added margin-bottom */}
          <h1 className="text-2xl font-bold text-center">Welcome to MapMyFitness</h1>
          <p className="text-center text-sm">
            Already a member?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Log In
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full border px-4 py-2 rounded"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full border px-4 py-2 rounded"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
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
            <div>
              <label className="block text-sm font-medium mb-1">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                className="w-full border px-4 py-2 rounded"
                value={formData.birthdate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                name="gender"
                className="w-full border px-4 py-2 rounded"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country/Region</label>
              <select
                name="country"
                className="w-full border px-4 py-2 rounded"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="Philippines">Philippines</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                className="mr-2"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label className="text-sm">
                Yes, I would like to receive email updates and offers from MapMyFitness and affiliates.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6 mt-auto mb-10">
        <div className="text-center">
          <p>&copy; 2025 Developed by Hanzzzz. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
