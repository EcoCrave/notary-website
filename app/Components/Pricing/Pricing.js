import React from "react";

const Pricing = () => {
  // Pricing cards data
  const pricingCards = [
    {
      id: 1,
      title: "For individuals",
      description: "to get personal documents notarized",
      price: "$25",
      priceDescription: "with the Notarize™ Network",
      details: [
        "$10 for each additional seal",
        "$10 for each on-demand witness",
        "$5 for each additional signer",
      ],
      buttonText: "Notarize a document now",
      features: [
        "Legal nationwide",
        "Connect with a notary in less than a second",
        "Complete your notarization in minutes",
        "Access and share your completed document immediately",
        "Your account includes eSign with unlimited signers for $4 per transaction",
      ],
      bgColor: "bg-gray-900",
      textColor: "text-white",
      buttonColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "For notaries",
      description:
        "who want to join the Notarize Network to take on-demand calls or provide online notarization to your customers",
      price: "Join for free",
      priceDescription:
        "Earn $5 per completed notarization from our on-demand queue. Set the price when notarizing a document for your own customers.",
      buttonText: "Get started today",
      features: [
        "Work as much or as little as you want, taking meetings as an online notary",
        "Electronic seal and notary journal included",
        "Comprehensive platform and fraud training",
        "Set the price for your own customers – Notarize charges you $10 per notarization (+$3 for additional seals) and you keep the rest",
      ],
      bgColor: "bg-blue-100",
      textColor: "text-gray-900",
      buttonColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "For businesses",
      description:
        "that want one platform for online notarization, eSign and identity verification",
      price: "Varied Pricing",
      priceDescription:
        "Create a business account on Proof and secure all of your important transactions",
      buttonText: "Learn more on Proof.com",
      features: [
        "24/7 access to the Notarize Network",
        "Compliant with notarization laws in all 50 states",
        "Allows your business to use employee notaries to serve transactions in-house",
        "Online notarization and eSignature in an all-in-one platform",
      ],
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      buttonColor: "bg-blue-500",
    },
  ];

  // Debugging
  console.log(pricingCards);

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* <div className="container mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Pricing</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} ${card.textColor} rounded-lg shadow-lg p-8`}
          >
            <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
            <p className="text-sm mb-4">{card.description}</p>
            <h3 className="text-3xl font-bold mb-2">{card.price}</h3>
            <p className="text-sm mb-6">{card.priceDescription}</p>
            <div className="text-sm mb-4 space-y-1">
              {card.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
            <button
              className={`${card.buttonColor} text-white font-semibold py-3 px-6 rounded-md w-full mb-6`}
            >
              {card.buttonText}
            </button>
            <ul className="space-y-2 text-sm">
              {card.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Pricing;
