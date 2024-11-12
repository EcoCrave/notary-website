import { FaRegClock, FaUsers, FaGlobeAmericas } from "react-icons/fa";

export default function AdvantagesForClients() {
  const advantages = [
    {
      icon: <FaRegClock className="w-6 h-6 text-white" />,
      title: "Time saving",
      description:
        "Your clients save time travelling to your office or the notary's office.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-white" />,
      title: "Flexibility",
      description:
        "Your clients can make notary appointments online flexibly and at very short notice.",
    },
    {
      icon: <FaGlobeAmericas className="w-6 h-6 text-white" />,
      title: "Digital business processes",
      description:
        "The documents are genuinely electronic and fit seamlessly into the digital business processes of your clients.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="w-[87%] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Advantages{" "}
            <span className="text-green-900">digital notary appointments</span>{" "}
            for your clients
          </h2>
        </div>

        {/* Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="bg-green-900 p-2 rounded-full mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-700 mt-2">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
