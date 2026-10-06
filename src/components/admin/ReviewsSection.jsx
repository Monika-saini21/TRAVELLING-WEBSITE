function ReviewsSection({
  reviews,
  reviewSearch,
  setReviewSearch,
  ratingFilter,
  setRatingFilter,
  deleteReview,
}) {
  const filteredReviews = reviews.filter((review) => {
    const search = reviewSearch.toLowerCase();

    const matchesSearch =
      review.name?.toLowerCase().includes(search) ||
      review.email?.toLowerCase().includes(search) ||
      review.comment?.toLowerCase().includes(search);

    const matchesRating =
      ratingFilter === "all" ||
      Number(review.rating) === Number(ratingFilter);

    return matchesSearch && matchesRating;
  });

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (total, review) => total + Number(review.rating || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  const ratingCounts = {
    5: reviews.filter((review) => Number(review.rating) === 5).length,
    4: reviews.filter((review) => Number(review.rating) === 4).length,
    3: reviews.filter((review) => Number(review.rating) === 3).length,
    2: reviews.filter((review) => Number(review.rating) === 2).length,
    1: reviews.filter((review) => Number(review.rating) === 1).length,
  };

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            ⭐ Reviews
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage customer reviews and ratings
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search reviews..."
            value={reviewSearch}
            onChange={(e) => setReviewSearch(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          <button
            onClick={() => {
              setReviewSearch("");
              setRatingFilter("all");
            }}
            className="rounded-xl bg-gray-800 px-4 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-blue-50 p-5">
          <p className="text-sm text-gray-500">
            Total Reviews
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {reviews.length}
          </p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-5">
          <p className="text-sm text-gray-500">
            Average Rating
          </p>

          <p className="mt-2 text-3xl font-bold text-yellow-500">
            ⭐ {averageRating}
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-5">
          <p className="text-sm text-gray-500">
            Five Star Reviews
          </p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {ratingCounts[5]}
          </p>
        </div>
      </div>

      {/* Rating counts */}
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div
            key={rating}
            className="rounded-xl border border-gray-200 p-4 text-center"
          >
            <p className="font-bold text-gray-800">
              {"⭐".repeat(rating)}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {ratingCounts[rating]} Reviews
            </p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-6">
        {filteredReviews.length === 0 ? (
          <div className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
            No reviews found.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {review.email}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteReview(review.id)}
                    className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>

                <div className="mt-4 flex gap-1">
                  {Array.from({
                    length: Number(review.rating),
                  }).map((_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewsSection;