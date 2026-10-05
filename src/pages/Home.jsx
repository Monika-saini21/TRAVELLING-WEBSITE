import AboutSection from "../components/AboutSection";

import DestinationSection from "../components/DestinationSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { useState } from "react";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

function Home() {
   
    const [currentImage, setCurrentImage] = useState(0);

const images = [
  "https://videocdn.cdnpk.net/videos/19c8a305-c402-4744-95d2-fe8fff495128/horizontal/thumbnails/large.jpg",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
];
  return (
    <div>
      {/* HERO SECTION */}



    <section className="relative h-160 w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={images[currentImage]}
        alt="Travel"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-xl text-white">

          <p className="mb-3 text-lg font-medium">
            Get unforgettable pleasure with us
          </p>

          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            Natural Wonder
            <br />
            Of The World
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/destinations"
              className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Explore Tours →
            </a>

            <a
              href="/packages"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-800"
            >
              Our Services →
            </a>

          </div>

        </div>
      </div>

      {/* ARROWS */}
      <div className="absolute right-8 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">

        {/* PREVIOUS */}
        <button
          onClick={() =>
            setCurrentImage(
              currentImage === 0
                ? images.length - 1
                : currentImage - 1
            )
          }
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          ↑
        </button>

        {/* NEXT */}
        <button
          onClick={() =>
            setCurrentImage(
              currentImage === images.length - 1
                ? 0
                : currentImage + 1
            )
          }
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          ↓
        </button>

      </div>

    </section>


<DestinationSection />
<AboutSection/>
<WhyChooseUs/>
<Gallery/>
<Reviews/>

    </div>
  );
}

export default Home;