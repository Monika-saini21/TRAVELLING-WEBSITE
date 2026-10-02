import { useParams } from "react-router-dom";
import hotels from "../data/hotels";
import { useState } from "react";

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
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

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
};

  const oldBookings =
    JSON.parse(localStorage.getItem("hotelBookings")) || [];

  localStorage.setItem(
    "hotelBookings",
    JSON.stringify([...oldBookings, newBooking])
  );

  alert("Hotel booked successfully! 🎉");
};

  if (!hotel) {
    return (
      <h1 className="p-10 text-2xl">
        Hotel not found
      </h1>
    );
  }

  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-5xl">

        {/* HOTEL DETAILS */}

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-80 w-full object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold">
              {hotel.name}
            </h1>

            <p className="mt-2 text-gray-500">
              📍 {hotel.location}
            </p>

            <p className="mt-2 text-yellow-500">
              ⭐ {hotel.rating}
            </p>

            <p className="mt-2 font-bold text-blue-600">
              {hotel.price}
            </p>
          </div>
        </div>

        {/* BOOKING FORM */}

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Book Your Stay 🏨
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <div>
              <label className="mb-2 block font-medium">
                Check In
              </label>

              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Check Out
              </label>

              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-4 py-3"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Confirm Booking
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default HotelBooking;