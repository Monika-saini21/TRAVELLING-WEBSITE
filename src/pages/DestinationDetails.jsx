import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Destination Not Found 😔
        </h1>

        <Link
          to="/destinations"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* IMAGE */}
        <img
          src={destination.image}
          alt={destination.name}
          className="h-80 w-full object-cover sm:h-96"
        />

        {/* CONTENT */}
        <div className="p-6 sm:p-10">

          <p className="font-semibold text-blue-600">
            📍 {destination.country}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            {destination.name}
          </h1>

          <p className="mt-5 leading-7 text-gray-500">
            Explore the beautiful destination of{" "}
            <span className="font-semibold text-gray-700">
              {destination.name}
            </span>
            . Discover amazing places, enjoy local experiences
            and create unforgettable travel memories.
          </p>

          {/* PRICE */}
          <div className="mt-8 rounded-2xl bg-blue-50 p-5">
            <p className="text-sm text-gray-500">
              Starting Price
            </p>

            <p className="mt-1 text-3xl font-bold text-blue-600">
              {destination.price}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/packages"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              View Packages
            </Link>

            <Link
              to="/destinations"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back to Destinations
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}

export default DestinationDetails;