import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews";

function Reviews() {
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

      </div>
    </div>
  );
}

export default Reviews;