"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY <= lastScrollY || scrollY <= 50);
      setLastScrollY(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "/pricing" },
    {
      label: "Industries",
      path: "/industries",
      subcategories: [
        { label: "For Law Firms", path: "/industries/law-firms" },
        { label: "For Business", path: "/industries/business" },
        { label: "Company & Banks", path: "/industries/company-banks" },
      ],
    },
    { label: "How It Works", path: "/how-it-works", special: true },
    { label: "Login", path: "/login", special: true },
  ];

  const handleSubMenuToggle = (label) => {
    setOpenSubMenu((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`bg-gray-900 p-6 font-bold fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Brand */}
        <Link
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200"
          href="/"
        >
          Online Notary
        </Link>

        {/* Right Side - Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map(({ label, path, subcategories, special }) => (
            <div key={label} className="relative group">
              {!subcategories ? (
                <Link
                  className={`${
                    special
                      ? "px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-300 transition duration-200"
                      : "text-white hover:text-gray-300 transition-colors duration-200"
                  }`}
                  href={path}
                >
                  {label}
                </Link>
              ) : (
                <>
                  <button className="text-white hover:text-gray-300 transition duration-200">
                    {label}
                  </button>
                  <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                    <div className="bg-gray-800 rounded-md shadow-md py-2">
                      {subcategories.map(
                        ({ label: subLabel, path: subPath }) => (
                          <Link
                            className="block px-6 py-2 text-white hover:bg-gray-700 rounded transition-colors duration-200"
                            key={subLabel}
                            href={subPath}
                          >
                            {subLabel}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <VscThreeBars size={28} />
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute right-0 top-full mt-2 bg-gray-800 shadow-md rounded-md py-4 z-40 w-11/12 mx-auto">
            {menuItems.map(({ label, path, subcategories }) => (
              <div
                key={label}
                className="border-b border-gray-700 last:border-0"
              >
                {!subcategories ? (
                  <Link
                    className="block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200"
                    href={path}
                  >
                    {label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubMenuToggle(label)}
                      className="block w-full text-left px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {label}
                    </button>
                    {openSubMenu === label && (
                      <div className="ml-4 bg-gray-700 rounded-md py-2 mt-2">
                        {subcategories.map(
                          ({ label: subLabel, path: subPath }) => (
                            <Link
                              className="block px-4 py-2 text-white hover:bg-gray-600 rounded transition duration-200"
                              key={subLabel}
                              href={subPath}
                            >
                              {subLabel}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
