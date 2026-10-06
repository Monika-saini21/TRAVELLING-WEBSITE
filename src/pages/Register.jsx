import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plane,
  User,
  Mail,
  Lock,
  UserPlus,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const oldUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = oldUsers.find(
      (user) => user.email === formData.email.toLowerCase()
    );

    if (existingUser) {
      alert("This email is already registered!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email.toLowerCase(),
      password: formData.password,
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...oldUsers, newUser])
    );

    alert("Registration successful! 🎉");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-linear-to-br from-cyan-500 to-blue-700 p-10 text-white lg:flex lg:min-h-150 lg:flex-col lg:justify-between">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Plane className="h-7 w-7" />
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight">
              Start your
              <br />
              travel journey.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-white/80">
              Create your TravelX account and discover amazing
              destinations, hotels, flights and unforgettable
              experiences around the world.
            </p>
          </div>

          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm text-white/70">
              Your journey begins here
            </p>

            <p className="mt-1 text-xl font-semibold">
              Explore. Experience. Enjoy.
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
              Join TravelX
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Create your account
            </h1>

            <p className="mt-3 text-gray-500">
              Start exploring the world with us
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
                <User className="h-5 w-5 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

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
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-gray-400"
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
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
                <Lock className="h-5 w-5 text-gray-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <UserPlus className="h-5 w-5" />
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-cyan-600 transition hover:text-blue-600"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-xs text-gray-400">
              Create your account and begin your next adventure
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;