import { useState } from "react";
import gallery from "../data/gallery";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className=" text-center">

          <p className="font-serif text-xl italic text-cyan-500">
            Make Your Trip More Memorable
          </p>

          <h1 className="mt-1 text-4xl font-bold text-slate-900">
            Recent Gallery
          </h1>

        </div>


        {/* GALLERY */}
        <div className="flex h-130 items-center justify-center gap-3 overflow-hidden">

          {/* LEFT IMAGE */}
          {gallery[0] && (
            <div
              onClick={() => setSelectedImage(gallery[0].image)}
              className="hidden h-56 w-36 cursor-pointer overflow-hidden rounded-2xl md:block lg:h-64 lg:w-40"
            >
              <img
                src={gallery[0].image}
                alt={gallery[0].title}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          )}


          {/* LEFT MIDDLE */}
          <div className="flex flex-col gap-3">

            {gallery[1] && (
              <div
                onClick={() => setSelectedImage(gallery[1].image)}
                className="h-40 w-36 cursor-pointer overflow-hidden rounded-2xl lg:h-44 lg:w-40"
              >
                <img
                  src={gallery[1].image}
                  alt={gallery[1].title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

            {gallery[2] && (
              <div
                onClick={() => setSelectedImage(gallery[2].image)}
                className="h-40 w-36 cursor-pointer overflow-hidden rounded-2xl lg:h-44 lg:w-40"
              >
                <img
                  src={gallery[2].image}
                  alt={gallery[2].title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

          </div>


          {/* CENTER BIG IMAGE */}
          {gallery[3] && (
            <div
              onClick={() => setSelectedImage(gallery[3].image)}
              className="h-105 w-52 cursor-pointer overflow-hidden rounded-3xl shadow-xl lg:h-110 lg:w-60"
            >
              <img
                src={gallery[3].image}
                alt={gallery[3].title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          )}


          {/* RIGHT MIDDLE */}
          <div className="flex flex-col gap-3">

            {gallery[4] && (
              <div
                onClick={() => setSelectedImage(gallery[4].image)}
                className="h-40 w-36 cursor-pointer overflow-hidden rounded-2xl lg:h-44 lg:w-40"
              >
                <img
                  src={gallery[4].image}
                  alt={gallery[4].title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

            {gallery[5] && (
              <div
                onClick={() => setSelectedImage(gallery[5].image)}
                className="h-40 w-36 cursor-pointer overflow-hidden rounded-2xl lg:h-44 lg:w-40"
              >
                <img
                  src={gallery[5].image}
                  alt={gallery[5].title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

          </div>


          {/* RIGHT IMAGE */}
          {gallery[6] && (
            <div
              onClick={() => setSelectedImage(gallery[6].image)}
              className="hidden h-56 w-36 cursor-pointer overflow-hidden rounded-2xl md:block lg:h-64 lg:w-40"
            >
              <img
                src={gallery[6].image}
                alt={gallery[6].title}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          )}

        </div>


        {/* IMAGE POPUP */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 text-4xl text-white hover:text-gray-300"
            >
              ×
            </button>

            {/* LARGE IMAGE */}
            <img
              src={selectedImage}
              alt="Gallery Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

          </div>
        )}

      </div>

    </section>
  );
}

export default Gallery;