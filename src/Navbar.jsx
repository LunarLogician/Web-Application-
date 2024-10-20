import React from "react";
import './index.css';

const Navbar = () => { 
    return (
        <nav>
            <ul className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-black to-gray-900 w-full shadow-md px-6 py-4">
                <li className="text-white font-bold text-3xl cursor-pointer">Mining App</li>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <form action="/login" method="POST">
                        <button type="submit" className="text-gray-300 hover:text-pink-500 transition duration-300 px-4 py-2 bg-transparent border-none cursor-pointer">Login</button>
                    </form>
                    <form action="/watch-ad" method="POST">
                        <button type="submit" className="text-gray-300 hover:text-pink-500 transition duration-300 px-4 py-2 bg-transparent border-none cursor-pointer">Watch AD</button>
                    </form>
                    <form action="/earn-money" method="POST">
                        <button type="submit" className="text-gray-300 hover:text-pink-500 transition duration-300 px-4 py-2 bg-transparent border-none cursor-pointer">Earn Money</button>
                    </form>
                    <form action="/register" method="POST">
                        <button type="submit" className="text-pink-500 hover:text-pink-600 font-semibold bg-transparent border-2 border-pink-500 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out">Register</button>
                    </form>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
