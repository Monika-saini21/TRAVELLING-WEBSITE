import { useParams } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <h1 className="p-10 text-2xl">Destination not found</h1>;
  }

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg">

        <img
          src={destination.image}
          alt={destination.name}
          className="h-96 w-full object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold">
            {destination.name}
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            {destination.country}
          </p>

          <p className="mt-6 text-gray-600">
            Explore the beautiful destination of{" "}
            {destination.name}. Discover amazing places,
            beautiful views and unforgettable experiences.
          </p>

          <p className="mt-6 text-2xl font-bold text-blue-600">
            Starting from {destination.price}
          </p>

          <button className="mt-6 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default DestinationDetails;