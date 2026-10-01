import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {hotel.name}
        </h2>

        <p className="mt-2 text-gray-500">
          📍 {hotel.location}
        </p>

        <p className="mt-3 text-yellow-500">
          ⭐ {hotel.rating}
        </p>

        <p className="mt-3 font-bold text-blue-600">
          {hotel.price}
        </p>

        <Link
          to={`/hotels/${hotel.id}`}
          className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-2 text-white"
        >
          Book Hotel
        </Link>

      </div>
    </div>
  );
}

export default HotelCard;