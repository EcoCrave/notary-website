import React from "react";

const Booking = () => {
  return (
    <section className="flex   mx-auto justify-center items-center py-12 px-4">
      <div className="bg-gray-900 shadow-md rounded-2xl text-center p-8 py-10 w-[87%] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Book an appointment now!
        </h2>

        {/* Description */}
        <p className="text-gray-200 w-1/2 text-lg mx-auto mb-6">
          Online notary appointments with our partner notary’s offices are a
          simple, fast and flexible way to handle your notarial matters. Book an
          appointment with a partner notary’s office in a video call now.
        </p>

        {/* Button */}
        <button className="bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-900 transition">
          Book an appointment
        </button>
      </div>
    </section>
  );
};

export default Booking;
