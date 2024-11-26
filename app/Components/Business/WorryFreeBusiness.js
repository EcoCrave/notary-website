import Image from "next/image";
import React from "react";

const WorryFreeBusiness = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Testimonial Text */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            “With Proof, we now have the technology to identify and automate the
            transactions that need to be notarized and securely signed. The
            Proof platform gives us greater visibility into the customers we are
            transacting with and increases trust in the documents we rely upon.
            Consolidating to one identity management platform reduces our fees
            and complexity, and better positions us to securely serve our
            customers online.”
          </p>
          <div>
            <p className="font-semibold text-gray-900">Morgan Cavallo</p>
            <p className="text-gray-500">Director, Titling Compliance, Vroom</p>
          </div>
        </div>

        {/* Testimonial Image */}
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className=" rounded-full ">
            <Image
              src="/img/bedi.svg" // Replace this path with the actual path to the image
              alt="Morgan Cavallo"
              width={260}
              height={260}
              className="object-cover rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorryFreeBusiness;
