import { useState } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <section className="bg-white px-6 py-16">

      {/* TOP HEADING */}
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="font-serif text-lg italic text-gray-600">
            Top Destination
          </p>

          <h2 className="text-3xl font-bold text-slate-800">
            Top Destination
          </h2>
        </div>

        {/* DESTINATION BUTTONS */}
        <div className="flex flex-wrap gap-2">

          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              onClick={() => setCurrent(index)}
              className={`rounded-md px-4 py-2 text-xs font-medium transition ${
                current === index
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-cyan-100"
              }`}
            >
              {destination.name}
            </button>
          ))}

        </div>
      </div>


      {/* DESTINATION CAROUSEL */}
      <div className="relative mx-auto mt-10 h-120 max-w-6xl">

        {/* LEFT BACK IMAGE */}
        <Link
          to={`/destinations/${destinations[
            (current - 2 + destinations.length) % destinations.length
          ].id}`}
          className="absolute left-8 top-1/2 z-10 -translate-y-1/2"
        >
          <img
            src={
              destinations[
                (current - 2 + destinations.length) % destinations.length
              ].image
            }
            alt="Destination"
            className="h-60 w-52 rounded-2xl object-cover opacity-90 shadow-lg transition hover:scale-105 md:h-64 md:w-60"
          />
        </Link>


        {/* LEFT MIDDLE IMAGE */}
        <Link
          to={`/destinations/${destinations[
            (current - 1 + destinations.length) % destinations.length
          ].id}`}
          className="absolute left-1/6 top-1/2 z-20 -translate-y-1/2"
        >
          <img
            src={
              destinations[
                (current - 1 + destinations.length) % destinations.length
              ].image
            }
            alt="Destination"
            className="h-72 w-60 rounded-2xl object-cover shadow-xl transition hover:scale-105 md:h-80 md:w-72"
          />
        </Link>


        {/* CENTER MAIN IMAGE */}
        <div className="absolute left-1/2 top-4/8 z-40 h-105 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl md:h-105 md:w-80">

          <Link
            to={`/destinations/${destinations[current].id}`}
            className="block h-full w-full"
          >
            <img
              src={destinations[current].image}
              alt={destinations[current].name}
              className="h-full w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            />
          </Link>

          {/* CENTER CONTENT */}
          <div className="absolute bottom-5 left-5 right-5 text-white">

            <div className="flex items-end justify-between gap-3">

              <div>
                <h3 className="text-xl font-bold">
                  {destinations[current].name}
                </h3>

                <p className="text-sm text-gray-200">
                  {destinations[current].country}
                </p>

                <p className="mt-1 text-lg font-bold">
                  {destinations[current].price}
                </p>
              </div>

              <Link
                to={`/destinations/${destinations[current].id}`}
                className="rounded-full border border-white px-4 py-2 text-xs font-semibold transition hover:bg-white hover:text-black"
              >
                View All
              </Link>

            </div>

          </div>

        </div>


        {/* RIGHT MIDDLE IMAGE */}
        <Link
          to={`/destinations/${destinations[
            (current + 1) % destinations.length
          ].id}`}
          className="absolute right-1/6 top-1/2 z-20 -translate-y-1/2"
        >
          <img
            src={
              destinations[(current + 1) % destinations.length].image
            }
            alt="Destination"
            className="h-72 w-60 rounded-2xl object-cover shadow-xl transition hover:scale-105 md:h-80 md:w-72"
          />
        </Link>


        {/* RIGHT BACK IMAGE */}
        <Link
          to={`/destinations/${destinations[
            (current + 2) % destinations.length
          ].id}`}
          className="absolute right-8 top-1/2 z-10 -translate-y-1/2"
        >
          <img
            src={
              destinations[(current + 2) % destinations.length].image
            }
            alt="Destination"
            className="h-60 w-52 rounded-2xl object-cover opacity-90 shadow-lg transition hover:scale-105 md:h-64 md:w-60"
          />
        </Link>


        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-1/4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-2xl text-white shadow-lg transition hover:bg-slate-700"
        >
          ←
        </button>


        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-1/4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-2xl text-white shadow-lg transition hover:bg-slate-700"
        >
          →
        </button>

      </div>


      {/* DOTS */}
      <div className="mt-3 flex justify-center gap-2">

        {destinations.map((destination, index) => (
          <button
            key={destination.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to ${destination.name}`}
            className={`rounded-full transition-all ${
              current === index
                ? "h-3 w-3 bg-cyan-500"
                : "h-2 w-2 bg-gray-300"
            }`}
          ></button>
        ))}

      </div>

    </section>
  );
}

export default DestinationSection;