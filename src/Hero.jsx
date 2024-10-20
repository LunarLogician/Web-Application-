import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to('.mainT', {
      opacity: 1,
      delay: 0.5,
      y: -20,
      rotationX: 360,
      

      stagger: 0.3, // Adds a stagger delay between each element
      ease: "power2.out", // Smooth easing curve for stagger animation
      duration: 1.5,
    });

    gsap.to('.mainButton', {
      opacity: 1,
      delay: 1.2, // Delays the button animation until the text animation is mostly done
      y: -10,
      ease: "power3.out", // Smooth easing for button animation
      duration: 1.2,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center text-center py-20">
      <h1 className="mainT opacity-0 text-4xl text-white mb-4">
        Start Mining Today and Earn Money Effortlessly!
      </h1>
      <p className="text-lg text-gray-300 mb-8 mainT opacity-0">
        Watch videos, learn how to mine, and get paid directly to your account.
      </p>
      <a
        href="/register"
        className="bg-blue-600 text-white py-2 px-4 rounded mainButton hover:bg-blue-700 transition duration-300 opacity-0 transform"
        onMouseEnter={() => {
          gsap.to(".mainButton", {
            scale: 1.05, // Slightly enlarges the button for smooth hover animation
            duration: 0.2,
            ease: "power1.out", // Smooth easing for hover animation
          });
        }}
        onMouseLeave={() => {
          gsap.to(".mainButton", {
            scale: 1, // Resets the button size on mouse leave
            duration: 0.2,
            ease: "power1.inOut",
          });
        }}
      >
        Get Started
      </a>
    </div>
  );
};

export default Hero;
