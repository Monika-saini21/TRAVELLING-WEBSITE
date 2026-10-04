import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        {/* ABOUT */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-blue-400"
          >
            TravelX 🌍
          </Link>

          <p className="mt-4 leading-7 text-gray-400">
            Explore beautiful destinations, book your trips,
            and create unforgettable travel experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-gray-400">

            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <Link to="/destinations" className="hover:text-white">
              Destinations
            </Link>

            <Link to="/packages" className="hover:text-white">
              Packages
            </Link>

            <Link to="/hotels" className="hover:text-white">
              Hotels
            </Link>

            <Link to="/flights" className="hover:text-white">
              Flights
            </Link>

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold">
            Contact
          </h3>

          <div className="mt-4 space-y-2 text-gray-400">
            <p>📧 travelx@gmail.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 India</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-gray-500">
        © 2026 TravelX. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;