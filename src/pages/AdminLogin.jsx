import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Plane,
  ShieldCheck,
  Mail,
  Lock,
  LogIn,
} from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-linear-to-br from-cyan-500 to-blue-700 p-10 text-white lg:flex lg:min-h-140 lg:flex-col lg:justify-between">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10"></div>

          <div className="relative z-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight">
              TravelX
              <br />
              Admin Panel
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-white/80">
              Securely access the TravelX administration dashboard
              and manage users, bookings, packages and travel
              activities.
            </p>
          </div>

          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Plane className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-white/60">
                  TravelX
                </p>

                <p className="font-semibold">
                  Administration Portal
                </p>
              </div>
            </div>
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

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <ShieldCheck className="h-5 w-5 text-cyan-500" />

              <p className="font-semibold text-cyan-500">
                Admin Access
              </p>
            </div>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Admin Login
            </h1>

            <p className="mt-3 text-gray-500">
              Login to access the admin dashboard
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
                Admin Email
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">

                <Mail className="h-5 w-5 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent px-3 py-3.5 text-slate-900 outline-none placeholder:text-gray-400"
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admin Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-slate-50 px-4 transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">

                <Lock className="h-5 w-5 text-gray-400" />

                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              Admin Login
            </button>

          </form>

          {/* Security Info */}
          <div className="mt-7 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">

            <div className="flex items-start gap-3">

              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Secure Admin Access
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  This area is restricted to authorized TravelX
                  administrators only.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">

            <p className="text-xs text-gray-400">
              TravelX Administration Portal
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;