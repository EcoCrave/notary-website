export default function AdvantagesSection() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="w-[87%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <p className="text-lg uppercase tracking-widest text-gray-500 font-semibold">
            Why Notarity
          </p>
          <h2 className="text-5xl pr-10 font-bold text-gray-900 leading-tight mt-2">
            Advantages{" "}
            <span className="text-green-900">digital notary appointments</span>{" "}
            for your law firm
          </h2>
        </div>

        {/* Right Section - Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="bg-green-900 p-5 rounded text-white">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className=" hover:text-gray-200  text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-gray-900 p-5 rounded text-white">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className=" hover:text-gray-200  text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-gray-900 p-5 rounded text-white">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className=" hover:text-gray-200  text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 4 */}
          <div className="bg-gray-900 p-5 rounded text-white">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className=" hover:text-gray-200  text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
