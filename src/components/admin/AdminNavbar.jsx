import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  Hotel,
  Plane,
  Package,
  MessageSquare,
  Star,
  Menu,
  X,
  LogOut,
  ClipboardList,
} from "lucide-react";

function AdminNavbar({ logout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      id: "dashboard",
    },
    {
      name: "Users",
      icon: Users,
      id: "users",
    },
    {
      name: "Recent Bookings",
      icon: ClipboardList,
      id: "bookings",
    },
    {
      name: "Hotels",
      icon: Hotel,
      id: "hotels",
    },
    {
      name: "Flights",
      icon: Plane,
      id: "flights",
    },
    {
      name: "Packages",
      icon: Package,
      id: "packages",
    },
    {
      name: "Enquiries",
      icon: MessageSquare,
      id: "enquiries",
    },
    {
      name: "Reviews",
      icon: Star,
      id: "reviews",
    },
  ];

const handleNavigation = (id) => {
  const section = document.getElementById(id);

  if (section) {
    const navbarHeight = 100;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: "smooth",
    });
  }

  setMenuOpen(false);
};
  

  return (
    <nav className="sticky top-0 z-50 border-b mb-10 border-gray-200 bg-white shadow-sm">
      <div className="flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("dashboard")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <div className="text-left">
            <h1 className="text-lg font-bold text-slate-900">
              TravelX
            </h1>

            <p className="text-xs font-medium text-cyan-600">
              Admin Panel
            </p>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center  gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-cyan-50 hover:text-cyan-600"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="hidden items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 lg:flex"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl bg-gray-100 p-2 text-gray-700 lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation (item.id)}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbar;