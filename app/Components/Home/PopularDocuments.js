import React from "react";

export default function PopularDocuments() {
  return (
    <div className="bg-gray-50 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900">
        Popular Documents to Notarize
      </h2>
      <p className="text-gray-600 mt-2">
        Looking for a specific document or template? Our document library has
        you covered.
      </p>

      <div className="flex flex-wrap justify-center mt-8 space-x-8">
        {[
          "Affidavit of Identity",
          "Power of Attorney",
          "PS-1583",
          "DS-3053",
          "Minor Travel Consent",
          "Bill of Sale",
        ].map((doc, index) => (
          <DocumentItem key={index} title={doc} />
        ))}
      </div>
    </div>
  );
}

function DocumentItem({ title }) {
  return (
    <div className="flex items-center space-x-2 text-gray-900 font-medium">
      <span>{title}</span>
      <span className="text-blue-600 text-xl">&#8594;</span> {/* Arrow icon */}
    </div>
  );
}
