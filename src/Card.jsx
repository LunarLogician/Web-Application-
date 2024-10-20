import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP directly
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import './App.css';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Card = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Create the GSAP animation for the card element
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0, // Start from fully transparent
        y: 50,      // Start from 50px below their position
      },
      {
        opacity: 1,  // End at full opacity
        y: 0,        // End at the original position
        duration: 1, // Duration of the animation
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: cardRef.current, // Start the animation when card is in view
          start: "top 80%", // Trigger animation when the top of the element is 80% from the top of the viewport
          toggleActions: "play none none none", // Only play the animation once
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-96 mx-5 my-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      <img
        className="w-10 h-10 object-contain flex justify-center mx-36"
        src={props.src}
        alt="Card"
      />

      <div className="font-bold text-3xl mb-4 text-white text-center">
        {props.title}
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-72 h-72 border-orange-600 border-opacity-100 border-solid border-8 rounded-3xl p-6 flex items-center justify-center bg-grey bg-opacity-75">
          <p className="text-gray-300 text-center text-base leading-relaxed">
            {props.text}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2">
          Learn More
        </button>
      </div>

      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default Card;
