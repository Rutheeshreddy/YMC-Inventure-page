import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand */}
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold">YMC-Inventure</h1>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4">
              <li>
                <a href={`${import.meta.env.BASE_URL}/`} className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}/about`} className="hover:text-gray-400">About</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4">
              <li>
                <a href="https://www.facebook.com" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; 2024 YMC-Inventure. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
