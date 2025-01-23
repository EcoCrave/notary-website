import React from "react";

const PriceGrid = (props) => {
  const features = [
    "Access to notary eJournal",
    "Admin dash history & audit logs",
    "RON",
    "IPEN",
    "Free eseal and DC for BN use ($202+ value!)",
    "Eligible to pick up session for Notary Blocks clients",
    "Send branded emails",
    "Add multiple parties",
    "Reusable template library",
    "Priority chat support",
    "Your profile listed on our notary directory",
    "Custom charges for session",
    "Bill client outside Notary Blocks",
    "Create and send invoices to your clients",
    "Ability to pre-tag documents",
    "Detailed reports for your sessions",
    "Access to do loan signings",
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "forever",
      features: [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      buttonText: "Get Started",
      buttonType: "outline",
    },
    {
      name: "Pro Hybrid",
      price: "$24.75",
      description: "/month billed yearly as $297/year",
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      buttonText: "Purchase Now",
      buttonType: "solid",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg ">
      <div className="mx-auto">
        {/* Pricing Table */}
        <div className="overflow-x-auto p-3">
          <table className="w-full border-collapse  border-gray-200">
            {/* Header */}
            <thead>
              <tr>
                <th className="text-left py-6 lg:w-1/2 bg-gray-50">
                  <div className="flex items-center gap-4 mb-6 p-4 rounded-lg">
                    <div>
                      <p className="text-black text-3xl font-semibold">
                        Get 1 free month discount on annual subscription
                      </p>
                      <a
                        href="#"
                        className="text-green-600 underline text-sm hover:text-blue-800"
                      >
                        Switch to Annual Plan See full fee schedule here.
                      </a>
                    </div>
                  </div>
                </th>
                {plans.map((plan, index) => (
                  <th
                    key={index}
                    className={`p-6 ${
                      plan.highlight
                        ? "bg-blue-50 text-green-900"
                        : "bg-gray-50 text-gray-900"
                    } text-center`}
                  >
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-4xl font-extrabold">{plan.price}</p>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                    <button
                      className={`mt-4 px-6 py-2 rounded-md font-semibold ${
                        plan.highlight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border border-gray-300 text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features */}
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-t">
                  <td className="p-4 text-gray-800 font-semibold">{feature}</td>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex} className="text-center p-4">
                      {plan.features[featureIndex] ? (
                        <span className="text-green-500">✔</span>
                      ) : (
                        <span className="text-gray-400">✖</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden mt-8 space-y-6">
          {plans.map((plan, planIndex) => (
            <div
              key={planIndex}
              className="bg-white rounded-lg shadow p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-center">{plan.name}</h3>
              <p className="text-center text-4xl font-bold mt-2">
                {plan.price}
              </p>
              <p className="text-center text-sm text-gray-600">
                {plan.description}
              </p>
              <button
                className={`mt-4 w-full py-2 rounded-md font-semibold ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {plan.buttonText}
              </button>
              <ul className="mt-4 space-y-2">
                {features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">{feature}</span>
                    {plan.features[featureIndex] ? (
                      <span className="text-green-500">✔</span>
                    ) : (
                      <span className="text-gray-400">✖</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceGrid;
