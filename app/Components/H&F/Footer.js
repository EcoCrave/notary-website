"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-lg py-20">
      <div className="w-[85%] mx-auto gap-8 grid grid-cols-2 md:grid-cols-5 ">
        {/* Logo and Address */}
        <div className=" space-y-5">
          <div className="flex items-center space-x-2">
            {/* <img src="" alt="Logo" className="h-8" /> */}
            <h3 className="text-3xl font-bold">Online Notary</h3>
          </div>
          <p className="text-gray-300">
            1 East Erie Street, 1 East Erie Street, 1 East Erie Street, 1 East
            Erie Street,
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-8 pt-3 ">
            <Link href="#">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="#">
              {" "}
              <FaXTwitter className="text-xl" />
            </Link>
            <Link href="#">
              {" "}
              <FaTiktok className="text-xl" />
            </Link>
            <Link href="#">
              {" "}
              <FaLinkedin className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-bold text-3xl mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="#" className="hover:underline">
                Bank
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Law Firm
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-bold text-3xl mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="#" className="hover:underline">
                Online Notarization
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                In-Person Notarization
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                eSignature
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-3xl mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="#" className="hover:underline">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Articals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Desclaimer & Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-5">
          <h3 className="font-bold text-2xl mb-4">
            Subscribe To Our Newsletter :
          </h3>
          <form className="flex flex-col space-y-1">
            <input
              type="email"
              className="p-3 outline-none rounded text-black"
              placeholder="email.."
            />
            <input
              type="submit"
              className="bg-green-700 hover:bg-green-900 outline-none px-4 py-2 rounded w-28 cursor-pointer"
            />
          </form>
        </div>

        {/* Forms */}
      </div>
    </footer>
  );
};

export default Footer;
