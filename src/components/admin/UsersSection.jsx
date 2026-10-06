function UsersSection({
  users,
  userSearch,
  setUserSearch,
  setSelectedUser,
  deleteUser,
}) {
  const filteredUsers = users.filter((user) => {
    const search = userSearch.toLowerCase();

    return (
      user.name?.toLowerCase().includes(search) ||
      user.email?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            👥 Users
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage registered users
          </p>
        </div>

        <input
          type="text"
          placeholder="Search users..."
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:w-72"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
          No users found.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="rounded-2xl border border-gray-200 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {user.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {user.email}
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    ID: {user.id}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    View
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersSection;