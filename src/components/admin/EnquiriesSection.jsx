function EnquiriesSection({
  enquiries,
  enquirySearch,
  setEnquirySearch,
  deleteEnquiry,
}) {
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const search = enquirySearch.toLowerCase();

    return (
      enquiry.name?.toLowerCase().includes(search) ||
      enquiry.email?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            📩 Enquiries
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage customer enquiries
          </p>
        </div>

        <input
          type="text"
          placeholder="Search enquiries..."
          value={enquirySearch}
          onChange={(e) => setEnquirySearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:w-80"
        />
      </div>

      {filteredEnquiries.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
          No matching enquiry found.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEnquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="rounded-2xl border border-gray-200 p-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {enquiry.name}
                  </h3>

                  <p className="mt-1 text-sm text-blue-600">
                    {enquiry.email}
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    {enquiry.message}
                  </p>
                </div>

                <button
                  onClick={() => deleteEnquiry(enquiry.id)}
                  className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EnquiriesSection;