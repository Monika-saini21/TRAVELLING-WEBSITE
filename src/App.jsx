import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Hotels from "./pages/Hotels";
import HotelBooking from "./pages/HotelBooking";
import Flights from "./pages/Flights";
import FlightBooking from "./pages/FlightBooking";
import Itinerary from "./pages/Itinerary";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/AdminRoute";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import DestinationSection from "./components/DestinationSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationSection />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id"element={ <ProtectedRoute>  <HotelBooking /> </ProtectedRoute> }/>
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={ <ProtectedRoute> <FlightBooking /> </ProtectedRoute>}/>
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-bookings" element={ <ProtectedRoute> <MyBookings /> </ProtectedRoute>}/>
        <Route path="/admin" element={ <AdminRoute> <Admin /> </AdminRoute> }/>
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="*" element={<NotFound />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;



