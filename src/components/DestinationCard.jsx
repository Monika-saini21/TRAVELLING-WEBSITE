import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">

      <img
        src={destination.image}
        alt={destination.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold text-gray-900">
          {destination.name}
        </h3>

        <p className="mt-1 text-gray-500">
          {destination.country}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <p className="font-bold text-blue-600">
              {destination.price}
            </p>
          </div>

            <Link
            to={`/destinations/${destination.id}`}
            className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-2 text-white"
            >
            Explore
            </Link>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;