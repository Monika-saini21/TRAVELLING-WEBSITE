import { Link } from "react-router-dom";
import {
  Plane,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0b3340] text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* TOP FOOTER */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-blue-500">
                <Plane className="h-5 w-5" />
              </div>

              <span>
                Travel<span className="text-cyan-400">X</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Discover beautiful destinations, book amazing
              experiences and make unforgettable memories
              around the world.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-6 flex gap-3">

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition hover:bg-cyan-500">
                f
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition hover:bg-cyan-500">
                in
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition hover:bg-cyan-500">
                ◎
              </button>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/"
                className="block text-sm text-white/60 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/destinations"
                className="block text-sm text-white/60 transition hover:text-cyan-400"
              >
                Destinations
              </Link>

              <Link
                to="/packages"
                className="block text-sm text-white/60 transition hover:text-cyan-400"
              >
                Tour Packages
              </Link>

              <Link
                to="/hotels"
                className="block text-sm text-white/60 transition hover:text-cyan-400"
              >
                Hotels
              </Link>

              <Link
                to="/flights"
                className="block text-sm text-white/60 transition hover:text-cyan-400"
              >
                Flights
              </Link>

            </div>

          </div>


          {/* EXPLORE */}
          <div>

            <h3 className="text-lg font-semibold">
              Explore
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/gallery"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-cyan-400"
              >
                Travel Gallery
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/itinerary"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-cyan-400"
              >
                Travel Itinerary
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/reviews"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-cyan-400"
              >
                Reviews
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-cyan-400"
              >
                Contact Us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>

                <p className="text-sm leading-6 text-white/60">
                  India
                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>

                <p className="text-sm text-white/60">
                  hello@travelx.com
                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>

                <p className="text-sm text-white/60">
                  +91 98765 43210
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* NEWSLETTER */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-8">

          <div>

            <h3 className="text-xl font-bold">
              Ready for your next adventure?
            </h3>

            <p className="mt-1 text-sm text-white/50">
              Start planning your unforgettable journey today.
            </p>

          </div>

          <Link
            to="/packages"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold transition hover:shadow-lg md:mt-0"
          >
            Explore Packages
            <ArrowUpRight className="h-4 w-4" />
          </Link>

        </div>


        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 TravelX. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;