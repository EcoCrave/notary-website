"use client";
import { useState } from "react";

export default function InternationalServices() {
  const services = [
    {
      title: "Power of Attorney",
      content:
        "A Power of Attorney is a legal document that grants one person (the agent or attorney-in-fact) the authority to act on behalf of another person (the principal) in legal or financial matters. Businesses often use POAs to authorize individuals to make decisions, sign documents, and handle transactions on behalf of the company. This is particularly useful in scenarios where executives or key decision-makers are unavailable or when dealing with international transactions requiring local representation.",
    },
    {
      title: "Signature Notarisations",
      content:
        "Signature notarisation is a legal process that involves verifying the authenticity of a signature on a document. This ensures that the document has been signed willingly by the person involved.",
    },
    {
      title: "Affidavit",
      content:
        "An affidavit is a written statement that is sworn to be true by the person making it. Affidavits are commonly used in legal proceedings.",
    },
    {
      title: "Certified True Copy",
      content:
        "A certified true copy is a copy of a document that has been verified as an exact copy of the original. This is often required for official documents.",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="pb-10 mt-16">
      <div className=" py-10 flex flex-col space-y-10 w-[87%] mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 ">
          International Services
        </h2>
        <p className="text-gray-600 mt-4">
          Our international partner notaries offer a wide range of online
          notarial services tailored to the diverse needs of internationally
          active companies. Our platform ensures secure, efficient, and legally
          compliant notarial processes and helps companies to manage complex
          legal tasks seamlessly across borders. Below you will find an overview
          of the most important services offered by our partner notaries and how
          your company can benefit from them.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-start w-full max-w-4xl">
          {/* Service List */}
          <div className="flex flex-col space-y-4 md:w-1/3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 text-left font-medium border rounded-lg ${
                  selectedService.title === service.title
                    ? "text-green-900 border-green-900"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="mt-6 md:mt-0 md:ml-20 md:w-2/3">
            <h3 className="text-2xl font-bold text-green-900">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 mt-4">{selectedService.content}</p>
            <button className="mt-6 px-6 py-3 bg-green-900 text-white rounded-lg font-medium">
              Book appointment now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
