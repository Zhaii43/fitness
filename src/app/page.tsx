"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null); // Use useRef to store the timeout

  const handleMouseEnter = () => {
    if (timeout.current) {
      clearTimeout(timeout.current); // Clear any existing timeout
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay closing to avoid abrupt closing when hovering over options
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative z-40">
        <div className="text-lg font-bold tracking-wide text-black">
          <Link href="/">MAPMYFITNESS</Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/dashboard" className="hover:text-blue-800">
              Workouts
            </Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
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
          <Link href="/login" className="text-black hover:underline">
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-end text-white px-6 sm:px-12">
        <Image
          src="/images/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative text-right max-w-lg pr-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold uppercase"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Reach Your Best
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Whether you&apos;re training for a marathon or your biggest season yet, we&apos;re here
            to help you make serious progress.
          </motion.p>
          <motion.div
            className="mt-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              href="/signup"
              className="bg-white text-black px-7 py-3 rounded-md font-medium hover:bg-gray-200"
            >
              Sign Up
            </Link>
            <p className="text-sm mt-4">
              Already a member?{" "}
              <Link href="/login" className="underline">
                Log In
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* New Section with Animation */}
      <section className="flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 py-16">
        <motion.div
          className="flex-1 text-center sm:text-left max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold mb-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Set Goals.
          </motion.h2>
          <motion.h1
            className="text-3xl font-bold mb-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Log Workouts.
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold mb-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Stay On Track.
          </motion.h1>
          <motion.p
            className="text-lg text-white-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              GET STARTED
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-0.5 mt-8 sm:mt-0 sm:ml-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Image
            src="/images/21.jpg"
            width={500}
            height={500}
            alt="Fitness Goal"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Image with Description */}
      <section className="py-16 px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row items-center bg-gray-100 border border-gray-300 rounded-lg shadow-md p-8">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/images/1.png" // Replace with your actual image path
              width={500}
              height={300}
              alt="Featured Workout"
              className="rounded-md"
            />
          </div>

          {/* Description */}
          <div className="flex-1 sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-4 text-black">YOU VS THE YEAR 2025</h2>
            <p className="text-black mb-4 font-bold mb-4">
              Log 1,025 km in 2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6 mt-auto">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Developed by Hanzzzz. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
