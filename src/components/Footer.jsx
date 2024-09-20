// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Shopinista</h1>
            <p className="mt-2">Your one-stop shop for all things trendy and stylish!</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.15-2.71 9.84 9.84 0 0 1-3.1 1.18 4.92 4.92 0 0 0-8.4 4.48 13.94 13.94 0 0 1-10.11-5.14 4.9 4.9 0 0 0 1.52 6.57 4.87 4.87 0 0 1-2.22-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.42 9.86 9.86 0 0 1-6.1 2.1 9.72 9.72 0 0 1-1.17-.07 13.94 13.94 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14v-.64a9.93 9.93 0 0 0 2.46-2.53z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 3h-15C3.224 3 3 3.224 3 3.5v15c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-15c0-.276-.224-.5-.5-.5zM9.049 17.1H6.694V10h2.355v7.1zM7.872 8.922c-.76 0-1.378-.62-1.378-1.382 0-.76.619-1.381 1.378-1.381.76 0 1.381.621 1.381 1.381 0 .763-.621 1.382-1.381 1.382zm9.229 8.178h-2.353v-3.534c0-.842-.015-1.923-1.171-1.923-1.172 0-1.351.915-1.351 1.861v3.596h-2.351V10h2.256v.978h.03c.314-.593 1.084-1.217 2.23-1.217 2.385 0 2.826 1.569 2.826 3.61v4.729z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163C6.423 2.163 2 6.586 2 12.163 2 16.967 5.657 21 10.254 22v-6.606h-2.77v-2.231h2.77v-1.659c0-2.744 1.625-4.257 4.113-4.257 1.191 0 2.437.215 2.437.215v2.66h-1.374c-1.354 0-1.777.846-1.777 1.716v1.866h2.983l-.477 2.231h-2.506V22C18.343 21 22 16.967 22 12.163 22 6.586 17.577 2.163 12 2.163z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Shopinista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
