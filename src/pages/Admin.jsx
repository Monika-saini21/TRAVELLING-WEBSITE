import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import packages from "../data/packages";

function Admin() {
  const [users, setUsers] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [userSearch, setUserSearch] = useState("");
  const [hotelSearch, setHotelSearch] = useState("");
  const [flightSearch, setFlightSearch] = useState("");
  const [enquirySearch, setEnquirySearch] = useState("");
  const [reviews, setReviews] = useState([]);
  const [reviewSearch, setReviewSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [refreshMessage, setRefreshMessage] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [packageList, setPackageList] = useState([]);
  const [packageSearch, setPackageSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const loadAdminData = () => {
  const savedUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  const savedHotelBookings =
    JSON.parse(localStorage.getItem("hotelBookings")) || [];

  const savedFlightBookings =
    JSON.parse(localStorage.getItem("flightBookings")) || [];

  const savedEnquiries =
    JSON.parse(localStorage.getItem("enquiries")) || [];

  const savedReviews =
    JSON.parse(localStorage.getItem("userReviews")) || [];

  const savedPackages =
  JSON.parse(localStorage.getItem("packages")) || packages;

if (!localStorage.getItem("packages")) {
  localStorage.setItem("packages", JSON.stringify(packages));
}

  setIsRefreshing(true);
  setUsers(savedUsers);
  setHotelBookings(savedHotelBookings);
  setFlightBookings(savedFlightBookings);
  setEnquiries(savedEnquiries);
  setReviews(savedReviews);
  setPackageList(savedPackages);
  setRefreshMessage("Data refreshed successfully!");

  setTimeout(() => {
  setRefreshMessage("");
}, 2000);

setTimeout(() => {
  setIsRefreshing(false);
}, 500);
};

  useEffect(() => {
  loadAdminData();
}, []);

const deleteHotelBooking = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this hotel booking?"
  );

  if (!confirmDelete) {
    return;
  }

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
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this flight booking?"
  );

  if (!confirmDelete) {
    return;
  }

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
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this enquiry?"
  );

  if (!confirmDelete) {
    return;
  }

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
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) {
    return;
  }

  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

  setUsers(updatedUsers);
};

const deleteReview = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this review?"
  );

  if (!confirmDelete) return;

  const updatedReviews = reviews.filter(
    (review) => review.id !== id
  );

  localStorage.setItem(
    "userReviews",
    JSON.stringify(updatedReviews)
  );

  setReviews(updatedReviews);
};

const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce((total, review) => total + Number(review.rating), 0) /
        reviews.length
      ).toFixed(1)
    : "0.0";

const fiveStarReviews = reviews.filter(
  (review) => Number(review.rating) === 5
).length;

const fourStarReviews = reviews.filter(
  (review) => Number(review.rating) === 4
).length;

const threeStarReviews = reviews.filter(
  (review) => Number(review.rating) === 3
).length;    

const deletePackage = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this package?"
  );

  if (!confirmDelete) return;

  const updatedPackages = packageList.filter(
    (pkg) => pkg.id !== id
  );

  setPackageList(updatedPackages);
};

