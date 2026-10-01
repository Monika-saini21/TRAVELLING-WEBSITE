import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white px-8 py-4 shadow-md">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TravelX 🌍
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/destinations" className="text-gray-700 hover:text-blue-600">
            Destinations
          </Link>

          <Link to="/packages" className="text-gray-700 hover:text-blue-600">
            Packages
          </Link>

          <Link to="/hotels" className="text-gray-700 hover:text-blue-600">
            Hotels
          </Link>

          <Link to="/flights" className="text-gray-700 hover:text-blue-600">
            Flights
          </Link>

          <Link to="/gallery" className="text-gray-700 hover:text-blue-600">
            Gallery
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="hidden rounded-full bg-blue-600 px-5 py-2 text-white md:block"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;