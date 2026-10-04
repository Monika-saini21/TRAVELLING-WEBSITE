import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");
  return (
    <div>
        {/* HERO SECTION */}
        <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-12 sm:py-16 md:flex-row md:justify-between">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-xl text-center md:text-left">

            <p className="mb-3 font-semibold text-blue-600">
              ✈️ Explore The World
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
              Discover Your Next
              <span className="text-blue-600">
                {" "}Adventure
              </span>
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
              Explore beautiful destinations, book hotels and flights,
              and create unforgettable travel experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <a
                href="/destinations"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Explore Destinations
              </a>

              <a
                href="/packages"
                className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
              >
                View Packages
              </a>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="w-full max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Travel"
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
            />
          </div>

        </section>


        {/* ================= POPULAR DESTINATIONS ================= */}

        <section className="px-6 py-15">
        <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
           

            <h2 className="mt-2 text-4xl font-bold text-gray-900">
                Explore Popular Destinations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Discover some of the world's most beautiful destinations
                and plan your next unforgettable journey.
            </p>
            </div>

            
        {/* SEARCH SECTION */}

        <section
          id="popular-destinations"
          className="px-6 py-10"
        >

        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">

            <div className="flex flex-col gap-4 md:flex-row">

            <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
            />

           <button
              onClick={() => {
                const section = document.getElementById("popular-destinations");

                section?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>

            </div>

        </div>

        </section>

            {/* DESTINATION CARDS */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {destinations.filter((destination) =>
                destination.name.toLowerCase().includes(search.toLowerCase()) ||
                destination.country.toLowerCase().includes(search.toLowerCase())
              ).length === 0 ? (

                <div className="col-span-full py-10 text-center">
                  <p className="text-xl font-semibold text-gray-600">
                    😔 No destination found
                  </p>

                  <p className="mt-2 text-gray-400">
                    Try searching for another destination.
                  </p>
                </div>

              ) : (

                destinations
                  .filter((destination) =>
                    destination.name.toLowerCase().includes(search.toLowerCase()) ||
                    destination.country.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((destination) => (
                    <DestinationCard
                      key={destination.id}
                      destination={destination}
                    />
                  ))

              )}

            </div>

        </div>
        </section>

        {/* WHY CHOOSE US */}

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose TravelX?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                We make your travel planning simple, comfortable and memorable.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <div className="text-4xl">🌍</div>

                <h3 className="mt-4 text-xl font-bold">
                  Amazing Destinations
                </h3>

                <p className="mt-3 text-gray-500">
                  Explore beautiful destinations around the world.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <div className="text-4xl">🏨</div>

                <h3 className="mt-4 text-xl font-bold">
                  Easy Booking
                </h3>

                <p className="mt-3 text-gray-500">
                  Book hotels and flights easily from one place.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                <div className="text-4xl">⭐</div>

                <h3 className="mt-4 text-xl font-bold">
                  Trusted Experience
                </h3>

                <p className="mt-3 text-gray-500">
                  Enjoy a smooth and memorable travel experience.
                </p>
              </div>

            </div>
          </div>
        </section>

    </div>
  );
}

export default Home;