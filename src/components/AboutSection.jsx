import { Plane, UserRound } from "lucide-react";


function AboutSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16">

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT IMAGE SECTION */}
        <div className="relative mx-auto h-130 w-full max-w-2xl">

          {/* BIG LEFT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80"
            alt="Travel destination"
            className="absolute left-0  top-0 md:h-130 h-110 w-50 rounded-t-full rounded-bl-full   object-cover shadow-lg md:w-64"
          />

          {/* TOP RIGHT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
            alt="Traveler"
            className="absolute right-2 top-0 md:h-60 md:w-60 h-51 w-50 rounded-t-full rounded-br-full  object-cover shadow-lg md:right-6"
          />

          {/* BOTTOM RIGHT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80"
            alt="Travelers"
            className="absolute md:bottom-0 bottom-20 right-2 md:h-60 md:w-60 h-51 w-50 rounded-b-full rounded-tl-full object-cover shadow-lg md:right-6"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div>

          {/* SMALL TITLE */}
          <p className="font-serif text-xl italic text-cyan-500">
            About Us
          </p>

          {/* HEADING */}
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Begin Your Travel Story with
            <br />
            Us
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley.
          </p>


          {/* FEATURE 1 */}
          <div className="mt-8 flex gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white">
              <Plane size={28} strokeWidth={2} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Exclusive Trip
              </h3>

              <p className="mt-2 max-w-xl leading-7 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
              </p>
            </div>

          </div>


          {/* FEATURE 2 */}
          <div className="mt-7 flex gap-5">

           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white">
              <UserRound size={28} strokeWidth={2} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Professional Guide
              </h3>

              <p className="mt-2 max-w-xl leading-7 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
              </p>
            </div>

          </div>


         

        </div>

      </div>

    </section>
  );
}

export default AboutSection;