import React from "react";
import Card from "./Card"; // Ensure you have a Card component
import Card2 from "./Card2"; // Ensure you have a Card2 component

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e2836] to-gray-900 flex flex-col items-center justify-center py-20 px-5">
      <div className="relative min-w-full max-w-5xl mb-10">
        <div className="absolute inset-0 rounded-lg border-4 border-blue-500 glow-effect"></div>
        <div className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-6">About Our Mining Platform</h2>
          <p className="text-lg text-gray-300 mb-8 text-justify ">
            Welcome to our mining platform, where you can start earning money by watching videos and engaging with our community.
            Our website is designed for both beginners and experienced miners, offering a user-friendly experience and valuable resources to help you succeed in the world of cryptocurrency mining.
          </p>

          {/* Card Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <Card2 
              className="bg-gray-700 border border-blue-500 p-6 rounded-lg shadow-md"
              src="https://img.icons8.com/?size=100&id=98973&format=png&color=FFFFFF"
              title="How It Works"
              text="Learn how to earn rewards by watching videos."
            />
            <Card2 
              className="bg-gray-700 border border-blue-500 p-6 rounded-lg shadow-md"
              src="https://img.icons8.com/?size=100&id=xgzck7TcTBcj&format=png&color=FFFFFF"
              title="Earn Bonuses"
              text="Sign up today and start your journey towards financial freedom!"
            />
            <Card2 
              className="bg-gray-700 border border-blue-500 p-6 rounded-lg shadow-md"
              src="https://img.icons8.com/?size=100&id=45153&format=png&color=FFFFFF"
              title="Join Us"
              text="Join our community for more insights."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
