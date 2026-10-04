import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="w-full px-6 py-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white px-6 py-4 shadow-md">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            TravelX 🌍
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-6 md:flex">

            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/flights">Flights</Link>
            <Link to="/itinerary">Itinerary</Link>
            <Link to="/my-bookings">My Bookings</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full bg-blue-600 px-5 py-2 text-white"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-full border border-blue-600 px-5 py-2 text-blue-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl md:hidden"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-5 flex flex-col gap-4 border-t pt-5 md:hidden">

            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/destinations">
              Destinations
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/packages">
              Packages
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/hotels">
              Hotels
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/flights">
              Flights
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/itinerary">
              Itinerary
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/my-bookings">
              My Bookings
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/gallery">
              Gallery
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/reviews">
              Reviews
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-fit rounded-full bg-red-500 px-5 py-2 font-semibold text-white"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-2">
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/login"
                  className="rounded-full bg-blue-600 px-5 py-2 text-white"
                >
                  Login
                </Link>

                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/register"
                  className="rounded-full border border-blue-600 px-5 py-2 text-blue-600"
                >
                  Register
                </Link>
              </div>
            )}

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;