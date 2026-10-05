import HotelCard from "../components/HotelCard";
import hotels from "../data/hotels";
import {
  Hotel,
  MapPin,
  CalendarDays,
  Search,
  Sparkles,
} from "lucide-react";

function Hotels() {
  return (
    <div className="bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HERO / HEADING */}
        <div className="mb-12 text-center">

          <p className="flex items-center justify-center gap-2 font-serif text-lg italic text-cyan-500">
            <Hotel className="h-5 w-5" />
            Stay With Comfort
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Find Your Hotel
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover comfortable hotels and resorts for your
            perfect trip.
          </p>

        </div>


        {/* SEARCH BOX */}
        <div className="mb-12 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 shadow-xl md:p-8">

          


          <div className="grid gap-4 md:grid-cols-3">

            {/* DESTINATION */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <MapPin className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Destination
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Location
                  </p>

                  <p className="text-sm text-gray-500">
                    Where do you want to stay?
                  </p>
                </div>

              </div>

            </div>


            {/* CHECK IN */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Check In
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Select Date
                  </p>

                  <p className="text-sm text-gray-500">
                    Arrival date
                  </p>
                </div>

              </div>

            </div>


            {/* GUESTS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <Hotel className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Guests
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Guests
                  </p>

                  <p className="text-sm text-gray-500">
                    Adults & children
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* AVAILABLE HOTELS */}
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* LEFT BOX */}
          <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                <Hotel className="h-5 w-5 text-cyan-500" />
              </div>

              <div>
                <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-cyan-500">
                  <Sparkles className="h-3.5 w-3.5" />
                  Available Hotels
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Choose Your Stay
                </h2>
              </div>

            </div>

          </div>


          {/* RIGHT BOX */}
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
              <Hotel className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Available
              </p>

              <p className="font-bold text-slate-900">
                {hotels.length} Hotels
              </p>
            </div>

          </div>

        </div>


        {/* HOTEL CARDS */}
        <div className="space-y-5">

          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <HotelCard hotel={hotel} />
            </div>
          ))}

        </div>


        {/* BOTTOM INFO */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-8 text-center text-white shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Hotel className="h-8 w-8" />
          </div>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Find Your Perfect Stay
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-white/90">
            Choose a comfortable hotel and make your journey
            relaxing and unforgettable.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hotels;