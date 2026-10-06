function PackagesSection({
  packageList,
  packageSearch,
  setPackageSearch,
  editPackage,
  deletePackage,
  editingPackage,
  setEditingPackage,
  savePackage,
}) {
  const filteredPackages = packageList.filter((pkg) => {
    const search = packageSearch.toLowerCase();

    return (
      pkg.title?.toLowerCase().includes(search) ||
      pkg.destination?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            📦 Travel Packages
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage travel packages
          </p>
        </div>

        <input
          type="text"
          placeholder="Search packages..."
          value={packageSearch}
          onChange={(e) => setPackageSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:w-80"
        />
      </div>

      {/* Packages */}
      {filteredPackages.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
          No packages found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
            >
              {pkg.image && (
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {pkg.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {pkg.destination}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Package
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Duration
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {pkg.duration}
                    </p>
                  </div>

                  <div className="rounded-xl bg-cyan-50 p-3">
                    <p className="text-xs text-gray-500">
                      Price
                    </p>

                    <p className="mt-1 font-semibold text-cyan-700">
                      {pkg.price}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => editPackage(pkg)}
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Edit Package
                  </button>

                  <button
                    onClick={() => deletePackage(pkg.id)}
                    className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= EDIT PACKAGE MODAL ================= */}
      {editingPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Edit Package
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Update package details
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setEditingPackage(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2">

                {/* Package Title */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    Package Title
                  </label>

                  <input
                    type="text"
                    value={editingPackage.title || ""}
                    onChange={(e) =>
                      setEditingPackage({
                        ...editingPackage,
                        title: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    Destination
                  </label>

                  <input
                    type="text"
                    value={editingPackage.destination || ""}
                    onChange={(e) =>
                      setEditingPackage({
                        ...editingPackage,
                        destination: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    Duration
                  </label>

                  <input
                    type="text"
                    value={editingPackage.duration || ""}
                    onChange={(e) =>
                      setEditingPackage({
                        ...editingPackage,
                        duration: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    Price
                  </label>

                  <input
                    type="text"
                    value={editingPackage.price || ""}
                    onChange={(e) =>
                      setEditingPackage({
                        ...editingPackage,
                        price: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold text-gray-700">
                    Image URL
                  </label>

                  <input
                    type="text"
                    value={editingPackage.image || ""}
                    onChange={(e) =>
                      setEditingPackage({
                        ...editingPackage,
                        image: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Image Preview */}
              {editingPackage.image && (
                <div className="mt-5 overflow-hidden rounded-xl">
                  <img
                    src={editingPackage.image}
                    alt="Package preview"
                    className="h-48 w-full object-cover"
                  />
                </div>
              )}

              {/* Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setEditingPackage(null)}
                  className="rounded-xl bg-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
                >
                  Cancel
                </button>

                <button
                  onClick={savePackage}
                  className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PackagesSection;