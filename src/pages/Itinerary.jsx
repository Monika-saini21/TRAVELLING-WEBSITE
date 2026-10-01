import itinerary from "../data/itinerary";

function Itinerary() {
  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-4xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Plan Your Journey 🗓️
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Travel Itinerary
          </h1>

          <p className="mt-4 text-gray-600">
            Follow your complete day-by-day travel plan.
          </p>
        </div>

        <div className="space-y-6">

          {itinerary.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 shadow-md"
            >

              <p className="font-semibold text-blue-600">
                {item.day}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Itinerary;