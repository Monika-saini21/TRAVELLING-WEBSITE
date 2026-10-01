import { Link } from "react-router-dom";

function PackageCard({ packageData }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">

      <img
        src={packageData.image}
        alt={packageData.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {packageData.title}
        </h2>

        <p className="mt-2 text-gray-500">
          {packageData.destination}
        </p>

        <p className="mt-3 text-gray-600">
          {packageData.duration}
        </p>

        <p className="mt-4 text-xl font-bold text-blue-600">
          {packageData.price}
        </p>

        <Link
          to={`/packages/${packageData.id}`}
          className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-2 text-white"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default PackageCard;