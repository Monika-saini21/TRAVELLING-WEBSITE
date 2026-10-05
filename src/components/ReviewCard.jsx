import { Star } from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <h2 className="text-xl font-bold">
        {review.name}
      </h2>

      {/* STARS */}
      <div className="my-8 flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={
              star <= review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* REVIEW */}
      <p className="mt-4 leading-7 text-gray-600">
        "{review.comment}"
      </p>

    </div>
  );
}

export default ReviewCard;