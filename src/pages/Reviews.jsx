import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews";
import { useAuth } from "../context/AuthContext";
import { Star } from "lucide-react";

function Reviews() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { user } = useAuth();

  const [allReviews, setAllReviews] = useState(reviews);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const savedReviews =
      JSON.parse(localStorage.getItem("userReviews")) || [];

    setAllReviews([...reviews, ...savedReviews]);
  }, []);

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

    setAllReviews((prev) => [...prev, newReview]);

    alert(`Review submitted successfully!  ${<Star size={24} className="fill-yellow-400 text-yellow-400" />}`);

    setRating(5);
    setComment("");
    setShowReviewForm(false);
  };

  return (
    <div className="bg-slate-50 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mb-12 text-center">

          <p className="font-serif text-lg italic text-cyan-500">
            What Our Clients Say!
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Reviews & Ratings
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            See what our travelers think about their
            travel experiences.
          </p>

        </div>


        {/* REVIEW CAROUSEL */}
        <div className="relative py-5 overflow-hidden">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-10 h-full w-20  from-slate-50 to-transparent"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-10 h-full w-20  from-slate-50 to-transparent"></div>


          {/* MOVING TRACK */}
          <div className="review-track  flex gap-6">

            {/* FIRST SET */}
            {allReviews.map((review) => (
              <div
                key={review.id}
                className="w-80 shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}


            {/* DUPLICATE SET FOR SMOOTH LOOP */}
            {allReviews.map((review) => (
              <div
                key={`duplicate-${review.id}`}
                className="w-80 shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}

          </div>

        </div>


        {/* ADD REVIEW BUTTON */}
        <button
          onClick={() => setShowReviewForm(true)}
          className="mx-auto  mt-12 block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
         
           Add Review
        </button>


        {/* REVIEW POPUP */}
        {showReviewForm && (
          <div
            onClick={() => setShowReviewForm(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          >

            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
            >

              {/* POPUP HEADER */}
              <div className="flex items-center justify-between">

                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  Share Your Experience

                  <Star
                    size={24}
                    className="fill-yellow-400 text-yellow-400"
                  />
                </h2>

                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-2xl text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

              </div>


              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >

                <div className="rounded-xl border border-gray-300 px-4 py-4">

  <p className="mb-3 font-semibold text-gray-700">
    Your Rating
  </p>

  <div className="flex gap-2">

    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setRating(star)}
      >
        <Star
          size={32}
          className={
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      </button>
    ))}

  </div>

  <p className="mt-2 text-sm text-gray-500">
    {rating} out of 5 stars
  </p>

</div>


                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your review..."
                  rows="4"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />


                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Review
                </button>

              </form>

            </div>

          </div>
        )}

      </div>


      {/* CAROUSEL CSS */}
      <style>
        {`
          .review-track {
            width: max-content;
            animation: reviewScroll 25s linear infinite;
          }

          .review-track:hover {
            animation-play-state: paused;
          }

          @keyframes reviewScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Reviews;