import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-6 justify-center">
      {/* Home Link Card */}
      <Link
        to="/"
        className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-60"
      >
        <span className="text-lg font-medium">Explore Home</span>
      </Link>

      {/* Community Link Card */}
      <Link
        to="/community"
        className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-60"
      >
        <span className="text-lg font-medium">Explore Community</span>
      </Link>

      {/* Team Link Card */}
      <Link
        to="/team"
        className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-60"
      >
        <span className="text-lg font-medium">Meet the Team</span>
      </Link>

      {/* About Us Link Card */}
      <Link
        to="/about"
        className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-60"
      >
        <span className="text-lg font-medium">About Us</span>
      </Link>

      {/* Contact Us Link Card */}
      <Link
        to="/contact"
        className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-60"
      >
        <span className="text-lg font-medium">Contact Us</span>
      </Link>
    </div>
  );
};

export default NavigationBar;
