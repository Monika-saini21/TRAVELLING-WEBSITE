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
   <nav className="sticky top-0 z-50 w-full bg-white  px-4 py-5 backdrop-blur-md sm:px-6">
    <div className="mx-auto  max-w-7xl">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-black"
          >
            TravelX 
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-7 lg:flex">

            <Link
              to="/"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Home
            </Link>

            <Link
              to="/destinations"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Destinations
            </Link>

            <Link
              to="/packages"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Packages
            </Link>

            <Link
              to="/hotels"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Hotels
            </Link>

            <Link
              to="/flights"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Flights
            </Link>

            <Link
              to="/itinerary"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Itinerary
            </Link>

            <Link
              to="/my-bookings"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              My Bookings
            </Link>

            <Link
              to="/gallery"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Gallery
            </Link>

            <Link
              to="/reviews"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Reviews
            </Link>

            <Link
              to="/contact"
              className="font-medium text-black transition hover:text-cyan-300"
            >
              Contact
            </Link>

            {/* LOGIN / LOGOUT */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-600"
              >
                Login
              </Link>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-black lg:hidden"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-5 rounded-2xl bg-white p-5 shadow-xl lg:hidden">

            <div className="flex flex-col gap-4">

              <Link onClick={() => setMenuOpen(false)} to="/">
                Home
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/destinations"
              >
                Destinations
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/packages"
              >
                Packages
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/hotels"
              >
                Hotels
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/flights"
              >
                Flights
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/itinerary"
              >
                Itinerary
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/my-bookings"
              >
                My Bookings
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/gallery"
              >
                Gallery
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/reviews"
              >
                Reviews
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/contact"
              >
                Contact
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-fit rounded-full bg-red-500 px-5 py-2 font-semibold text-black"
                >
                  Logout
                </button>
              ) : (
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/login"
                  className="w-fit rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black"
                >
                  Login
                </Link>
              )}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;