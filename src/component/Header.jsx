import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo 1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-dark-blue-light-blue-darkBlue text-white">
      <div className="container flex justify-between items-center p-4">
        <div className="flex-shrink-0">
          <NavLink to="/about" onClick={handleLinkClick}>
            <img src={Logo} alt="Club Logo" className="h-16 w-29 object-contain mr-14 rounded-2xl" />
          </NavLink>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:ml-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-12 ml-auto">
            <NavLink
              to="/"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700 "
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700"
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/event"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700"
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              Events
            </NavLink>
            <NavLink
              to="/team"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700"
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              Team
            </NavLink>
            <NavLink
              to="/sponsor"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700"
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              Sponsor
            </NavLink>
            <NavLink
              to="/contact"
              className="block lg:inline-block text-2xl text-white hover:text-gray-700"
              activeClassName="text-gray-400"
              onClick={handleLinkClick}
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-8 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
        
      <nav className={`${isOpen ? 'block' : 'hidden'} lg:hidden w-full`}>
        <div className="flex flex-col items-center space-y-6 mt-4 mb-1">
          <NavLink
            to="/"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/event"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            Events
          </NavLink>
          <NavLink
            to="/team"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            Team
          </NavLink>
          <NavLink
            to="/sponsor"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            Sponsor
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-2xl text-white hover:text-gray-700"
            activeClassName="text-gray-400"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
