import FlightCard from "../components/FlightCard";
import flights from "../data/flights";

function Flights() {
  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Fly Anywhere ✈️
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Find Your Flight
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Search and book flights for your next adventure.
          </p>
        </div>

        <div className="space-y-6">
          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Flights;