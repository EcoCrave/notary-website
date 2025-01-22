// import { Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";

export default function Appointments() {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Left section - Appointments */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-purple-950">
            Next appointments
          </h1>
          <div className="flex items-center gap-2">
            <button variant="ghost" size="icon">
              {/* <Search className="h-4 w-4" /> */}
            </button>
            <button variant="ghost" size="icon">
              {/* <ChevronLeft className="h-4 w-4" /> */}
            </button>
            <button variant="ghost" size="icon">
              {/* <ChevronRight className="h-4 w-4" /> */}
            </button>
            <button variant="ghost" size="icon">
              {/* <Calendar className="h-4 w-4" /> */}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SXhbL0ZlcijsQDqX3hnKbBreGlLOds.png"
            alt="No appointments illustration"
            width={200}
            height={200}
            className="opacity-75"
          /> */}
          <p className="text-gray-500">You have no current appointments.</p>
        </div>
      </div>

      {/* Right section - Book appointment */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-950 mb-4">
            Book appointment
          </h2>
          <p className="text-gray-600">
            Usually, an online meeting with the notary can take place within the
            next 24h.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6">
          <button className="bg-purple-600 hover:bg-purple-700">
            Book appointment
          </button>

          <div className="relative w-full h-64 mt-8">
            <Image
              src="/placeholder.svg"
              alt="Calendar illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
