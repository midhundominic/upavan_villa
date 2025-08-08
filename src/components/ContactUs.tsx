"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add required hidden fields for formsubmit
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/midhundominic2002@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);

      setTimeout(() => {
        router.push("/");
      }, 2500);
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Book Now</h2>

        {submitted ? (
          <div className="text-center py-10 text-green-600 font-medium text-lg">
            We will connect you shortly...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />

            <div className="text-sm text-gray-700 mt-2 space-y-1">
              <p>📞 Phone: <span className="font-medium">996140770</span></p>
              <p>✉️ Email: <span className="font-medium">reservation@gmail.com</span></p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d1452a] text-white py-2 rounded-md hover:brightness-110 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
