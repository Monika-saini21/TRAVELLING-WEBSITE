import FlightCard from "../components/FlightCard";
import flights from "../data/flights";
import {
  Plane,
  MapPin,
  CalendarDays,
  Navigation,
  
  Sparkles,
} from "lucide-react";

function Flights() {
  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* HERO / HEADING */}
        <div className="mb-12 text-center">

          <p className="flex items-center justify-center gap-2 font-serif text-lg italic text-cyan-500">
            <Plane className="h-5 w-5" />
            Fly Anywhere
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Find Your Flight
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover comfortable flights and book your next
            unforgettable journey with ease.
          </p>

        </div>


        {/* SEARCH BOX */}
        <div className="mb-12 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 shadow-xl md:p-8">

          

          <div className="grid gap-4 md:grid-cols-3">

            {/* FROM */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <Navigation className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    From
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Your Location
                  </p>

                  <p className="text-sm text-gray-500">
                    Departure
                  </p>
                </div>

              </div>

            </div>


            {/* TO */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    To
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Destination
                  </p>

                  <p className="text-sm text-gray-500">
                    Arrival
                  </p>
                </div>

              </div>

            </div>


            {/* DATE */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <CalendarDays className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Travel Date
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Select Date
                  </p>

                  <p className="text-sm text-gray-500">
                    Your journey
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* AVAILABLE FLIGHTS */}
        <div className="mb-6 flex items-end justify-between">

          <div>

            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-500">
              <Sparkles className="h-4 w-4" />
              Available Flights
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Choose Your Flight
            </h2>

          </div>

          <div className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-cyan-600 shadow-sm sm:flex">
            <Plane className="h-4 w-4" />
            {flights.length} Flights
          </div>

        </div>


        {/* FLIGHT CARDS */}
        <div className="space-y-5">

          {flights.map((flight) => (
            <div
              key={flight.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <FlightCard flight={flight} />
            </div>
          ))}

        </div>


        {/* BOTTOM INFO */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-8 text-center text-white shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Plane className="h-8 w-8" />
          </div>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Your Journey Starts Here
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-white/90">
            Choose your preferred flight and get ready to explore
            amazing destinations around the world.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Flights;