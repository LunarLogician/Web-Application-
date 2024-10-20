import React from "react";
import Hero from "./Hero"; // Import the Hero component
import Card from "./Card"; // Import the Card component
import About from "./About"; // Import the About component
import Footer from "./Footer"; // Import the Footer component

const Body = () => {
  return (
    <div className="px-0 py-0">
      <Hero /> 
      <About />
      <div className="min-h-screen bg-gradient-to-b from-[#1e2836] to-gray-900 py-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center  font">How to Earn More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <Card 
                       src="vite.svg"

            title="1st Week"
            text="Earn 5 coins by watching videos consecutively for 7 days and get money in return."
          />
          <Card 
                       src="vite.svg"

            title="2nd Week"
            text="Earn 10 coins by participating in community discussions and completing challenges for 14 days."
          />
          <Card 
            src="vite.svg"
            title="3rd Week"
            text="Earn 25 coins by referring friends to join the platform and watching videos together for 21 days."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
