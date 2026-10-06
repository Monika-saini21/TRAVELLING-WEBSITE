import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/admin-login";

  return (
    <div className="min-h-screen bg-gray-50">

      {!isAdminPage && <Navbar />}

      <Outlet />

      {!isAdminPage && <Footer />}

    </div>
  );
}

export default Layout;