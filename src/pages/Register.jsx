import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    (user) => user.email === formData.email
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
    <div className="flex min-h-[80vh] items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Start your travel journey 🌍
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;