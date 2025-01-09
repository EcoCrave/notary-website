"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import useFirebase from "@/app/Server/authentication/useFirebase";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { user } = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Pricing", path: "/pricing" },
    {
      label: "Industries",
      path: "#",
      subcategories: [
        { label: "For Law Firms", path: "/law-firm" },
        { label: "For Business", path: "/business" },
        { label: "Company & Banks", path: "/bank" },
      ],
    },
    {
      label: "Solutions",
      path: "#",
      subcategories: [
        { label: "Online Notarization", path: "/online-notary" },
        { label: "In-Person Notarization", path: "/in-person-notarization" },
        { label: "eSignature", path: "/esignature" },
      ],
    },
    {
      label: "Resources",
      path: "#",
      subcategories: [
        { label: "How It Works", path: "/how-it-works" },
        { label: "Blogs", path: "#" },
        { label: "Contact Us", path: "/contact" },
      ],
    },

    { label: "Login / Register", path: "/login", special: true },
  ];

  const handleSubMenuToggle = (label) => {
    setOpenSubMenu((prev) => (prev === label ? null : label));
  };

  return (
    <motion.nav
      variants={{
        hidden: { y: -100, opacity: 0 }, // Slide up and fade out
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }, // Slide down and fade in
      }}
      animate={isVisible ? "visible" : "hidden"}
      className="bg-gray-900 border-b py-6 font-bold fixed top-0 w-full z-20 transition-transform duration-300 ease-in-out"
    >
      <motion.div
        variants={fadeIn("down", 0, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="w-[85%] mx-auto flex justify-between items-center"
      >
        {/* Left Side - Website Name */}
        <Link
          className="text-xl font-bold text-white hover:text-gray-300"
          href="/"
        >
          Online Notary
        </Link>

        {/* Right Side - Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-5">
          {menuItems.map(({ label, path, subcategories, special }, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={label}
              className="relative group"
            >
              {!subcategories ? (
                <Link
                  className={`${
                    special
                      ? "px-4 py-2 bg-white text-gray-900 rounded hover:bg-green-800 hover:text-white"
                      : "text-white hover:text-gray-300"
                  }`}
                  href={path}
                >
                  {label}
                </Link>
              ) : (
                <>
                  <Link
                    className="text-white flex items-center gap-1 hover:text-gray-300"
                    href={path}
                  >
                    {label}
                    <FaChevronDown className="text-[10px] text-gray-300" />
                  </Link>
                  <div className="absolute md:w-64 -left-14 p-4 top-[69%] mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-400 ease-in-out">
                    <div className="bg-gray-800 rounded-md py-2">
                      {subcategories.map(
                        ({ label: subLabel, path: subPath }) => (
                          <Link
                            className="block px-6 py-4 text-white hover:bg-gray-700 rounded"
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
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <VscThreeBars size={24} />
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute right-0 top-full mt-2 bg-gray-800 shadow-lg rounded-md py-2 z-10 w-full">
            {menuItems.map(({ label, path, subcategories }) => (
              <div key={label} className="border-b border-gray-700">
                {!subcategories ? (
                  <Link
                    className="block px-4 py-2 text-white hover:text-gray-300"
                    href={path}
                  >
                    {label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubMenuToggle(label)}
                      className="block w-full text-left px-4 py-2 text-white"
                    >
                      {label}
                    </button>
                    {openSubMenu === label && (
                      <div className="ml-4 bg-gray-700 rounded-md py-2">
                        {subcategories.map(
                          ({ label: subLabel, path: subPath }) => (
                            <Link
                              className="block px-4 py-2 text-white hover:bg-gray-600 rounded"
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
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
