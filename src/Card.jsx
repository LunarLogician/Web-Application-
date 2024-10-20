import React from 'react';
import './App.css';

const Card = (props) => {
  return (
    <div className="w-96 mx-5 my-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img className="w-10 h-10 object-contain flex justify-center mx-36" src={props.src} alt="Card" />

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

      <div className="flex justify-center mt-4">
      </div>
    </div>
  );
};

export default Card;
