"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import Slider from "react-slick";
import { useRef } from "react";

export default function TestimonialsSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      title: "Exceptional",
      text: "Exceptional service! The process was quick and seamless, saving me time and hassle. Highly recommend for online notarization",
      author: "Emily Carter",
      rating: 5,
    },
    {
      title: "Professional",
      text: "Super convenient and professional! The online notarization process was easy to follow, and the team was very helpful. Five stars!",
      author: "James Mitchell",
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrevious = () => sliderRef.current.slickPrev();

  return (
    <div className="bg-gray-900 py-12">
      <div className="w-[85%] mx-auto py-6 ">
        <div className="lg:flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className=" mb-8 md:mb-0">
            <motion.h2
              variants={fadeIn("left", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="md:text-5xl text-4xl font-bold text-white mb-4"
            >
              Don't just take our word for it...
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-200 mb-6"
            >
              Check out what our customers are saying about our fast, secure, and reliable online notarization services
            </motion.p>
            <div className="flex gap-2">
              <motion.button
                variants={fadeIn("up", 0, 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                onClick={goToPrevious}
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                variants={fadeIn("up", 0, 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                onClick={goToNext}
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={fadeIn("right", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="w-full lg:w-2/3"
          >
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex gap-1 text-green-500 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    <p className="text-gray-500 font-medium">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
