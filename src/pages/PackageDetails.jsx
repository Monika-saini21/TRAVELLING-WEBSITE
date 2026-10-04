import { Link, useParams } from "react-router-dom";
import packages from "../data/packages";

function PackageDetails() {
  const { id } = useParams();

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Package Not Found 😔
        </h1>

        <Link
          to="/packages"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-12">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* IMAGE */}
        <img
          src={packageData.image}
          alt={packageData.name}
          className="h-80 w-full object-cover sm:h-96"
        />

        {/* CONTENT */}
        <div className="p-6 sm:p-10">

          <p className="font-semibold text-blue-600">
            ✈️ Travel Package
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            {packageData.name}
          </h1>

          <p className="mt-5 leading-7 text-gray-500">
            Enjoy an unforgettable journey with our{" "}
            <span className="font-semibold text-gray-700">
              {packageData.name}
            </span>
            . Explore beautiful places and enjoy a comfortable
            travel experience.
          </p>

          {/* PRICE */}
          <div className="mt-8 rounded-2xl bg-blue-50 p-5">
            <p className="text-sm text-gray-500">
              Package Price
            </p>

            <p className="mt-1 text-3xl font-bold text-blue-600">
              {packageData.price}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/hotels"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Book Hotel
            </Link>

            <Link
              to="/flights"
              className="rounded-xl border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              Book Flight
            </Link>

            <Link
              to="/packages"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}

export default PackageDetails;