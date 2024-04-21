import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/ExtraPage" className="text-white hover:text-gray-300">
              ExtraPage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
