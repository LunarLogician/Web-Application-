import React from 'react';
import './App.css';

const Card = (props) => {
  return (
    <div className="max-w-sm mx-auto my-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-700 to-gray-900 px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
      <img className="w-12 h-12 object-contain flex justify-center mx-auto" src={props.src} alt="Card" />

      <div className="font-bold text-xl md:text-3xl mb-4 text-white text-center">
        {props.title}
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-72 h-72 border-blue-500 border-opacity-40 border-solid border-2 rounded-xl p-6 flex items-center justify-center bg-gray-800 bg-opacity-80">
          <p className="text-gray-200 text-base md:text-lg text-center leading-relaxed">
            {props.text}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:px-6 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
          Learn More
        </button>
      </div>

      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default Card;
