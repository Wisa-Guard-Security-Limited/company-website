"use client";
import React, { useState } from "react";
import { client } from "@/sanity/lib/client"; // make sure this exists

const Form =  () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await client.create({
        _type: "contactMessage",
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
        createdAt: new Date().toISOString(),
      });

      alert("Message sent successfully");

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "General Inquiry",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
        />
      </div>

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Email Address"
        className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
      />

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none"
      >
        <option>General Inquiry</option>
        <option>Guarding Services</option>
        <option>CCTV Installation</option>
        <option>Dog Services</option>
        <option>Tracking Systems</option>
        <option>Private Investigations</option>
      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        placeholder="How can we help you securely today?"
        className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none resize-none"
      />

      {/* BUTTON */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg 
                     bg-brand-red text-white font-bold rounded-full 
                     hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 
                     flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>

    </form>
  );
};

export default Form;