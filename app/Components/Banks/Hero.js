import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gray-50 py-16 ">
      <div className=" mx-auto w-[87%] flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 ">
          <div className="pr-9 space-y-8">
            <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
              The future is digital
            </p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Digitise your law firm's cooperation with notaries
            </h1>
            <p className="text-gray-700">
              Notarity helps you and your clients to digitalise the cooperation
              with notaries. This enables you to work more efficiently, save
              time and money and offer your clients an innovative service.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-green-900 text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition">
                Arrange a demo appointment
              </button>
              <button className="border border-green-900 hover:text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition">
                Services
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="w-1/2 ">
          <Image
            className="rounded-xl w-full "
            width={500}
            height={500}
            src="/img/digitalize.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
