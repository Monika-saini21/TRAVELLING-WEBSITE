import { Link } from "react-router-dom";

function FlightCard({ flight }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          ✈️ {flight.airline}
        </h2>

        <p className="font-bold text-blue-600">
          {flight.price}
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">

        <div>
          <p className="text-sm text-gray-500">
            From
          </p>
          <p className="font-semibold">
            {flight.from}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            To
          </p>
          <p className="font-semibold">
            {flight.to}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Date & Time
          </p>
          <p className="font-semibold">
            {flight.date}
          </p>
          <p className="text-gray-600">
            {flight.time}
          </p>
        </div>

      </div>

      <Link
        to={`/flights/${flight.id}`}
        className="mt-5 inline-block rounded-full bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Book Flight
      </Link>

    </div>
  );
}

export default FlightCard;