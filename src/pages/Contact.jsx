import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Message sent successfully! 📩");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-6 py-10">

      <div className="mx-auto max-w-4xl">

        {/* HEADING */}

        <div className="mb-10 text-center">
          <p className="font-semibold text-blue-600">
            Get In Touch 📩
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question? Send us a message.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
            />

          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-6 w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
          ></textarea>

          <button
            type="submit"
            className="mt-6 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;