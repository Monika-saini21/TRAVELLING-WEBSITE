import HotelCard from "../components/HotelCard";
import hotels from "../data/hotels";

function Hotels() {
  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Stay With Comfort 🏨
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Find Your Hotel
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover comfortable hotels and resorts for
            your perfect trip.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hotels;