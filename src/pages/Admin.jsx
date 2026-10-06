import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import packages from "../data/packages";

import AdminHeader from "../components/admin/AdminHeader";
import AdminStats from "../components/admin/AdminStats";
import RecentBookings from "../components/admin/RecentBookings";
import UsersSection from "../components/admin/UsersSection";
import HotelBookings from "../components/admin/HotelBookings";
import FlightBookings from "../components/admin/FlightBookings";
import EnquiriesSection from "../components/admin/EnquiriesSection";
import PackagesSection from "../components/admin/PackagesSection";
import ReviewsSection from "../components/admin/ReviewsSection";
import UserDetailsModal from "../components/admin/UserDetailsModal";
import AdminNavbar from "../components/admin/AdminNavbar";


function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [users, setUsers] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [flightBookings, setFlightBookings] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [packageList, setPackageList] = useState([]);

  const [userSearch, setUserSearch] = useState("");
  const [hotelSearch, setHotelSearch] = useState("");
  const [flightSearch, setFlightSearch] = useState("");
  const [enquirySearch, setEnquirySearch] = useState("");
  const [reviewSearch, setReviewSearch] = useState("");
  const [packageSearch, setPackageSearch] = useState("");

  const [ratingFilter, setRatingFilter] = useState("all");
  const [refreshMessage, setRefreshMessage] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingPackage, setEditingPackage] = useState(null);

  const loadAdminData = () => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const savedHotelBookings =
      JSON.parse(localStorage.getItem("hotelBookings")) || [];

    const savedFlightBookings =
      JSON.parse(localStorage.getItem("flightBookings")) || [];

    const savedEnquiries =
      JSON.parse(localStorage.getItem("enquiries")) || [];

    const savedReviews =
      JSON.parse(localStorage.getItem("userReviews")) || [];

    const savedPackages =
      JSON.parse(localStorage.getItem("packages")) || packages;

    if (!localStorage.getItem("packages")) {
      localStorage.setItem("packages", JSON.stringify(packages));
    }

    setIsRefreshing(true);

    setUsers(savedUsers);
    setHotelBookings(savedHotelBookings);
    setFlightBookings(savedFlightBookings);
    setEnquiries(savedEnquiries);
    setReviews(savedReviews);
    setPackageList(savedPackages);

    setRefreshMessage("Data refreshed successfully!");

    setTimeout(() => {
      setRefreshMessage("");
    }, 2000);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const deleteHotelBooking = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel booking?"
    );

    if (!confirmDelete) return;

    const updatedBookings = hotelBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "hotelBookings",
      JSON.stringify(updatedBookings)
    );

    setHotelBookings(updatedBookings);
  };

  const deleteFlightBooking = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this flight booking?"
    );

    if (!confirmDelete) return;

    const updatedBookings = flightBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "flightBookings",
      JSON.stringify(updatedBookings)
    );

    setFlightBookings(updatedBookings);
  };

  const deleteEnquiry = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    const updatedEnquiries = enquiries.filter(
      (enquiry) => enquiry.id !== id
    );

    localStorage.setItem(
      "enquiries",
      JSON.stringify(updatedEnquiries)
    );

    setEnquiries(updatedEnquiries);
  };

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setUsers(updatedUsers);
  };

  const deleteReview = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    const updatedReviews = reviews.filter(
      (review) => review.id !== id
    );

    localStorage.setItem(
      "userReviews",
      JSON.stringify(updatedReviews)
    );

    setReviews(updatedReviews);
  };

  const deletePackage = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this package?"
    );

    if (!confirmDelete) return;

    const updatedPackages = packageList.filter(
      (pkg) => pkg.id !== id
    );

    setPackageList(updatedPackages);

    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
    );
  };

  const editPackage = (pkg) => {
    setEditingPackage(pkg);
  };

  const savePackage = () => {
    if (
      !editingPackage.title.trim() ||
      !editingPackage.destination.trim() ||
      !editingPackage.duration.trim() ||
      !editingPackage.price.trim() ||
      !editingPackage.image.trim()
    ) {
      alert("Please fill all package fields!");
      return;
    }

    const updatedPackages = packageList.map((pkg) =>
      pkg.id === editingPackage.id
        ? editingPackage
        : pkg
    );

    setPackageList(updatedPackages);

    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
    );

    setEditingPackage(null);

    alert("Package updated successfully! 🎉");
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (total, review) =>
              total + Number(review.rating),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  

 return (
  <><AdminNavbar logout={logout} />
  <div className="min-h-screen bg-slate-100">
    
    <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">

      <AdminHeader
        navigate={navigate}
        logout={logout}
      />
    <div id="dashboard">
      <AdminStats
        users={users}
        hotelBookings={hotelBookings}
        flightBookings={flightBookings}
        enquiries={enquiries}
        packageList={packageList}
        reviews={reviews}
        averageRating={averageRating}
      />
    </div>  

    <div id= "bookings"></div>
      <RecentBookings
        hotelBookings={hotelBookings}
        flightBookings={flightBookings}
      />
    
    <div id= "users">
      <UsersSection
        users={users}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        setSelectedUser={setSelectedUser}
        deleteUser={deleteUser}
      />
    </div>
    
    <div id="hotels">
      <HotelBookings
        hotelBookings={hotelBookings}
        hotelSearch={hotelSearch}
        setHotelSearch={setHotelSearch}
        deleteHotelBooking={deleteHotelBooking}
      />
    </div>

    <div id= "flights">
      <FlightBookings
        flightBookings={flightBookings}
        flightSearch={flightSearch}
        setFlightSearch={setFlightSearch}
        deleteFlightBooking={deleteFlightBooking}
      />
    </div>

    <div id="enquiries" ></div>
      <EnquiriesSection
        enquiries={enquiries}
        enquirySearch={enquirySearch}
        setEnquirySearch={setEnquirySearch}
        deleteEnquiry={deleteEnquiry}
      />

    <div id="packages">
      <PackagesSection
        packageList={packageList}
        packageSearch={packageSearch}
        setPackageSearch={setPackageSearch}
        editPackage={editPackage}
        deletePackage={deletePackage}
        editingPackage={editingPackage}
        setEditingPackage={setEditingPackage}
        savePackage={savePackage}
      />
    </div>

    <div id="reviews">
      <ReviewsSection
        reviews={reviews}
        reviewSearch={reviewSearch}
        setReviewSearch={setReviewSearch}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        deleteReview={deleteReview}
      />
    </div>


      <UserDetailsModal
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        hotelBookings={hotelBookings}
        flightBookings={flightBookings}
      />

    </div>
  </div>
  </>
);
}

export default Admin;