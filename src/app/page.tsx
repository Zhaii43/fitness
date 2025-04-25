"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeout: NodeJS.Timeout;

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
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative z-40">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide text-black">
          <Link href="/">
            <a>MAPMYFITNESS</a>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          {/* Workouts Menu Item with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter} // Open dropdown when hovering over the group
            onMouseLeave={handleMouseLeave} // Close dropdown after a slight delay when leaving the group
          >
            <Link href="/dashboard">
              <a className="hover:text-blue-800">Workouts</a>
            </Link>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2"
                onMouseEnter={handleMouseEnter} // Keep open when hovering over dropdown
                onMouseLeave={handleMouseLeave} // Close after delay when leaving dropdown
              >
                <Link href="/dashboard">
                  <a className="block px-4 py-2 text-black hover:bg-gray-200">Dashboard</a>
                </Link>
              </div>
            )}
          </div>
          <Link href="#">
            <a className="hover:text-blue-800">Routes</a>
          </Link>
          <Link href="#">
            <a className="hover:text-blue-800">Community</a>
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link href="/login">
            <a className="text-black hover:underline">Log In</a>
          </Link>
          <Link href="/signup">
            <a className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Sign Up
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-end text-white px-6 sm:px-12">
        {/* Background Image */}
        <Image
          src="/images/background.jpg" // Update this with your actual image path
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content (Right Side) */}
        <div className="relative text-right max-w-lg pr-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase">Reach Your Best</h1>
          <p className="mt-4 text-lg">
            Whether you&apos;re training for a marathon or your biggest season yet, we&apos;re here to help you make serious progress.
          </p>

          {/* Call to Action */}
          <div className="mt-6 space-y-4">
            <Link href="/signup">
              <a className="bg-white text-black px-7 py-3 rounded-md font-medium hover:bg-gray-200">
                Sign Up
              </a>
            </Link>
            <p className="text-sm mt-4">
              Already a member? <Link href="/login"><a className="underline">Log In</a></Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
