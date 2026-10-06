function AdminHeader({
  isRefreshing,
  refreshMessage,
}) {
  return (
    <div className="mb-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 p-6 text-white shadow-lg">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-cyan-100">
            Admin Panel
          </p>

          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-blue-100 sm:text-base">
            Manage users, bookings, enquiries and reviews
            from one place.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
           
            disabled={isRefreshing}
            className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-slate-100 disabled:opacity-70"
          >
            {isRefreshing
              ? "Refreshing..."
              : "Refresh Data"}
          </button>

          
        </div>
      </div>

      {refreshMessage && (
        <p className="mt-3 text-sm font-medium text-green-100">
          {refreshMessage}
        </p>
      )}
    </div>
  );
}

export default AdminHeader;