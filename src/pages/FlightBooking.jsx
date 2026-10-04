import { useState } from "react";
import { useParams } from "react-router-dom";
import flights from "../data/flights";

function FlightBooking() {
  const { id } = useParams();

  const flight = flights.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passengers: 1,
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
  airline: flight.airline,
  from: flight.from,
  to: flight.to,
  date: flight.date,
  time: flight.time,
  name: formData.name,
  email: formData.email,
  userEmail: formData.email,
  passengers: formData.passengers,
  createdAt: new Date().toISOString(),
};

  const oldBookings =
    JSON.parse(localStorage.getItem("flightBookings")) || [];

  localStorage.setItem(
    "flightBookings",
    JSON.stringify([...oldBookings, newBooking])
  );

  alert("Flight booked successfully! ✈️");
};

  if (!flight) {
    return (
      <h1 className="p-10 text-2xl">
        Flight not found
      </h1>
    );
  }

  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-4xl">

        {/* FLIGHT DETAILS */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h1 className="text-3xl font-bold">
            ✈️ {flight.airline}
          </h1>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div>
              <p className="text-gray-500">
                From
              </p>
              <p className="text-xl font-semibold">
                {flight.from}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                To
              </p>
              <p className="text-xl font-semibold">
                {flight.to}
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Price
              </p>
              <p className="text-xl font-bold text-blue-600">
                {flight.price}
              </p>
            </div>

          </div>

          <p className="mt-5 text-gray-600">
            {flight.date} • {flight.time}
          </p>

        </div>

        {/* BOOKING FORM */}

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Passenger Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >

            <input
              type="text"
              name="name"
              placeholder="Passenger Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="number"
              name="passengers"
              min="1"
              value={formData.passengers}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-4 py-3"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Confirm Flight Booking
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default FlightBooking;