import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLock, FaHeart } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 text-gray-300 pmt-10">
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
            <p className="text-base">
              We are dedicated to helping our users succeed in the world of cryptocurrency mining. Join our community and start your journey today!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex justify-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="list-none space-y-2 text-center">
                <li><a href="/" className="hover:text-blue-400 transition duration-200">Home</a></li>
                <li><a href="/about" className="hover:text-blue-400 transition duration-200">About</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition duration-200">Contact</a></li>
                <li><a href="/faq" className="hover:text-blue-400 transition duration-200">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-end">
            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-8 h-8 hover:text-blue-500 transition duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-8 h-8 hover:text-blue-400 transition duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 hover:text-pink-500 transition duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 hover:text-blue-700 transition duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust and Payment Section */}
        <div className="flex justify-between items-center border-t border-gray-700 mt-6 pt-4 text-sm">
          <div className="flex items-center space-x-2">
            <SiGoogle className="w-6 h-6 text-blue-500" />
            <span>Trusted by Google</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLock className="w-6 h-6 text-green-500" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="w-6 h-6 text-red-500" />
            <span>Made by Muhammad Zubair</span>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
