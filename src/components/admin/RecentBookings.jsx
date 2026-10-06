function RecentBookings({
  hotelBookings,
  flightBookings,
}) {
  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Bookings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest hotel and flight bookings
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {hotelBookings.length + flightBookings.length} Total
        </span>
      </div>

      {hotelBookings.length === 0 && flightBookings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
          <div className="text-4xl">📋</div>

          <h3 className="mt-3 text-lg font-bold text-gray-800">
            No Bookings Yet
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Hotel and flight bookings will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {hotelBookings
            .slice(-3)
            .reverse()
            .map((booking) => (
              <div
                key={`hotel-${booking.id}`}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800">
                    🏨 {booking.hotelName}
                  </h3>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Hotel
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Guest:</strong> {booking.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {booking.userEmail}
                  </p>

                  <p>
                    <strong>Check In:</strong> {booking.checkIn}
                  </p>

                  <p>
                    <strong>Check Out:</strong> {booking.checkOut}
                  </p>

                  <p>
                    <strong>Guests:</strong> {booking.guests}
                  </p>

                  <p>
                    <strong>Booked:</strong>{" "}
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}

          {flightBookings
            .slice(-3)
            .reverse()
            .map((booking) => (
              <div
                key={`flight-${booking.id}`}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800">
                    ✈️ {booking.airline}
                  </h3>

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    Flight
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Passenger:</strong> {booking.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {booking.userEmail}
                  </p>

                  <p>
                    <strong>Route:</strong> {booking.from} → {booking.to}
                  </p>

                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>

                  <p>
                    <strong>Passengers:</strong> {booking.passengers}
                  </p>

                  <p>
                    <strong>Booked:</strong>{" "}
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default RecentBookings;