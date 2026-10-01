import PackageCard from "../components/PackageCard";
import packages from "../data/packages";

function Packages() {
  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Best Travel Deals
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Tour Packages
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose from our exciting tour packages and
            start your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((packageData) => (
            <PackageCard
              key={packageData.id}
              packageData={packageData}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Packages;