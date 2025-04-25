"use client";

import { useState } from "react";
import Link from "next/link";

// Simple calendar component
const Calendar = () => {
  const daysInMonth = new Date(2025, 4, 0).getDate(); // Example for May 2025
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: number) => {
    const clickedDate = new Date(today.getFullYear(), today.getMonth(), date);
    setSelectedDate(clickedDate);
  };

  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1;
        const isToday = day === today.getDate();
        const isSelected = selectedDate?.getDate() === day;

        return (
          <div
            key={day}
            className={`p-4 cursor-pointer ${isToday ? "bg-blue-200" : "bg-white"} ${
              isSelected ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            <span className={`block ${isToday ? "text-blue-800 font-bold" : "text-gray-800"}`}>{day}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [view, setView] = useState<'calendar' | 'detailed'>('calendar'); // Track the current view
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

  const switchView = (view: 'calendar' | 'detailed') => {
    setView(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative z-40">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide text-black">
          <Link href="/">MAPMYFITNESS</Link>
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8 text-black font-medium relative">
          {/* Workouts Menu Item with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter} // Open dropdown when hovering over the group
            onMouseLeave={handleMouseLeave} // Close dropdown after a slight delay when leaving the group
          >
            <Link href="#" className="hover:text-blue-800">
              Workouts
            </Link>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2"
                onMouseEnter={handleMouseEnter} // Keep open when hovering over dropdown
                onMouseLeave={handleMouseLeave} // Close after delay when leaving dropdown
              >
                <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
                  Dashboard
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-blue-800">Routes</Link>
          <Link href="#" className="hover:text-blue-800">Community</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link href="/login" className="text-black hover:underline">Log In</Link>
          <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Overview Section */}
        <section className="mb-8 text-black">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
        </section>

        {/* View Selector */}
        <section className="mb-8 flex space-x-6">
          <button 
            className={`text-lg font-medium ${view === 'calendar' ? 'text-blue-800' : 'text-black'}`} 
            onClick={() => switchView('calendar')}
          >
            Calendar View
          </button>
          <button 
            className={`text-lg font-medium ${view === 'detailed' ? 'text-blue-800' : 'text-black'}`} 
            onClick={() => switchView('detailed')}
          >
            Detailed Stats
          </button>
        </section>

        {/* Stats Section - Conditionally Rendered */}
        {view === 'calendar' ? (
          <section className="bg-white p-6 text-black shadow-lg rounded-lg mb-8">
            <h2 className="text-xl font-semibold">April 2025</h2>
            <div className="mt-4 flex space-x-8 justify-between">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">View</span>
                <span className="text-xl">Activity</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">0</span>
                <span className="text-sm">Distance (mi)</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">0</span>
                <span className="text-sm">Duration (s)</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">0</span>
                <span className="text-sm">Calories (kcal)</span>
              </div>
            </div>
            <div className="mt-4">
              <Calendar />
            </div>
          </section>
        ) : (
          <section className="bg-white p-6 shadow-lg rounded-lg mb-8 text-black">
            <h2 className="text-xl font-semibold">Detailed Stats</h2>
            <p className="mt-4 text-lg">Dive into your detailed performance metrics.</p>
            {/* Example Detailed Stats */}
            <div className="mt-4">
              <p>Total Workouts: 150</p>
              <p>Completed Challenges: 5</p>
              <p>Active Goals: 3</p>
              <p>Calories Burned: 12,500 kcal</p>
              <p>Total Distance: 250 miles</p>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <div>
            <h5 className="text-xl font-semibold">MAPMYFITNESS</h5>
            <p className="text-sm">Your fitness journey starts here.</p>
          </div>
          <div>
            <p className="text-sm">&copy; 2025 Developed by Hanzzzz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
