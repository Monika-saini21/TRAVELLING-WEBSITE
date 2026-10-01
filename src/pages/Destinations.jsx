import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

function Destinations() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Explore The World 🌍
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            All Destinations
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose your favorite destination and start planning
            your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Destinations;