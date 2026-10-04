import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;