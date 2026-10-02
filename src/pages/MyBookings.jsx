import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function MyBookings() {
  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
  const hotels =
    JSON.parse(localStorage.getItem("hotelBookings")) || [];

  const flights =
    JSON.parse(localStorage.getItem("flightBookings")) || [];

  const userHotels = hotels.filter(
    (booking) => booking.userEmail === user?.email
  );

  const userFlights = flights.filter(
    (booking) => booking.userEmail === user?.email
  );

  setHotelBookings(userHotels);
  setFlightBookings(userFlights);
}, [user]);

  const cancelHotelBooking = (id) => {
  const updatedBookings = hotelBookings.filter(
    (booking) => booking.id !== id
  );

  localStorage.setItem(
    "hotelBookings",
    JSON.stringify(updatedBookings)
  );

  setHotelBookings(updatedBookings);
};

const cancelFlightBooking = (id) => {
  const updatedBookings = flightBookings.filter(
    (booking) => booking.id !== id
  );

  localStorage.setItem(
    "flightBookings",
    JSON.stringify(updatedBookings)
  );

  setFlightBookings(updatedBookings);
};

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Your Travel
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            My Bookings
          </h1>

          <p className="mt-3 text-gray-500">
            View all your hotel and flight bookings.
          </p>
        </div>

        {/* Hotel Bookings */}

        <h2 className="mb-5 text-2xl font-bold">
          🏨 Hotel Bookings
        </h2>

        {hotelBookings.length === 0 ? (
          <p className="mb-10 text-gray-500">
            No hotel bookings yet.
          </p>
        ) : (
          <div className="mb-10 grid gap-5 md:grid-cols-2">
            {hotelBookings.map((booking) => (
                <div
                    key={booking.id}
                    className="rounded-2xl bg-white p-6 shadow-md"
                   >
                    <h3 className="text-xl font-bold">
                    {booking.hotelName}
                    </h3>

                    <p className="mt-2 text-gray-500">
                    📍 {booking.location}
                    </p>

                    <div className="mt-4 space-y-2 text-gray-600">
                    <p>
                        <span className="font-semibold">Name:</span>{" "}
                        {booking.name}
                    </p>

                    <p>
                        <span className="font-semibold">Check-in:</span>{" "}
                        {booking.checkIn}
                    </p>

                    <p>
                        <span className="font-semibold">Check-out:</span>{" "}
                        {booking.checkOut}
                    </p>

                    <p>
                        <span className="font-semibold">Guests:</span>{" "}
                        {booking.guests}
                    </p>
                    </div>
                        <button
                            onClick={() => cancelHotelBooking(booking.id)}
                            className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                            >
                            Cancel Booking
                        </button>
                </div>
            ))}
            
          </div>
        )}

        {/* Flight Bookings */}

        <h2 className="mb-5 text-2xl font-bold">
          ✈️ Flight Bookings
        </h2>

        {flightBookings.length === 0 ? (
          <p className="text-gray-500">
            No flight bookings yet.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {flightBookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">
                  {booking.airline}
                </h3>

                <p className="mt-2 text-lg font-semibold">
                  {booking.from} → {booking.to}
                </p>

                <div className="mt-4 space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Name:</span>{" "}
                    {booking.name}
                  </p>

                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {booking.date}
                  </p>

                  <p>
                    <span className="font-semibold">Time:</span>{" "}
                    {booking.time}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Passengers:
                    </span>{" "}
                    {booking.passengers}
                  </p>
                </div>
                    <button
                    onClick={() => cancelFlightBooking(booking.id)}
                    className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                    >
                    Cancel Booking
                    </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default MyBookings;