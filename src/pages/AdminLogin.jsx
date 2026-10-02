import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminLogin() {
  const navigate = useNavigate();

  const { adminLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      adminLogin();

      alert("Admin login successful! 👨‍💼");

      navigate("/admin");
    } else {
      alert("Invalid admin email or password!");
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold">
          Admin Login 👨‍💼
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Login to access the admin dashboard
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Admin Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;