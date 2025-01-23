"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaTiktok, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-lg">
      <div className="w-[85%] mx-auto gap-8 grid grid-cols-2 py-14 md:grid-cols-3 lg:grid-cols-5">
        {/* Logo and Address */}
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" space-y-5"
        >
          <div className="flex items-center space-x-2">
            <Link
              className="text-xl font-bold text-white hover:text-gray-300"
              href="/"
            >
              <Image
                alt=""
                src="/img/notary-logo.png"
                width={150}
                height={120}
              />
            </Link>
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
        </motion.div>

        {/* Industries */}
        <motion.div
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="font-bold text-3xl mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="/bank" className="hover:underline">
                Bank
              </Link>
            </li>
            <li>
              <Link href="/business" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="/law-firm" className="hover:underline">
                Law Firm
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          variants={fadeIn("up", 0, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="font-bold text-3xl mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="/online-notary" className="hover:underline">
                Online Notarization
              </Link>
            </li>
            <li>
              <Link href="/in-person-notarization" className="hover:underline">
                In-Person Notarization
              </Link>
            </li>
            <li>
              <Link href="/esignature" className="hover:underline">
                eSignature
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          variants={fadeIn("up", 0, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="font-bold text-3xl mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 ">
            <li>
              <Link href="/how-it-works" className="hover:underline">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Articals
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/policy" className="hover:underline">
                Desclaimer & Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          variants={fadeIn("up", 0, 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="space-y-5"
        >
          <h3 className="font-bold text-2xl mb-4">
            Subscribe To Our Newsletter :
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              className="p-2 outline-none rounded text-black"
              placeholder="email.."
            />
            <input
              type="submit"
              value="Submit"
              className="bg-green-700 hover:bg-green-900 text-md outline-none rounded w-24 py-1 cursor-pointer"
            />
          </form>
        </motion.div>
      </div>
      <div className="bg-gray-950  py-5">
        <div className="text-center space-y-3 lg:flex justify-between w-[85%] mx-auto">
          <p className="text-gray-400 text-sm pt-4">
            © 2025 Online Notary. All Rights Reserved
          </p>
          <Image
            src="/img/payment.png"
            width={500}
            height={500}
            alt="Picture of payment gateway"
            className="w-80 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
