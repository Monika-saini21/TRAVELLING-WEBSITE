import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  CalendarDays,
  Hotel,
  Plane,
  MapPin,
  User,
  Mail,
  Users,
  Clock,
  ArrowRight,
  XCircle,
} from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 text-center">

          <p className="font-serif text-lg italic text-cyan-500">
            Your Travel Plans
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            My Bookings
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Manage your hotel and flight bookings in one place.
          </p>

        </div>


        {/* BOOKING SUMMARY */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50">
                <Hotel
                  size={28}
                  className="text-cyan-500"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Hotel Bookings
                </p>

                <h3 className="text-2xl font-bold text-slate-900">
                  {hotelBookings.length}
                </h3>
              </div>

            </div>
          </div>


          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <Plane
                  size={28}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Flight Bookings
                </p>

                <h3 className="text-2xl font-bold text-slate-900">
                  {flightBookings.length}
                </h3>
              </div>

            </div>
          </div>

        </div>


        {/* HOTEL BOOKINGS */}

        <section>

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
              <Hotel
                size={25}
                className="text-cyan-500"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Hotel Bookings
              </h2>

              <p className="text-sm text-gray-500">
                Your reserved hotels
              </p>
            </div>

          </div>


          {hotelBookings.length === 0 ? (

            <div className="rounded-2xl bg-white p-10 text-center shadow-md">

              <Hotel
                size={45}
                className="mx-auto text-gray-300"
              />

              <p className="mt-4 text-gray-500">
                No hotel bookings found.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 md:grid-cols-2">

              {hotelBookings.map((booking) => (

                <div
                  key={booking.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* CARD TOP */}
                <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-5 text-white">
                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-sm opacity-90">
                          Hotel Reservation
                        </p>

                        <h3 className="mt-1 text-xl font-bold">
                          {booking.hotelName}
                        </h3>
                      </div>

                      <Hotel size={32} />

                    </div>

                  </div>


                  {/* CARD CONTENT */}
                  <div className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin
                        size={18}
                        className="text-cyan-500"
                      />

                      <p>
                        {booking.location}
                      </p>
                    </div>


                    <div className="mt-5 grid gap-4 sm:grid-cols-2">

                      <div className="flex gap-3">
                        <User
                          size={18}
                          className="mt-1 text-cyan-500"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Guest
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.name}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <Mail
                          size={18}
                          className="mt-1 text-cyan-500"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Email
                          </p>

                          <p className="break-all font-medium text-gray-700">
                            {booking.email}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <CalendarDays
                          size={18}
                          className="mt-1 text-cyan-500"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Check-in
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.checkIn}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <CalendarDays
                          size={18}
                          className="mt-1 text-cyan-500"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Check-out
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.checkOut}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <Users
                          size={18}
                          className="mt-1 text-cyan-500"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Guests
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.guests}
                          </p>
                        </div>
                      </div>

                    </div>


                    {/* CANCEL */}
                    <button
                      onClick={() =>
                        cancelHotelBooking(booking.id)
                      }
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      <XCircle size={18} />
                      Cancel Booking
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>


        {/* FLIGHT BOOKINGS */}

        <section className="mt-16">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <Plane
                size={25}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Flight Bookings
              </h2>

              <p className="text-sm text-gray-500">
                Your reserved flights
              </p>
            </div>

          </div>


          {flightBookings.length === 0 ? (

            <div className="rounded-2xl bg-white p-10 text-center shadow-md">

              <Plane
                size={45}
                className="mx-auto text-gray-300"
              />

              <p className="mt-4 text-gray-500">
                No flight bookings found.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 md:grid-cols-2">

              {flightBookings.map((booking) => (

                <div
                  key={booking.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* FLIGHT HEADER */}
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-5 text-white">
                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-sm opacity-90">
                          Flight Reservation
                        </p>

                        <h3 className="mt-1 text-xl font-bold">
                          {booking.airline}
                        </h3>

                      </div>

                      <Plane size={32} />

                    </div>

                  </div>


                  {/* FLIGHT CONTENT */}
                  <div className="p-6">

                    {/* ROUTE */}
                    <div className="flex items-center justify-center gap-4 rounded-xl bg-slate-50 p-4">

                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">
                          {booking.from}
                        </p>
                      </div>

                      <ArrowRight
                        size={25}
                        className="text-cyan-500"
                      />

                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">
                          {booking.to}
                        </p>
                      </div>

                    </div>


                    <div className="mt-5 grid gap-4 sm:grid-cols-2">

                      <div className="flex gap-3">
                        <User
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Passenger
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.name}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <Mail
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Email
                          </p>

                          <p className="break-all font-medium text-gray-700">
                            {booking.email}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <CalendarDays
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Date
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.date}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <Clock
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Time
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.time}
                          </p>
                        </div>
                      </div>


                      <div className="flex gap-3">
                        <Users
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <div>
                          <p className="text-xs text-gray-400">
                            Passengers
                          </p>

                          <p className="font-medium text-gray-700">
                            {booking.passengers}
                          </p>
                        </div>
                      </div>

                    </div>


                    {/* CANCEL */}
                    <button
                      onClick={() =>
                        cancelFlightBooking(booking.id)
                      }
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      <XCircle size={18} />
                      Cancel Booking
                    </button>

                  </div>

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