import { useParams } from "react-router-dom";
import packages from "../data/packages";

function PackageDetails() {
  const { id } = useParams();

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <h1 className="p-10 text-2xl">
        Package not found
      </h1>
    );
  }

  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg">

        <img
          src={packageData.image}
          alt={packageData.title}
          className="h-96 w-full object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            {packageData.title}
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            📍 {packageData.destination}
          </p>

          <p className="mt-5 text-gray-600">
            Enjoy an amazing travel experience with our{" "}
            {packageData.title} package.
          </p>

          <div className="mt-6 space-y-3">
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {packageData.duration}
            </p>

            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-blue-600">
                {packageData.price}
              </span>
            </p>
          </div>

          <button className="mt-7 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700">
            Book Package
          </button>

        </div>

      </div>
    </div>
  );
}

export default PackageDetails;