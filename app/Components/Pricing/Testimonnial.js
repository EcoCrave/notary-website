import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-gray-50 bg-gradient-to-b from-blue-50 to-white py-10">
      <div className=" w-[85%] mx-auto py-10  ">
        <div className=" mx-auto text-center space-y-6">
          {/* Quotation and Text */}
          <p className="text-gray-600 text-lg font-medium flex justify-center items-start">
            <span className="text-6xl text-gray-300 -mt-3 -mr-4">&ldquo;</span>
            <span className="text-2xl lg:text-3xl">
              We've been able to{" "}
              <strong>streamline our processes considerably</strong> and{" "}
              <strong>make our customers lives easier</strong> using BlueNotary.
              Their product is great and is constantly being improved by the
              development team to improve the user experience and features. They
              are <strong>customer focused</strong> and swift to respond to any
              issues or provide assistance promptly which is vital in the legal
              services industry where time is of the essence. By far one of the
              most innovative products for signing documents remotely!
            </span>
          </p>

          {/* Proof Logo and Name */}
          <div className="mt-6">
            <Image
              src="/img/bedi1.webp"
              width={50}
              height={50}
              alt="Proof Logo"
              className="mx-auto mb-2"
            />
            <p className=" text-3xl font-bold">
              Julie McGinnis, SVP of Operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
