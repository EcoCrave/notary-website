"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const menuItems = {
    Home: "/",
    Pricing: "/pricing",
    Industries: "/industries",
    "How It Works": "/how-it-works",
    Login: "/login"
  };

  const industriesSubCategories = {
    "For Law Firms": "/industries/law-firms",
    "For Business": "/industries/business",
    "Company & Banks": "/industries/company-banks"
  };

  return (
    <nav className="bg-white border-b border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Website Name */}
        <div className="text-xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 hover:text-blue-500">Online Notary</a>
          </Link>
        </div>

        {/* Right Side - Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Map through the main menu items */}
          {Object.entries(menuItems).map(([label, path]) => (
            <div key={label} className="relative group">
              {label === "Industries" ? (
                <>
                  <button
                    className="text-gray-800 hover:text-blue-500"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    {label}
                  </button>
                  {/* Subcategories */}
                  {isIndustriesOpen && (
                    <div
                      className="absolute top-8 bg-white shadow-lg rounded-md py-2"
                      onMouseEnter={() => setIsIndustriesOpen(true)}
                      onMouseLeave={() => setIsIndustriesOpen(false)}
                    >
                      {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                        <Link key={subLabel} href={subPath} legacyBehavior>
                          <a className="block px-4 py-2 text-gray-800 hover:bg-blue-100">{subLabel}</a>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={path} legacyBehavior>
                  <a
                    className={`${
                      label === "How It Works" || label === "Login"
                        ? "px-4 py-2 bg-blue-100 text-blue-500 rounded hover:bg-blue-200"
                        : "text-gray-800 hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <VscThreeBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {Object.entries(menuItems).map(([label, path]) => (
            <div key={label} className="relative">
              {label === "Industries" ? (
                <>
                  <button
                    className="text-gray-800 block w-full text-left px-4 py-2"
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  >
                    {label}
                  </button>
                  {isIndustriesOpen && (
                    <div className="ml-4">
                      {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                        <Link key={subLabel} href={subPath} legacyBehavior>
                          <a className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                            {subLabel}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={path} legacyBehavior>
                  <a
                    className={`block w-full text-left px-4 py-2 ${
                      label === "How It Works" || label === "Login"
                        ? "bg-blue-100 text-blue-500 rounded hover:bg-blue-200"
                        : "text-gray-800 hover:bg-blue-100"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
