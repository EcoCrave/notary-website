"use client";

import React, { useState } from "react";

const Pricing = () => {
  const [notarySeats, setNotarySeats] = useState(1);
  const subscriptionCost = 43 + (notarySeats - 1) * 10;

  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Choose the best plan for your business
        </h1>
        <p className="text-gray-600 mt-2">
          No contracts. No surprise fees. Cancel anytime.
        </p>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button className="py-2 px-4 bg-black text-white rounded-md font-medium">
            For Notaries
          </button>
          <button className="py-2 px-4 border border-gray-300 rounded-md font-medium">
            For Businesses / GNW
          </button>
          <button className="py-2 px-4 border border-gray-300 rounded-md font-medium">
            For Closings
          </button>
          <button className="py-2 px-4 border border-gray-300 rounded-md font-medium">
            eSign Only
          </button>
        </div>
        <div className="mt-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Buy annual and get extra discount!</span>
          </label>
        </div>
      </header>

      {/* Pricing Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Dead Simple Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold">Dead Simple Pricing</h3>
          <p className="text-gray-600 mt-2">
            Simple subscription that's easy to understand and simple to use. No
            contracts. No hidden fees.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md">
            Get Business Pro
          </button>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center">
              <span>I have RON Certified in-house notaries</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
            <h3 className="text-4xl font-bold mt-4">Monthly Subscription</h3>
            <p className="text-3xl font-bold">${subscriptionCost}</p>
            <p className="text-gray-600">
              per user per month + 2 free sessions
            </p>
            <div className="mt-4">
              <label className="block text-sm">
                Notary Seats ({notarySeats})
              </label>
              <input
                type="range"
                min="1"
                max="15"
                value={notarySeats}
                onChange={(e) => setNotarySeats(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <PricingBox title="Notarization" cost={10} />
            <PricingBox title="Additional Stamps" cost={0} />
            <PricingBox title="Additional Signers" cost={5} />
            <PricingBox title="Additional Docs" cost={0} />
            <PricingBox title="Your Own Witness" cost={0} />
            <PricingBox title="BlueNotary Witness" cost={0} />
            <PricingBox title="Hidden Costs" cost={0} highlight />
          </div>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>
              ✔ Free 2 sessions per seat per month with Business Pro - saving
              $50 every month!
            </li>
            <li>✔ KBA & Biometrics Multi-Step identity verification process</li>
            <li>✔ Legal & Compliant with all 50 states</li>
            <li>✔ 10k+ Notaries available from 40 states</li>
            <li>✔ Live Chat Support with average response time under 5 mins</li>
            <li>✔ Templates for auto-tagging</li>
            <li>✔ Detailed Audit Logs & Video stored for 10+ years</li>
          </ul>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md">
            Get Business Pro
          </button>
        </div>

        {/* Enterprise Custom Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold">For Enterprise Custom Pricing</h3>
          <p className="text-gray-600 mt-2">
            For teams that require access to advanced features and tailored
            services.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md">
            Contact Sales
          </button>

          <ul className="mt-6 space-y-4">
            <li>✔ Volume Discount</li>
            <li>✔ Access to BlueNotary API</li>
            <li>✔ White Label Solution</li>
            <li>✔ CRM / LMS Integration</li>
            <li>✔ Dedicated Customer Success Manager</li>
            <li>✔ Custom Development</li>
            <li>✔ Priority Support</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-bold">Book a Demo Now</h3>
            <p className="text-gray-600">
              Book a demo with our customer expert team & get a live demo on a
              15 min call
            </p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md">
              Book a Demo Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingBox = ({ title, cost, highlight }) => (
  <div
    className={`p-4 border rounded-lg ${
      highlight ? "bg-yellow-100" : "bg-gray-50"
    }`}
  >
    <h4 className="text-sm font-semibold">{title}</h4>
    <p
      className={`text-xl font-bold ${
        highlight ? "text-blue-600" : "text-gray-800"
      }`}
    >
      ${cost}
    </p>
  </div>
);

export default Pricing;
