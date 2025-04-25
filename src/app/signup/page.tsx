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
        <div className="w-full max-w-md p-6 space-y-4 shadow-lg border rounded-md">
          <h1 className="text-2xl font-bold text-center">Welcome to MapMyFitness</h1>
          <p className="text-center text-sm">
            Already a member?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Log In
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            {/* Additional Form Fields */}
            {/* ... */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
