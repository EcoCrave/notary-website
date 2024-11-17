'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = {
    Home: "/",
    Pricing: "/pricing",
    Industries: "/industries",
    "How It Works": "/how-it-works",
    Login: "/login",
  };

  const industriesSubCategories = {
    "For Law Firms": "/industries/law-firms",
    "For Business": "/industries/business",
    "Company & Banks": "/industries/company-banks",
  };

  return (
    <nav
      className={`bg-gray-900 border-b p-6 font-bold border-none fixed top-0 w-full z-20 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Website Name */}
        <div className="text-xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="text-white hover:text-gray-300">Online Notary</a>
          </Link>
        </div>

        {/* Right Side - Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {Object.entries(menuItems).map(([label, path]) => (
            <div key={label} className="relative group">
              {label === "Industries" ? (
                <div className="relative">
                  <Link href={path} legacyBehavior>
                    <a className="text-white hover:text-gray-300 font-bold">{label}</a>
                  </Link>

                  {/* Subcategories */}
                  <div
                    className="absolute top-[69%] left-1/2 transform -translate-x-1/2 mt-2 rounded-md py-2 z-10 flex space-x-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out"
                  >
                    {/* extra div for click purpose */}
                    <div className="rounded-b-md flex whitespace-nowrap py-4 my-2 bg-gray-800 group-hover:mt-4 transition-all duration-300 ease-in-out">
                      {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                        <Link key={subLabel} href={subPath} legacyBehavior>
                          <a className="block px-4 py-2 text-white hover:bg-gray-700 rounded px-6 py-4 mx-4">
                            {subLabel}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={path} legacyBehavior>
                  <a
                    className={`${label === "How It Works" || label === "Login"
                        ? "px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-300"
                        : "text-white hover:text-gray-300"
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <VscThreeBars size={24} />
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 bg-gray-800 shadow-lg rounded-md py-2 flex flex-col space-y-1 z-10">
              {Object.entries(menuItems).map(([label, path]) => (
                <div key={label}>
                  {label === "Industries" ? (
                    <div>
                      <button
                        className="text-white block w-full text-left px-4 py-2 cursor-pointer"
                      >
                        {label}
                      </button>
                      <div className="ml-4 bg-gray-700 rounded-md py-2">
                        {Object.entries(industriesSubCategories).map(([subLabel, subPath]) => (
                          <Link key={subLabel} href={subPath} legacyBehavior>
                            <a className="block px-4 py-2 text-white hover:bg-gray-600 rounded">
                              {subLabel}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={path} legacyBehavior>
                      <a className="block px-4 py-2 text-white hover:text-gray-300">
                        {label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
