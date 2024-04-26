import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";

const navbar = () => {
  return (
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a href="/">
            <img src={logo} alt="logo" className="pl-7 pt-5" />
          </a>
        </div>

        <div className="flex space-x-14 items-center">
          <a
            href="/"
            className="text-#3A3740 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/"
            className="text-#3A3740 hover:text-blue-500 transition-colors duration-300"
          >
            Flashcard
          </a>
          <a
            href="/"
            className="text-#3A3740 hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-#3A3740 hover:text-blue-500 transition-colors duration-300"
          >
            FAQ
          </a>
          <button className="text-white hover:bg-blue-500 hover:text-white w-32 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-500">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
