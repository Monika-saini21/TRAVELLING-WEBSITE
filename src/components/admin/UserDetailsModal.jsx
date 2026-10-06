import {
  X,
  User,
  Mail,
  ShieldCheck,
  CalendarDays,
  ClipboardList,
  Hotel,
  Plane,
  CheckCircle2,
} from "lucide-react";

function UserDetailsModal({
  selectedUser,
  setSelectedUser,
  hotelBookings,
  flightBookings,
}) {
  if (!selectedUser) return null;

  const userHotelBookings = hotelBookings.filter(
    (booking) => booking.userEmail === selectedUser.email
  );

  const userFlightBookings = flightBookings.filter(
    (booking) => booking.userEmail === selectedUser.email
  );

  const totalBookings =
    userHotelBookings.length + userFlightBookings.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={() => setSelectedUser(null)}
    >
      <div
        className="max-h-screen w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md">
                <User className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  User Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Complete user information
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedUser(null)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">
          {/* User Profile */}
          <div className="rounded-2xl bg-linear-to-r from-cyan-50 to-blue-50 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-cyan-600 shadow-sm">
                <User className="h-7 w-7" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-xl font-bold text-slate-900">
                  {selectedUser.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">
                    {selectedUser.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
              Account Information
            </h3>

            <div className="space-y-3">
              {/* Name */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <User className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Full Name
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {selectedUser.name}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Email Address
                  </p>

                  <p className="mt-1 break-all font-semibold text-slate-900">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              {/* User ID */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    User ID
                  </p>

                  <p className="mt-1 break-all font-semibold text-slate-900">
                    {selectedUser.id}
                  </p>
                </div>
              </div>

              {/* Registered */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Registered On
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {new Date(
                      selectedUser.id
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Statistics */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
              Booking Statistics
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {/* Total */}
              <div className="rounded-2xl bg-blue-50 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <ClipboardList className="h-5 w-5" />
                </div>

                <p className="mt-3 text-2xl font-bold text-blue-600">
                  {totalBookings}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Total
                </p>
              </div>

              {/* Hotels */}
              <div className="rounded-2xl bg-cyan-50 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <Hotel className="h-5 w-5" />
                </div>

                <p className="mt-3 text-2xl font-bold text-cyan-600">
                  {userHotelBookings.length}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Hotels
                </p>
              </div>

              {/* Flights */}
              <div className="rounded-2xl bg-purple-50 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                  <Plane className="h-5 w-5" />
                </div>

                <p className="mt-3 text-2xl font-bold text-purple-600">
                  {userFlightBookings.length}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Flights
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Account Status */}
            <div className="flex items-center justify-between rounded-2xl border border-green-100 bg-green-50 p-4">
              <div>
                <p className="text-xs text-slate-500">
                  Account Status
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  Active
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
            </div>

            {/* Booking Status */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="text-xs text-slate-500">
                  Booking Status
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {totalBookings > 0
                    ? "Has Bookings"
                    : "No Bookings"}
                </p>
              </div>

              <ClipboardList className="h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Close */}
          <button
            onClick={() => setSelectedUser(null)}
            className="w-full rounded-2xl bg-slate-900 px-5 py-3.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;