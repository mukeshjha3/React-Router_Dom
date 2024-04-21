import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <div className="mt-2">
          <a to="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a to="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
