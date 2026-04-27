"use client";

import { useState } from "react";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const phone = "254795869312";

  const message =
    "Hello Wisa Guards 👋 I would like to inquire about your services";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* CHAT BOX */}
      {open && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-xl border overflow-hidden">
          <div className="bg-green-500 text-white p-3 font-semibold">
            Wisa Guards
          </div>

          <div className="p-4 text-sm text-gray-600">
            Hi 👋 How can we help you today?
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center py-2 m-3 rounded-lg hover:bg-green-600"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 cursor-pointer text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>
    </div>
  );
}