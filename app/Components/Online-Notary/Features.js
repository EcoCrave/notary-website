import React from "react";

const Features = () => {
  return (
    <div className="mt-28 bg-gray-50 py-10">
      <div className="w-[85%] mx-auto">
        <div className="lg:text-center space-y-3">
          <h2 className="text-4xl lg:text-5xl space-y-3 font-bold">
            Our Features
          </h2>
          <h3 className="text-4xl font-semibold">
            Get ahead of your competition
          </h3>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white hover:-translate-y-2  transform  cursor-pointer duration-1000 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Notarize Anywhere</h3>
              <p className="  text-lg mt-2">
              Forget scheduling a visit to a notary or running to one.
             Notary Blocks lets you notarize papers conveniently from your home or business using a computer, 
             iPad, or even your phone.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white hover:-translate-y-2  transform  cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Fast & Secure</h3>
              <p className="   text-lg mt-2">
              Simplified Procedure, Unmatched Competency Notarized in less than ten minutes, get your document Your one-stop shop for closing business, 
              completing documentation, and guaranteeing document processing security is Notary Blocks
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white hover:-translate-y-2  transform  cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">
              Fraud-Proof Notarization              </h3>
              <p className="   text-lg mt-2">
              Notary Blocks offers fraud-resistant notarizations and secure document handling through biometric scanning, blockchain technology, and bank-level verification.

              </p>
            </div>
            {/* Benefit 4 */}
            <div className="bg-white   transform hover:-translate-y-2 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Certified Reliability</h3>
              <p className="   text-lg mt-2">
              Notary Blocks ensures reliability and adherence to industry standards by complying with MISMO certification and SOC2 requirements.

              </p>
            </div>
            <div className="bg-white   transform hover:-translate-y-2 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Time saving</h3>
              <p className="   text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            {/* <div className="bg-white   transform hover:-translate-y-2  cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Time saving</h3>
              <p className="   text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
