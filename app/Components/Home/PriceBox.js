export default function PriceBox() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg w-[87%] mx-auto flex flex-col md:flex-row md:justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">For individuals</h2>
        <p className="text-gray-400">
          Get personal documents notarized with the Notarize<sup>®</sup> Network
        </p>
        <div className="text-4xl font-bold mt-4">
          $25 <span className="text-lg font-normal">for first notary seal</span>
        </div>

        <button className="bg-green-500 text-white py-3 px-6 mt-6 rounded-md font-medium hover:bg-green-900 transition">
          Notarize a document now
        </button>

        <ul className="text-gray-400 space-y-1 mt-4">
          <li>$10 per additional notary seal</li>
          <li>$10 for each on-demand witness</li>
          <li>$5 for each additional signer</li>
        </ul>
      </div>

      {/* Divider Line for Large Screens */}
      <div className="hidden md:block border-r border-gray-700 mx-6"></div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-2 mt-6 md:mt-0">
        <h3 className="text-xl font-semibold">Includes:</h3>
        <ul className="text-gray-200 space-y-2">
          <li className="flex items-center">
            <span className="mr-2">✅</span> 24/7 access to on-demand notaries
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> Compliant notarization and eSign
            process
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> Complete your notarization in
            minutes
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> Connect with a notary in less than
            a second
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> Unlimited document uploads
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> Access & share your complete
            document immediately
          </li>
        </ul>
      </div>
    </div>
  );
}
