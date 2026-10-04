import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import hotels from "../data/hotels";

function HotelBooking() {
  const { id } = useParams();

  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });

  if (!hotel) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Hotel Not Found 😔
        </h1>

        <Link
          to="/hotels"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Back to Hotels
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert("Please fill all fields!");
      return;
    }

    const newBooking = {
      id: Date.now(),
      hotelName: hotel.name,
      location: hotel.location,
      name: formData.name,
      email: formData.email,
      userEmail: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      createdAt: new Date().toISOString(),
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("hotelBookings")) || [];

    localStorage.setItem(
      "hotelBookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    alert("Hotel booked successfully! 🎉");

    setFormData({
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
    });
  };

  return (
    <div className="px-6 py-12">

      <div className="mx-auto max-w-5xl">

        {/* HOTEL INFO */}
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg sm:p-8">

          <p className="font-semibold text-blue-600">
            🏨 Hotel Booking
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            {hotel.name}
          </h1>

          <p className="mt-2 text-gray-500">
            📍 {hotel.location}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold">
              ⭐ {hotel.rating}
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              {hotel.price} / night
            </span>
          </div>

        </div>

        {/* BOOKING FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-lg sm:p-8"
        >

          <h2 className="text-2xl font-bold text-gray-800">
            Enter Booking Details
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Check-in
              </label>

              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-600">
                Check-out
              </label>

              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>

          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Confirm Booking 🏨
          </button>

        </form>

      </div>

    </div>
  );
}

export default HotelBooking;