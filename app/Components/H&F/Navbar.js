// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaChevronDown, FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true); // Navbar visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle
//   const [showIndustries, setShowIndustries] = useState(false);
//   const [showSolutions, setShowSolutions] = useState(false);
//   const [showResources, setShowResources] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsVisible(scrollY <= lastScrollY || scrollY < 50); // Show navbar when scrolling up
//       setLastScrollY(scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className={`fixed top-0 w-full bg-gray-900 text-white z-50 transition-transform duration-300 ease-in-out ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="w-[87%] mx-auto py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold flex items-center">
//           <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
//           BlueNotary
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//           className="md:hidden text-white"
//         >
//           <FaBars size={24} />
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/pricing" className="hover:text-gray-300">
//             Pricing
//           </Link>
//           {/* Industries Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center hover:text-gray-300"
//               onClick={() => setShowIndustries(!showIndustries)}
//             >
//               Industries <FaChevronDown className="ml-1" />
//             </button>
//             <div
//               className={`absolute left-0 mt-2 bg-white text-black rounded shadow-md transition-all duration-300 ${
//                 showIndustries ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <ul className="py-2">
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Bank</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Business</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Law Firm</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Solutions Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center hover:text-gray-300"
//               onClick={() => setShowSolutions(!showSolutions)}
//             >
//               Solutions <FaChevronDown className="ml-1" />
//             </button>
//             <div
//               className={`absolute left-0 mt-2 bg-white text-black rounded shadow-md transition-all duration-300 ${
//                 showSolutions ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <ul className="py-2">
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Online Notarization</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">In-Person Notarization</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">eSignature</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Resources Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center hover:text-gray-300"
//               onClick={() => setShowResources(!showResources)}
//             >
//               Resources <FaChevronDown className="ml-1" />
//             </button>
//             <div
//               className={`absolute left-0 mt-2 bg-white text-black rounded shadow-md transition-all duration-300 ${
//                 showResources ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <ul className="py-2">
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">How it Works</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Blogs</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <Link href="#">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-black text-white px-4 py-6 transition-all duration-300 ${
//           isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
//         }`}
//       >
//         <ul className="space-y-4">
//           <li>
//             <Link href="/pricing" className="block hover:text-gray-300">
//               Pricing
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={() => setShowIndustries(!showIndustries)}
//               className="flex justify-between items-center w-full hover:text-gray-300"
//             >
//               Industries <FaChevronDown />
//             </button>
//             <ul
//               className={`pl-4 mt-2 space-y-2 text-gray-400 transition-all duration-300 ${
//                 showIndustries ? "block" : "hidden"
//               }`}
//             >
//               <li>
//                 <Link href="#" className="block">
//                   Bank
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="block">
//                   Business
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="block">
//                   Law Firm
//                 </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return <div>nav</div>;
};

export default Navbar;
