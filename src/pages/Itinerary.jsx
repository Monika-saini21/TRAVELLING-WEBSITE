import itinerary from "../data/itinerary";

function Itinerary() {
  return (
    <div className="bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-5xl">

        {/* HEADING */}
        <div className="mb-14 text-center">

          <p className="font-serif text-lg italic text-cyan-500">
            Plan Your Journey
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
            Travel Itinerary
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Follow your complete day-by-day travel plan and
            enjoy every moment of your journey.
          </p>

        </div>


        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-cyan-100 md:left-1/2 md:-translate-x-1/2"></div>


          {itinerary.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-10 flex items-start md:mb-14 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* DAY CIRCLE */}
              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-lg md:left-1/2">
                {item.id}
              </div>


              {/* CARD */}
              <div
                className={`ml-12 w-full md:ml-0 md:w-[43%] ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >

                <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                  {/* CARD HEADER */}
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-5 text-white">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold backdrop-blur-sm">
                        {item.day}
                      </span>

                      <span className="text-2xl">
                        ✈️
                      </span>

                    </div>

                  </div>


                  {/* CARD CONTENT */}
                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>


                    {/* SMALL FOOTER */}
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-600">
                      <span>📍</span>
                      <span>Travel Experience</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="mt-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 text-center text-white shadow-lg">

          <h2 className="text-2xl font-bold">
            Ready for your adventure? ✈️
          </h2>

          <p className="mt-2 text-white/90">
            Follow your itinerary and make unforgettable memories.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Itinerary;