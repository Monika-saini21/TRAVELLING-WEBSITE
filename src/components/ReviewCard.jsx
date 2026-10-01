function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <h2 className="text-xl font-bold">
        {review.name}
      </h2>

      <p className="mt-2 text-yellow-500">
        {"⭐".repeat(review.rating)}
      </p>

      <p className="mt-4 leading-7 text-gray-600">
        "{review.comment}"
      </p>

    </div>
  );
}

export default ReviewCard;