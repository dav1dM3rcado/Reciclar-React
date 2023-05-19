import Bot from "./layout/Bot";
import React, { useState } from 'react';


function Pichila() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white shadow-lg px-1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="#" className="flex items-center py-4 px-2">
              <img
                src="https://w7.pngwing.com/pngs/963/751/png-transparent-test-case-logo-software-testing-engineering-use-case-business-blue-people-innovation.png"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
            </a>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
            >
              Home
            </a>
            <a
              href="#"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Bot showMenu={showMenu} toggleMenu={toggleMenu} />
     
    </div>
  );
}

export default Pichila;
