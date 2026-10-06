function FlightBookings({
  flightBookings,
  flightSearch,
  setFlightSearch,
  deleteFlightBooking,
}) {
  const filteredBookings = flightBookings.filter((booking) => {
    const search = flightSearch.toLowerCase();

    return (
      booking.airline?.toLowerCase().includes(search) ||
      booking.name?.toLowerCase().includes(search) ||
      booking.email?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            ✈️ Flight Bookings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all flight bookings
          </p>
        </div>

        <input
          type="text"
          placeholder="Search flight bookings..."
          value={flightSearch}
          onChange={(e) => setFlightSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:w-80"
        />
      </div>

      {filteredBookings.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
          No flight bookings found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {booking.airline}
                  </h3>

                  <p className="mt-1 font-medium text-cyan-600">
                    {booking.from} → {booking.to}
                  </p>
                </div>

                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Flight
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Passenger</span>
                  <span className="font-semibold text-gray-800">
                    {booking.name}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Email</span>
                  <span className="font-semibold text-gray-800">
                    {booking.email}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Date</span>
                  <span className="font-semibold text-gray-800">
                    {booking.date}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Time</span>
                  <span className="font-semibold text-gray-800">
                    {booking.time}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Passengers</span>
                  <span className="font-semibold text-gray-800">
                    {booking.passengers}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteFlightBooking(booking.id)}
                className="mt-5 w-full rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Delete Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FlightBookings;