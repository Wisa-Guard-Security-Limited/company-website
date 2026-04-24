"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    title: "Corporate Guarding",
    category: "Guarding Services",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
  {
    title: "Festival Crowd Control",
    category: "Event Security",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
  {
    title: "K9 Perimeter Patrol",
    category: "Canine Unit",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
  {
    title: "Mobile Response Unit",
    category: "Patrol & Response",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
  {
    title: "24/7 Command Center",
    category: "Surveillance",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
  {
    title: "Executive Protection",
    category: "VIP Security",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/33cdb56a74-73006de3775deb74ea57.png",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const next = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % galleryItems.length);
  };

  const prev = () => {
    if (currentIndex === null) return;
    setCurrentIndex(
      (currentIndex - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const selected = currentIndex !== null ? galleryItems[currentIndex] : null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setCurrentIndex(i)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-87.5 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-4">
                  <i className="fa-solid fa-plus"></i>
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            {/* CONTENT */}
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE CONTAINER (FIXED HEIGHT) */}
              <div className="relative w-full h-[60vh]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-bold">
                  {selected.title}
                </h3>
                <p className="text-gray-300">{selected.category}</p>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setCurrentIndex(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>

              {/* NAVIGATION */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
