import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        Start Mining Today and Earn Money Effortlessly!
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Watch videos, learn how to mine, and get paid directly to your account.
      </p>
      <a href="/register" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </a>
    </div>
  );
};

export default Hero;
