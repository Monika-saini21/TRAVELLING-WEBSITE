import { Link, useParams } from "react-router-dom";
import packages from "../data/packages";
import {
  Map,
  MapPin,
  CalendarDays,
  Wallet,
  Hotel,
  Plane,
  ArrowLeft,
} from "lucide-react";

function PackageDetails() {
  const { id } = useParams();

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <Map className="h-7 w-7 text-red-500" />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Package Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            The package you are looking for does not exist.
          </p>

          <Link
            to="/packages"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* IMAGE */}
          <div className="relative">

            <img
              src={packageData.image}
              alt={packageData.title || packageData.name}
              className="h-80 w-full object-cover sm:h-105"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white sm:left-10">

              <p className="flex items-center gap-2 text-sm font-medium text-white/80">
                <Plane className="h-4 w-4" />
                Travel Package
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                {packageData.title || packageData.name}
              </h1>

            </div>

          </div>


          {/* CONTENT */}
          <div className="p-6 sm:p-10">

            {/* INTRO */}
            <div>

              <p className="flex items-center gap-2 font-serif text-lg italic text-cyan-500">
                <Map className="h-5 w-5" />
                Explore The World
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                Enjoy an unforgettable journey with our{" "}
                <span className="font-semibold text-slate-800">
                  {packageData.title || packageData.name}
                </span>
                . Explore beautiful places and enjoy a comfortable
                travel experience.
              </p>

            </div>


            {/* DETAILS BOXES */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* DESTINATION */}
              <div className="rounded-2xl bg-cyan-50 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Destination
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      {packageData.destination || "Explore Destination"}
                    </p>
                  </div>

                </div>

              </div>


              {/* DURATION */}
              <div className="rounded-2xl bg-blue-50 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Duration
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      {packageData.duration || "5 Days"}
                    </p>
                  </div>

                </div>

              </div>


              {/* PRICE */}
              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <Wallet className="h-5 w-5 text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Package Price
                    </p>

                    <p className="mt-1 text-xl font-bold text-cyan-600">
                      {packageData.price}
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* PRICE HIGHLIGHT */}
            <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 text-white md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm text-white/80">
                  Starting From
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <Wallet className="h-5 w-5" />

                  <span className="text-3xl font-bold">
                    {packageData.price}
                  </span>
                </div>

              </div>

              <p className="max-w-md text-sm leading-6 text-white/80">
                Book your hotel and flight and start planning
                your perfect travel experience.
              </p>

            </div>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/hotels"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                <Hotel className="h-5 w-5" />
                Book Hotel
              </Link>

              <Link
                to="/flights"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-600 transition hover:bg-cyan-50"
              >
                <Plane className="h-5 w-5" />
                Book Flight
              </Link>

              <Link
                to="/packages"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 sm:px-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PackageDetails;