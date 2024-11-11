export default function AdvantagesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
            Why Notarity
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mt-2">
            Advantages{" "}
            <span className="text-green-900">digital notary appointments</span>{" "}
            for your law firm
          </h2>
        </div>

        {/* Right Section - Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Effort reduction
            </h3>
            <p className="text-gray-700 mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>

          {/* Benefit 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Process handling
            </h3>
            <p className="text-gray-700 mt-2">
              Stay in control of the process of online notary appointments and
              receive notifications on the progress of your clients'
              appointments.
            </p>
          </div>

          {/* Benefit 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Digital Deeds
            </h3>
            <p className="text-gray-700 mt-2">
              Receive notarially executed deeds reliably on the same day in
              digital form.
            </p>
          </div>

          {/* Benefit 4 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Service</h3>
            <p className="text-gray-700 mt-2">
              Offer your clients a modern and time-saving service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
