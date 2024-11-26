"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResorces, setShowResorces] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY <= lastScrollY || scrollY < 50);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full  bg-gray-900 text-white z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[87%]  mx-auto  py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          BlueNotary
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-white"
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-gray-300">
              Industries <FaChevronDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Bank</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Business</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Lawfirm</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-gray-300">
              Solutions <FaChevronDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Online Notarization</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">In-Person Notarization</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">eSignature</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center hover:text-gray-300">
              Resorces <FaChevronDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">How it works</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Blogs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 border rounded hover:bg-gray-800"
            >
              Login/Register
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/pricing"
                className="block text-white hover:text-gray-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowIndustries(!showIndustries)}
                className="flex justify-between items-center w-full hover:text-gray-300"
              >
                Industries <FaChevronDown />
              </button>
              {showIndustries && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="block">
                      Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block">
                      Law Firm
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setShowSolutions(!showSolutions)}
                className="flex justify-between items-center w-full hover:text-gray-300"
              >
                Solutions <FaChevronDown />
              </button>
              {showSolutions && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="block">
                      Online Notarization
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block">
                      In-Person Notarization
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block">
                      eSignature
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setShowResorces(!showResorces)}
                className="flex justify-between items-center w-full hover:text-gray-300"
              >
                Resources <FaChevronDown />
              </button>
              {showResorces && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="block">
                      Solution 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block">
                      Solution 2
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/login" className="block hover:text-gray-300">
                Login/Register
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/signup"
              className="block px-4 py-2 bg-white text-black text-center rounded hover:bg-gray-200"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
