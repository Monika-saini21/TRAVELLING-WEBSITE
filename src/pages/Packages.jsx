import PackageCard from "../components/PackageCard";
import packages from "../data/packages";
import {
  Map,
  Search,
  Sparkles,
  CalendarDays,
  WalletCards,
} from "lucide-react";

function Packages() {
  return (
    <div className="bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HERO / HEADING */}
        <div className="mb-12 text-center">

          <p className="flex items-center justify-center gap-2 font-serif text-lg italic text-cyan-500">
            <Map className="h-5 w-5" />
            Best Travel Deals
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Tour Packages
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose from our exciting tour packages and
            start your next adventure.
          </p>

        </div>


        {/* SEARCH STYLE BOX */}
        <div className="mb-12 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 shadow-xl md:p-8">

          


          <div className="grid gap-4 md:grid-cols-3">

            {/* DESTINATION */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <Map className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Destination
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Destination
                  </p>

                  <p className="text-sm text-gray-500">
                    Explore amazing places
                  </p>
                </div>

              </div>

            </div>


            {/* DURATION */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Duration
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Duration
                  </p>

                  <p className="text-sm text-gray-500">
                    Select your trip length
                  </p>
                </div>

              </div>

            </div>


            {/* BUDGET */}
            <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <WalletCards className="h-5 w-5 text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Budget
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Choose Budget
                  </p>

                  <p className="text-sm text-gray-500">
                    Find packages for you
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* AVAILABLE PACKAGES */}
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* LEFT BOX */}
          <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                <Map className="h-5 w-5 text-cyan-500" />
              </div>

              <div>

                <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-cyan-500">
                  <Sparkles className="h-3.5 w-3.5" />
                  Best Travel Deals
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Choose Your Package
                </h2>

              </div>

            </div>

          </div>


          {/* RIGHT BOX */}
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
              <Map className="h-5 w-5 text-blue-600" />
            </div>

            <div>

              <p className="text-xs text-gray-400">
                Available
              </p>

              <p className="font-bold text-slate-900">
                {packages.length} Packages
              </p>

            </div>

          </div>

        </div>


        {/* PACKAGE CARDS */}
        <div className="space-y-5">

          {packages.map((packageData) => (
            <div
              key={packageData.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <PackageCard packageData={packageData} />
            </div>
          ))}

        </div>


        {/* BOTTOM INFO */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-8 text-center text-white shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Map className="h-8 w-8" />
          </div>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Your Adventure Awaits
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-white/90">
            Choose the perfect tour package and create
            unforgettable memories around the world.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Packages;