const [editingPackage, setEditingPackage] = useState(null);
const editPackage = (pkg) => {
  setEditingPackage(pkg);
};
  return (
    <div className="w-full overflow-x-hidden px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="font-semibold text-blue-600">
            Admin Panel 👨‍💼
          </p>

        


           <button
               onClick={() => {
                  logout();
                  navigate("/admin-login");
                }}
                className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                >
                Logout
            </button>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 rounded-2xl bg-blue-600 p-6 text-white shadow-lg">
              <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
              Admin Dashboard 👨‍💼
            </h1>

            <p className="mt-2 text-sm text-blue-100 sm:text-base">
              Manage users, bookings, enquiries and reviews from one place.
            </p>

            </div>

             <button
                onClick={loadAdminData}
                disabled={isRefreshing}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isRefreshing ? "⏳ Refreshing..." : "🔄 Refresh Data"}
              </button>
              {refreshMessage && (
                  <p className="mt-2 text-sm font-medium text-green-100">
                    {refreshMessage}
                  </p>
                )}


          </div>

        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-md">
             <p className="text-3xl">👥</p>
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">Users</p>
            <h2 className="mt-2 text-3xl font-bold">
              {users.length}
            </h2>
          </div>

           <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              📊
            </div>
              <h3  className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Total Bookings
              </h3>

              <p className="mt-2 text-3xl font-bold">
                {hotelBookings.length + flightBookings.length}
              </p>
            </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
            🏨
          </div>
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Hotel Bookings
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {hotelBookings.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              ✈️
          </div>
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Flight Bookings
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {flightBookings.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              📩
          </div>
            
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Enquiries
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {enquiries.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              ⭐
          </div>
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Reviews
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {reviews.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              🌟
          </div>
            <p  className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Average Rating
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-500">
              ⭐ {averageRating}/5
            </h2>
          </div>

          <div className="flex min-h-48 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
              📦
            </div>

            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-gray-500">
              Travel Packages
            </p>

            <h3 className="mt-2 text-4xl font-extrabold text-blue-600">
              {packageList.length}
            </h3>
          </div>

          {selectedUser && (
  <div
  onClick={() => setSelectedUser(null)}
  className="fixed inset-0 z-50 flex  items-center justify-center bg-black/50 px-4"
>
   <div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-md rounded-2xl bg-white  p-6 shadow-2xl"
>
      
      <div className="flex items-center  justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          User Details
        </h2>

         <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
    {users.length} Users
  </span>


        <button
          onClick={() => setSelectedUser(null)}
          className="text-2xl text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-semibold text-gray-800">
            {selectedUser.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-semibold text-gray-800">
            {selectedUser.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p className="font-semibold text-gray-800">
            {selectedUser.id}
          </p>
        </div>
        <div>
            <p className="text-sm text-gray-500">Registered On</p>
            <p className="font-semibold text-gray-800">
              {new Date(selectedUser.id).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="font-semibold text-gray-800">
              {
                hotelBookings.filter(
                  (booking) => booking.userEmail === selectedUser.email
                ).length +
                flightBookings.filter(
                  (booking) => booking.userEmail === selectedUser.email
                ).length
              }
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Hotel Bookings</p>
            <p className="font-semibold text-gray-800">
              {
                hotelBookings.filter(
                  (booking) => booking.userEmail === selectedUser.email
                ).length
              }
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Flight Bookings</p>
            <p className="font-semibold text-gray-800">
              {
                flightBookings.filter(
                  (booking) => booking.userEmail === selectedUser.email
                ).length
              }
            </p>
          </div>

       <div>
  <p className="text-sm text-gray-500">Account Status</p>
  <p className="font-semibold text-green-600">
    Active
  </p>
</div>

            <div>
  <p className="text-sm text-gray-500">Booking Status</p>
  <p className="font-semibold text-blue-600">
    {
      hotelBookings.filter(
        (booking) => booking.userEmail === selectedUser.email
      ).length +
      flightBookings.filter(
        (booking) => booking.userEmail === selectedUser.email
      ).length > 0
        ? "Has Bookings"
        : "No Bookings"
    }
  </p>
</div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
)}

        </div>

        {/* Recent Bookings */}
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
      {hotelBookings.slice(-3).reverse().map((booking) => (
        <div
          key={`hotel-${booking.id}`}
          className="rounded-xl border border-gray-200 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-gray-800">
              {booking.hotelName}
            </h3>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Hotel
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Guest: {booking.name}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Email: {booking.userEmail}
          </p>
          <p className="mt-1 text-sm text-gray-500">
                Booking Date:{" "}
                {booking.createdAt
                  ? new Date(booking.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Check-in: {booking.checkIn}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Check-out: {booking.checkOut}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Guests: {booking.guests}
              </p>

        </div>
      ))}

      {flightBookings.slice(-3).reverse().map((booking) => (
        <div
          key={`flight-${booking.id}`}
          className="rounded-xl border border-gray-200 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-gray-800">
              {booking.airline}
            </h3>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Flight
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Passenger: {booking.name}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Email: {booking.userEmail}
          </p>

          <p className="mt-1 text-sm text-gray-500">
              Booking Date:{" "}
              {booking.createdAt
                ? new Date(booking.createdAt).toLocaleDateString()
                : "N/A"}
            </p>

            <p className="mt-1 text-sm text-gray-600">
                Route: {booking.from} → {booking.to}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Travel Date: {booking.date}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Passengers: {booking.passengers}
              </p>

        </div>
      ))}
    </div>
  )}
</div>

        {/* Users */}
<section className="mt-10">
 <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
  👥 Users
</h2>
  
  <input
  type="text"
  placeholder="Search user by name or email..."
  value={userSearch}
  onChange={(e) => setUserSearch(e.target.value)}
 className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>

  {users.length === 0 ? (
    <p className="text-gray-500">
        No registered users found.

    </p>
  ) : (
    <div className="grid gap-5 md:grid-cols-2">
      
      

    {
        users.filter(
          (user) =>
            user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
            user.email.toLowerCase().includes(userSearch.toLowerCase())
        ).length === 0 ? (
          <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
            No user found.
          </p>
        ) : (
          users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
                user.email.toLowerCase().includes(userSearch.toLowerCase())
            )
            .map((user) => (
              <div
                key={user.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {user.name}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      📧 {user.email}
                    </p>

                    <p className="text-sm text-gray-500">
                      User ID: #{user.id}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                    User
                  </span>

                </div>

                <button
                    onClick={() => setSelectedUser(user)}
                    className="mb-3 w-full rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-blue-700 hover:shadow-md"
                  >
                    View Details
                  </button>

                <button
                  onClick={() => deleteUser(user.id)}
                 className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                 >
                  Delete User
                </button>
              </div>
            ))
        )
      }
    </div>
  )}
</section>

        {/* Hotel Bookings */}
        <div className="my-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Registered Users 👥
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Total registered users: {users.length}
          </p>

          <p className="mt-1 text-gray-500">
            Check the latest hotel and flight bookings.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
            🏨 Hotel Bookings
          </h2>

          <input
              type="text"
              placeholder="Search hotel by name, customer name or email..."
              value={hotelSearch}
              onChange={(e) => setHotelSearch(e.target.value)}
             className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          <div className="grid gap-5 md:grid-cols-2">
                  {hotelBookings.length === 0 ? (
                    <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
                      No hotel bookings found.
                    </p>
                  ) : (
                    
                    hotelBookings
                      .filter(
                      (booking) =>
                        booking.hotelName
                          .toLowerCase()
                          .includes(hotelSearch.toLowerCase()) ||
                        booking.name
                          .toLowerCase()
                          .includes(hotelSearch.toLowerCase()) ||
                        booking.email
                          .toLowerCase()
                          .includes(hotelSearch.toLowerCase())
                    )
                    .length === 0 ? (
                      <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
                        No matching hotel booking found.
                      </p>
                    ) : (
                      hotelBookings
                        .filter(
                          (booking) =>
                            booking.hotelName.toLowerCase().includes(hotelSearch.toLowerCase()) ||
                            booking.name.toLowerCase().includes(hotelSearch.toLowerCase()) ||
                            booking.email.toLowerCase().includes(hotelSearch.toLowerCase())
                        )
                    .map((booking) => (
                            <div
                              key={booking.id}
                              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                              <h3 className="text-xl font-bold text-gray-800">
                                {booking.hotelName}
                              </h3>

                              <p className="mt-2 text-gray-500">
                                📍 {booking.location}
                              </p>

                              <div className="mt-4 space-y-2 text-gray-600">
                                <p>👤 Name: {booking.name}</p>
                                <p>📧 Email: {booking.email}</p>
                                <p>📅 Check-in: {booking.checkIn}</p>
                                <p>📅 Check-out: {booking.checkOut}</p>
                                <p>👥 Guests: {booking.guests}</p>
                              </div>

                              <button
                                onClick={() => deleteHotelBooking(booking.id)}
                               className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                              >
                                Delete Booking
                              </button>
                            </div>
                          ))
                  ))}
          </div>

        </section>


        {/* Flight Bookings */}

        <section className="mt-10">
          <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
            ✈️ Flight Bookings
          </h2>

          <input
            type="text"
            placeholder="Search flight by airline, name or email..."
            value={flightSearch}
            onChange={(e) => setFlightSearch(e.target.value)}
            className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
         />

          <div className="grid gap-5 md:grid-cols-2">
            {flightBookings.length === 0 ? (
               <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
                  No flight bookings found.
                </p>
              ) : (
              flightBookings
                .filter(
                  (booking) =>
                    booking.airline
                      .toLowerCase()
                      .includes(flightSearch.toLowerCase()) ||
                    booking.name
                      .toLowerCase()
                      .includes(flightSearch.toLowerCase()) ||
                    booking.email
                      .toLowerCase()
                      .includes(flightSearch.toLowerCase())
                )
                .length === 0 ? (
                <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
                  No matching flight booking found.
                </p>
              ) : (
                flightBookings
                  .filter(
                    (booking) =>
                      booking.airline.toLowerCase().includes(flightSearch.toLowerCase()) ||
                      booking.name.toLowerCase().includes(flightSearch.toLowerCase()) ||
                      booking.email.toLowerCase().includes(flightSearch.toLowerCase())
                  )
              .map((booking) => (
                          <div
                            key={booking.id}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <h3 className="text-xl font-bold text-gray-800">
                              {booking.airline}
                            </h3>

                            <p className="mt-2 font-semibold text-blue-600">
                              {booking.from} → {booking.to}
                            </p>

                            <div className="mt-4 space-y-2 text-gray-600">
                              <p>👤 Name: {booking.name}</p>
                              <p>📧 Email: {booking.email}</p>
                              <p>📅 Date: {booking.date}</p>
                              <p>⏰ Time: {booking.time}</p>
                              <p>👥 Passengers: {booking.passengers}</p>
                            </div>

                            <button
                              onClick={() => deleteFlightBooking(booking.id)}
                             className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                             >
                              Delete Booking
                            </button>
                          </div>
                        ))
              ))}
          
          </div>
        </section>

        {/* Enquiries */}

        <section className="mt-10">
         <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
            📩 Enquiries
          </h2>

           <input
              type="text"
              placeholder="Search enquiry by name or email..."
              value={enquirySearch}
              onChange={(e) => setEnquirySearch(e.target.value)}
             className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
             />

            {enquiries
              .filter(
                  (enquiry) =>
                    enquiry.name
                      .toLowerCase()
                      .includes(enquirySearch.toLowerCase()) ||
                    enquiry.email
                      .toLowerCase()
                      .includes(enquirySearch.toLowerCase())
                )
            .length === 0 ? (
            <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
              No matching enquiry found.
            </p>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {enquiries
                 .filter(
                  (enquiry) =>
                    enquiry.name.toLowerCase().includes(enquirySearch.toLowerCase()) ||
                    enquiry.email.toLowerCase().includes(enquirySearch.toLowerCase())
                )
                .map((enquiry) => (
                        <div
                          key={enquiry.id}
                          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <h3 className="text-xl font-bold text-gray-800">
                            {enquiry.name}
                          </h3>

                          <p className="mt-2 text-blue-600">
                            📧 {enquiry.email}
                          </p>

                          <div className="mt-4 rounded-xl bg-gray-50 p-4">
                            <p className="text-gray-600">
                              {enquiry.message}
                            </p>
                          </div>

                          <button
                            onClick={() => deleteEnquiry(enquiry.id)}
                            className="mt-5 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                            >
                            Delete Enquiry
                          </button>
                        </div>
                      ))}
              </div>
            )}
          
        </section>


             <section className="mt-10">
              <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
                📦 Travel Packages
              </h2>

              <input
                type="text"
                placeholder="Search package by name or destination..."
                value={packageSearch}
                onChange={(e) => setPackageSearch(e.target.value)}
                className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <div className="grid gap-5 md:grid-cols-2">
               {packageList.filter(
                    (pkg) =>
                      pkg.title
                        ?.toLowerCase()
                        .includes(packageSearch.toLowerCase()) ||
                      pkg.destination
                        ?.toLowerCase()
                        .includes(packageSearch.toLowerCase())
                  ).length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500 md:col-span-2">
                      No matching package found.
                    </div>
                  ) : (
                    packageList
                      .filter(
                        (pkg) =>
                          pkg.title
                            ?.toLowerCase()
                            .includes(packageSearch.toLowerCase()) ||
                          pkg.destination
                            ?.toLowerCase()
                            .includes(packageSearch.toLowerCase())
                      )
                      .map((pkg) => (
                        <div
                          key={pkg.id}
                          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <h3 className="text-xl font-bold text-gray-800">
                            {pkg.title}
                          </h3>

                          <p className="mt-2 text-gray-500">
                            📍 {pkg.destination}
                          </p>

                          <p className="mt-2 font-semibold text-blue-600">
                            {pkg.price}
                          </p>

                          <p className="mt-2 text-gray-600">
                            {pkg.duration}
                          </p>

                          <button
                            onClick={() => editPackage(pkg)}
                            className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-blue-700 hover:shadow-md"
                          >
                            Edit Package
                          </button>

                          <button
                            onClick={() => deletePackage(pkg.id)}
                            className="mt-5 w-full rounded-xl bg-red-500 px-5 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-red-600 hover:shadow-md"
                          >
                            Delete Package
                          </button>
                        </div>
                        
                      ))
                  )}
              </div>

              {editingPackage && (
  <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
    <h3 className="mb-5 text-xl font-bold text-gray-800">
      Edit Package
    </h3>

    <div className="grid gap-4 md:grid-cols-2">
      <input
        type="text"
        value={editingPackage.title}
        onChange={(e) =>
          setEditingPackage({
            ...editingPackage,
            title: e.target.value,
          })
        }
        placeholder="Package title"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      <input
        type="text"
        value={editingPackage.destination}
        onChange={(e) =>
          setEditingPackage({
            ...editingPackage,
            destination: e.target.value,
          })
        }
        placeholder="Destination"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      <input
        type="text"
        value={editingPackage.duration}
        onChange={(e) =>
          setEditingPackage({
            ...editingPackage,
            duration: e.target.value,
          })
        }
        placeholder="Duration"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      <input
        type="text"
        value={editingPackage.price}
        onChange={(e) =>
          setEditingPackage({
            ...editingPackage,
            price: e.target.value,
          })
        }
        placeholder="Price"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />
      
      <input
  type="text"
  value={editingPackage.image}
  onChange={(e) =>
    setEditingPackage({
      ...editingPackage,
      image: e.target.value,
    })
  }
  placeholder="Image URL"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:col-span-2"
/>

{editingPackage.image && (
  <div className="mt-4 md:col-span-2">
    <p className="mb-2 text-sm font-medium text-gray-600">
      Image Preview
    </p>

    <img
      src={editingPackage.image}
      alt={editingPackage.title}
      className="h-48 w-full rounded-xl object-cover shadow-md"
    />
  </div>
)}

      <div className="mt-5 flex gap-3">
  <button
   onClick={() => {
  if (
    !editingPackage.title.trim() ||
    !editingPackage.destination.trim() ||
    !editingPackage.duration.trim() ||
    !editingPackage.price.trim() ||
    !editingPackage.image.trim()
  ) {
    alert("Please fill all package fields!");
    return;
  }

  const updatedPackages = packageList.map((pkg) =>
    pkg.id === editingPackage.id ? editingPackage : pkg
  );

 
setPackageList(updatedPackages);

localStorage.setItem(
  "packages",
  JSON.stringify(updatedPackages)
);

setEditingPackage(null);
  

  alert("Package updated successfully! 🎉");
}}
    className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
  >
    Save Changes
  </button>

  <button
    onClick={() => setEditingPackage(null)}
    className="rounded-xl bg-gray-500 px-5 py-2 font-semibold text-white transition hover:bg-gray-600"
  >
    Cancel
  </button>
</div>
    </div>
  </div>
)}


            </section>

        <section className="mt-10">
            <h2 className="mb-5 border-l-4 border-blue-600 pl-3 text-2xl font-bold text-gray-800">
              ⭐ Reviews
            </h2>

            <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500">
                Total Reviews
              </p>

              <h3 className="mt-2 text-3xl font-bold text-blue-600">
                {reviews.length}
              </h3>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500">
                Average Rating
              </p>

              <h3 className="mt-2 text-3xl font-bold text-yellow-500">
                ⭐ {averageRating}/5
              </h3>
            </div>
          </div>

            
              <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-yellow-50 p-4">
                <p className="text-sm text-gray-500">5 Star Reviews</p>
                <p className="mt-1 text-2xl font-bold text-yellow-600">
                  {fiveStarReviews}
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-gray-500">4 Star Reviews</p>
                <p className="mt-1 text-2xl font-bold text-blue-600">
                  {fourStarReviews}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">3 Star Reviews</p>
                <p className="mt-1 text-2xl font-bold text-gray-700">
                  {threeStarReviews}
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Search review by name, email or comment..."
              value={reviewSearch}
              onChange={(e) => setReviewSearch(e.target.value)}
              className="mb-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="mb-5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 ⭐</option>
                <option value="4">4 ⭐</option>
                <option value="3">3 ⭐</option>
                <option value="2">2 ⭐</option>
                <option value="1">1 ⭐</option>
              </select>

              <button
                onClick={() => {
                  setReviewSearch("");
                  setRatingFilter("all");
                }}
              className="mb-5 rounded-xl bg-gray-800 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-gray-900 hover:shadow-md"
              >
                Reset Filters
              </button>

             {reviews
  .filter(
    (review) =>
      review.name.toLowerCase().includes(reviewSearch.toLowerCase()) ||
      review.email.toLowerCase().includes(reviewSearch.toLowerCase()) ||
      review.comment.toLowerCase().includes(reviewSearch.toLowerCase())
  )
  .filter(
    (review) =>
      ratingFilter === "all" ||
      Number(review.rating) === Number(ratingFilter)
  ).length === 0 ? (
    <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
      No matching review found.
    </p>
  ) : (
    <div className="grid gap-5 md:grid-cols-2">
    {reviews
      .filter(
        (review) =>
          review.name.toLowerCase().includes(reviewSearch.toLowerCase()) ||
          review.email.toLowerCase().includes(reviewSearch.toLowerCase()) ||
          review.comment.toLowerCase().includes(reviewSearch.toLowerCase())
      )
      .filter(
        (review) =>
          ratingFilter === "all" ||
          Number(review.rating) === Number(ratingFilter)
      )
      .map((review) => (
        
                   <div
                    key={review.id}
                    className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {review.name}
                        </h3>

                        <p className="mt-2 text-gray-500">
                          📧 {review.email}
                        </p>
                      </div>

                      <span className="rounded-full bg-yellow-100 px-3 py-1 font-semibold text-yellow-600">
                        ⭐ {review.rating}/5
                      </span>
                    </div>

                    <p className="mt-4 rounded-xl bg-gray-50 p-4 text-gray-600">
                      {review.comment}
                    </p>

                    <button
                      onClick={() => deleteReview(review.id)}
                      className="mt-5 w-full rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600 sm:w-auto"
                      >
                      Delete Review
                    </button>
                  </div>
            ))
      
          }
        </div>
    
  )
  } 
             
          </section>

      </div>
    </div>
  );
}

export default Admin;




