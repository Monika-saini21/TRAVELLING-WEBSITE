import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews";
import { useAuth } from "../context/AuthContext";

function Reviews() {
const [rating, setRating] = useState(5);
const [comment, setComment] = useState("");
const { user } = useAuth();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!user) {
    alert("Please login first to submit a review!");
    return;
  }

  if (!comment.trim()) {
    alert("Please write your review!");
    return;
  }

const newReview = {
  id: Date.now(),
  name: user?.name || "You",
  email: user?.email || "",
  rating: Number(rating),
  comment: comment,
};

  const oldReviews =
    JSON.parse(localStorage.getItem("userReviews")) || [];

  localStorage.setItem(
    "userReviews",
    JSON.stringify([...oldReviews, newReview])
  );

  alert("Review submitted successfully! ⭐");

  setRating(5);
  setComment("");
};

  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            What Travelers Say ⭐
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Reviews & Ratings
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            See what our travelers think about their
            travel experiences.
          </p>
        </div>

        {/* REVIEWS */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>
      
        <div className="mx-auto  my-10 max-w-2xl rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold">
              Share Your Experience ⭐
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-4"
            >
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              >
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                <option value="3">⭐⭐⭐ 3 Stars</option>
                <option value="2">⭐⭐ 2 Stars</option>
                <option value="1">⭐ 1 Star</option>
              </select>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review..."
                rows="4"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
        </div>

      </div>
      
    </div>
  );
}

export default Reviews;