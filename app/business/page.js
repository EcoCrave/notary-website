export default function BusinessService() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
            The future is digital
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Digitise your law firm's cooperation with notaries
          </h1>
          <p className="text-gray-700">
            Notarity helps you and your clients to digitalise the cooperation
            with notaries. This enables you to work more efficiently, save time
            and money and offer your clients an innovative service.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-green-900 text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition">
              Arrange a demo appointment
            </button>
            <button className="border border-green-900 text-green-900 py-3 px-6 rounded-md font-medium hover:bg-green-900 transition">
              Services
            </button>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Signatur</h3>
            <p className="text-gray-500 mt-2">Ausgewählter Signaturanbieter:</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Swisscom QES</li>
              <li>Handy-Signatur</li>
              <li>Mobile ID</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Terminvereinbarung
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Teilnehmernamen</li>
              <li>Dokumente hochladen</li>
              <li>Anhang hinzufügen</li>
            </ul>
            <button className="mt-4 text-green-900 font-medium hover:underline">
              Termin erstellen
            </button>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Vorbereitung
            </h3>
            <p className="text-gray-700 mt-2">
              Bitte halten Sie Ihre Ausweisdokumente bereit und scannen Sie Ihr
              Unterschriftszertifikat.
            </p>
            <button className="mt-4 bg-green-900 text-white py-2 px-4 rounded-md font-medium hover:bg-green-900">
              Weiter
            </button>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Jederzeit und überall mit Notar:innen zusammenarbeiten
            </h3>
            <p className="text-gray-700 mt-2">
              Notarity ist die benutzerfreundlichste Plattform zur vollständig
              digitalen Zusammenarbeit mit Notaren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
