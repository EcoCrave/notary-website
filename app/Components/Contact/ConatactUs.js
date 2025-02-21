"use client";

import { useState } from "react";
import { sendContactEmail } from "@/lib/resend";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      await sendContactEmail(name, email, message);
      toast.success("Email sent successfully!");
      e.target.reset(); // Clear the form
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="lg:flex">
            {/* Left Section - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Feel free to contact us any time. We will get back to you as
                soon as we can!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-md font-semibold hover:from-green-700 hover:to-green-800 transition duration-300 ease-in-out disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Section - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2 bg-gradient-to-br from-green-800 to-green-900 p-8 lg:p-12 text-white"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                Contact Info
              </h2>
              <ul className="space-y-6 mb-12">
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <span className="text-green-400 font-semibold text-lg mr-2">
                    Phone:
                  </span>
                  <span>+91 8009 054294</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <span className="text-green-400 font-semibold text-lg mr-2">
                    Email:
                  </span>
                  <span>info@notaryblocks.com</span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start"
                >
                  <span className="text-green-400 font-semibold text-lg mr-2">
                    Location:
                  </span>
                  <span>
                    1000+ Travel partners and 65+ Service city across India,
                    USA, Canada & UAE
                  </span>
                </motion.li>
              </ul>
              <div className="flex space-x-4">
                {[
                  FaFacebook,
                  FaInstagram,
                  FaLinkedin,
                  FaTiktok,
                  FaPinterest,
                ].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-2xl cursor-pointer hover:text-green-400 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
