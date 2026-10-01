import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");
  return (
    <div>

      {/* ================= HERO SECTION ================= */}

      <section className="px-6 py-10">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <p className="mb-4 text-lg font-semibold text-blue-600">
              Explore The World 🌍
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Discover Your
              <span className="text-blue-600">
                {" "}Next Adventure
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explore beautiful destinations, discover amazing
              tour packages and create unforgettable travel memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700">
                Explore Destinations
              </button>

              <button className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 hover:bg-gray-100">
                View Packages
              </button>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="h-96 w-full max-w-lg overflow-hidden rounded-3xl">

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Beautiful travel destination"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


        {/* SEARCH SECTION */}

        <section className="px-6 py-10">

        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">

            <div className="flex flex-col gap-4 md:flex-row">

            <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
                Search
            </button>

            </div>

        </div>

        </section>

        {/* ================= POPULAR DESTINATIONS ================= */}

        <section className="px-6 py-20">
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

            {/* DESTINATION CARDS */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations
                .filter((destination) =>
                destination.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((destination) => (
                <DestinationCard
                    key={destination.id}
                    destination={destination}
                />
                ))}
            </div>

        </div>
        </section>
    </div>
  );
}

export default Home;