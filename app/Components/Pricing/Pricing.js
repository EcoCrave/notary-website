import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="w-[85%] mx-auto  space-y-8">
        <h1 className="lg:text-5xl text-4xl font-bold">Pricing</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-300 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-black font-bold mb-4">
              For notaries
              <br />
              <span className="text-gray-800 text-lg">
                who want to join the Notarize Network to take on-demand calls or
                provide online notarization to your customers
              </span>
            </h2>

            <p className="text-2xl text-black font-bold mb-4">Join For Free</p>
            <p className="space-y-2 mb-6">
              Earn $5 per completed notarization from our on-demand queue. Set
              the price when notarizing a document for your own customers.
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold hover:bg-green-700">
              Notarize a document now
            </button>
            <hr className="my-6 border-gray-700" />
            <ul className="text-lg space-y-3">
              <li>
                ✔ Work as much or as little as you want, taking meetings as an
                online notary
              </li>
              <li>✔ Electronic seal and notary journal included</li>
              <li>✔ Complete your notarization in minutes</li>
              <li>✔ Access and share your completed document immediately</li>
              <li>
                ✔ Set the price for your own customers – Notarize charges you
                $10 per notarization (+$3 for additional seals) and you keep the
                rest
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-white font-bold mb-4">
              For individuals
              <br />
              <span className="text-gray-400 text-lg">
                to get personal documents notarized
              </span>
            </h2>
            <p className="text-4xl text-white font-bold mb-4">$25</p>
            <p className="text-sm text-green-600 mb-6">
              with the Notarize<sup>SM</sup> Network
            </p>
            <ul className="space-y-2 mb-6">
              <li>$10 for each additional seal</li>
              <li>$10 for each on-demand witness</li>
              <li>$5 for each additional signer</li>
            </ul>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold hover:bg-green-700">
              Notarize a document now
            </button>
            <hr className="my-6 border-gray-700" />
            <ul className="text-lg space-y-3">
              <li>✔ Legal nationwide</li>
              <li>✔ Connect with a notary in less than a second</li>
              <li>✔ Complete your notarization in minutes</li>
              <li>✔ Access and share your completed document immediately</li>
              <li>
                ✔ Your account includes eSign with unlimited signers for $4 per
                transaction
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-300 text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-black font-bold mb-4">
              For businesses
              <br />
              <span className="text-gray-800 text-lg">
                that want one platform for online notarization, eSign and
                identity verification
              </span>
            </h2>
            <p className="text-2xl text-black font-bold mb-4">Varied Pricing</p>

            <p className="space-y-2 mb-6">
              Create a business account on Proof and secure all of your
              important transactions
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg w-full font-semibold hover:bg-green-700">
              Notarize a document now
            </button>
            <hr className="my-6 border-gray-700" />
            <ul className="text-lg space-y-3">
              <li>✔ Legal nationwide</li>
              <li>✔ Connect with a notary in less than a second</li>
              <li>✔ Complete your notarization in minutes</li>
              <li>✔ Access and share your completed document immediately</li>
              <li>
                ✔ Your account includes eSign with unlimited signers for $4 per
                transaction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
