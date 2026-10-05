import { CircleDollarSign, UserRound, Headset } from "lucide-react";
function WhyChooseUs() {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto flex  max-w-6xl overflow-hidden rounded-3xl bg-sky-50">

        {/* LEFT CONTENT */}
        <div className="flex-1 px-8 py-12 md:px-12">

          {/* SMALL TITLE */}
          <p className="font-serif text-xl italic text-cyan-500">
            why choose us
          </p>

          {/* HEADING */}
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            We Make Every Journey
            <br />
            Memorable
          </h2>


          {/* FEATURES */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">

            {/* BEST PRICE */}
            <div>

              {/* BEST PRICE */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900">
                <CircleDollarSign size={32} strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Best Price
              </h3>

              <p className="mt-3 leading-6 text-slate-700">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum
              </p>

            </div>


            {/* EXPERT GUIDES */}
            <div>

              {/* EXPERT GUIDES */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900">
                <UserRound size={32} strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Expert Guides
              </h3>

              <p className="mt-3 leading-6 text-slate-700">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum
              </p>

            </div>


            {/* EASY BOOKING */}
            <div>

              {/* EASY BOOKING */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900">
                <Headset size={32} strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Easy Booking
              </h3>

              <p className="mt-3 leading-6 text-slate-700">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum
              </p>

            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hidden w-80  shrink-0 md:block lg:w-85">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
            alt="Beautiful beach"
            className="h-full rounded-3xl w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;