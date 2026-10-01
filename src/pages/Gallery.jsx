import gallery from "../data/gallery";

function Gallery() {
  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Explore Memories 📸
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Travel Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore beautiful places and travel moments
            from around the world.
          </p>
        </div>

        {/* GALLERY */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Gallery;