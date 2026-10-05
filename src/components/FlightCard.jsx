import { Link } from "react-router-dom";
import { Plane, CalendarDays, Clock, IndianRupee } from "lucide-react";

function FlightCard({ flight }) {
  return (
    <div className="p-4 md:p-5">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        {/* AIRLINE */}
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
            <Plane className="h-5 w-5 text-cyan-500" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Airline
            </p>

            <h3 className="font-bold text-slate-900">
              {flight.airline}
            </h3>
          </div>
        </div>


        {/* ROUTE */}
        <div className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-cyan-50 p-4">

          <div className="text-center">
            <p className="text-xs text-gray-400">
              From
            </p>

            <p className="font-bold text-slate-900">
              {flight.from}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-px w-6 bg-cyan-300"></div>
            <Plane className="h-5 w-5 rotate-90 text-cyan-500" />
            <div className="h-px w-6 bg-cyan-300"></div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">
              To
            </p>

            <p className="font-bold text-slate-900">
              {flight.to}
            </p>
          </div>

        </div>


        {/* DATE & TIME */}
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 p-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <CalendarDays className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Date
            </p>

            <p className="font-bold text-slate-900">
              {flight.date}
            </p>

            <div className="mt-1 flex items-center gap-1 text-sm text-cyan-600">
              <Clock className="h-3.5 w-3.5" />
              {flight.time}
            </div>
          </div>

        </div>


        {/* PRICE + BUTTON */}
        <div className="flex flex-1 items-center justify-between gap-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 p-4 text-white">

          <div>
            <p className="text-xs text-white/70">
              Starting From
            </p>

            <div className="mt-1 flex items-center">
              <IndianRupee className="h-4 w-4" />

              <span className="text-xl font-bold">
                {flight.price}
              </span>
            </div>
          </div>

          <Link
            to={`/flights/${flight.id}`}
            className="whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}

export default FlightCard;