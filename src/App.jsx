import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Hotels from "./pages/Hotels";
import HotelBooking from "./pages/HotelBooking";
import Flights from "./pages/Flights";
import FlightBooking from "./pages/FlightBooking";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelBooking />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<FlightBooking />} />
      </Routes>
    </div>
  );
}

export default App;