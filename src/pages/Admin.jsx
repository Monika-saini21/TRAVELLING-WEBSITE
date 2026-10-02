import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [users, setUsers] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const savedHotelBookings =
      JSON.parse(localStorage.getItem("hotelBookings")) || [];

    const savedFlightBookings =
      JSON.parse(localStorage.getItem("flightBookings")) || [];

    const savedEnquiries =
      JSON.parse(localStorage.getItem("enquiries")) || [];

    setUsers(savedUsers);
    setHotelBookings(savedHotelBookings);
    setFlightBookings(savedFlightBookings);
    setEnquiries(savedEnquiries);
  }, []);

  const deleteHotelBooking = (id) => {
  const updatedBookings = hotelBookings.filter(
    (booking) => booking.id !== id
  );

  localStorage.setItem(
    "hotelBookings",
    JSON.stringify(updatedBookings)
  );

  setHotelBookings(updatedBookings);
};

const deleteFlightBooking = (id) => {
  const updatedBookings = flightBookings.filter(
    (booking) => booking.id !== id
  );

  localStorage.setItem(
    "flightBookings",
    JSON.stringify(updatedBookings)
  );

  setFlightBookings(updatedBookings);
};

const deleteEnquiry = (id) => {
  const updatedEnquiries = enquiries.filter(
    (enquiry) => enquiry.id !== id
  );

  localStorage.setItem(
    "enquiries",
    JSON.stringify(updatedEnquiries)
  );

  setEnquiries(updatedEnquiries);
};
const deleteUser = (id) => {
  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

  setUsers(updatedUsers);
};

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="font-semibold text-blue-600">
            Admin Panel 👨‍💼
          </p>
           <button
                onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("isAdmin");
                    navigate("/admin-login");
                }}
                className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                >
                Logout
            </button>
          <h1 className="mt-2 text-4xl font-bold">
            Dashboard
          </h1>
        </div>

        {/* Statistics */}

        <div className="grid gap-5 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <p className="text-gray-500">Users</p>
            <h2 className="mt-2 text-3xl font-bold">
              {users.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <p className="text-gray-500">
              Hotel Bookings
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {hotelBookings.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <p className="text-gray-500">
              Flight Bookings
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {flightBookings.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <p className="text-gray-500">
              Enquiries
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {enquiries.length}
            </h2>
          </div>

        </div>

        {/* Users */}
<section className="mt-10">
  <h2 className="mb-5 text-2xl font-bold">
    👥 Users
  </h2>

  {users.length === 0 ? (
    <p className="text-gray-500">
      No users found.
    </p>
  ) : (
    <div className="grid gap-5 md:grid-cols-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="rounded-2xl bg-white p-6 shadow-md"
        >
          <h3 className="text-xl font-bold">
            {user.name}
          </h3>

          <p className="mt-2 text-gray-500">
            {user.email}
          </p>
          <button
            onClick={() => deleteUser(user.id)}
            className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
            >
            Delete User
            </button>
        </div>
      ))}
    </div>
  )}
</section>

        {/* Hotel Bookings */}

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            🏨 Hotel Bookings
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {hotelBookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">
                  {booking.hotelName}
                </h3>

                <p className="mt-2 text-gray-600">
                User Email: {booking.userEmail}
                 </p>

                <p className="mt-2">
                  Guest: {booking.name}
                </p>

                <p className="text-gray-500">
                  {booking.checkIn} → {booking.checkOut}
                </p>
                <button
                    onClick={() => deleteHotelBooking(booking.id)}
                    className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                    >
                    Delete Booking
                </button>
              </div>
            ))}
          </div>
          
        </section>


        {/* Flight Bookings */}

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            ✈️ Flight Bookings
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {flightBookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <h3 className="text-xl font-bold">
                  {booking.airline}
                </h3>

                <p className="mt-2">
                  {booking.from} → {booking.to}
                </p>

                <p className="mt-2">
                  Passenger: {booking.name}
                </p>

                <p className="mt-2 text-gray-600">
                  User Email: {booking.userEmail}
                </p>

                <button
                    onClick={() => deleteFlightBooking(booking.id)}
                    className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                    >
                    Delete Booking
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiries */}

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            📩 Enquiries
          </h2>

          <div className="space-y-5">
           {enquiries.map((enquiry) => (
            <div
                key={enquiry.id}
                className="rounded-2xl bg-white p-6 shadow-md"
            >
                <h3 className="text-xl font-bold">
                {enquiry.name}
                </h3>

                <p className="mt-2 text-gray-500">
                {enquiry.email}
                </p>

                <p className="mt-4 text-gray-600">
                {enquiry.message}
                </p>

                <button
                onClick={() => deleteEnquiry(enquiry.id)}
                className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                >
                Delete Enquiry
                </button>
            </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Admin;