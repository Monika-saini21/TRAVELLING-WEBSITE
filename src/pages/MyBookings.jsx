import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function MyBookings() {
  const { user } = useAuth();

  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);

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
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this hotel booking?"
    );

    if (!confirmCancel) {
      return;
    }

    const allBookings =
      JSON.parse(localStorage.getItem("hotelBookings")) || [];

    const updatedBookings = allBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "hotelBookings",
      JSON.stringify(updatedBookings)
    );

    setHotelBookings(
      updatedBookings.filter(
        (booking) => booking.userEmail === user?.email
      )
    );

    alert("Hotel booking cancelled!");
  };

  const cancelFlightBooking = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this flight booking?"
    );

    if (!confirmCancel) {
      return;
    }

    const allBookings =
      JSON.parse(localStorage.getItem("flightBookings")) || [];

    const updatedBookings = allBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "flightBookings",
      JSON.stringify(updatedBookings)
    );

    setFlightBookings(
      updatedBookings.filter(
        (booking) => booking.userEmail === user?.email
      )
    );

    alert("Flight booking cancelled!");
  };

  return (
    <div className="px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            My Bookings 📋
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your hotel and flight bookings.
          </p>
        </div>

        {/* HOTEL BOOKINGS */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            🏨 Hotel Bookings
          </h2>

          {hotelBookings.length === 0 ? (
            <p className="rounded-2xl bg-gray-50 p-6 text-gray-500">
              No hotel bookings found.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {hotelBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl bg-white p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {booking.hotelName}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    📍 {booking.location}
                  </p>

                  <div className="mt-4 space-y-2 text-gray-600">
                    <p>👤 {booking.name}</p>
                    <p>📧 {booking.email}</p>
                    <p>📅 Check-in: {booking.checkIn}</p>
                    <p>📅 Check-out: {booking.checkOut}</p>
                    <p>👥 Guests: {booking.guests}</p>
                  </div>

                  <button
                    onClick={() =>
                      cancelHotelBooking(booking.id)
                    }
                    className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                  >
                    Cancel Booking
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FLIGHT BOOKINGS */}
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            ✈️ Flight Bookings
          </h2>

          {flightBookings.length === 0 ? (
            <p className="rounded-2xl bg-gray-50 p-6 text-gray-500">
              No flight bookings found.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {flightBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl bg-white p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {booking.airline}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600">
                    {booking.from} → {booking.to}
                  </p>

                  <div className="mt-4 space-y-2 text-gray-600">
                    <p>👤 {booking.name}</p>
                    <p>📧 {booking.email}</p>
                    <p>📅 Date: {booking.date}</p>
                    <p>⏰ Time: {booking.time}</p>
                    <p>👥 Passengers: {booking.passengers}</p>
                  </div>

                  <button
                    onClick={() =>
                      cancelFlightBooking(booking.id)
                    }
                    className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                  >
                    Cancel Booking
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

    </div>
  );
}

export default MyBookings;