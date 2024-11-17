import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const columns = {
    "Title 1": ["Title 1 item 1", "Title 1 item 2", "Title 1 item 3", "Title 1 item 4", "Title 1 item 5", "Title 1 item 6"],
    "Title 2": ["Title 2 item 1", "Title 2 item 2", "Title 2 item 3", "Title 2 item 4", "Title 2 item 5", "Title 2 item 6"],
    "Title 3": ["Title 3 item 1", "Title 3 item 2", "Title 3 item 3", "Title 3 item 4", "Title 3 item 5", "Title 3 item 6"],
    "Title 4": ["Title 4 item 1", "Title 4 item 2", "Title 4 item 3", "Title 4 item 4", "Title 4 item 5", "Title 4 item 6"],
    "Title 5": ["Title 5 item 1", "Title 5 item 2", "Title 5 item 3", "Title 5 item 4", "Title 5 item 5", "Title 5 item 6"],
  };

  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      {/* Section 1 */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
          {/* Left Part */}
          <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Join our newsletter</h2>
            <div className="flex items-center">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Send us your email address"
                  className="w-full border border-gray-700 p-3 pl-10 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">@</span>
              </div>
              <button className="ml-4 bg-white text-gray-900 px-6 py-3 rounded-md">Join</button>
            </div>
          </div>
          {/* Right Part */}
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#"><FaFacebookF className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
              <Link href="#"><FaLinkedinIn className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
              <Link href="#"><FaTwitter className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
              <Link href="#"><FaInstagram className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
              <Link href="#"><FaPinterest className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
              <Link href="#"><FaTiktok className="text-2xl cursor-pointer text-white hover:text-gray-400" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        {Object.entries(columns).map(([title, items], index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <ul>
              {items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link href="#" className="hover:underline text-gray-300 hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <div className="text-center">
        <p className="text-lg font-bold text-gray-300">
          All rights reserved 2024 Sayeed Enterprize
        </p>
      </div>
    </footer>
  );
};

export default Footer;
