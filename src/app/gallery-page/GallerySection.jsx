"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

export default function GallerySection({ data }) {
  const galleryItems = data?.galleryItems || [];
  const [currentIndex, setCurrentIndex] = useState(null);

  const next = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % galleryItems.length);
  };

  const prev = () => {
    if (currentIndex === null) return;
    setCurrentIndex(
      (currentIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const selected =
    currentIndex !== null ? galleryItems[currentIndex] : null;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-4 sm:gap-6 lg:gap-8">

          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-[18px] sm:rounded-[26px] lg:rounded-[34px] 
                         overflow-hidden cursor-pointer"
              onClick={() => setCurrentIndex(i)}
            >
              <Image
                unoptimized
                src={`${urlFor(item?.image?.asset?.url).url()}`}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-48 sm:h-56 lg:h-72 
                           object-cover transition duration-500 
                           group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-brand-navy/70 
                              opacity-0 group-hover:opacity-100 
                              transition duration-300 
                              flex flex-col items-center justify-center 
                              text-center p-4 sm:p-6">

                <div className="w-10 h-10 sm:w-12 sm:h-12 
                                rounded-full bg-brand-red 
                                flex items-center justify-center text-white mb-4">
                  <i className="fa-solid fa-plus text-sm sm:text-base" />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                  {item.title}
                </h3>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 
                       flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl sm:max-w-3xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* IMAGE */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                <Image
                  unoptimized
                  src={`${urlFor(selected?.image?.asset?.url).url()}`}
                  alt={selected.title}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {selected.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {selected.category}
                </p>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setCurrentIndex(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 
                           text-white text-lg sm:text-xl"
              >
                ✕
              </button>

              {/* NAVIGATION */}
              <button
                onClick={prev}
                className="absolute left-2 sm:left-0 top-1/2 
                           -translate-y-1/2 text-white 
                           text-2xl sm:text-3xl px-3 sm:px-4"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-2 sm:right-0 top-1/2 
                           -translate-y-1/2 text-white 
                           text-2xl sm:text-3xl px-3 sm:px-4"
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