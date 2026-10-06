function HotelBookings({
  hotelBookings,
  hotelSearch,
  setHotelSearch,
  deleteHotelBooking,
}) {
  const filteredBookings = hotelBookings.filter((booking) => {
    const search = hotelSearch.toLowerCase();

    return (
      booking.hotelName?.toLowerCase().includes(search) ||
      booking.name?.toLowerCase().includes(search) ||
      booking.email?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            🏨 Hotel Bookings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all hotel bookings
          </p>
        </div>

        <input
          type="text"
          placeholder="Search hotel bookings..."
          value={hotelSearch}
          onChange={(e) => setHotelSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:w-80"
        />
      </div>

      {filteredBookings.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
          No hotel bookings found.
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
                    {booking.hotelName}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {booking.location}
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Hotel
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Guest Name</span>
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
                  <span className="text-gray-500">Check In</span>
                  <span className="font-semibold text-gray-800">
                    {booking.checkIn}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Check Out</span>
                  <span className="font-semibold text-gray-800">
                    {booking.checkOut}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Guests</span>
                  <span className="font-semibold text-gray-800">
                    {booking.guests}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteHotelBooking(booking.id)}
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

export default HotelBookings;