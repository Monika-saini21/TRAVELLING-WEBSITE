import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Plane, Mail, Lock, LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please enter email and password!");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const savedUser = users.find(
      (user) =>
        user.email === formData.email.toLowerCase() &&
        user.password === formData.password
    );

    if (savedUser) {
      login(savedUser);
      alert("Login successful! 🎉");
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-linear-to-br from-cyan-500 to-blue-700 p-10 text-white lg:flex lg:min-h-140 lg:flex-col lg:justify-between">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Plane className="h-7 w-7" />
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight">
              Your next
              <br />
              adventure awaits.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-white/80">
              Login to TravelX and discover beautiful destinations,
              amazing hotels, comfortable flights and unforgettable
              travel experiences.
            </p>
          </div>

          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm text-white/70">
              Explore the world
            </p>

            <p className="mt-1 text-xl font-semibold">
              Travel. Explore. Remember.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-7 sm:p-10 lg:p-12">

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md">
              <Plane className="h-5 w-5" />
            </div>

            <span className="text-2xl font-bold text-slate-900">
              Travel<span className="text-cyan-500">X</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mt-8 text-center lg:text-left">
            <p className="font-semibold text-cyan-500">
              Welcome Back
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Login to your account
            </h1>

            <p className="mt-3 text-gray-500">
              Continue your journey with TravelX
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
                <Mail className="h-5 w-5 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-3 py-3.5 text-slate-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
                <Lock className="h-5 w-5 text-gray-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-3 py-3.5 text-slate-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <LogIn className="h-5 w-5" />
              Login
            </button>
          </form>

          {/* Register */}
          <div className="mt-7 text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-cyan-600 transition hover:text-blue-600"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-xs text-gray-400">
              Securely access your TravelX account
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;