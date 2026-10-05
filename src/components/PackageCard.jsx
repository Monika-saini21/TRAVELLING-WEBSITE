import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Map,
} from "lucide-react";

function PackageCard({ packageData }) {
  return (
    <div className="p-4 md:p-5">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        {/* PACKAGE IMAGE */}
        <div className="overflow-hidden rounded-xl lg:w-64">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="h-48 w-full object-cover transition duration-300 hover:scale-105 lg:h-40"
          />
        </div>


        {/* PACKAGE NAME */}
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 p-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
            <Map className="h-5 w-5 text-cyan-500" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Tour Package
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              {packageData.title}
            </h2>
          </div>

        </div>


        {/* DESTINATION */}
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-cyan-50 p-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
            <MapPin className="h-5 w-5 text-cyan-500" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Destination
            </p>

            <p className="font-semibold text-slate-900">
              {packageData.destination}
            </p>
          </div>

        </div>


        {/* DURATION */}
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 p-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <CalendarDays className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Duration
            </p>

            <p className="font-bold text-slate-900">
              {packageData.duration}
            </p>
          </div>

        </div>


        {/* PRICE + BUTTON */}
        <div className="flex flex-1 items-center justify-between gap-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 p-4 text-white">

          <div>
            <p className="text-xs text-white/70">
              Starting From
            </p>

            <div className="mt-1 flex items-center gap-1">
              <Wallet className="h-4 w-4" />

              <span className="text-xl font-bold">
                {packageData.price}
              </span>
            </div>
          </div>

          <Link
            to={`/packages/${packageData.id}`}
            className="whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;