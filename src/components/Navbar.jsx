import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="w-full px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white px-8 py-4 shadow-md">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          TravelX 🌍
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link
            to="/destinations"
            className="text-gray-700 hover:text-blue-600"
          >
            Destinations
          </Link>

          <Link
            to="/packages"
            className="text-gray-700 hover:text-blue-600"
          >
            Packages
          </Link>

          <Link
            to="/hotels"
            className="text-gray-700 hover:text-blue-600"
          >
            Hotels
          </Link>

          <Link
            to="/flights"
            className="text-gray-700 hover:text-blue-600"
          >
            Flights
          </Link>

          <Link
            to="/itinerary"
            className="text-gray-700 hover:text-blue-600"
          >
            Itinerary
          </Link>

          <Link
            to="/gallery"
            className="text-gray-700 hover:text-blue-600"
          >
            Gallery
          </Link>

          <Link
            to="/reviews"
            className="text-gray-700 hover:text-blue-600"
          >
            Reviews
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="rounded-full bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full border border-blue-600 px-5 py-2 text-blue-600"
            >
              Register
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;